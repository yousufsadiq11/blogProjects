'use strict';
angular.module('discussionForum')
    .controller('DiscussionController', ['$scope','$http','discussionFactory','$mdDialog', function($scope,$http,discussionFactory,$mdDialog,$q) {
        var vm=$scope;
        vm.showDiscussion=function(value){
            var index = vm.discussions.map(function(e) { return e._id; }).indexOf(value);
            if(vm.discussions[index].active===true)
                vm.discussions[index].active=false;
            else
                vm.discussions[index].active=true;
            for(var i=0;i<vm.discussions.length;i++){
                if(i!=index&&vm.discussions[i].active!==true)
                    vm.discussions[i].active=false;
            }
        };

        discussionFactory.getDiscussions('http://localhost:3000/discussion').then(function mySuccess(response) {
            vm.discussions = response.data;
        }, function myError(response) {
            vm.message = "Error Found :" + response.statusText;
        });

    }])

    .controller('FullDescriptionController', ['$scope','$stateParams','discussionFactory', function($scope,$stateParams,discussionFactory,$q) {
    var vm=$scope;
        discussionFactory.getDiscussion('http://localhost:3000/discussion/'+$stateParams.id).then(function Success(response) {
            vm.clickedItem = response.data;
        }, function Error(response) {
            vm.message = "Error Found :" + response.statusText;
        });
    vm.commentFlag=false;
    vm.commentDescription="";
    vm.comment=function () {
        if(vm.commentFlag==true)
            vm.commentFlag=false;
        else
            vm.commentFlag=true;
    }
    
    vm.send=function () {
    vm.username="testUser";
    var commentData={'postedBy':vm.username,'commentDescription':vm.commentDescription};
    var jdata='mydata='+JSON.stringify(commentData);
        discussionFactory.postDiscussion('http://localhost:3000/discussion/'+$stateParams.id,jdata).then(function Success(response) {
        }, function Error(response) {
            vm.message = "Error Found :" + response.statusText;
        });
        vm.clickedItem.comments.push({'postedBy':vm.username,'commentDescription':vm.commentDescription});
    vm.commentDescription="";
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

    }])


    .controller('discussionSubmitController', ['$scope','$stateParams','$state','createDiscussionFactory', function($scope,$stateParams,$state,createDiscussionFactory,$q) {

        var vm=$scope;
        vm.createDiscussion={topic:"",description:"",createdBy:'admin'};

        vm.discussionSubmit=function () {
            //var jsonData=JSON.stringify(vm.createDiscussion);
            createDiscussionFactory.createDiscussion('http://localhost:3000/createDiscussion','mydata='+JSON.stringify(vm.createDiscussion))
                .then(function mySuccess(response) {
                    vm.createDiscussion={topic:"",description:"",createdBy:'admin'};
                    console.log('asasas');
                    $state.go('discussion', {}, {reload: true});
                    $scope.createDiscussion.$setPristine();
                    //$window.location.href = 'http://localhost:3000/';
            }, function myError(response) {
                    $state.go('discussion', {}, {reload: true});
                    $scope.createDiscussion.$setPristine();
                    //$window.location.href = 'http://localhost:3000/';
                vm.message = "Error Found :" + response.statusText;
                console.log('errrrrr'+vm.message);
            });
        }


    }]);