'use strict';

angular.module('myApp.deletebook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/deletebook', {
    templateUrl: 'deletebook/deletebook.html',
    controller: 'deletebookCtrl'
  });
}])

.controller('deletebookCtrl', ['$scope','$http',function($scope,$http) {
  $scope.submit = function(scope) {
    $http.delete('http://localhost:3000/library/delete/'+$scope.name,$scope.formData).
    success(function(data) {
        alert("deleted successfully");
    }).error(function(data) {
        alert("error in deleting");
    })
 }
}]);
