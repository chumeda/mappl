# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0003_auto_20160623_1416'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='title',
            field=models.TextField(default='title'),
            preserve_default=False,
        ),
    ]
