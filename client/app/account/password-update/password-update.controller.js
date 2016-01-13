(function() {

    'use strict';

    angular
        .module('DemoApp')
        .controller('PasswordUpdateCtrl', PasswordUpdateCtrl);

    PasswordUpdateCtrl.$inject = ['Auth'];

    /* @ngInject */
    function PasswordUpdateCtrl(Auth) {
        var vm = this;
        vm.errors = {};

        vm.changePassword = changePassword;

        function changePassword() {
            vm.submitted = true;
            if (vm.form.$valid) {
                vm.submitted = false;
                Auth.changePassword(vm.user.oldPassword, vm.user.newPassword)
                    .then(function() {
                        vm.message = 'Password successfully changed.';
                    })
                    .catch(function() {
                        vm.form.password.$setValidity('mongoose', false);
                        vm.errors.other = 'Incorrect password';
                        vm.message = '';
                    });
            }
        }
    }
})();
