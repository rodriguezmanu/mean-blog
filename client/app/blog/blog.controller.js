(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['BlogEntry', '$state'];

    /* @ngInject */
    function BlogCtrl(BlogEntry, $state) {
        var vm = this;

        vm.posts = BlogEntry.query();
        vm.deletePost = deletePost;
        vm.addNewPost = addNewPost;

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
