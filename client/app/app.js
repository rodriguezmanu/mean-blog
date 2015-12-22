(function() {
    'use strict';

    angular
        .module('DemoApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'btford.socket-io',
            'ui.router',
            'ui.bootstrap',
            'DemoApp.footer',
            'DemoApp.header',
            'DemoApp.blog-factory',
            'textAngular'
        ]);
})();
