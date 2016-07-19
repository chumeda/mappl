# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Pin',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.TextField()),
                ('content', models.TextField()),
                ('image', models.TextField()),
                ('latitude', models.TextField(null=True)),
                ('longitude', models.TextField(null=True)),
                ('link', models.TextField(null=True)),
                ('location', models.TextField(null=True)),
                ('mapsURL', models.TextField(null=True)),
                ('usPOC', models.TextField(null=True)),
                ('hnPOC', models.TextField(null=True)),
                ('mgrs', models.TextField(null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
                ('board', models.ForeignKey(blank=True, to='boards.Board', null=True)),
            ],
        ),
    ]
