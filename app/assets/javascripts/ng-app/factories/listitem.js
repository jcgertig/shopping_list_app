/*jshint strict:false */
angular.module('shoppingListApp').
  factory('ListItem', function($resource){
    return $resource('/api/list/:listId/item/:id.json', {
      listId: '@listId', id: '@id'
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
