/*jshint strict:false */
angular.module('shoppingListApp').
  controller('HomeCtrl', function ($scope, $http, Notice) {

    $scope.init = function() {
      Notice.init();
    };

  });
