# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0002_auto_20160623_1359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='latitude',
            field=models.DecimalField(null=True, max_digits=9, decimal_places=6),
        ),
        migrations.AlterField(
            model_name='pin',
            name='link',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='longitude',
            field=models.DecimalField(null=True, max_digits=9, decimal_places=6),
        ),
    ]
