from django.conf.urls import url

from mall import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^showdetails/$', views.showdetails, name='showdetails'),
    url(r'^cart/$', views.cart, name='cart'),
]