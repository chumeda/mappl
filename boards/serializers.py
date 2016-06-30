from rest_framework import serializers
from authentication.serializers import AccountSerializer
from boards.models import Board

class BoardSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True,required=False)
    
    class Meta:
        model = Board
        
        fields = ('id', 'author', 'title', 'description', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
        
    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(BoardSerializer, self).get_validation_exclusions()
        
        return exclusions + ['author']