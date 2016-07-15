# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0010_pin_board'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='board',
            field=models.ForeignKey(blank=True, to='boards.Board', null=True),
        ),
    ]
