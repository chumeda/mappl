from django.shortcuts import render
from rest_framework import permissions,viewsets
from rest_framework.response import Response

from pins.models import Pin
from pins.permissions import IsAuthorOfPin
from pins.serializers import PinSerializer

class PinViewSet(viewsets.ModelViewSet):
    queryset = Pin.objects.order_by('-created_at')
    serializer_class = PinSerializer
    
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfPin(),)
    
    def perform_create(self, serializer):
        instance = serializer.save(author=self.request.user)
        
        return super(PinViewSet, self).perform_create(serializer)
    
class AccountPinsViewSet(viewsets.ViewSet):
    queryset = Pin.objects.select_related('author').all()
    serializer_class = PinSerializer
    
    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)
        
        return Response(serializer.data)
