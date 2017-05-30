/**
 * Created by Administrator on 2017/5/30.
 */
define(['app'],function(app){
    return app.controller("homeCtrl",['$scope','$http','$state','$stateParams',  function($scope,$http,$state, $stateParams){
        $scope.books=[],$scope.searchValue='';
        showAll();
        $scope.showMore=showAll;
        function  showAll(){
            $http({
                methode:"get",
                async:true,
                url:"data/books0.json"
            }).success(function(data){
                $scope.books=data;
            }).error(function(data){

            })
        }


        $scope.searchBook=function(){
            $http({
                methode:"get",
                async:true,
                url:"data/books2.json"
            }).success(function(data){
                $scope.books=data;
                //$scope.$apply("books")
            }).error(function(data){

            })
        }

        $scope.clinkFn=function(key,value){
            console.log(key,":",value);
        }
    }]);
});