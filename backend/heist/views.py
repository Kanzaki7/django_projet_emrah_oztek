from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

def index(request):
    equipes = Equipe.objects.all()
    equipes_serializer = EquipeSerializer(equipes, many=True)
    equipesImages = EquipeImage.objects.all()
    equipesImages_serializer = EquipeImageSerializer(equipesImages, many=True)
    braqueurs = Braqueur.objects.all()
    braqueurs_serializer = BraqueurSerializer(braqueurs, many=True)
    braqueursImages = BraqueurImage.objects.all()
    braqueursImages_serializer = BraqueurImageSerializer(braqueursImages, many=True)
    roles = Role.objects.all()
    roles_serializer = RoleSerializer(roles, many=True)
    pays = Pays.objects.all()
    pays_serializer = PaysSerializer(pays, many=True)

    
    data = {
        'equipes': equipes_serializer.data,
        'equipesImages': equipesImages_serializer.data,
        'braqueurs': braqueurs_serializer.data,
        'braqueursImages': braqueursImages_serializer.data,
        'roles': roles_serializer.data,
        'pays': pays_serializer.data,
    }
    return JsonResponse({'data': data})

def equipe_details(request, id):
    equipe = Equipe.objects.get(id = id)
    equipe_serializer = EquipeSerializer(equipe, many=False)
    equipeImage = EquipeImage.objects.get(id = id)
    equipeImage_serializer = EquipeImageSerializer(equipeImage, many=False)
    braqueurs = Braqueur.objects.all()
    braqueurs_serializer = BraqueurSerializer(braqueurs, many=True)
    braqueursImages = BraqueurImage.objects.all()
    braqueursImages_serializer = BraqueurImageSerializer(braqueursImages, many=True)
    
    data = {
        'equipe': equipe_serializer.data,
        'equipeImage': equipeImage_serializer.data,
        'braqueurs': braqueurs_serializer.data,
        'braqueursImages': braqueursImages_serializer.data,
    }
    return JsonResponse({'data':data})

def braqueur_details(request, id):
    braqueur = Braqueur.objects.get(id = id)
    braqueur_serializer = BraqueurSerializer(braqueur, many=False)
    braqueurImage = BraqueurImage.objects.get(id = id)
    braqueurImage_serializer = BraqueurImageSerializer(braqueurImage, many=False)
    
    data = {
        'braqueur': braqueur_serializer.data,
        'braqueurImage': braqueurImage_serializer.data,
    }
    return JsonResponse({'data':data})

def indexEquipes(request):
    equipes = Equipe.objects.all()
    equipes_serializer = EquipeSerializer(equipes, many=True)
    equipesImages = EquipeImage.objects.all()
    equipesImages_serializer = EquipeImageSerializer(equipesImages, many=True)
    
    data = {
        'equipes': equipes_serializer.data,
        'equipesImages': equipesImages_serializer.data,
    }
    return JsonResponse({'data': data})


def indexBraqueurs(request):
    braqueurs = Braqueur.objects.all()
    braqueurs_serializer = BraqueurSerializer(braqueurs, many=True)
    braqueursImages = BraqueurImage.objects.all()
    braqueursImages_serializer = BraqueurImageSerializer(braqueursImages, many=True)
    
    data = {
        'braqueurs': braqueurs_serializer.data,
        'braqueursImages': braqueursImages_serializer.data,
    }
    return JsonResponse({'data': data})
    
@api_view(['POST'])
def createEquipe(request):
    if request.method == 'POST':
        equipe_data = request.data.get('equipe', {})
        equipeImage_data = request.data.get('equipeImage', {})
        
        equipe_serializer = EquipeSerializer(data=equipe_data)
        if equipe_serializer.is_valid():
            equipe = equipe_serializer.save()
            equipe_id = equipe.id
            
            equipeImage_data['equipe'] = equipe_id
            
            equipeImage_serializer = EquipeImageSerializer(data=equipeImage_data)
            if equipeImage_serializer.is_valid():
                equipeImage_serializer.save()
                return Response({"Success!" : "La nouvelle donnée a été ajouté"})
            else:
                return Response(equipeImage_serializer.errors, status=400)
        else:
            return Response(equipe_serializer.errors, status=504)

@api_view(['POST'])
def createBraqueur(request):
    if request.method == 'POST':
        braqueur_data = request.data.get('braqueur', {})
        braqueurImage_data = request.data.get('braqueur', {})
        
        braqueur_serializer = BraqueurSerializer(data=braqueur_data)
        if braqueur_serializer.is_valid():
            braqueur = braqueur_serializer.save()
            braqueur_id = braqueur.id
            
            braqueurImage_data['braqueur'] = braqueur_id
            
            braqueurImage_serializer = BraqueurImageSerializer(data=braqueurImage_data)
            if braqueurImage_serializer.is_valid():
                braqueurImage_serializer.save()
                return Response({"Success!" : "La nouvelle donnée a été ajouté"})
            else:
                return Response(braqueurImage_serializer.errors, status=400)
        else:
            return Response(braqueur_serializer.errors, status=504)

        
@csrf_exempt
@api_view(['DELETE'])
def delete_equipe(request, id):
    try:
        equipe = Equipe.objects.get(id=id)
        equipe.delete()
        return JsonResponse({'message': 'Equipe deleted successfully.'}, status=204)
    except Equipe.DoesNotExist:
        return JsonResponse({'error': 'Equipe not found.'}, status=404)

@csrf_exempt
@api_view(['DELETE'])
def delete_braqueur(request, id):
    try:
        braqueur = Braqueur.objects.get(id = id)
        braqueur.delete()
        return JsonResponse({'message': 'Braqueur deleted successfully.'}, status=204)
    except Braqueur.DoesNotExist:
        return JsonResponse({'error': 'Braqueur not found.'}, status=404)
    
    
@api_view(['GET', 'PUT'])
def update_equipe(request, id):
    try:
        equipe = Equipe.objects.get(id=id)
    except Equipe.DoesNotExist:
        return Response({'message': 'L equipe n\'existe pas'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EquipeSerializer(equipe)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = EquipeSerializer(equipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT'])
def update_braqueur(request, id):
    try:
        braqueur = Braqueur.objects.get(id=id)
    except Braqueur.DoesNotExist:
        return Response({'message': 'Le braqueur n\'existe pas'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BraqueurSerializer(braqueur)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = BraqueurSerializer(braqueur, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)