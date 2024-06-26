# Generated by Django 5.0.6 on 2024-05-21 00:46

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('heist', '0006_remove_braqueur_equipe_remove_braqueur_pays_and_more'),
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
            ],
        ),
        migrations.CreateModel(
            name='Continent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomContinent', models.CharField(default='', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomRole', models.CharField(default='', max_length=50)),
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
        migrations.CreateModel(
            name='Equipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomEquipe', models.CharField(max_length=50)),
                ('numberEquipe', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(12), django.core.validators.MinValueValidator(0)])),
                ('maxEquipe', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(12), django.core.validators.MinValueValidator(0)])),
                ('maxLeader', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(0)])),
                ('maxHacker', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(0)])),
                ('maxEspion', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(0)])),
                ('maxForger', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(0)])),
                ('maxMaitre', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(1), django.core.validators.MinValueValidator(0)])),
                ('maxTechnicien', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(3), django.core.validators.MinValueValidator(0)])),
                ('maxHomme', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(4), django.core.validators.MinValueValidator(0)])),
                ('continent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.continent')),
            ],
        ),
        migrations.AddField(
            model_name='braqueur',
            name='equipe',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.equipe'),
        ),
        migrations.CreateModel(
            name='EquipeImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imageEquipe', models.ImageField(upload_to='images/')),
                ('equipe', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='heist.equipe')),
            ],
        ),
        migrations.CreateModel(
            name='Pays',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomPays', models.CharField(default='', max_length=50)),
                ('nomCapitale', models.CharField(default='', max_length=50)),
                ('imagePays', models.CharField(default='', max_length=255)),
                ('continent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.continent')),
            ],
        ),
        migrations.AddField(
            model_name='equipe',
            name='pays',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.pays'),
        ),
        migrations.AddField(
            model_name='braqueur',
            name='pays',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.pays'),
        ),
        migrations.AddField(
            model_name='braqueur',
            name='role',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='heist.role'),
        ),
    ]
