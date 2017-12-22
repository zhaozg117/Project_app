/**
 * Created by Administrator on 2016/12/27.
 */
define(["app"],function(){
    var aws=angular.module("intelliTest");
    aws.service('appService',function(){
        this.getAllBooks=function(param){
            $http.({
                method: 'GET',
                url: '../../../mock/books0.json'
            })
        }
    });

})