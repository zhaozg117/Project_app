define(["app","../services/services.js"],function(app,appservice){
    var ctrlArr=["$timeout","$state",function($timeout,$state,appservice){
        debugger;
        console.log(appservice);
    }];
    app.controller("homeCtrl",ctrlArr)
})