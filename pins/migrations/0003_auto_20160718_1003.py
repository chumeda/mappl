# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0002_auto_20160718_1000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='content',
            field=models.TextField(null=True, blank=True),
        ),
    ]
