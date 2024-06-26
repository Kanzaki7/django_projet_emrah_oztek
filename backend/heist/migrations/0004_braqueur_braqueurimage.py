# Generated by Django 5.0.6 on 2024-05-20 21:14

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heist', '0003_remove_braqueurimage_braqueur_delete_braqueur_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Braqueur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomBraqueur', models.CharField(default='', max_length=50)),
                ('prenomBraqueur', models.CharField(default='', max_length=50)),
                ('age', models.IntegerField()),
                ('telephone', models.CharField(default='', max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('genre', models.CharField(max_length=1)),
                ('quote', models.TextField(default='', max_length=65535)),
                ('charisme', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('communication', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('force', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('discretion', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('agilite', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('intelligence', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('intimidation', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('hacking', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(0)])),
                ('equipe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.equipe')),
                ('pays', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.pays')),
                ('role', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.role')),
            ],
        ),
        migrations.CreateModel(
            name='BraqueurImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imageBraqueur', models.ImageField(upload_to='images/')),
                ('braqueur', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='heist.braqueur')),
            ],
        ),
    ]
