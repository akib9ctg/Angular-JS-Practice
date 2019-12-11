var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var object = {  
            FirstName: "Ahasanul",
            LastName: "Akib",
            Gender: "Male"
        };
        $scope.person = object;
    });