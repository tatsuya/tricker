/*global angular */

'use strict';

/* Controllers */

// Minification Safe Dependency Injection in AngularJS - http://tutorials.jenkov.com/angularjs/dependency-injection.html#minification-safe-dependency-injection

angular.module('trickerApp.controllers', []).
  controller('HeaderCtrl', ['$scope',
    function($scope) {
      $scope.collapse = function() {
        $scope.isCollapsed = true;
      };
    }
  ]).
  controller('IndexCtrl', ['$scope', '$http',
    function($scope, $http) {
      $scope.video = {
        player: 'youtube',
        video_id: 'SXFQCgw-V_k',
        title: 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
      };
      $scope.world = 'world';

      $http.get('/api/tricks').
        success(function(data) {
          $scope.tricks = data;
        }).
        error(function(data, status) {
          console.log('Unable to retrieve resources, status: ' + status);
        });
    }
  ]).
  controller('VideoListCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $scope.trickName = '全て';

      var trick = $routeParams.trick;

      var tricksURL = '/api/tricks/'
      if (trick) {
        tricksURL += trick;
      }

      $http.get(tricksURL).
        success(function(data) {
          if (data.name) {
            $scope.trickName = data.name;
          }
        }).
        error(function(data, status) {
          console.log('Unable to retrieve resources, status: ' + status);
        });

      $scope.rows = [];

      var videosURL = '/api/videos/';
      if (trick) {
        videosURL += trick;
      }

      $http.get(videosURL).
        success(function(data) {
          var videos = data;
          var columns = 3;
          while (videos.length) {
            $scope.rows.push(videos.splice(0, columns));
          }
        }).
        error(function(data, status) {
          console.log('Unable to retrieve resources, status: ' + status);
        });
    }
  ]);
