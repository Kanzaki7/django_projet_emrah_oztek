from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Continent(models.Model):
    nomContinent = models.CharField(default="", max_length=50)
    
class Pays(models.Model):
    nomPays = models.CharField(default="", max_length=50)
    nomCapitale = models.CharField(default="", max_length=50)
    imagePays = models.CharField(default="", max_length=255)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)
    
class Equipe(models.Model):
    nomEquipe = models.CharField(max_length=50)
    numberEquipe = models.IntegerField(default=0, validators=[MaxValueValidator(12), MinValueValidator(0)])
    maxEquipe = models.IntegerField(default=0, validators=[MaxValueValidator(12), MinValueValidator(0)])
    maxLeader = models.IntegerField(default=0, validators=[MaxValueValidator(1), MinValueValidator(0)])
    maxHacker = models.IntegerField(default=0, validators=[MaxValueValidator(1), MinValueValidator(0)])
    maxEspion = models.IntegerField(default=0, validators=[MaxValueValidator(1), MinValueValidator(0)])
    maxForger = models.IntegerField(default=0, validators=[MaxValueValidator(1), MinValueValidator(0)])
    maxMaitre = models.IntegerField(default=0, validators=[MaxValueValidator(1), MinValueValidator(0)])
    maxTechnicien = models.IntegerField(default=0, validators=[MaxValueValidator(3), MinValueValidator(0)])
    maxHomme = models.IntegerField(default=0, validators=[MaxValueValidator(4), MinValueValidator(0)])
    imageEquipe = models.ImageField(upload_to="images/")
    pays = models.ForeignKey(Pays, on_delete=models.SET_NULL, null=True)
    continent = models.ForeignKey(Continent, on_delete=models.SET_NULL, null=True)
    
    
class Role(models.Model):
    nomRole = models.CharField(default="", max_length=50)
    
class Braqueur(models.Model):
    nomBraqueur = models.CharField(default="", max_length=50)
    prenomBraqueur = models.CharField(default="", max_length=50)
    age = models.IntegerField()
    telephone = models.CharField(default="", max_length=20)
    email = models.EmailField()
    genre = models.CharField(max_length=1)
    quote = models.TextField(default="", max_length=65535)
    charisme = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    communication = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    force = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    discretion = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    agilite = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    intelligence = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    intimidation = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    hacking = models.IntegerField(default=0, validators=[MaxValueValidator(99), MinValueValidator(0)])
    imageBraqueur = models.ImageField(upload_to="images/")
    pays = models.ForeignKey(Pays, on_delete=models.SET_NULL, null=True)
    equipe = models.ForeignKey(Equipe, on_delete=models.SET_NULL, null=True)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True)
    
