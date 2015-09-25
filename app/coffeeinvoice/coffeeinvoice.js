/**
 * Created by penn on 2015/9/25.
 */
angular.module('myApp.coffeeinvoice', ['ngRoute','pdiService'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/coffeeinvoice', {
        templateUrl: 'coffeeinvoice/coffeeinvoice.html',
        controller: 'coffeeinvoiceCtrl'
    });
}])
.controller('coffeeinvoiceCtrl',['$scope','coffeeinvoiceservice', function ($scope, service) {

    $scope.custom = {customID:21, customName:'', title:''};
    $scope.getcustomer = function(){
       service.getCustomer(function(data) {
           //console.log(data);
            $scope.custom = data;
        },$scope.custom.customID);
    };
}]);