from django.shortcuts import render
from rest_framework import permissions,viewsets
from rest_framework.response import Response

from pins.models import Pin
from pins.permissions import IsAuthorOfPin
from pins.serializers import PinSerializer


import logging
logging.basicConfig(filename='example.log',level=logging.DEBUG)
logging.debug('This message should go to the log file')
logging.info('So should this')
logging.warning('And this, too')

class PinViewSet(viewsets.ModelViewSet):
    logging.info('Inside PinViewSet')
    queryset = Pin.objects.order_by('-created_at')
    serializer_class = PinSerializer
    
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfPin(),)
    
    def perform_create(self, serializer):
        logging.info('Inside perform_create function')
        data = self.request.data
        logging.info(str(data['board']))
        
        instance = serializer.save(author=self.request.user, board_id=data['board'])
        
        return super(PinViewSet, self).perform_create(serializer)
    
class AccountPinsViewSet(viewsets.ViewSet):
    queryset = Pin.objects.select_related('author').all()
    serializer_class = PinSerializer
    
    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)
        
        return Response(serializer.data)
    
class BoardPinsViewSet(viewsets.ViewSet):
    serializer_class = PinSerializer
    
    def list(self, request, board_pk=None):
        queryset = Pin.objects.filter(board=board_pk)
        serializer = PinSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None, board_pk=None):
        queryset = Pin.objects.filter(pk=pk, board=board_pk)
        pin = get_object_or_404(querysey, pk=pk)
        serializer = PinSerializer(pin)
        return Response(serializer.data)
    