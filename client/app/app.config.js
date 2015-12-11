(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(configuration);

    function configuration(
        $urlRouterProvider,
        $locationProvider,
        $httpProvider
    ) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('authInterceptor');
    }
})();
