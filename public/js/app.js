/*global angular */

'use strict';

angular.module('trickerApp', [
  // Angular provided modules
  'ngRoute',

  // Third party modules
  'youtube-embed',

  // My modules
  'trickerApp.controllers'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/tricks', {
      templateUrl: 'partials/tricks',
      controller: 'TrickListCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});
