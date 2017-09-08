'use strict';
angular.module('discussionForum')
    .controller('DiscussionController', ['$scope','discussionFactory','$mdDialog', function($scope,discussionFactory,$mdDialog) {
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





        vm.status = '  ';
        vm.customFullscreen = false;

        vm.showPrompt = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.prompt()
                .title('                                      create a New Discussion                      ')
                .placeholder('Description')
                .placeholder('Title')
                .targetEvent(ev)
                .ok('Post')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
                vm.status = 'You decided to name your dog ' + result + '.';
            }, function() {
                vm.status = 'You didn\'t name your dog.';
            });
        };


    }])

    .controller('FullDescriptionController', ['$scope','$stateParams','discussionFactory', function($scope,$stateParams, discussionFactory) {
    var vm=$scope;
    var clickedItem=discussionFactory.getDiscussion(parseInt($stateParams.id,10));
    vm.clickedItem=clickedItem;
    vm.commentFlag=false;
    vm.pushComment="";
    vm.discussionIndex=discussionFactory.getIndex(parseInt($stateParams.id,10));
    vm.discussions=discussionFactory.getDiscussions();
    vm.comment=function () {
        if(vm.commentFlag==true)
            vm.commentFlag=false;
        else
            vm.commentFlag=true;
    }
    
    vm.send=function () {
    vm.username="pooooooooooooojaaaaaaaaaaaaaaaaaaaaaa";
    console.log()
    vm.discussions[vm.discussionIndex].comments.push({'postedBy':vm.username,'commentDescription':vm.pushComment});
    vm.pushComment="";
    };

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