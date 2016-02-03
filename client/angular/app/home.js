dineBellaVitaApp = angular.module('dinebellavita', ['angular-meteor', 'ui.router'])
.directive('happyHour', function(){
    return {
        templateUrl: 'client/ng-templates/directives/happyhour.ng.html'
    }
})
.directive('socialPopup', function(){
    return {
        templateUrl: 'client/ng-templates/directives/socialpopup.ng.html'
    }
})
.directive('mobileSlider', function(){
    return {
        templateUrl: 'client/ng-templates/directives/mobile.ng.html'
    }
});

