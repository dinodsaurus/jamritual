'use strict';

angular.module('jamritual')
  .controller('ContactCtrl', function ($scope, cfpLoadingBar,$window, $document) {
    var fac = 3.14;
    $scope.sticky = false;

    $scope.imageHeight = $window.innerWidth / fac;
    $scope.$on('resize', function(event, size) {
      $scope.imageHeight = Math.ceil(size / fac);
    });
    $scope.showMenu = function () {
      $scope.menuActive = !$scope.menuActive;
    };
    $document.on('scroll', function() {
      var top = $document.scrollTop();
      if(top > $scope.imageHeight && !$scope.sticky){
        $scope.$apply(function () {
          $scope.sticky = true;
        });
      }else if(top < $scope.imageHeight && $scope.sticky){
        $scope.$apply(function () {
          $scope.sticky = false;
        });
      }
    });
  });
