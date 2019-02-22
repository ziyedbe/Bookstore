'use strict';
var k
angular.module('myApp.GuessGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GuessGame', {
    templateUrl: 'GuessGame/guessgame.html',
    controller: 'GuessGameCtrl'
  });
}])

.controller('GuessGameCtrl', ['$scope','$http',function($scope,$http) {
  $.getJSON("http://localhost:3000/library/list", function(result){
    $scope.$apply(function () {
                $scope.list = result
                k=result



      });
  });
  $scope.submit = function(scope) {
    for (var i in k) {
      if($scope.name==k[i].title){
        console.log("GG")
        alert("GG : +10")
        //TODO
        break;
      }else{
        console.log("Loser")
        alert("Loser ! -5")
        //TODO
      }

   }
 }
 $scope.delete = function(item) {
   $http.delete('http://localhost:3000/library/delete/'+item._id,$scope.formData).
   success(function(data) {
       alert("deleted successfully");
   }).error(function(data) {
       alert("error in deleting");
   })

}

}]);
