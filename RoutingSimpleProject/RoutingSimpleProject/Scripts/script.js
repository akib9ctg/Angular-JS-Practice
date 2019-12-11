var app = angular.module("routingMiniProjectModule", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/Student",
            {
                templateUrl: "/student.html",
                controller: "studentController"

            }).when("/department",
                {
                    templateUrl: "/department.html",
                    controller: "departmentController"

                }).when("/details",
                    {
                        templateUrl: "/details.html",
                        controller: "detailsController"

                    });
    })
    .factory("fact", function () {
        return { data: {} }
    })
    .controller("departmentController", function ($scope, $rootScope, fact) {
        var departments = ["CSE", "EEE", "ETE"];
        $scope.departments = departments;
        $scope.saveDepartmentInfo = function () {
            var ob = {
                Department: $scope.departmentName
            }
            fact.dept = ob;

        }
        $rootScope.message = "I am From RootScope";
    }).controller("studentController", function ($scope, fact) {
        
        $scope.saveStudentInfo = function () {
            var object = {
                name: $scope.studentName,
                fatherName: $scope.fatherName,
                motherName: $scope.motherName,
                department: fact.dept.Department
            }
            fact.data = object;
        }

    }).controller("detailsController", function ($scope, fact) {
        var object2 = {
            name: fact.data.name,
            fatherName: fact.data.fatherName,
            motherName: fact.data.motherName,
            departmentName: fact.data.department
        }
        $scope.obj = object2;
    })
