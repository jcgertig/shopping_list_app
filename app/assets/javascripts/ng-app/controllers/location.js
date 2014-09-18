/*jshint strict:false */
angular.module('shoppingListApp').
  controller('LocationCtrl', function ($scope, $stateParams, $log, Notice, Location, Price, Item) {
    $scope.items = [];
    $scope.locationId = 0;
    $scope.locationData = {};
    $scope.selectedItem = {id: 0, price: '$0.00', item: { id: 0, name: '' }};
    $scope.modalState = 'Add';

    $scope.addItem = function(){
      $scope.modalState = 'Add';
      $('#itemModal').modal('show');
    };

    $scope.editItem = function(item) {
      $scope.selectedItem = item;
      $scope.modalState = 'Edit';
      $('#itemModal').modal('show');
    };

    $scope.deleteItem = function(item) {
      $scope.selectedItem = item;
      $scope.modalState = 'Remove';
      $('#itemModal').modal('show');
    };

    $scope.ok = function() {
      if ($scope.modalState === 'Add') {
        if ($scope.selectedItem.item.id){
          Price.create({locationId: $scope.locationId, name: $scope.selectedItem.item.name, itemId: $scope.selectedItem.item.id, value: $scope.selectedItem.price}, $scope.apiResult);
        } else {
          Price.create({locationId: $scope.locationId, name: $scope.selectedItem.item, value: $scope.selectedItem.price}, $scope.apiResult);
        }
      } else if ($scope.modalState === 'Edit') {
        $scope.updatePrice();
      } else if ($scope.modalState === 'Remove') {
        Price.delete({locationId: $scope.locationId, id: $scope.selectedItem.id}, $scope.apiResult);
      }
      $('#itemModal').modal('hide');
    };

    $scope.cancel = function() {
      $('#itemModal').modal('hide');
    };

    $scope.updatePrice = function(){
      if ($scope.selectedItem.item.id){
        Price.update({locationId: $scope.locationId, name: $scope.selectedItem.item.name, id: $scope.selectedItem.item.id, value: $scope.selectedItem.price}, $scope.apiResult);
      } else {
        Price.update({locationId: $scope.locationId, id: $scope.selectedItem.id, name: $scope.selectedItem.item, value: $scope.selectedItem.price}, $scope.apiResult);
      }
      $scope.selectedItem = { id: 0, price: '$0.00', item: { id: 0, name: '' } };
    };

    $scope.getItems = function(val) {
      return Item.search({name: val}).$promise.then(function(res){
        return res.items;
      });
    };

    $scope.getLocationItems = function() {
      Price.getAllPrices({locationId: $scope.locationId}, function(res) {
        $scope.items = res.prices;
      });
    };

    $scope.getLocationData = function() {
      Location.get({id: $scope.locationId}, function(res) {
        $scope.locationData = res.location;
        $scope.items = res.location.prices;
      });
    };

    $scope.apiResult = function(res) {
      Notice.add(res.message);
      $scope.getLocationItems();
    };

    $scope.init = function() {
      Notice.init();
      $scope.locationId = $stateParams.id;
      $scope.getLocationData();
    };

  });
