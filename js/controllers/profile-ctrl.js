// Add module and controller here.
var app = angular.module('myApp');

app.controller('profileCtrl', function ($scope, p){
  $scope.login = loginService.getProfile();
})
