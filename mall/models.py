from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=20)
    email = models.CharField(max_length=30)

# 秒杀商品模板
class Miaosha(models.Model):
    img = models.CharField(max_length=100)
    maximg = models.CharField(max_length=100, default='')
    hdimg = models.CharField(max_length=100, default='')
    content = models.CharField(max_length=200)
    price = models.CharField(max_length=10)
    miao = models.CharField(max_length=50)
# 轮播图模板
class Wrapper(models.Model):
    img = models.CharField(max_length=100)