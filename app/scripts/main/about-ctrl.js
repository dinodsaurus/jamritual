'use strict';
/* global Image */
var ModalInstanceCtrl = function ($scope, $modalInstance, images, $window) {
  $scope.curr = 0;
  $scope.images = images;
  $scope.image = false;
  var h = $window.innerHeight * 0.9,
      w = $window.innerWidth * 0.9;
  $scope.modheight = {'max-height': h + 'px', 'max-width': w + 'px' };
  $scope.arrH = {'height': $window.innerHeight + 'px'};
  $scope.marTop = {'margin-top': $window.innerHeight / 2 - 98 + 'px'};
  $scope.next = function () {
    if($scope.curr === images.length - 1){
      return;
    }
    $scope.image = false;
    var image = new Image();
    image.onload = function () {
       $scope.$apply(function () {
         $scope.image = images[$scope.curr].image;
       });
    };
    $scope.curr++;
    image.src = images[$scope.curr].image;
  };
  $scope.close = function () {
    $modalInstance.close();
  };
  $scope.prev = function () {
    if($scope.curr === 0){
      return;
    }
    $scope.curr--;
    $scope.image = images[$scope.curr].image;
  };
  $scope.image = false;
  var image = new Image();
  image.onload = function () {
     $scope.$apply(function () {
       $scope.image = images[$scope.curr].image;
     });
  };
  image.src = images[$scope.curr].image;
};
angular.module('jamritual')
  .controller('AboutCtrl', function (serverFac, $scope, $document, $window, instagramFac, $log, cfpLoadingBar, $modal  ) {
    var fac = 3.22;
    $scope.menuActive = false;
    $scope.sticky = false;
    $scope.imageHeight = $window.innerWidth / fac;
    var insta = instagramFac.getInstagram('jamritual');

    insta.get().then(function(img){
        $scope.instaImages = img.data.data;
    });
    serverFac.getGalery().then(function (data) {
      $scope.galleries = data.slice(0,7);
      for(var i=0;i<$scope.galleries.length; i++){
        if($scope.galleries[i].created_at){
          $scope.galleries[i].date = new Date($scope.galleries[i].created_at).toISOString();
        }
      }
    });
    serverFac.getPress().then(function (data) {
      $scope.press = data;
      for(var i=0;i<data.length; i++){
        $scope.press[i].date = new Date($scope.press[i].created_at).toISOString();
      }
    });

    $scope.showMenu = function () {
      $scope.menuActive = !$scope.menuActive;
    };

    $scope.$on('resize', function(event, size) {
      $scope.imageHeight = Math.ceil(size / fac);
    });

    $document.on('scroll', function() {
      var top = $document.scrollTop();
      if(top > $scope.imageHeight && !$scope.sticky){
        $scope.sticky = true;
      }else if(top < $scope.imageHeight && $scope.sticky){
        $scope.sticky = false;
      }
    });
    $scope.open = function (size, images) {
      var modalInstance = $modal.open({
        templateUrl: 'partials/modal.html',
        controller: ModalInstanceCtrl,
        size: size,
        resolve: {
          images: function () {
            return images;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      });
    };

  });
