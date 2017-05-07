var routerApp = angular.module('intelliTest', ['ui.router']);

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
            //templateUrl:'page/document.html'
        })
        .state('service',{
            url:'/service',
            templateUrl: 'page/services.html',
            controller: function($scope, $state) {
                $scope.goIndex = function() {
                    $state.go("index");
                }
            }
        })
        .state('document',{
            url:'/document',
            templateUrl:'page/document.html'
        })

});