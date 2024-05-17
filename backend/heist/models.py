from django.db import models

# Create your models here.

class Continent(models.Model):
    nomContinent = models.CharField(max_length=50)
    
class Equipe(models.Model):
    nomEquipe = models.CharField(max_length=50)
    nomVille = models.CharField(max_length=50)
    imageEquipe = models.ImageField(upload_to='images/')
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)
    
class Role(models.Model):
    nomRole = models.CharField(max_length=50)
    
class Braqueur(models.Model):
    nomBraqueur = models.CharField(max_length=50)
    prenomBraqueur = models.CharField(max_length=50)
    imageBraqueur = models.ImageField(upload_to="images/")
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)