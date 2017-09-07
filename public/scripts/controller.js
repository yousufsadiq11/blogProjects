'use strict';
angular.module('discussionForum')
    .controller('DiscussionController', ['$scope','discussionFactory', function($scope,discussionFactory) {
        var vm=$scope;
        vm.showDiscussion=function(value){
            /*var result = $filter('filter')(vm.discussions, {id:value});
            var blog_number=result[0].active;
            console.log(blog_number);*/
            var index = vm.discussions.map(function(e) { return e._id; }).indexOf(value);
            if(vm.discussions[index].active==true)
                vm.discussions[index].active=false;
            else
                vm.discussions[index].active=true;
            for(var i=0;i<vm.discussions.length;i++){
                if(i!=index&&vm.discussions[i].active!=true)
                    vm.discussions[i].active=false;
            }
        };
        vm.discussions= {};
        vm.discussions=discussionFactory.getDiscussions();
    }])

    .controller('FullDescriptionController', ['$scope','$stateParams','discussionFactory', function($scope,$stateParams, discussionFactory) {
    var vm=$scope;
    var clickedItem=discussionFactory.getDiscussion(parseInt($stateParams.id,10));
    vm.clickedItem=clickedItem;
    vm.commentFlag=false;
    vm.comment=function () {
        if(vm.commentFlag==true)
            vm.commentFlag=false;
        else
            vm.commentFlag=true;
    }
    }])

    .controller('HeaderController', ['$scope','$stateParams','discussionFactory', function($scope,$stateParams, discussionFactory) {
    var vm=$scope;

    vm.home="active";
    vm.about="inactive";
    vm.discussion="inactive";
    vm.login="inactive";

    vm.highlightHome=function (value) {
        if(value==1){
            vm.home="active";
            vm.about="inactive";
            vm.discussion="inactive";
            vm.login="inactive";
        }
        if(value==2){
            vm.home="inactive";
            vm.about="active";
            vm.discussion="inactive";
            vm.login="inactive";
        }
        if(value==3){
            vm.home="inactive";
            vm.about="inactive";
            vm.discussion="active";
            vm.login="inactive";
        }
        if(value==5){
            vm.home="inactive";
            vm.about="inactive";
            vm.discussion="inactive";
            vm.login="active";
        }
    };

    }]);