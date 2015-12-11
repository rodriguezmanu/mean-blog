(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    ncyBreadcrumb: {
                        label: 'Home page'
                    },
                    views: {
                        'main@': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl'
                            // controllerAs: 'vm'
                        }
                    }
                });
        });
})();
