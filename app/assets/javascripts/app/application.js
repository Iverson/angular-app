'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.directives'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'IndexController',
        templateUrl: '/assets/index/index.html'
      })
    .when('/posts',
      {
        controller: 'PostsListController',
        templateUrl: '/assets/posts/index.html'
      })
    .when('/:page',
      {
        controller: 'PagesController',
        template: '<div ng-include="templateUrl">Loading...</div>',
      })
    .otherwise({redirectTo: '/'});
});