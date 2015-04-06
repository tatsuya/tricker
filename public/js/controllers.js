/*global angular */

'use strict';

/* Controllers */

// Minification Safe Dependency Injection in AngularJS - http://tutorials.jenkov.com/angularjs/dependency-injection.html#minification-safe-dependency-injection

angular.module('trickerApp.controllers', []).
  controller('IndexCtrl', ['$scope',
    function($scope) {
      $scope.world = 'world';
    }
  ]).
  controller('VideoListCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $scope.rows = [];

      $http.get('/api/videos/' + $routeParams.trick).
        success(function(data) {
          var videos = data;
          while (videos.length) {
            $scope.rows.push(videos.splice(0, 3));
          }
        }).
        error(function(data, status) {
          console.log('Unable to retrieve resources, status: ' + status);
        });
    }
  ]);