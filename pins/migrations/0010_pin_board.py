# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0002_boardmanager'),
        ('pins', '0009_remove_pin_board'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='board',
            field=models.ForeignKey(default=1, to='boards.Board'),
            preserve_default=False,
        ),
    ]
