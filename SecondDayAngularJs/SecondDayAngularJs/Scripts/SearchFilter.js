var app = angular
    .module("searchFilterModule", [])
    .controller("searchFilterController", function ($scope) {
        var students = [
            { name: "Akib", university: "IIUC", CGPA: 3.89 },
            { name: "Abid", university: "NSU", CGPA: 3.50 },
            { name: "Sazid", university: "BUET", CGPA: 3.70 }

        ];
        $scope.students = students;
    });