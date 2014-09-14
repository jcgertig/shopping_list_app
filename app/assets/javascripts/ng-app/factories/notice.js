/*jshint strict:false */
angular.module('shoppingListApp').
  factory('Notice', function(){
    var service = {};

    service.init = function(delay, styling){
      PNotify.prototype.options.delay = delay || 1500;
      PNotify.prototype.options.styling = styling || 'fontawesome';
    };

    service.add = function(message, title, type) {
      new PNotify({
          title: title || 'Notice',
          text: message,
          type: type || '',
          animation: 'show'
      });
    };

    return service;
  });
