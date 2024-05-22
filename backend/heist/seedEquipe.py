from django_seed import Seed
from .models import *
import random

EtatsUnis =  Pays.objects.get(pk=23)
Japon =  Pays.objects.get(pk=42)
France =  Pays.objects.get(pk=27)
RoyaumeUni =  Pays.objects.get(pk=83)
Cuba =  Pays.objects.get(pk=18)
Belgique =  Pays.objects.get(pk=5)

Asie = Continent.objects.get(pk=1)
Afrique = Continent.objects.get(pk=2)
AmériqueduNord = Continent.objects.get(pk=3)
AmériqueduSud = Continent.objects.get(pk=4)
Europe = Continent.objects.get(pk=5)
Oceanie = Continent.objects.get(pk=6)
Antartique = Continent.objects.get(pk=7)

entries = [
    {'nomEquipe': "Ocean's Eleven", 'numberEquipe': 10, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/oceanElevenBis.png", 'continent': AmériqueduNord, 'pays': EtatsUnis,},
    {'nomEquipe': "Phantom Troupe", 'numberEquipe': 12, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/phantomTroupe.png", 'continent': Asie, 'pays': Japon, },
    {'nomEquipe': "Phantom Thieves of Hearts", 'numberEquipe': 12, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4,'imageEquipe': "images/hearth.png", 'continent': Asie, 'pays': Japon,},
    {'nomEquipe': "The Gentlemen", 'numberEquipe': 2, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/gentlemen.png", 'continent': Europe, 'pays': France,},
    {'nomEquipe': "Lupin Descendants", 'numberEquipe': 3, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/lupin.png", 'continent': Europe, 'pays': Belgique,},
    {'nomEquipe': "The Black Pearl", 'numberEquipe': 1, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/pirate.png", 'continent': AmériqueduSud, 'pays': Cuba,},
    {'nomEquipe': "The Merry Men", 'numberEquipe': 1, 'maxEquipe': 12, 'maxLeader': 1, 'maxHacker': 1, 'maxEspion': 1, 'maxForger': 1, 'maxMaitre': 1, 'maxTechnicien': 3, 'maxHomme': 4, 'imageEquipe': "images/hood.png", 'continent': Europe, 'pays': RoyaumeUni,},
]


def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(Equipe, 1, {
            'nomEquipe': i['nomEquipe'],
            'numberEquipe': i['numberEquipe'],
            'maxEquipe': i['maxEquipe'],
            'maxLeader': i['maxLeader'],
            'maxHacker': i['maxHacker'],
            'maxEspion': i['maxEspion'],
            'maxForger': i['maxForger'],
            'maxMaitre': i['maxMaitre'],
            'maxTechnicien': i['maxTechnicien'],
            'maxHomme': i['maxHomme'],
            'imageEquipe': i['imageEquipe'],
            'pays': i['pays'],
            'continent': i['continent'],
        })
    pks = seeder.execute()
    print(pks)