# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0008_auto_20160712_0832'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pin',
            name='board',
        ),
    ]
