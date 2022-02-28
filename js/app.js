var app = angular.module('ngApp', [])

app.controller("AppController", function($scope) {
    $scope.isCartOpen = false;
    $scope.cartCount = 0;
    $scope.selectedSize = null;
    $scope.cart = {};

    $scope.myCart = function(isOpen) {
        $scope.isCartOpen = isOpen;
    }

    $scope.setSize = function(size) {
        $scope.selectedSize = size == $scope.selectedSize ? null : size;
    }

    $scope.addToCart = function() {
        if ($scope.selectedSize) {
            if ($scope.cart.hasOwnProperty($scope.selectedSize)) {
                $scope.cart[$scope.selectedSize]++;
            } else {
                $scope.cart[$scope.selectedSize] = 1;
            }
            $scope.cartCount++;
            $scope.selectedSize = null;
        } else {
            alert('Size is required. Please select a size to continue.');
        }
    }

})