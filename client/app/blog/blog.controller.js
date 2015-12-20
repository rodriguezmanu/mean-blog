(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['BlogEntry'];

    /* @ngInject */
    function BlogCtrl(BlogEntry) {
        var vm = this,
            blog = {};
    }
})();
