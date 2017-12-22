define(['app'],function(app){
    app.directive('dropbox', function(){

        return {
            restrict: 'E',
            //scope: {},
            link: function(scope, element, attrs) {
                scope.displayMenu = false;

                scope.showMenu = function(e) {
                    scope.displayMenu = true;
                    e.stopPropagation();
                };

                document.addEventListener('click', function(){
                    scope.displayMenu = false;
                    scope.$apply();
                }, false);

            },
            template: '<div>  <input type="text" ng-click="showMenu($event)">'
                +'<div ng-show="displayMenu"> ' +
                 '<ul>'
                +'<li>tesss</li>'
                +'<li>ssss</li>'
                +'<li>ggggggg</li>'
               +'</ul> </div> </div>'
        };
    });
})
