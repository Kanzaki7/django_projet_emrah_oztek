from django_seed import Seed
from .models import *
import random

entries = [
    {'nomContinent': "Asie"},
    {'nomContinent': "Afrique"},
    {'nomContinent': "Amérique du Nord"},
    {'nomContinent': "Amérique du Sud"},
    {'nomContinent': "Europe"},
    {'nomContinent': "Océanie"},
    {'nomContinent': "Antartique"},
]


def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(Continent, 1, {
            'nomContinent': i['nomContinent'],
        })
    pks = seeder.execute()
    print(pks)