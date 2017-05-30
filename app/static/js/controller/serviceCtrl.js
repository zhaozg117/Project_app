/**
 * Created by Administrator on 2017/5/30.
 */
define(["app"],function(app){
    return app.controller("serviceCtrl",function($scope, $http, $state, $stateParams) {
        $scope.totalServerItems = 0;
        $scope.isShow = false;
        $scope.pagingOptions = {
            pageSizes: [5, 10, 20],
            pageSize: 5,
            currentPage: 1
        };
        $scope.goIndex = function () {
            $state.go("index");
        }
        $scope.showDiv = function () {
            $scope.isShow = !$scope.isShow;
        }
        console.log($scope.totalServerItems);

        $scope.getHttpData = function () {
            $http.get("data/books2.json")
                .success(function (data) {
                    console.log(data);
                    $scope.books = data;
                })
        }
    });
})