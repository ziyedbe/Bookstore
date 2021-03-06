'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.getBooks',
  'myApp.addBook',
  'myApp.GuessGame',
  'myApp.leaderboard',
  'myApp.deletebook',
  'myApp.signup',
  'myApp.signin'


]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/signup'});
}]);
