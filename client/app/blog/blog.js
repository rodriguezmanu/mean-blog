(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('blog', {
                    url: '/blog',
                    authenticate: true,
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/blog.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('blog.new', {
                    url: '/new',
                    authenticate: true,
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/blog.new.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('blog.edit', {
                    url: '/edit/:id',
                    authenticate: true,
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/blog.edit.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
