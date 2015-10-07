/**
 * Created by penn on 2015/10/7.
 */
angular.module("myApp.scopecase",['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/scopecase', {
            templateUrl: 'scopecase/scopecase.html',
            controller: 'ScopecaseCtrl'
        });
    }])
.controller('ScopecaseCtrl',['$scope', function ($scope) {
        $scope.items = [
            {title:'Title 1', quantity:8,price:1.0},
            {title:'Title 2', quantity:9,price:2.0},
            {title:'Title 3', quantity:10,price:3.0}
        ];
        
        $scope.remove= function (idx) {
            $scope.items.splice(idx, 1);
        }

        $scope.primitiveitems = [1,2,3,4,5];
    }])