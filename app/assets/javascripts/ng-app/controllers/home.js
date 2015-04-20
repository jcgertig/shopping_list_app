/*jshint strict:false */
angular.module('shoppingListApp').
  controller('HomeCtrl', function ($scope, $modal, $log, Notice, List, Location) {
    $scope.lists = [];
    $scope.locations = [];

    $scope.deleteList = function(id) {
      var modalInstance = $modal.open({
        templateUrl: 'deleteListModal.html',
        controller: 'ListModalCtrl',
        resolve: {
          name: function () {
            return '';
          }
        }
      });

      modalInstance.result.then(function () {
        List.delete({id: id}, function(res){
          $scope.getAllLists();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.editList = function(id, name) {
      var modalInstance = $modal.open({
        templateUrl: 'editListModal.html',
        controller: 'ListModalCtrl',
        resolve: {
          name: function () {
            return name;
          }
        }
      });

      modalInstance.result.then(function (name) {
        List.update({id: id, name: name}, function(res){
          $scope.getAllLists();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.createList = function() {
      var modalInstance = $modal.open({
        templateUrl: 'createListModal.html',
        controller: 'ListModalCtrl',
        resolve: {
          name: function () {
            return '';
          }
        }
      });

      modalInstance.result.then(function (name) {
        List.create({name: name}, function(res){
          $scope.getAllLists();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.getAllLists = function() {
      List.getAll(function(res) {
        $scope.lists = res.lists;
      });
    };

    $scope.deleteLocation = function(id) {
      var modalInstance = $modal.open({
        templateUrl: 'deleteLocationModal.html',
        controller: 'LocationModalCtrl',
        resolve: {
          name: function () {
            return '';
          },
          address: function () {
            return '';
          }
        }
      });

      modalInstance.result.then(function () {
        Location.delete({id: id}, function(res){
          $scope.getAllLocations();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.editLocation = function(id, name, address) {
      var modalInstance = $modal.open({
        templateUrl: 'editLocationModal.html',
        controller: 'LocationModalCtrl',
        resolve: {
          name: function () {
            return name;
          },
          address: function () {
            return address;
          }
        }
      });

      modalInstance.result.then(function (name) {
        Location.update({id: id, name: name}, function(res){
          $scope.getAllLocations();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.createLocation = function() {
      var modalInstance = $modal.open({
        templateUrl: 'createLocationModal.html',
        controller: 'LocationModalCtrl',
        resolve: {
          name: function () {
            return '';
          },
          address: function () {
            return '';
          }
        }
      });

      modalInstance.result.then(function (res) {
        Location.create({name: res.name, address: res.address}, function(res){
          $scope.getAllLocations();
          Notice.add(res.message);
        });
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.getAllLocations = function() {
      Location.getAll(function(res) {
        $scope.locations = res.locations;
      });
    };

    $scope.init = function() {
      Notice.init();
      $scope.getAllLists();
      $scope.getAllLocations();
    };

  });
