require.config({
    baseUrl:"static/",
    paths:{
        "domReady":"lib/domReady",
        "jquery":"lib/jquery-1.12.4",
        "angular":"../freamwork/angular/angular.min",
        "ui-router":"../freamwork/angular/angular-ui-router",
        //"app":"app",
        'appRouteConf':'config/appRouter'
   },
   shim:{
       "jquery":{
           exports:"jquery"
       },
       "angular":{
           exports:"angular"
       },
       "ui-router":{
           deps: ['angular']
       } ,
       "appRouteConf":{
           deps: ['ui-router']
       } ,

   }
});

require(["jquery","appRouteConf"],function($){
    $(function(){
        angular.bootstrap(document,["intelliTest"]);
    });
    //angular.bootstrap(document,["intelliTest"]);
});
