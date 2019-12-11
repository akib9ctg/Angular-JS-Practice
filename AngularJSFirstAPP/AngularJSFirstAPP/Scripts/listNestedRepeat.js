var app = angular
    .module("listRepeat", [])
    .controller("listRepeatController", function ($scope) {
        var countries = [
            {
                Name: "Bangladesh",
                Cities: ["Dhaka", "Chittagong", "Khulna"]
            },
            {
                Name: "USA",
                Cities: ["Texas","Chicago","Houston"]
            },
            {
                Name: "India",
                Cities: ["Hydrabad","Chennai","Mumbai"]
            }
        ];
        $scope.countries = countries;
    });