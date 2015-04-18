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
  controller('IndexCtrl', ['$scope', 'Trick',
    function($scope, Trick) {
      $scope.video = {
        player: 'youtube',
        video_id: 'SXFQCgw-V_k',
        title: 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
      };
      $scope.world = 'world';

      Trick.query(function(data) {
        $scope.tricks = data;
      });
    }
  ]).
  controller('VideoListCtrl', ['$scope', '$routeParams', 'Video', 'Trick',
    function($scope, $routeParams, Video, Trick) {
      $scope.trickName = '全て';
      $scope.rows = [];

      Trick.get({ trickId: $routeParams.trick }, function(data) {
        if (data.name) {
          $scope.trickName = data.name;
        }
      });

      Video.query({ videoId: $routeParams.trick }, function(data, headers) {
        var videos = data;
        var links = headers('Link');

        console.log(links);

        var columns = 3;
        while (videos.length) {
          $scope.rows.push(videos.splice(0, columns));
        }
      });

      $scope.prev = function() {
        console.log($scope.links.prev);
      };

      $scope.next = function() {
        console.log($scope.links.next);
      };
    }
  ]);
