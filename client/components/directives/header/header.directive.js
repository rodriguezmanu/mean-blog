(function() {
    'use strict';

    angular
        .module('DemoApp.header')
        .directive('ngHeader', function() {
            return {
                templateUrl: 'components/directives/header/header.html',
                restrict: 'EA',
                controller: headerCtl,
                link: link
            };
        });

    function headerCtl($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    }

    function link(scope, element, attr) {
        var nav = element.find('.navbar-auto-hiding');
        if (nav.length > 0) {
            nav.autoHidingNavbar();
        }
    }
})();
