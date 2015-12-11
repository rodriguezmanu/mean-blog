(function() {
    'use strict';

    angular
        .module('DemoApp.footer')
        .directive('ngFooter', function () {
            return {
                templateUrl: 'components/directives/footer/footer.html',
                restrict: 'EA',
                link: function (scope, element, attrs) {}
            };
        });
})();
