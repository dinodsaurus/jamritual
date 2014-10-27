'use strict';

angular.module('jamritual')
  .directive('imgload', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        var imgLoad = attr.imgload;
        var image = new Image();
        image.onload = function () {
           scope.$emit('imgLoaded');
           scope.$apply(function () {
             scope.headImg = "url('images/" + imgLoad + "')";
           });
        };
        image.onerror = function () {
            scope.$emit('imgLoaded');
        };
        image.src = "images/" + imgLoad;
      },
      controller: function () {

      }
    };
  });
