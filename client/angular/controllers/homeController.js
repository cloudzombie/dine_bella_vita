dineBellaVitaApp.controller('HomeController', ['$scope', function($scope){
    $scope.showme = true;

    console.log("Home Controller Loaded");
}])
.directive('myCarousel', function(){
    return {
        templateUrl: 'client/ng-templates/directives/carousel.ng.html'
    }
})
.directive('happyHour', function(){
    return {
        templateUrl: 'client/ng-templates/directives/happyhour.ng.html'
    }
});
