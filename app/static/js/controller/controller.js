/**
 * Created by Administrator on 2016/12/27.
 */
var serModule=angular.module("serviceModule",[]);
var serctrl=serModule.controller("serviceCtrl",function($scope, $http, $state, $stateParams){
    $scope.totalServerItems = 0;
    $scope.isShow=false;
    $scope.pagingOptions = {
        pageSizes: [5, 10, 20],
        pageSize: 5,
        currentPage: 1
    };
    $scope.goIndex = function() {
        $state.go("index");
    }
    $scope.showDiv=function(){
        $scope.isShow=! $scope.isShow;
    }
    console.log($scope.totalServerItems);

    $scope.getHttpData=function(){
        $http.get("data/books2.json")
            .success(function(data){
                console.log(data);
                $scope.books=data;
            })
    }
});


var homeModule=angular.module("homeModule",[]);
homeModule.controller("homeCtrl",function($scope, $http, $state, $stateParams){
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
})
