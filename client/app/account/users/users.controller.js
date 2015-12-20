'use strict';

angular
    .module('DemoApp')
    .controller('UsersCtrl', function($scope, $http, Auth, User) {

        // Use the User $resource to fetch all users
        $scope.users = User.query();
        console.log($scope.users);

        $scope.delete = function(user) {
            console.log(user._id);
            User.remove({id: user._id});
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };
    });
