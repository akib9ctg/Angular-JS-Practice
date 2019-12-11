var myApp = angular
        .module("bindingModule",[])
        .controller("bindingController", function($scope) {
            var object = {
                Name: "Ahasan Akib",
                Gender: "Male",
                University: "IIUC"
            };
            $scope.person = object;
        });
