(function() {

    'use strict';

    angular
        .module('DemoApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['Auth', '$location', '$window'];

    /* @ngInject */
    function LoginCtrl(Auth, $location, $window) {
        var vm = this;

        vm.user = {};
        vm.errors = {};
        vm.login = login;

        function login() {
            vm.submitted = true;
            if (vm.form.$valid) {
                Auth.login({
                    email: vm.user.email,
                    password: vm.user.password
                })
                .then(function() {
                    // Logged in, redirect to home
                    $location.path('/');
                })
                .catch(function(err) {
                    vm.errors.other = err.message;
                });
            }
        }
    }
})();
