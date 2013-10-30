'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('app.directives'));
  
  describe('activeLink', function() {
    var scope,
        elem,
        html;

    beforeEach(function (){
      html = '<li active-link="active"><a href="#/posts">Blog</a></li>';

      inject(function($compile, $rootScope) {
        scope = $rootScope.$new();

        elem = angular.element(html);

        $compile(elem)(scope);
      });
    });

    it('set "active" class if visited current route', function() {
      inject(function($compile, $rootScope, $location) {
        $location.path( "/posts" );
        scope.$digest();
        
        expect(elem.hasClass('active')).toBe(true);
        
        $location.path( "/" );
        scope.$digest();
        
        expect(elem.hasClass('active')).not.toBe(true);
      });
    });
  });

});
