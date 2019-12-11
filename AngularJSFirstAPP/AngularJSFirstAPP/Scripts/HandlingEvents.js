var app = angular
    .module("HandlingEvent", [])
    .controller("HandlingEventController",
        function ($scope) {
            var technologies = [
                { name: "C#", likes: 0, disLikes: 0 },
                { name: "Asp.Net", likes: 0, disLikes: 0 },
                { name: "SQL", likes: 0, disLikes: 0 },
                { name: "AngularJS", likes: 0, disLikes: 0 },

            ];
            $scope.technologies = technologies;
            $scope.incrementLikes = function(technology) {
                technology.likes++;
            };
            $scope.incrementDisLikes = function (technology) {
                technology.disLikes++;
            };
        });
