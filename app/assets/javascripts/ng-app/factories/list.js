/*jshint strict:false */
angular.module('shoppingListApp').
  factory('List', function($resource){
    return $resource('/api/list/:id/', {
      id: '@_id'
    },
    {
      create: {
        method: 'POST',
        params: {
          id: ''
        }
      },

      update: {
        method: 'PUT'
      },

      get: {
        method: 'GET'
      },
      
      getAllLists: {
        method: 'GET',
        params: {
          id: 'all'
        },
        isArray: true
      }
    });
  });
