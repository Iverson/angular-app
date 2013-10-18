var Model = function($resource, $rootScope, name) {
  var model = $resource( "/" + name + "s/:id.json", {id: "@id"}, 
  {
    update: {method: "PUT"}
  });
  
  this.generateRoutesHelpers(name, $rootScope);
  
  return model;
}

Model.prototype = {
  generateRoutesHelpers: function(name, $rootScope)
  {
    $rootScope[name + 's_path'] = function() {
      return '/' + name + 's';
    };
    
    $rootScope[name + '_path'] = function(obj) {
      var id = (typeof obj === 'object') ? obj.id : obj;
      
      return '/' + name + 's/' + id;
    };
    
    $rootScope['new_' + name+  '_path'] = function() {
      return '/' + name + 's/new';
    };
    
    $rootScope['edit_' + name+  '_path'] = function(obj) {
      var id = (typeof obj === 'object') ? obj.id : obj;
      
      return '/' + name + 's/' + id + '/edit';
    };
  }
}