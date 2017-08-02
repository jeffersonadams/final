// Add module here.
var app = angular.module('myApp');

// Routing goes here.
app.config(function($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'loginCtrl',
    templateUrl: 'partials/login.html'
  })
  .when('/profile', {
    controller: 'profileCtrl',
    templateUrl: 'partials/profile.html'
  })
  .otherwise({redirectTo: '/login'})
});
