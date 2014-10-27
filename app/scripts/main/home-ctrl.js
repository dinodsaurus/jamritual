'use strict';

angular.module('jamritual')
  .controller('HomeCtrl', function ($scope, $timeout, Analytics) {
    Analytics.trackPage('/about/', 'About page');
    $scope.moseMoved = function (e) {
      var x = e.offsetX,
          y = e.offsetY;
      $scope.goldStyle = {
        "left": "-" + x/25 + "px",
        "top": "-" + y/25 + "px"
      };
    };
    $scope.showMenu = function () {
      $scope.menuActive = !$scope.menuActive;
    };
  });
