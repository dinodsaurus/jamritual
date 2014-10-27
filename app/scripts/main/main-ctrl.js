'use strict';

angular.module('jamritual')
  .controller('MainCtrl', function ($scope, $window, cfpLoadingBar, $timeout, $location) {
    cfpLoadingBar.start();
    $scope.song = {};
    $scope.song.url = "audio/moves.mp3";
    $scope.song.name ="Moves";

    $scope.goto = function (url) {
      cfpLoadingBar.start();
      $timeout(function () {
        $location.path(url);
        document.body.scrollTop = 0;
      }, 400);
    };
    $scope.$on('imgLoaded', function() {
        cfpLoadingBar.complete();
    });
    function resize() {
      var w = $window.innerWidth;
      $scope.$broadcast('resize', w);
      $scope.$apply();
    }
    $window.onresize = resize;
  });
