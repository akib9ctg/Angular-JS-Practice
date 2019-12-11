var app = angular
    .module("customFilterModule", [])
    .filter("gender", function (gender) {
        if (gender === 1) {
            return "Male";
        } else if (gender === 2) {
            return "Female";
        } else if (gender === 3) {
            return "Not disclosed";
        }
    })
    .controller("customFilterController", function($scope) {
        var employees = [
            { Name: "Akib", Gender: 1, Salary: 35000 },
            { Name: "Sazid", Gender: 2, Salary: 55000 },
            { Name: "Alam", Gender: 3, Salary: 47000 },
        ];
        $scope.employees = employees;
    });