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

    User.findOne({
      userName: req.body.userName
    }, '+password', function(err, user) {
      if (!user) {
        return res.status(401).send({
          message: 'Wrong username and/or password'
        });
      }
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (!isMatch) {
          return res.status(401).send({
            message: 'Wrong username and/or password'
          });
        }
        if (req.body.signedMeIn === true) {

          return res.status(200).send({
          //  token: createLongTimeToken(user)
          });
        } else {
          return res.status(200).send({
          //  token: createToken(user)
          });
        }

      });
    });
  }
}]);
