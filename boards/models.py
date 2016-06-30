from django.db import models
from authentication.models import Account

# Create your models here.
class Board(models.Model):
    author = models.ForeignKey(Account)
    title = models.TextField()
    description = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __unicode__(self):
        return '{0}'.format(self.title)