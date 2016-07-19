from django.db import models
from authentication.models import Account
from boards.models import Board

# Create your models here.
class Pin(models.Model):
    #setting up a many to one relationship
    author = models.ForeignKey(Account)
    board = models.ForeignKey(Board, null=True, blank=True)
    title = models.TextField()
    content = models.TextField(null=True, blank=True)
    image = models.TextField()
    latitude = models.TextField(null=True)
    longitude = models.TextField(null=True)
    #latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    #longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    link = models.TextField(null=True)
    location = models.TextField(null=True)
    mapsURL = models.TextField(null=True)
    usPOC = models.TextField(null=True)
    hnPOC = models.TextField(null=True)
    mgrs = models.TextField(null=True)
    
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
#    def __unicode__(self):
#        return '{0}'.format(self,content)