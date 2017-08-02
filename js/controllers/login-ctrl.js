// Add module and controller here.
var app = angular.module('myApp');

app.controller('loginCtrl', function($scope, $location, p){
  $scope.checkLogin = function(userObj) {
    loginService.checkLogin(userObj);
    $location.path('/profile');
  };
})
