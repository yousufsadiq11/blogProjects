'use strict';
angular.module('discussionForum')
    .constant("baseURL","http://localhost:3000/")
    .service('discussionFactory', ['$http', 'baseURL', function($http,baseURL) {
        /*var imagePath="images/user.jpeg";
        var discussions = [{
            _id:55,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: 'saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            comments:[{postedBy:'asaaa',commentDescription:'lkkllllllllllllas',_id:1},{postedBy:'asaaa',commentDescription:'lkkllllllllllllas',_id:2}]
        }, {
            _id:2,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands",
            comments:[{postedBy:'bbb',commentDescription:'bbbb',_id:4},{postedBy:'bbb',commentDescription:'bbbbbbbbbbbb',_id:3}]
        }, {
            _id:3,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands",
            comments:[]
        }, {
            _id:4,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands",
            comments:[]
        }, {
            _id:5,
            active:false,
            image : imagePath,
            topic: 'Brunch this weekend?',
            createdBy: 'Min Li Chan',
            when: '3:08PM',
            description: " I'll be in your neighborhood doing errands",
            comments:[]
        }];
*/
        this.getDiscussions=function(){
            var data;
            $http({ // Accessing the Angular $http Service to send data via REST Communication to Node Server.
                method: 'GET',
            url: 'http://localhost:3000/discussion'

        }).
            then(function(response) {
                console.log("success");
                console.log(response.data);
                console.log(JSON.stringify(response.data));
                return JSON.stringify(response.data);

                /*console.log(response);
                data = response;
                console.log('pooja'+response);
                console.log('dataxgfxg'+response);*/

            });
        };

        this.getIndex=function (id_value) {
            var index = discussions.map(function(e) { return e._id; }).indexOf(id_value);
            return index;
        };

        this.getDiscussion=function(id_value){
            var temp=$http.get(baseURL+"discussion");
            var index = temp.map(function(e) { return e._id; }).indexOf(id_value);
            return discussions[index];
        };

    }]);





