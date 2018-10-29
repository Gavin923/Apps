from django.shortcuts import render

# Create your views here.
def index(request):

    return render(request, '天狗商城.html')


def login(request):
    return render(request, '注册.html')


def showdetails(request):
    return render(request, '商品详情1.html')


def cart(request):
    return render(request, '我的购物车.html')