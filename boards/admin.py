from django.contrib import admin
from models import Board
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from import_export import fields
from import_export.widgets import ForeignKeyWidget
from authentication.models import Account

# Register your models here.


class BoardResource(resources.ModelResource):
    author__username = fields.Field(column_name='author__username', attribute='author',
                                    widget=ForeignKeyWidget(Account, 'username'))
    class Meta:
        model = Board
        fields = ('id', 'author__username', 'title', 'description',)

class BoardAdmin(ImportExportModelAdmin):
    resource_class = BoardResource
    pass

admin.site.register(Board, BoardAdmin)