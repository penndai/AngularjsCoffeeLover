'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'pdiService',
  'myApp.webRate',
  'myApp.coffeeinvoice',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
provider("myService", function(){
    var someConfigVariable="";
    this.setVariable = function (value) {
        someConfigVariable=value;
    };

    var service={
        getConfigVariable: function () {
            return someConfigVariable;
        },
        getItemsLength: function (items) {
            if(items.length==0) return 0;
            var value = items.length;
            return value;
        }
    };

    this.$get = function () {
        return service;
    }
}).
config(['$routeProvider','myServiceProvider', function($routeProvider, myServiceProvider) {
  //default view when first load the html file
        myServiceProvider.setVariable("config value");
        $routeProvider.otherwise({redirectTo: '/view1'});
}]);
