/*jshint strict:false */
angular.module('shoppingListApp').
  factory('List', function($resource){
    return $resource('/api/list/:id.json', {
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

      getAllLists: {
        method: 'GET',
        params: {
          id: 'all'
        }
      }
    });
  });
