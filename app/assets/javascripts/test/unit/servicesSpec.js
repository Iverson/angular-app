'use strict';

var $httpBackend,
    url = {
      query: "/posts/.json",
        get: "/posts/2.json"
    },
    response = {
      query: [],
        get: {title: "Second post", description: "Many text"}
    };

/* jasmine specs for services go here */

describe('Services', function() {
  beforeEach(function() {
    module('app.services');
    module('ngResource');
  });

  describe('Post model', function() {
    beforeEach(inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.whenGET(url.query).respond(response.query);
      $httpBackend.whenGET(url.get).respond(response.get);
    }));
    
    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('factory create a model', inject(function(Post) {
      expect(Post.query).not.toBeUndefined();
    }));
    
    it('get collection from server', inject(function(Post) {
      var posts = Post.query();
      $httpBackend.flush();
      
      expect(posts).toEqual([]);
    }));
    
    it('get model from server', inject(function(Post) {
      var post = Post.get({id: 2});
      $httpBackend.flush();
      
      expect(post.title).toEqual("Second post");
      expect(post.description).toEqual("Many text");
    }));
  });
});
