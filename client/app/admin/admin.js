'use strict';

angular
    .module('DemoApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                views: {
                    'main@': {
                        templateUrl: 'app/admin/admin.html',
                        controller: 'AdminCtrl'
                    }
                }
            });
    });
