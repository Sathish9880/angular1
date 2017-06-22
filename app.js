angular.module("empApp",['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/reg',{
                templateUrl:'pages/regEmp.html'
            })
            .when('/view',{
                templateUrl:'pages/viewproducts.html'
            })
            .otherwise({redirectTo:'/'})
    })

.controller("testctrl",function($scope){
$scope.msg="hello";
})