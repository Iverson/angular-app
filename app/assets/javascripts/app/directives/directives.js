'use strict';

/* Directives */

angular.module('app.directives', []).
  directive('imgHolder', function() {
    return function(scope, elm, attrs) {
      Holder.run({images: '.js-imgHolder'});
    };
  }).
  directive('pageRender', function() {
    return function(scope, elm, attrs) {
      Holder.run();
    };
  }).
  directive('activeLink', ['$location', function(location) {
    return function(scope, elm, attrs) {
      var clazz = attrs.activeLink;
      var link = elm.find('a')[0];
      var path = link.hash;
      path = path.substring(1); //hack because path does bot return including hashbang
      scope.location = location;
      
      scope.$watch('location.path()', function(newPath) {
        elm.attr('route', newPath);
        if (path === newPath) {
          elm.addClass(clazz);
        } else {
          elm.removeClass(clazz);
        }
      });
    };
  }]).
  directive('chat', function() {
    return function(scope, elm, attrs) {
      if (window.chatController) {
        window.chatController.resume();
      } else {
        window.chatController = new Chat.Controller(elm.data('uri'), true);
      }
      
      scope.$on('$routeChangeStart', function(next, current) {
        chatController.closeConnection();
      });
    };
  });
