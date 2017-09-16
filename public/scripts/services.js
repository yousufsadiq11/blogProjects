'use strict';
angular.module('discussionForum')
    .constant("baseURL","http://localhost:3000/")
    .service('discussionFactory', ['$http', 'baseURL', function($http,baseURL,$q) {

        return {
            getDiscussions: function(path) {
                return $http({
                    method: "GET",
                    url: path
                })
            },
            getDiscussion: function(path) {
                return $http({
                    method: "GET",
                    url: path
                })
            },
            postDiscussion: function(path,jsonData) {
                return $http({
                    method: "POST",
                    url: path,
                    data: jsonData,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            }
        };

    }])

    .service('createDiscussionFactory', ['$http', 'baseURL', function($http,baseURL,$q) {

        return{ createDiscussion: function(path,jsonData) {
            return $http({
                method: "POST",
                url: path,
                data: jsonData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
          }
        };

    }]);


