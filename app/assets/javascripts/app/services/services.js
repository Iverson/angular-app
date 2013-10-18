'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', []).
  factory("Post", function($resource, $rootScope) {
    return new Model($resource, $rootScope, 'post');
  });
