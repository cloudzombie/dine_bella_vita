dineBellaVitaApp.controller('HomeMainController', ['$scope', function($scope){
    console.log("Home Main Controller Loaded");
    mixpanel.track("Landed on Home.");
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
    $scope.happy_hour = {};
    $scope.happy_hour.class = "restaurant";
    $scope.showme = true;

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




