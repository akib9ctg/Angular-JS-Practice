var app = angular
    .module("sortingFilter", [])
    .controller("sortingFilterController", function($scope) {
        var employees = [
            { Name: "Akib", Salary: 15300 },
            { Name: "Sazid", Salary: 12100 },
            { Name: "Tanim", Salary: 17300 },
            { Name: "Misbah", Salary: 14300 }
        ];
        $scope.employees = employees;
        $scope.sortColumn = "name";
    });