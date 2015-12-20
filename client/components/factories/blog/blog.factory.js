(function() {
    'use strict';
    angular
        .module('DemoApp.blog-factory')
        .factory('BlogEntry', BlogEntry);

    function BlogEntry($resource) {
        return $resource('/api/blog/:id/', {id: '@_id'});
    }
})();
