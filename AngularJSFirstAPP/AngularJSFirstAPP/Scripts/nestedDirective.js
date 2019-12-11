var app = angular
    .module("nested", [])
    .controller("nestedController", function ($scope) {
        var employees = [
            { Name: "Akib", University: "IIUC" },
            { Name: "Sazzad", University: "AIUB" },
            { Name: "Abid", University: "NSU" },
            { Name: "Kalam", University: "IIUC" },
            { Name: "Karim", University: "AIUB" },
            { Name: "Rahim", University: "NSU" }

        ];
        $scope.employees = employees;
    });