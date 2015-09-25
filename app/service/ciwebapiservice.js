/**
 * Created by penn on 2015/9/25.
 */
angular.module('pdiService',['ngResource'])
.factory('coffeeinvoiceservice',function( $q, $http){
    return{
        getCustomer:function(callback,id){
            var url = "http://localhost:8947/api/CoffeeInvoiceApi";
            var custom = {customID:id, customName:"", title:""};
          //  console.log(custom);
            $http.get(url, { params: {id:custom.customID}}).success(function (data, status, headers, config) {
               // console.log(data.name);
                custom.customName = data.name;
                custom.title='Mr.';
                callback(custom);
            }).error(function (data, status, headers, config) {
                custom.title = "Oops... something went wrong";
                custom.customName = 'Not found';
                return custom;
            });
        }
    };
});
