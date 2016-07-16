"""mappl2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include, patterns
from django.contrib import admin
from thinkster_django_angular_boilerplate import views
from thinkster_django_angular_boilerplate.views import IndexView
from rest_framework_nested import routers
from authentication.views import AccountViewSet, LoginView, LogoutView
from pins.views import AccountPinsViewSet, PinViewSet, BoardPinsViewSet
from boards.views import AccountBoardsViewSet, BoardViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'pins', PinViewSet)
router.register(r'boards', BoardViewSet, base_name='boards')

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)

accounts_router.register(r'pins', AccountPinsViewSet)
accounts_router.register(r'boards', AccountBoardsViewSet)

boards_router = routers.NestedSimpleRouter(
    router, r'boards', lookup='board'
)

boards_router.register(r'pins', BoardPinsViewSet, base_name='pins')

urlpatterns = patterns(
    '',
    
    #URLs
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/', include(boards_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),

    
    #url(r'^admin/', admin.site.urls),
    
    #Always leave for last
    url('^.*$', IndexView.as_view(), name='index'),
)
