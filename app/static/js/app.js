var routerApp = angular.module('intelliTest', ['ui.router','serviceModule','homeModule']);

routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views:{
                '':{
                    templateUrl:'page/home.html'
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