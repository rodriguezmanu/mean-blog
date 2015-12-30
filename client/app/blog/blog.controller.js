(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['BlogEntry', '$state', '$stateParams'];

    /* @ngInject */
    function BlogCtrl(BlogEntry, $state, $stateParams) {
        var vm = this;

        vm.deletePost = deletePost;
        vm.addNewPost = addNewPost;
        vm.editPost = editPost;
        vm.getPost = getPost;
        vm.getPosts = getPosts();

        if ($stateParams.id) {
            vm.post = getPost();
        }

        function editPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                BlogEntry.update({id: vm.post._id}, vm.post, function() {
                    $state.go('blog');
                });
            }
        }

        function getPosts() {
            vm.posts = BlogEntry.query();
        }

        function getPost() {
            return BlogEntry.get({id: $stateParams.id});
        }

        function deletePost(post) {
            BlogEntry.remove({id: post._id}, function() {
                $state.reload();
            });
        }

        function addNewPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                BlogEntry.save(vm.post, function() {
                    $state.go('blog');
                });
            }
        }
    }
})();
