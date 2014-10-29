'use strict';

angular.module('jamritual')
  .controller('ShowsCtrl', function ($scope, cfpLoadingBar,$window, $document, serverFac) {
    var fac = 3.14;
    $scope.sticky = false;

    $scope.imageHeight = $window.innerWidth / fac;
    $scope.$on('resize', function(event, size) {
      $scope.imageHeight = Math.ceil(size / fac);
    });
    serverFac.getShows().then(function (data) {
      $scope.shows = data;
      console.log(data);
      for(var i=0;i<data.length; i++){
        var date = $scope.shows[i].date.split("-");
        var month = parseInt(date[1], 10) - 1;
        $scope.shows[i].newDate = new Date(date[0], month, date[2]);
      }
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
