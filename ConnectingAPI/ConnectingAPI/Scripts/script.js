var myApp = angular.module("APIModule",[])
    .controller("myAPIController", function($scope,$http) {
        $scope.submitButton = function(student) {
            console.log(student);
            $http.get("https://localhost:44356/api/Values").then(function(response) {
                console.log(response);
            });
            //$http.post("https://localhost:44356/api/Values/",student).then(function (response) {
            //    console.log(response);
            //});
        }
    })