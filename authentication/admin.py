from django.contrib import admin
from models import Account
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# Register your models here.


class AccountResource(resources.ModelResource):
    
    class Meta:
        model = Account
        fields = ('id','email', 'username', 'password',)
        
class AccountAdmin(ImportExportModelAdmin):
    resource_class = AccountResource
    pass
        
admin.site.register(Account, AccountAdmin)

