'use strict';

angular.module('c', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'header.html'
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

            .state('app.register', {
                url:'register',
                views: {
                    'content@': {
                        templateUrl : 'register.html'

                    }
                }
            });


        // route for the menu page
            /*.state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/detail.html',
                        controller  : 'DishDetailController'
                    }
                }
            });*/
        $urlRouterProvider.otherwise('/');
    });


