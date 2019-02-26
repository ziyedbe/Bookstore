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
     then(function onSuccess(response) {
       // Handle success
       var data = response.data;
       var status = response.status;
       var statusText = response.statusText;
       var headers = response.headers;
       var config = response.config;
       sessionStorage.clear();
       sessionStorage.setItem("user_id", data._id)
       sessionStorage.setItem("userName", data.userName)
       $(location).attr('href', '/#!/GuessGame')

     }, function onError(response) {
       // Handle error
       var data = response.data;
       var status = response.status;
       var statusText = response.statusText;
       var headers = response.headers;
       var config = response.config;
       console.log("Nop")
     });
 };
 $scope.redirect = function() {
    $(location).attr('href', '/#!/signin');


 };
}]);
