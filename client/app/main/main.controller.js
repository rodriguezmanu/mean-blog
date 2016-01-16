(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['BlogEntry', '$stateParams'];

    /* @ngInject */
    function MainCtrl(BlogEntry, $stateParams) {
        var vm = this;

        vm.getPost = getPost;
        vm.getPosts = getPosts();

        function getPosts() {
            vm.posts = BlogEntry.query();
        }

        function getPost() {
            return BlogEntry.get({id: $stateParams.id});
        }
    }
})();
