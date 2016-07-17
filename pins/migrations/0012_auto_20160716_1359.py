# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0011_auto_20160714_1624'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='hnPOC',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='pin',
            name='location',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='pin',
            name='mapsURL',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='pin',
            name='mgrs',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='pin',
            name='usPOC',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='latitude',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='longitude',
            field=models.TextField(null=True),
        ),
    ]
