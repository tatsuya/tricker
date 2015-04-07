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
  controller('IndexCtrl', ['$scope',
    function($scope) {
      $scope.video = {
        player: 'youtube',
        video_id: 'SXFQCgw-V_k',
        title: 'キッカーを使ってFsシフティ IKENOCITY PARK ACADEMY　スノーボードHow to'
      };
      $scope.world = 'world';

      var trickList = [
        {
          type: 'category',
          name: 'ストレートジャンプ',
          tricks: [
            {
              type: 'item',
              name: 'ollie',
              name_ja: 'オーリー'
            },
            {
              type: 'item',
              name: 'nollie',
              name_ja: 'ノーリー'
            },
            {
              type: 'item',
              name: 'shifty',
              name_ja: 'シフティ'
            }
          ]
        },
        {
          type: 'category',
          name: 'キッカー',
          tricks: [
            {
              type: 'item',
              name: 'frontside-triple-cork-1440',
              name_ja: 'フロントサイドトリプルコーク1440'
            },
            {
              type: 'item',
              name: 'backside-triple-cork-1440',
              name_ja: 'バックサイドトリプルコーク1440'
            }
          ]
        }
      ];

      $scope.rows = trickList;
    }
  ]).
  controller('VideoListCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $scope.rows = [];

      $http.get('/api/tricks/' + $routeParams.trick).
        success(function(data) {
          $scope.trickName = data.name;
        }).
        error(function(data, status) {
          console.log('Unable to retrieve resources, status: ' + status);
        });

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
