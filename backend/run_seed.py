import django
django.setup()
# from heist import seedContinent
# from heist import seedPays
# from heist import seedRole
# from heist import seedEquipe
from heist import seedBraqueur

if __name__ == "__main__":
    # seedContinent.run()
    # seedPays.run()
    # seedRole.run()
    # seedEquipe.run()
    seedBraqueur.run()