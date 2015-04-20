/*jshint strict:false */
angular.module('shoppingListApp').
  factory('Item', function($resource){
    return $resource('/api/item/:id.json', {
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
