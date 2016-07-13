from django.db import models
from authentication.models import Account
from boards.models import Board

# Create your models here.
class Pin(models.Model):
    #setting up a many to one relationship
    author = models.ForeignKey(Account)
    board = models.ForeignKey(Board)
    title = models.TextField()
    content = models.TextField()
    image = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    link = models.TextField(null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __unicode__(self):
        return '{0}'.format(self,content)