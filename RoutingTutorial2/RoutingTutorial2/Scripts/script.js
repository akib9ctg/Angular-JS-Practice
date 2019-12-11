var app = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/Home",
                {
                    templateUrl: "/Templates/Home.html",
                    controller: "HomeController"
                }).when("/Courses",
                    {
                        templateUrl: "/Templates/Courses.html",
                        controller: "CourseController"
                    }).when("/Students",
                        {
                            templateUrl: "/Templates/Student.html",
                            controller: "StudentController"
                            });
    }).controller("HomeController", function($scope) {
        $scope.message = "Home Page";
    }).controller("CourseController", function ($scope) {
        $scope.message = "Course Page";
        $scope.courses = ["C++, Java", "C#", "PHP"];
    }).controller("StudentController", function ($scope,$http) {
        $scope.message = "Student Page";
        $http.get("StudentService.asmx/GetAllStudents").then(function(response) {
            $scope.students = response.data;
        });

    })