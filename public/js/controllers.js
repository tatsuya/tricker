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
  controller('VideoListCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      var videos = {
        'shifty': [
          {
            'player': 'youtube',
            'video_id': '3ADpEvn0mT4',
            'title': 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
          },
          {
            'player': 'youtube',
            'video_id': 'JfCWJOt0CzM',
            'title': '【キッカー・シフティ】グラブするより難しい、グラブするよりかっこいい！　初心者が参考にするスノーボード動画レッスン講座'
          },
          {
            'player': 'youtube',
            'video_id': 'KQ-XQdGMrHc',
            'title': 'キッカーを使ってBsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
          },
          {
            'player': 'youtube',
            'video_id': 'RVoP-UFewdQ',
            'title': 'How to Shifty Backside - Snowboarding Tricks'
          }
        ],
        'backside-triple-cork-1440': [
          {
            'player': 'vimeo',
            'video_id': '20737088',
            'title': 'Mark McMorris Backside Triple Cork 1440 - TransWorld SNOWboarding'
          }
        ]
      }

      var trick = $routeParams.trick;

      var videosToShow = videos[trick];

      var rows = [];
      while (videosToShow.length) {
        rows.push(videosToShow.splice(0, 3));
      }

      $scope.rows = rows;
    }
  ]);