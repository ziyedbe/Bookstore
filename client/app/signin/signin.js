
'use strict';


angular.module('myApp.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl'
  });
}])

.controller('signinCtrl', ['$scope','$http',function($scope,$http) {
  $scope.submit = function() {

    $http.post('http://localhost:3000/library/login',$scope.formData).
  then(function onSuccess(response) {
    // Handle success
    var data = response.data;
    var status = response.status;
    var statusText = response.statusText;
    var headers = response.headers;
    var config = response.config;
    console.log(data.message._id)
    sessionStorage.clear();
    sessionStorage.setItem("user_id", data.message._id)
    sessionStorage.setItem("userName", data.message.userName)

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
  }
  $scope.redirect = function() {
     $(location).attr('href', '/#!/signup');


  };
}]);
