'use strict';
angular.module('discussionForum')
    .constant("baseURL","http://localhost:3000/")
    .service('discussionFactory', ['$http', 'baseURL', function($http,baseURL) {
        var imagePath="images/user.jpeg";
        var discussions = [{
            _id:55,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errandslkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }, {
            _id:2,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands"
        }, {
            _id:3,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands"
        }, {
            _id:4,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands"
        }, {
            _id:5,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands"
        }];


        this.getDiscussions=function(){
            return discussions;
        };

        this.getDiscussion=function(id_value){
            var index = discussions.map(function(e) { return e._id; }).indexOf(id_value);
            return discussions[index];
        };

    }]);





