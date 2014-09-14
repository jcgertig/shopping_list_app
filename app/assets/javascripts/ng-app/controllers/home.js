/*jshint strict:false */
angular.module('shoppingListApp').
  controller('HomeCtrl', function ($scope, $http, Notice, List) {
    $scope.lists = [];

    $scope.init = function() {
      Notice.init();
      $scope.lists = List.getAllLists();
    };

  });
