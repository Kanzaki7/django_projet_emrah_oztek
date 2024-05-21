from django_seed import Seed
from .models import *
import random

img1 =  Braqueur.objects.get(pk=1)
img2 =  Braqueur.objects.get(pk=2)
img3 =  Braqueur.objects.get(pk=3)
img4 =  Braqueur.objects.get(pk=4)
img5 =  Braqueur.objects.get(pk=5)
img6 =  Braqueur.objects.get(pk=6)
img7 =  Braqueur.objects.get(pk=7)
img8 =  Braqueur.objects.get(pk=8)
img9 =  Braqueur.objects.get(pk=9)
img10 =  Braqueur.objects.get(pk=10)
img11 =  Braqueur.objects.get(pk=11)
img12 =  Braqueur.objects.get(pk=12)
img13 =  Braqueur.objects.get(pk=13)
img14 =  Braqueur.objects.get(pk=14)
img15 =  Braqueur.objects.get(pk=15)
img16 =  Braqueur.objects.get(pk=16)
img17 =  Braqueur.objects.get(pk=17)
img18 =  Braqueur.objects.get(pk=18)
img19 =  Braqueur.objects.get(pk=19)
img20 =  Braqueur.objects.get(pk=20)
img21 =  Braqueur.objects.get(pk=21)
img22 =  Braqueur.objects.get(pk=22)
img23 =  Braqueur.objects.get(pk=23)
img24 =  Braqueur.objects.get(pk=24)
img25 =  Braqueur.objects.get(pk=25)
img26 =  Braqueur.objects.get(pk=26)
img27 =  Braqueur.objects.get(pk=27)
img28 =  Braqueur.objects.get(pk=28)
img29 =  Braqueur.objects.get(pk=29)
img30 =  Braqueur.objects.get(pk=30)
img31 =  Braqueur.objects.get(pk=31)
img32 =  Braqueur.objects.get(pk=32)
img33 =  Braqueur.objects.get(pk=33)
img34 =  Braqueur.objects.get(pk=34)
img35 =  Braqueur.objects.get(pk=35)
img36 =  Braqueur.objects.get(pk=36)
img37 =  Braqueur.objects.get(pk=37)
img38 =  Braqueur.objects.get(pk=38)
img39 =  Braqueur.objects.get(pk=39)
img40 =  Braqueur.objects.get(pk=40)
img41 =  Braqueur.objects.get(pk=41)
img42 =  Braqueur.objects.get(pk=42)
img43 =  Braqueur.objects.get(pk=43)
img44 =  Braqueur.objects.get(pk=44)
img45 =  Braqueur.objects.get(pk=45)
img46 =  Braqueur.objects.get(pk=46)
img47 =  Braqueur.objects.get(pk=47)
img48 =  Braqueur.objects.get(pk=48)
img49 =  Braqueur.objects.get(pk=49)
img50 =  Braqueur.objects.get(pk=50)
img51 =  Braqueur.objects.get(pk=51)
img52 =  Braqueur.objects.get(pk=52)
img53 =  Braqueur.objects.get(pk=53)
img54 =  Braqueur.objects.get(pk=54)
img55 =  Braqueur.objects.get(pk=55)
img56 =  Braqueur.objects.get(pk=56)
img57 =  Braqueur.objects.get(pk=57)
img58 =  Braqueur.objects.get(pk=58)
img59 =  Braqueur.objects.get(pk=59)
img60 =  Braqueur.objects.get(pk=60)

