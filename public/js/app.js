/*global angular */

'use strict';

angular.module('trickerApp', [
  // Angular provided modules
  'ngRoute',

  // Third party modules
  'youtube-embed',
  'vimeoEmbed',

  // My modules
  'trickerApp.controllers'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/videos', {
      templateUrl: 'partials/videos',
      controller: 'VideoListCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});
