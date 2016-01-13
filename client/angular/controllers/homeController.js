dineBellaVitaApp.controller('HomeController', ['$scope', function($scope){
    console.log("Home Controller Loaded");
}]).directive('myCarousel', function(){
    return {
        templateUrl: 'client/ng-templates/directives/carousel.ng.html'
    }
});
