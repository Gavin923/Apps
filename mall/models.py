from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=30)
    token = models.CharField(max_length=100,default='')

# 秒杀商品模板
class Miaosha(models.Model):
    img = models.CharField(max_length=100)
    maximg = models.CharField(max_length=100, default='')
    hdimg = models.CharField(max_length=100, default='')
    content = models.CharField(max_length=200)
    price = models.IntegerField()
    sprice = models.IntegerField(default=0)
    miao = models.CharField(max_length=50)
    no = models.CharField(max_length=40, null=True)

# 轮播图模板
class Wrapper(models.Model):
    img = models.CharField(max_length=100)

# 购物车模板
class Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Miaosha)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)
