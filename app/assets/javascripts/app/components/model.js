var Model = function($resource, $rootScope, resourcePath, name) {
  var model = $resource( resourcePath + "s/:id.json", {id: "@id"}, 
  {
    update: {method: "PUT"}
  });
  
  var prefix = '/';

  this.generateRoutesHelpers(name, prefix, $rootScope);
  
  return model;
}

Model.prototype = {
  generateRoutesHelpers: function(name, prefix, $rootScope)
  {  
    $rootScope[name + 's_path'] = function() {
      return prefix + name + 's';
    };
    
    $rootScope[name + '_path'] = function(obj) {
      var id = (typeof obj === 'object') ? obj.id : obj;
      
      return prefix + name + 's/' + id;
    };
    
    $rootScope['new_' + name+  '_path'] = function() {
      return prefix + name + 's/new';
    };
    
    $rootScope['edit_' + name+  '_path'] = function(obj) {
      var id = (typeof obj === 'object') ? obj.id : obj;
      
      return prefix + name + 's/' + id + '/edit';
    };
  }
}