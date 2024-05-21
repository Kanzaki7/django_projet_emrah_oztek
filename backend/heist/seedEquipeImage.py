from django_seed import Seed
from .models import *
import random

Ocean =  Equipe.objects.get(pk=1)
Phantom =  Equipe.objects.get(pk=2)
Hearth =  Equipe.objects.get(pk=3)
Gentlemen =  Equipe.objects.get(pk=4)
Lupin =  Equipe.objects.get(pk=5)
BlackPearl =  Equipe.objects.get(pk=6)
MerryMen =  Equipe.objects.get(pk=7)

entries = [
    {'imageEquipe': "images/oceanElevenBis.png", 'equipe': Ocean},
    {'imageEquipe': "images/phantomTroupe.png", 'equipe': Phantom},
    {'imageEquipe': "images/hearth.png", 'equipe': Hearth},
    {'imageEquipe': "images/gentlemen.png", 'equipe': Gentlemen},
    {'imageEquipe': "images/lupin.png", 'equipe': Lupin},
    {'imageEquipe': "images/pirate.png", 'equipe': BlackPearl},
    {'imageEquipe': "images/hood.png", 'equipe': MerryMen},
]


def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(EquipeImage, 1, {
            'imageEquipe': i['imageEquipe'],
            'equipe': i['equipe'],
        })
    pks = seeder.execute()
    print(pks)