'use strict';

angular.module('DemoApp')
    .config(function($stateProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/account/login/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                }
            }
        })
        .state('signup', {
            url: '/signup',
            views: {
                'main@': {
                    templateUrl: 'app/account/signup/signup.html',
                    controller: 'SignupCtrl'
                }
            }
        })
        .state('users', {
            url: '/users',
            views: {
                'main@': {
                    templateUrl: 'app/account/users/users.html',
                    controller: 'UsersCtrl'
                }
            }
        })
        .state('password-update', {
            url: '/password-update',
            authenticate: true,
            views: {
                'main@': {
                    templateUrl: 'app/account/password-update/password-update.html',
                    controller: 'PasswordUpdateCtrl',
                    controllerAs: 'vm'
                }
            }
        });
    });
