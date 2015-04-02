/*global angular */

'use strict';

angular.module('trickerApp', [
  'ngRoute',
  'trickerApp.controllers'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});
