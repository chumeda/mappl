from rest_framework import serializers
from authentication.serializers import AccountSerializer
from pins.models import Pin
from boards.serializers import BoardSerializer

class PinSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True, required=False)
    board = BoardSerializer(read_only=True, required=False)
    
    class Meta:
        model = Pin
        
        fields = ('id', 'author', 'board', 'title', 'content', 
                  'image','latitude', 'longitude', 'link', 'location', 
                  'mapsURL', 'usPOC', 'hnPOC', 'mgrs', 
                  'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
        
        def get_validation_exclusions(self, *args, **kwargs):
            exclusions = super(PinSerializer, self).get_validation_exclusions()
            
            return exclusions + ['author']