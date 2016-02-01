dineBellaVitaApp.controller('HomeController', ['$scope', function($scope){
    $scope.showme = true;
    $scope.socialpop = {};
    $scope.socialpop.showme = true;

    $scope.isMobile = true;

    console.log("Home Controller Loaded");
}])
.directive('myCarousel', function(){
    return {
        templateUrl: 'client/ng-templates/directives/carousel.ng.html'
    }
})
;
