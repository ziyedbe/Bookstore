'use strict';
var k
var ran;
var ran1;
var ran2;

var user_id;
var userName;


angular.module('myApp.GuessGame', ['ngRoute'])




.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GuessGame', {
    templateUrl: 'GuessGame/guessgame.html',
    controller: 'GuessGameCtrl'
  });
}])

.controller('GuessGameCtrl', ['$scope','$http',function($scope,$http) {
  var user_id = sessionStorage.getItem("user_id");
  var userName = sessionStorage.getItem("userName");

  $scope.userName=userName;

  $.getJSON("http://localhost:3000/library/movie", function(result){
    $scope.$apply(function () {

                //$scope.list = result
              //  console.log(result)
                k=result
                ran = Math.floor((Math.random() * k.length));
                //console.log(ran)
                ran1 = Math.floor((Math.random() * k.length));
                
                //console.log(ran1)
                ran2 = Math.floor((Math.random() * k.length));
                //console.log(ran2)
                //$scope.synopsis= "test"
                $scope.synopsis=k[ran].Synopsis;
                var booklist= [ran,ran1,ran2];
                shuffleArray(booklist);
                $scope.book1=k[booklist[0]].title;
                $scope.book2=k[booklist[1]].title;
                $scope.book3=k[booklist[2]].title;

                //consolelog($scope.checkbox )
                //console.log($scope.synopsis)


      });
  });
  $scope.submit = function(scope) {

      if($scope.name==k[ran].title){
        console.log("GG")
        //alert("GG : +10")
        //TODO


        console.log(user_id);
        $http.put('http://localhost:3000/library/user/'+user_id, {"Score":"50"} ).
        then(function onSuccess(response) {
          // Handle success
          var data = response.data;
          var status = response.status;
          var statusText = response.statusText;
          var headers = response.headers;
          var config = response.config;

        }, function onError(response) {
          // Handle error
          var data = response.data;
          var status = response.status;
          var statusText = response.statusText;
          var headers = response.headers;
          var config = response.config;
          console.log("Nop")
        });




    }else{
        console.log("Loser")
        //alert("Loser ! -5")
        //TODO
        $http.put('http://localhost:3000/library/user/5c744544b3f44e2d6f549b69', {"Score":"-20"} ).
        then(function onSuccess(response) {
          // Handle success
          var data = response.data;
          var status = response.status;
          var statusText = response.statusText;
          var headers = response.headers;
          var config = response.config;

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

      //$(location).attr('href', '/#!/GuessGame');
 }
 $scope.delete = function(item) {
   $http.delete('http://localhost:3000/library/delete/'+item._id,$scope.formData).
   then(function onSuccess(response) {
     // Handle success
     var data = response.data;
     var status = response.status;
     var statusText = response.statusText;
     var headers = response.headers;
     var config = response.config;

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

}]);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
