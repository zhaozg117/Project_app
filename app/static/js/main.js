require.config({
    baseUrl:"../app/",
   paths:{
       "jquery":"static/plugin/jquery-1.12.4",
       "angular":"freamwork/angular/angular.min",
       "router":"freamwork/angular/angular-ui-router",
       "app":"static/js/app",
       'appRoute':'static/js/routers/appRouter',

       "homeCtrl":"static/js/controller/homeCtrl",
       "serviceCtrl":"static/js/controller/serviceCtrl",
       
        "menudir":"static/js/directive/directive",
   },
   shim:{
       "angular":{exports:"angular"},
       "router":{ deps: ['angular']}  //, exports: 'ui-router'
   }


});

require(["angular","jquery","app","appRoute","homeCtrl","serviceCtrl", "menudir"],function(angular,$q){
  $q(function(){
      angular.bootstrap(document,["intelliTest"]);
  });
});
