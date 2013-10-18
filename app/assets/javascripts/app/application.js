'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
  'ngResource',
  'ngRoute',
  'app.controllers',
  'app.directives',
  'app.services'
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
    .when('/posts/new',
      {
        controller: 'PostsFormController',
        templateUrl: '/assets/posts/form.html'
      })
    .when('/posts/:id/edit',
      {
        controller: 'PostsFormController',
        templateUrl: '/assets/posts/form.html'
      })
    .when('/:page',
      {
        controller: 'PagesController',
        template: '<div ng-include="templateUrl">Loading...</div>',
      })
    .otherwise({redirectTo: '/'});
});

app.config(["$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);