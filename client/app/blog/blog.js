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
                })
                .state('blog.new', {
                    url: '/new',
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/blog.new.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('blog.edit', {
                    url: '/edit',
                    views: {
                        'main@': {
                            templateUrl: 'app/blog/views/blog.edit.html',
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
