(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('SignupCtrl', SignupCtrl);

    /* @ngInject */
    SignupCtrl.$inject = ['Auth', '$location'];

    function SignupCtrl(Auth, $location) {
        var vm = this;

        vm.user = {};
        vm.errors = {};
        vm.register = register;

        function register() {
            vm.submitted = true;
            if (vm.form.$valid) {
                Auth.createUser({
                    name: vm.user.name,
                    email: vm.user.email,
                    password: vm.user.password
                })
                .then(function() {
                    // Account created, redirect to home
                    $location.path('/');
                })
                .catch(function(err) {
                    err = err.data;
                    vm.errors = {};

                    angular.forEach(err.errors, function(error, field) {
                        vm.form[field].$setValidity('mongoose', false);
                        vm.errors[field] = error.message;
                    });
                });
            }
        }
    }
})();
