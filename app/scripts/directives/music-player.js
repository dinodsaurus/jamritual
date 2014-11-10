'use strict';
/* global Audio*/
angular.module('jamritual')
  .directive('player', function (playerFac) {
    return {
      restrict: 'A',
      templateUrl: 'partials/player.html',
      scope: {},
      link: function (scope, element, attr) {
        scope.name = attr.playerName;
        scope.active = playerFac.playing;

        function proggressBar() {
          var progPercent = (100 / scope.audi.duration) * scope.audi.currentTime;
          scope.progWidth = { 'width': progPercent + '%'};
        }

        if(playerFac.player){
          scope.audi = playerFac.player;
        }else{
          scope.audi = new Audio(attr.playerSong);
          playerFac.player = scope.audi;
        }
        scope.audi.addEventListener('timeupdate', function() {
            scope.$apply(proggressBar());
        });
        if(scope.active){
          scope.audi.play();
          scope.playing = true;
        }else{
          proggressBar();
        }

      },
      controller: function($scope){
          $scope.playing = 'N';
         $scope.togglePlay = function (e) {
           e.preventDefault();
           $scope.active = !$scope.active;
           playerFac.playing = $scope.active;
           if($scope.active){
             $scope.audi.play();
             $scope.playing = 'L';
           }else{
             $scope.audi.pause();
             $scope.playing = 'N';
           }
         };
       }
    };
  });
