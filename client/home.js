var dineBellaVitaApp = angular.module('dinebellavita', ['angular-meteor', 'ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
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
                    templateUrl: 'client/ng-templates/restaurant/restaurant.ng.html'
                })
                .state('restaurant.events', {
                    url: '/events',
                    templateUrl: 'client/ng-templates/restaurant/restaurant.ng.html'
                })
                .state('restaurant.about', {
                    url: '/about',
                    templateUrl: 'client/ng-templates/restaurant/restaurant.ng.html'
                })
                .state('restaurant.contact', {
                    url: '/contact',
                    templateUrl: 'client/ng-templates/restaurant/contact.ng.html'
                });
    }]);

dineBellaVitaApp.controller('HomeMainController', ['$scope', function($scope){
    console.log("Home Main Controller Loaded");
    $scope.expandMenu = function($event){
        $event.preventDefault();
        var el = $event.currentTarget;
        if ($(el).attr('class') != 'active') {
            $('#navi li ul').slideUp();
            $(el).next().slideToggle();
            $('#navi li a').removeClass('active');
            $(el).addClass('active');
        }

    }

}]);

dineBellaVitaApp.controller('RestaurantController', ['$scope', function($scope){
    console.log("Restaurant Controller Loaded");

}]);

dineBellaVitaApp.controller('FoodWineController', ['$scope', function($scope){
    console.log("Food & Wine Controller Loaded");

}]);

dineBellaVitaApp.controller('PrivateDining', ['$scope', function($scope){
    console.log("Private Dining Controller");

}]);

dineBellaVitaApp.controller('PrivateDining', ['$scope', function($scope){
    console.log("Private Dining Controller");

}]);


dineBellaVitaApp.controller('ContactController', ['$scope', function($scope){
    console.log("Contact Controller Loaded");

}]);

