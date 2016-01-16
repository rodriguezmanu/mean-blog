(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
