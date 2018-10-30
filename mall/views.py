from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from mall.models import User


def index(request):
    username = request.COOKIES.get('username')
    return render(request, '天狗商城.html', context={'username':username})

def register(request):
    if request.method == 'GET':
        return render(request, '注册.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('pwd1')

        user = User()
        user.username = username
        user.password = password
        user.email = email
        user.save()
        response = redirect('mall:index')
        response.set_cookie('username', user.username)
        return response

def login(request):
    if request.method == 'GET':
        return render(request, '注册.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')

        users = User.objects.all().filter(username=username).filter(password=password)
        if users.exists():
            user = users[0]
            response = redirect('mall:index')
            response.set_cookie('username', user.username)
            return response
        else:
            return HttpResponse('登录失败')

def logout(request):
    response = redirect('mall:index')
    response.delete_cookie('username')
    return response


def showdetails(request):
    username = request.COOKIES.get('username')
    return render(request, '商品详情1.html', context={'username':username})


def cart(request):
    username = request.COOKIES.get('username')
    return render(request, '我的购物车.html', context={'username':username})