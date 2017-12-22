/**
 * Created by Administrator on 2017/5/30.
 */
//var routerApp = angular.module('intelliTest', ['ui.router','serviceModule','homeModule']);


define(['ui-router'],function(){
    var app=angular.module("intelliTest",['ui.router']);
    //app.run(function($rootScope, $state, $stateParams) {
    //    $rootScope.$state = $state;
    //    $rootScope.$stateParams = $stateParams;
    //});
     app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views:{
                    '':{
                        templateUrl:'static/page/home.html',
                        //controller:"homeCtrl"
                    },
                    'main@index':{
                        //templateUrl:'static/page/main.html'
                    }
                }
            })
            //.state('service',{
            //    url:'/service',
            //    views:{
            //        '':{
            //            templateUrl: '../page/services.html',
            //            //controller:"serviceCtrl"
            //        },
            //        'serviceDetail@service':{
            //            templateUrl: '../page/servidetail.html',
            //        }
            //    }
            //})
            //.state('document',{
            //    url:'/document',
            //    templateUrl:'../page/document.html'
            //})

    });
    return app;
});
