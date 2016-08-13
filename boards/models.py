from django.db import models
from authentication.models import Account
from cStringIO import StringIO

# Create your models here.
class BoardManager(models.Model):
    def create_board(self, title, description, **kwargs):
        board.save()
        return board
  

class Board(models.Model):
    author = models.ForeignKey(Account)
    title = models.TextField()
    description = models.TextField(blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    objects = BoardManager()
    
    def __unicode__(self):
        return '{0}'.format(self.title)