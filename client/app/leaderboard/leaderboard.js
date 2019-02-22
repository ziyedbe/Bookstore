'use strict';

angular.module('myApp.leaderboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leaderboard', {
    templateUrl: 'leaderboard/leaderboard.html',
    controller: 'leaderboardCtrl'
  });
}])

.controller('getBooksCtrl', ['$scope',function($scope) {
    $.getJSON("http://localhost:3000/library/list", function(result){
      $scope.$apply(function () {
                  $scope.list = result
        });
    });
}]);
