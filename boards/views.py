from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response

from boards.models import Board
from boards.permissions import IsAuthorOfBoard
from boards.serializers import BoardSerializer

# Create your views here.
class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.order_by('-created_at')
    serializer_class = BoardSerializer
    
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfBoard(),)
    
    def perform_create(self, serializer):
        instance = serializer.save(author=self.request.user)
        
        return super(BoardViewSet,self).perform_create(serializer)
    
    def list(self, request):
        queryset = Board.objects.filter()
        serializer = BoardSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk=None):
        queryset = Board.objects.filter()
        board = get_object_or_404(queryset, pk=pk)
        serializer = BoardSerializer(board)
        return Response(serializer.data)
    
    
class AccountBoardsViewSet(viewsets.ViewSet):
    queryset = Board.objects.select_related('author').all()
    serializer_class = BoardSerializer
    
    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)
        
        return Response(serializer.data)
    