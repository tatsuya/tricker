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
      Trick.query(function(data) {
        $scope.tricks = data;
      });
    }
  ]).
  controller('VideoListCtrl', ['$scope', '$routeParams', 'Video', 'Trick',
    function($scope, $routeParams, Video, Trick) {
      $scope.trickName = '全て';
      $scope.rows = [];

      $scope.prev;
      $scope.next;

      function get(page) {
        $scope.rows = [];
        Video.query({
          videoId: $routeParams.trick,
          page: page
        }, function(data, headers) {
          var videos = data;

          var links = li.parse(headers('Link'));

          $scope.prev = links.prev;
          $scope.next = links.next;

          var columns = 3;
          while (videos.length) {
            $scope.rows.push(videos.splice(0, columns));
          }

          Trick.get({
            trickId: $routeParams.trick
          }, function(data, headers) {
            var trick = data;
            $scope.trickName = trick.name;
          });
        });
      }

      get(0);

      $scope.retrieveVideos = function(val) {
        var page = val.split('/videos?page=')[1];
        page = parseInt(page);
        get(page);
      };
    }
  ]);
