from rest_framework import serializers
from .models import *



class BraqueurImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BraqueurImage
        fields = '__all__'

class BraqueurSerializer(serializers.ModelSerializer):
    BraqueurImage = BraqueurImageSerializer(many=True, read_only=True, source='BraqueurImage_set')
    class Meta:
        model = Braqueur
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    Braqueur = BraqueurSerializer(many=True, read_only=True, source='Braqueur_set')
    class Meta:
        model = Role
        fields = '__all__'
        
class EquipeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipeImage
        fields = '__all__'

class EquipeSerializer(serializers.ModelSerializer):
    EquipeImage = EquipeImageSerializer(many=True, read_only=True, source='EquipeImage_set')
    class Meta:
        model = Equipe
        fields = '__all__'
        
class PaysSerializer(serializers.ModelSerializer):
    Equipe = EquipeSerializer(many=True, read_only=True, source='Equipe_set')
    class Meta:
        model = Pays
        fields = '__all__'

class ContinentSerializer(serializers.ModelSerializer):
    Pays = PaysSerializer(many=True, read_only=True, source='Pays_set')
    class Meta:
        model = Continent
        fields = '__all__'
        
        