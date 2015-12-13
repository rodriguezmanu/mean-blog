(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('blog', {
                    url: '/blog',
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/blog.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
