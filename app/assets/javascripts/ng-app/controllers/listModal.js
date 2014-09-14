/*jshint strict:false */
angular.module('shoppingListApp').
  controller('ListModalCtrl', function ($scope, $modalInstance, name) {
    $scope.listName = name;

    $scope.ok = function () {
      $modalInstance.close($('#list-name').val());
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
