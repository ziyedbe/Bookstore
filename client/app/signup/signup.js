'use strict';

angular.module('myApp.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl'
  });
}])

.controller('signupCtrl', ['$scope','$http',function($scope,$http) {
  $scope.submit = function() {
    
     $http.post('http://localhost:3000/library/user',$scope.formData).
     success(function(data) {
         alert("signup successfully");
     }).error(function(data) {
         alert("error in signup");
     })
 }
}]);
