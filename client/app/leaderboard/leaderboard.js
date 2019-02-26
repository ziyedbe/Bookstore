'use strict';

angular.module('myApp.leaderboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leaderboard', {
    templateUrl: 'leaderboard/leaderboard.html',
    controller: 'leaderboardCtrl'
  });
}])

.controller('leaderboardCtrl', ['$scope',function($scope) {
    $.getJSON("http://localhost:3000/library/user", function(result){
      $scope.$apply(function () {
                  $scope.list = result
        });
    });
}]);
