'use strict';

/* Controllers */

angular.module('app.controllers', []).
  controller('IndexController', function($scope) {
    $scope.features = [
      {id: 1, title: 'HTML&CSS', image: '/assets/courses/html_css.svg', desc: 'Learn the fundamentals of design, front-end development, and crafting user experiences that are easy on the eyes.'},
      {id: 2, title: 'JavaScript', image: '/assets/courses/javascript.svg', desc: 'Spend some time with this powerful scripting language and learn to build lightweight applications with enhanced user interfaces.'},
      {id: 3, title: 'Ruby on Rails', image: '/assets/courses/ruby.svg', desc: 'Master your Ruby skills and increase your Rails street cred by learning to build dynamic, sustainable applications for the web.'}
    ];
  }).
  controller('PagesController', function($scope, $routeParams, $templateCache, $http, $location) {
    var template = '/assets/pages/' + $routeParams.page +'.html';
    
    if ($templateCache.get(template)) {
      $scope.templateUrl = template;
    } else {
      $http({method: 'GET', url: template}).
      success(function(data, status, headers, config) {
        $templateCache.put(template, data);
        $scope.templateUrl = template;
      }).
      error(function(data, status, headers, config) {
        $location.path( "/" );
      });
    }
    
  }).
  controller('PostsListController', function($scope, Post) {
    $scope.posts = Post.query();
  }).
  controller('PostsFormController', function($scope, $routeParams, $location, Post) {
    $scope.isNew = true;
    
    if ($routeParams.id) {
      $scope.isNew = false;
    }
    
    $scope.post = $scope.isNew ? {} : Post.get({id: $routeParams.id});

    $scope.submit = function() {
      if ($scope.isNew) {
        Post.save($scope.post, function() {
          $location.path( $scope.posts_path() );
        });
      } else {
        $scope.post.$update();
      }
    }
  });