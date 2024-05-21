"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from heist import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api', views.index),
    path('api/equipes', views.indexEquipes),
    path('api/braqueurs', views.indexBraqueurs),
    path('api/equipe/<int:id>', views.equipe_details),
    path('api/braqueur/<int:id>', views.braqueur_details),
    path('api/equipe/create', views.createEquipe),
    path('api/braqueur/create', views.createBraqueur),
    path('api/equipe/delete/<int:id>', views.delete_equipe),
    path('api/braqueur/delete/<int:id>', views.delete_braqueur),
    path('api/equipe/update/<int:id>', views.update_equipe),
    path('api/braqueur/update/<int:id>', views.update_braqueur),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
