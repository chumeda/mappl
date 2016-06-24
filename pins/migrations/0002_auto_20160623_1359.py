# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='latitude',
            field=models.DecimalField(default=0.0, max_digits=9, decimal_places=6),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pin',
            name='link',
            field=models.TextField(default='google.com'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pin',
            name='longitude',
            field=models.DecimalField(default=0.0, max_digits=9, decimal_places=6),
            preserve_default=False,
        ),
    ]
