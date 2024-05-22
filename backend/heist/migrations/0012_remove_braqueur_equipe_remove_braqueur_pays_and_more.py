# Generated by Django 5.0.6 on 2024-05-21 09:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('heist', '0011_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='braqueur',
            name='equipe',
        ),
        migrations.RemoveField(
            model_name='braqueur',
            name='pays',
        ),
        migrations.RemoveField(
            model_name='braqueur',
            name='role',
        ),
        migrations.RemoveField(
            model_name='braqueurimage',
            name='braqueur',
        ),
        migrations.RemoveField(
            model_name='pays',
            name='continent',
        ),
        migrations.RemoveField(
            model_name='equipe',
            name='continent',
        ),
        migrations.RemoveField(
            model_name='equipe',
            name='pays',
        ),
        migrations.RemoveField(
            model_name='equipeimage',
            name='equipe',
        ),
        migrations.DeleteModel(
            name='Role',
        ),
        migrations.DeleteModel(
            name='Braqueur',
        ),
        migrations.DeleteModel(
            name='BraqueurImage',
        ),
        migrations.DeleteModel(
            name='Continent',
        ),
        migrations.DeleteModel(
            name='Pays',
        ),
        migrations.DeleteModel(
            name='Equipe',
        ),
        migrations.DeleteModel(
            name='EquipeImage',
        ),
    ]