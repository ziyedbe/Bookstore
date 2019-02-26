'use strict';
var k
var ran;
var ran1;
var ran2;
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
                //$scope.list = result
                console.log(result)
                k=result
                ran = Math.floor((Math.random() * k.length));
                //console.log(ran)
                ran1 = Math.floor((Math.random() * k.length));
                //console.log(ran1)
                ran2 = Math.floor((Math.random() * k.length));
                //console.log(ran2)
                //$scope.synopsis= "test"
                $scope.synopsis=k[ran].author;
                var booklist= [ran,ran1,ran2];
                shuffleArray(booklist);
                $scope.book1=k[booklist[0]].author;
                $scope.book2=k[booklist[1]].author;
                $scope.book3=k[booklist[2]].author;

                //consolelog($scope.checkbox )
                //console.log($scope.synopsis)


      });
  });
  $scope.submit = function(scope) {

      if($scope.name==k[ran].author){
        console.log("GG")
        //alert("GG : +10")
        //TODO

        $http.put('http://localhost:3000/library/user/5c744544b3f44e2d6f549b69', {"Score":"50"} ).
        success(function(data) {
            alert("Score updated");
        }).error(function(data) {
            alert("Score not updated");
        })




    }else{
        console.log("Loser")
        //alert("Loser ! -5")
        //TODO
        $http.put('http://localhost:3000/library/user/5c744544b3f44e2d6f549b69', {"Score":"-20"} ).
        success(function(data) {
            alert("Score updated");
        }).error(function(data) {
            alert("Score not updated");
        })
      }
      res.redirect("/id/" + req.body.id);

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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
