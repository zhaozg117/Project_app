/**
 * Created by Administrator on 2017/5/30.
 */
//var routerApp = angular.module('intelliTest', ['ui.router','serviceModule','homeModule']);


define(['app'],function(app){
    app.run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
    return app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views:{
                    '':{
                        templateUrl:'page/home.html',
                        controller:"homeCtrl"
                    },
                    'main@index':{
                        templateUrl:'page/main.html'
                    }
                }
            })
            .state('service',{
                url:'/service',
                views:{
                    '':{
                        templateUrl: 'page/services.html',
                        controller:"serviceCtrl"
                    },
                    'serviceDetail@service':{
                        templateUrl: 'page/servidetail.html',
                    }
                }
            })
            .state('document',{
                url:'/document',
                templateUrl:'page/document.html'
            })

    });
});
