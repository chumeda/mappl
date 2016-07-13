# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0007_pin_board_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pin',
            old_name='board_id',
            new_name='board',
        ),
    ]
