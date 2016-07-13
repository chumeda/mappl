# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
        ('pins', '0006_auto_20160624_1400'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='board_id',
            field=models.ForeignKey(default=1, to='boards.Board'),
            preserve_default=False,
        ),
    ]
