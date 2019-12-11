var myApp = angular
    .module("CustomServiceModule", [])
    .controller("CustomServiceController", function ($scope, stringService) {
        $scope.showOutput = function(input) {
            $scope.output = stringService.showOutput(input);
        };
});