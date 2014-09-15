/*jshint strict:false */
angular.module('shoppingListApp').
  controller('LocationModalCtrl', function ($scope, $modalInstance, name, address) {
    $scope.locationName = name;
    $scope.locationAddress = address;

    $scope.ok = function () {
      var name = $('#location-name').val(),
          address = $('#location-address').val();
      $modalInstance.close({name: name, address: address});
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
