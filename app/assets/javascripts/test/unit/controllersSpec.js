'use strict';

/* jasmine specs for controllers go here */

describe('App controllers', function() {
  beforeEach(module('app.controllers'));

  describe('IndexController', function() {

    it('create "features" model with 3 features', inject(function($rootScope, $controller) {
      var scope = $rootScope.$new(),
      ctrl = $controller("IndexController", {$scope: scope });

      expect(scope.features.length).toBe(3);
    }));
  });
});