entries = [
    {'imageBraqueur': "images/dannyOcean.jpg", 'braqueur': img1},
    {'imageBraqueur': "images/rustyRyan.jpg", 'braqueur': img2},
    {'imageBraqueur': "images/linus.jpg", 'braqueur': img3},
    {'imageBraqueur': "images/saul.jpg", 'braqueur': img4},
    {'imageBraqueur': "images/turk.jpg", 'braqueur': img5},
    {'imageBraqueur': "images/virgil.jpg", 'braqueur': img6}, 
    {'imageBraqueur': "images/yen.jpg", 'braqueur': img7}, 
    {'imageBraqueur': "images/basher.jpg", 'braqueur': img8}, 
    {'imageBraqueur': "images/frank.jpg", 'braqueur': img9}, 
    {'imageBraqueur': "images/dell.jpg", 'braqueur': img10}, 
    {'imageBraqueur': "images/chrollo.jpg", 'braqueur': img11}, 
    {'imageBraqueur': "images/hisoka.jpg", 'braqueur': img12}, 
    {'imageBraqueur': "images/nobunaga.jpg", 'braqueur': img13}, 
    {'imageBraqueur': "images/feitan.jpg", 'braqueur': img14}, 
    {'imageBraqueur': "images/machi.jpg", 'braqueur': img15}, 
    {'imageBraqueur': "images/phinks.jpg", 'braqueur': img16}, 
    {'imageBraqueur': "images/franklin.jpg", 'braqueur': img17}, 
    {'imageBraqueur': "images/shizuku.jpg", 'braqueur': img18}, 
    {'imageBraqueur': "images/shalnark.jpg", 'braqueur': img19}, 
    {'imageBraqueur': "images/pakunoda.jpg", 'braqueur': img20}, 
    {'imageBraqueur': "images/uvogin.jpg", 'braqueur': img21}, 
    {'imageBraqueur': "images/Kortopi.jpg", 'braqueur': img22}, 
    {'imageBraqueur': "images/l.jpg", 'braqueur': img23}, 
    {'imageBraqueur': "images/light.jpg", 'braqueur': img24}, 
    {'imageBraqueur': "images/lupin.jpg", 'braqueur': img25}, 
    {'imageBraqueur': "images/sherlock.jpg", 'braqueur': img26}, 
    {'imageBraqueur': "images/moriarty.jpg", 'braqueur': img27}, 
    {'imageBraqueur': "images/bond.jpg", 'braqueur': img28}, 
    {'imageBraqueur': "images/irene.jpg", 'braqueur': img29}, 
    {'imageBraqueur': "images/catwoman.jpg", 'braqueur': img30}, 
    {'imageBraqueur': "images/lupinIII.jpg", 'braqueur': img31}, 
    {'imageBraqueur': "images/fujiko.jpg", 'braqueur': img32}, 
    {'imageBraqueur': "images/images/daisuke.jpg", 'braqueur': img33}, 
    {'imageBraqueur': "images/takamaki.jpg", 'braqueur': img34}, 
    {'imageBraqueur': "images/ren.jpg", 'braqueur': img35}, 
    {'imageBraqueur': "images/morgana.jpg", 'braqueur': img36}, 
    {'imageBraqueur': "images/ryuji.jpg", 'braqueur': img37}, 
    {'imageBraqueur': "images/yusuke.jpg", 'braqueur': img38}, 
    {'imageBraqueur': "images/makoto.jpg", 'braqueur': img39}, 
    {'imageBraqueur': "images/sakura.jpg", 'braqueur': img40}, 
    {'imageBraqueur': "images/haru.jpg", 'braqueur': img41}, 
    {'imageBraqueur': "images/goro.jpg", 'braqueur': img42}, 
    {'imageBraqueur': "images/sumire.jpg", 'braqueur': img43}, 
    {'imageBraqueur': "images/sophia.jpg", 'braqueur': img44}, 
    {'imageBraqueur': "images/zenkichi.jpg", 'braqueur': img45}, 
    {'imageBraqueur': "images/neil.jpg", 'braqueur': img46}, 
    {'imageBraqueur': "images/flynn.jpg", 'braqueur': img47}, 
    {'imageBraqueur': "images/gru.jpg", 'braqueur': img48}, 
    {'imageBraqueur': "images/kaito.jpg", 'braqueur': img49}, 
    {'imageBraqueur': "images/jack.jpg", 'braqueur': img50}, 
    {'imageBraqueur': "images/kurama.jpg", 'braqueur': img51}, 
    {'imageBraqueur': "images/pussinboots.jpg", 'braqueur': img52}, 
    {'imageBraqueur': "images/nami.jpg", 'braqueur': img53}, 
    {'imageBraqueur': "images/robin.jpg", 'braqueur': img54}, 
    {'imageBraqueur': "images/vito.jpg", 'braqueur': img55}, 
    {'imageBraqueur': "images/joker.jpg", 'braqueur': img56}, 
    {'imageBraqueur': "images/alaadin.jpg", 'braqueur': img57}, 
    {'imageBraqueur': "images/blackcat.jpg", 'braqueur': img58}, 
    {'imageBraqueur': "images/trevor.jpg", 'braqueur': img59}, 
    {'imageBraqueur': "images/carl.jpg", 'braqueur': img60}, 
]


def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(BraqueurImage, 1, {
            'imageBraqueur': i['imageBraqueur'],
            'braqueur': i['braqueur'],
        })
    pks = seeder.execute()
    print(pks)