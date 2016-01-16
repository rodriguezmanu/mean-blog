(function() {
'use strict';

angular
    .module('DemoApp')
    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['BlogEntry'];

    /* @ngInject */
    function MainCtrl(BlogEntry) {
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
