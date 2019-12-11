var app = angular
    .module("filterAngularJS", [])
    .controller("filterAngularJSController", function ($scope) {
        var employees = [
            { Name: "Pabel", DateOfBirth: new Date("November 23, 1995"), Gender: "Male", Salary: 40000 },
            { Name: "Xayid", DateOfBirth: new Date("December 15, 1993"), Gender: "Female", Salary: 55000.635 },
            { Name: "Yazim", DateOfBirth: new Date("May 30, 1992"), Gender: "Female", Salary: 35000.46 },
            { Name: "Xope", DateOfBirth: new Date("January 01, 1998"), Gender: "Male", Salary: 65000.63 },
            { Name: "Pabel", DateOfBirth: new Date("November 23, 1995"), Gender: "Male", Salary: 40000 },
            { Name: "Xayid", DateOfBirth: new Date("December 15, 1993"), Gender: "Female", Salary: 55000.635 },
            { Name: "Yazim", DateOfBirth: new Date("May 30, 1992"), Gender: "Female", Salary: 35000.46 },
            { Name: "Xope", DateOfBirth: new Date("January 01, 1998"), Gender: "Male", Salary: 65000.63 }
        ];
        $scope.employees = employees;
        $scope.rowLimit = 3;
    });