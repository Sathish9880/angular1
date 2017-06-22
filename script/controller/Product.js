/**
 * Created by sathish on 15-Jun-17.
 */
var app = angular.module('MyApp', []);
app.controller('product', ["$scope", function ($scope) {
    $scope.products = [
        {name: 'mouse', id: 90, price: 900},
        {name: 'keyboard', id: 190, price: 1900},
        {name: 'penDrive', id: 390, price: 800}

    ];
//add products
    $scope.add = function () {

        var newProduct = {
            id: $scope.pid,
            name: $scope.pname,
            price: $scope.price
        };
        $scope.pid = "",
            $scope.pname = "",
            $scope.price = ""

        $scope.products.push(newProduct);
        alert("sucessfully added")
    }
//-----------------------------

    //edit-------------
    $scope.edit = function (id) {
        console.log(id);
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == id) {

                $scope.pid = $scope.products[i].id;
                $scope.pname = $scope.products[i].name;
                $scope.price = $scope.products[i].price;

            }
        }
    }
    //----------------update....
    $scope.update = function (id) {

        console.log(id)
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == id) {
                $scope.products[i].id = $scope.pid;
                $scope.products[i].name = $scope.pname;
                $scope.products[i].price = $scope.price;
            }
        }
    }

    $scope.del = function (id) {

        var res = confirm("Are you sure delete this item?");
        if (res) {
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id == id) {
                    $scope.products.splice(i, 1);
                }
            }
            alert("sucessfully deleted..");
        }

        else
        {
            alert("sorry unable to delete..")
        }
    }


}]);