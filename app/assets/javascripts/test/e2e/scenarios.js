'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('load index page', function() {
    expect(browser().location().url()).toBe("/");
  });
  
  describe('Posts page', function() {

    beforeEach(function() {
      browser().navigateTo('/posts');
    });


    it('title in Post section', function() {
      expect(element('.page-header h1').text()).toBe("Last posts. Write new");
    });

    it('open new post form from Post section', function() {
      element('.page-header h1 a').click();

      expect(browser().location().url()).toBe("/posts/new");
      expect(element('.panel h3').text()).toBe("New post");
    });

  });
  
});
