# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0004_pin_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
    ]
