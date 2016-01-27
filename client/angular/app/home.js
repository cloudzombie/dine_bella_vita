dineBellaVitaApp = angular.module('dinebellavita', ['angular-meteor', 'ui.router'])
    .directive('happyHour', function(){
        return {
            templateUrl: 'client/ng-templates/directives/happyhour.ng.html'
        }
    });

