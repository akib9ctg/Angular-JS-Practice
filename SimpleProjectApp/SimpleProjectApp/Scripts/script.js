var myApp = angular.module("myModule", []).
    controller("myController", function($scope,$http) {
        $scope.signUpStudent = function (student) {
            console.log(student);
            $http.post("https://localhost:44372/api/Student/SaveStudent", student).then(function(response) {
                console.log(response);
            });
            
        }
        $http.get("https://localhost:44372/api/Student/AllStudent").then(function (response) {
            $scope.students = response.data;
            console.log(response);
        });
        
        
    })