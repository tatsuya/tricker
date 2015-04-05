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
  controller('TrickListCtrl', ['$scope',
    function($scope) {
      var videos = [
        {
          'video_id': '3ADpEvn0mT4',
          'title': 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
        },
        {
          'video_id': 'JfCWJOt0CzM',
          'title': '【キッカー・シフティ】グラブするより難しい、グラブするよりかっこいい！　初心者が参考にするスノーボード動画レッスン講座'
        },
        {
          'video_id': 'KQ-XQdGMrHc',
          'title': 'キッカーを使ってBsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
        },
        {
          'video_id': 'RVoP-UFewdQ',
          'title': 'How to Shifty Backside - Snowboarding Tricks'
        }
      ];

      var rows = [];
      while (videos.length) {
        rows.push(videos.splice(0, 3));
      }

      $scope.rows = rows;
    }
  ])