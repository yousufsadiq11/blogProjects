'use strict';
angular.module('discussionForum', ['ui.router','ngMaterial'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'header.html',
                        controller : 'HeaderController'
                    },
                    'content':{
                        templateUrl : 'homepage.html'

                    },

                    'footer': {
                        templateUrl : 'footer.html'
                    }
                }
            })
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'aboutus.html'
                    }
                }
            })
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'contactus.html'

                    }
                }
            })

            .state('app.login', {
                url:'login',
                views: {
                    'content@': {
                        templateUrl : 'login.html'

                    }
                }
            })

            .state('app.fullDescription', {
                url:'fullDescription/:id',
                views: {
                    'content@': {
                        templateUrl : 'fullDescription.html',
                        controller : 'FullDescriptionController'
                    }
                }
            })

            .state('app.register', {
                url:'register',
                views: {
                    'content@': {
                        templateUrl : 'register.html'

                    }
                }
            })

            .state('app.creatediscussion', {
                url:'createDiscussion',
                views: {
                    'content@': {
                        templateUrl : 'createDiscussion.html'

                    }
                }
            })


            .state('app.discussion', {
                url:'discussion',
                views: {
                    'content@': {
                        templateUrl : 'discussion.html',
                        controller: 'DiscussionController'

                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    });