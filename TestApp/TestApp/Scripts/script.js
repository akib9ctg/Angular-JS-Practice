var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {
        var departments = ["CSE", "EEE", "ETE"];
        $scope.departments = departments;
        $scope.hide = true;
        $scope.hideMe = function() {
            $scope.hide = false;
        }
        
    });