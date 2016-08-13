from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from wsgiref.util import FileWrapper
import mimetypes
import os
import urllib
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from rest_framework import status

from boards.models import Board
from boards.permissions import IsAuthorOfBoard
from boards.serializers import BoardSerializer

from pins.models import Pin
from pins.serializers import PinSerializer

import logging
logging.basicConfig(filename='example.log',level=logging.DEBUG)
logging.debug('INSIDE BOARDS!')
logging.info('INSIDE BOARDS!')
logging.warning('INSIDE BOARDS!')

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
    
    @detail_route(methods=['get'])
    def makeKML(self, request, pk):
        logging.info('Mapping beep boop')
        logging.info(pk)
        
        queryset = Board.objects.filter()
        board = get_object_or_404(queryset, pk=pk)
        pins = Pin.objects.filter(board__id=pk)
        logging.info(board.title)
        filename = board.title + '.kml'
        
        doc = open(filename, 'w')
        doc.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        doc.write('<kml xmlns="http://www.opengis.net/kml/2.2">\n')
        doc.write('<Folder>')
        for pin in pins:
            doc.write('<Placemark>\n')
            doc.write('<name>') 
            doc.write(pin.title) 
            doc.write('</name>\n')
            doc.write('<description>\n')
            doc.write('Notes: ') 
            doc.write(pin.content) 
            doc.write('\n')
            doc.write('Maps URL: ') 
            #doc.write(pin.mapsURL)
            doc.write('\n')
            doc.write('US POC: ') 
            doc.write(pin.usPOC) 
            doc.write('\n')
            doc.write('HN POC: ') 
            doc.write(pin.hnPOC) 
            doc.write('\n')
            doc.write('MGRS: ') 
            doc.write(pin.mgrs) 
            doc.write('\n')
            doc.write('</description>')
            doc.write('<Point><coordinates>') 
            doc.write(pin.longitude) 
            doc.write(',') 
            doc.write(pin.latitude) 
            doc.write(',0</coordinates>\n' ) 
            doc.write('</Point></Placemark>\n')
        doc.write('</Folder></kml>')
        doc.close()

        response = HttpResponse(FileWrapper(open(filename, 'r')), content_type=mimetypes.guess_type(filename)[0])
        response['Content-Disposition'] = 'attachment; filename=' + filename
        
        return response

    
class AccountBoardsViewSet(viewsets.ViewSet):
    queryset = Board.objects.select_related('author').all()
    serializer_class = BoardSerializer
    
    def list(self, request, account_username=None):
        queryset = self.queryset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)
        
        return Response(serializer.data)
    

    
    