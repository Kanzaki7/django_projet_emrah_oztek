# Generated by Django 5.0.6 on 2024-05-21 00:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heist', '0004_braqueur_braqueurimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='equipe',
            name='continent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.continent'),
        ),
    ]
