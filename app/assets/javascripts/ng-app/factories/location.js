/*jshint strict:false */
angular.module('shoppingListApp').
  factory('Location', function($resource){
    return $resource('/api/location/:id.json', {
      id: '@id'
    },
    {
      create: {
        method: 'POST',
        params: {
          id: 'create'
        }
      },

      update: {
        method: 'PUT'
      },

      get: {
        method: 'GET'
      },

      delete: {
        method: 'DELETE'
      },

      getAll: {
        method: 'GET',
        params: {
          id: 'all'
        }
      },

      search: {
        method: 'GET',
        params: {
          id: 'search'
        }
      }
    });
  });
