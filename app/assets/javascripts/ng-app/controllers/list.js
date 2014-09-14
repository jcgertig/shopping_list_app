/*jshint strict:false */
angular.module('shoppingListApp').
  controller('ListCtrl', function ($scope, $http, Notice) {

    $scope.init = function() {
      Notice.init();
    };

  });
