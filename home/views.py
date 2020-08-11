from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.middleware.csrf import get_token

def csrf(request):
    print("token", get_token(request))
    return JsonResponse({'csrfToken': get_token(request)})
    
def home(request):
    return render(request, "home/homepage.html", {} )