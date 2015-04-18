'use strict';

angular.module('trickerApp.services', ['ngResource']).
  factory('Video', ['$resource',
    function($resource) {
      return $resource('/api/videos/:videoId');
    }
  ]).
  factory('Trick', ['$resource',
    function($resource) {
      return $resource('/api/tricks/:trickId');
    }
  ]);