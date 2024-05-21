from django_seed import Seed
from .models import *
import random

entries = [
    {'nomRole': "Leader"},
    {'nomRole': "Hacker"},
    {'nomRole': "Espion"},
    {'nomRole': "Forger"},
    {'nomRole': "Maitre des déguisements"},
    {'nomRole': "Technicien"},
    {'nomRole': "Homme à tout faire"},
]


def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(Role, 1, {
            'nomRole': i['nomRole'],
        })
    pks = seeder.execute()
    print(pks)