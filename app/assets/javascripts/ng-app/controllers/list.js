/*jshint strict:false */
angular.module('shoppingListApp').
  controller('ListCtrl', function ($scope, $stateParams, $log, Notice, List, ListItem, Item) {
    $scope.items = [];
    $scope.listId = 0;
    $scope.listData = {};
    $scope.selectedItem = { id: 0, item: { name: '', id: 0 }, quantity: 1, gotten: false };
    $scope.modalState = 'Add';

    $scope.addItem = function(){
      $scope.modalState = 'Add';
      $('#itemModal').modal('show');
    };

    $scope.editItem = function(item) {
      $scope.selectedItem = item;
      $scope.selectedItem.id = item.item.id;
      $scope.modalState = 'Edit';
      $('#itemModal').modal('show');
    };

    $scope.deleteItem = function(item) {
      $scope.selectedItem = item;
      $scope.modalState = 'Remove';
      $('#itemModal').modal('show');
    };

    $scope.toggleGotten = function() {
      $scope.selectedItem.gotten = !$scope.selectedItem.gotten;
    };

    $scope.apiResult = function(res) {
      Notice.add(res.message);
      $scope.getListItems();
    };

    $scope.ok = function() {
      if ($scope.modalState === 'Add') {
        if ($scope.selectedItem.item.id){
          ListItem.create({listId: $scope.listId, name: $scope.selectedItem.item.name, itemId: $scope.selectedItem.item.id, quantity: $scope.selectedItem.quantity, gotten: false}, $scope.apiResult);
        } else {
          ListItem.create({listId: $scope.listId, name: $scope.selectedItem.item, quantity: $scope.selectedItem.quantity, gotten: false}, $scope.apiResult);
        }
      } else if ($scope.modalState === 'Edit') {
        $scope.updateListItem();
      } else if ($scope.modalState === 'Remove') {
        ListItem.delete({listId: $scope.listId, id: $scope.selectedItem.item.id}, $scope.apiResult);
      }
      $scope.selectedItem = { id: 0, item: { name: '' }, quantity: 1, gotten: false };
      $('#itemModal').modal('hide');
    };

    $scope.updateListItem = function() {
      if ($scope.selectedItem.item.id){
        ListItem.update({listId: $scope.listId, name: $scope.selectedItem.item.name, id: $scope.selectedItem.item.id, quantity: $scope.selectedItem.quantity, gotten: $scope.selectedItem.gotten}, $scope.apiResult);
      } else {
        ListItem.update({listId: $scope.listId, id: $scope.selectedItem.id, name: $scope.selectedItem.item, quantity: $scope.selectedItem.quantity, gotten: $scope.selectedItem.gotten}, $scope.apiResult);
      }
      $scope.selectedItem = { id: 0, item: { name: '' }, quantity: 1, gotten: false };
    };

    $scope.cancel = function() {
      $('#itemModal').modal('hide');
    };

    $scope.updateQuantity = function(obj, item) {
      $scope.selectedItem = item;
      $scope.selectedItem.id = item.item.id;
      $scope.selectedItem.quantity = obj.target.value;
      $scope.updateListItem();
    };

    $scope.updateGotten = function(obj, item) {
      $scope.selectedItem = item;
      $scope.selectedItem.id = item.item.id;
      $scope.selectedItem.gotten = obj.target.checked;
      $scope.updateListItem();
    };

    $scope.getItems = function(val) {
      return Item.search({name: val}).$promise.then(function(res){
        return res.items;
      });
    };

    $scope.getListItems = function() {
      ListItem.getAllItems({listId: $scope.listId}, function(res){
        $scope.items = res.items;
      });
    };

    $scope.getListData = function() {
      List.get({id: $scope.listId}, function(res) {
        $scope.listData = res.list;
        $scope.items = res.list.items;
      });
    };

    $scope.init = function() {
      Notice.init();
      $scope.listId = $stateParams.id;
      $scope.getListData();
    };

  });
