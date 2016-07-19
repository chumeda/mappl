from django.contrib import admin
from models import Pin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export import fields
from import_export.widgets import ForeignKeyWidget
from authentication.models import Account
from boards.models import Board

# Register your models here.


class PinResource(resources.ModelResource):
    author__username = fields.Field(column_name='author__username', attribute='author',
                                    widget=ForeignKeyWidget(Account, 'username'))
    board_id = fields.Field(column_name='board_id', attribute='board',
                                    widget=ForeignKeyWidget(Board, 'id'))
    class Meta:
        model = Pin
        fields = ('id', 'author__username', 'board_id', 
                  'title', 'content', 'image', 'latitude', 'longitude',
                  'link', 'location', 'mapsURL', 'usPOC', 'hnPOC', 'mgrs',)
        
class PinAdmin(ImportExportModelAdmin):
    resource_class = PinResource
    pass

admin.site.register(Pin, PinAdmin)