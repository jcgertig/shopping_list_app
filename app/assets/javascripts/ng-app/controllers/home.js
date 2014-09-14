/*jshint strict:false */
angular.module('shoppingListApp').
  controller('HomeCtrl', function ($scope, $http, $modal, $log, Notice, List) {
    $scope.lists = [];

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
      List.getAllLists(function(res) {
        $scope.lists = res.lists;
      });
    };

    $scope.init = function() {
      Notice.init();
      $scope.getAllLists();
    };

  });
