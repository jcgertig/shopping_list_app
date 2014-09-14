/*jshint strict:false */

angular.module('shoppingListApp', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'templates',
    'ngResource'
  ]).
  config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    }).
    state('list', {
      url: '/list/:id',
      templateUrl: 'list.html',
      controller: 'ListCtrl'
    });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
  });
