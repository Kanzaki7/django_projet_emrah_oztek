# Generated by Django 5.0.6 on 2024-05-17 12:00

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Braqueur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomBraqueur', models.CharField(max_length=50)),
                ('prenomBraqueur', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('telephone', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('genre', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Continent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomContinent', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Equipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomEquipe', models.CharField(max_length=50)),
                ('nomVille', models.CharField(max_length=50)),
                ('maxJoueurs', models.IntegerField(validators=[django.core.validators.MaxValueValidator(12), django.core.validators.MinValueValidator(0)])),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomRole', models.CharField(max_length=50)),
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
                ('nomPays', models.CharField(max_length=50)),
                ('imagePays', models.CharField(max_length=255)),
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
