var myApp = angular.module("myValidationModule",[])
    .controller("myController", function($scope) {
        $scope.submitAPP = function() {
            $scope.message = "OK";
        }
    })