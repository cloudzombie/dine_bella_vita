angular.module('dinebellavita').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'client/ng-templates/home.ng.html'
            })
            .state('restaurant', {
                templateUrl: 'client/ng-templates/restaurant.ng.html'
            })
            .state('restaurant.restaurant', {
                url: '/restaurant',
                templateUrl: 'client/ng-templates/restaurant/restaurant.ng.html'
            })
            .state('restaurant.foodWine', {
                url: '/foodWine',
                templateUrl: 'client/ng-templates/restaurant/foodwine.ng.html'
            })
                .state('restaurant.lunch', {
                url: '/lunch',
                templateUrl: 'client/ng-templates/restaurant/foodwine/lunch.ng.html'
                })
                .state('restaurant.dinner', {
                url: '/dinner',
                templateUrl: 'client/ng-templates/restaurant/foodwine/dinner.ng.html'
                })
                .state('restaurant.catering', {
                url: '/catering',
                templateUrl: 'client/ng-templates/restaurant/foodwine/catering.ng.html'
                })
                .state('restaurant.desert', {
                    url: '/desert',
                    templateUrl: 'client/ng-templates/restaurant/foodwine/desert.ng.html'
                })
                .state('restaurant.winelist', {
                    url: '/winelist',
                    templateUrl: 'client/ng-templates/restaurant/foodwine/winelist.ng.html'
                })

            .state('restaurant.privateDining', {
                url: '/privateDining',
                templateUrl: 'client/ng-templates/restaurant/privatedining.ng.html'
            })
            .state('restaurant.events', {
                url: '/events',
                templateUrl: 'client/ng-templates/restaurant/events.ng.html'
            })
            .state('restaurant.about', {
                url: '/about',
                templateUrl: 'client/ng-templates/restaurant/about.ng.html'
            })
            .state('restaurant.giftCard', {
                url: '/giftCard',
                templateUrl: 'client/ng-templates/restaurant/giftcard.ng.html'
            })
            .state('restaurant.hoursAndLocation', {
                url: '/hoursAndLocation',
                templateUrl: 'client/ng-templates/restaurant/hoursandlocation.ng.html'
            })


            .state('restaurant.contact', {
                url: '/contact',
                templateUrl: 'client/ng-templates/restaurant/contact.ng.html'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'client/ng-templates/gallery.ng.html'
            });
    }]);



