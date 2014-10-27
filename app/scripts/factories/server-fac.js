'use strict';

angular.module('jamritual')
    .factory('serverFac', function ($http, $q) {
        return {
            getGalery: function () {
              var deferred = $q.defer();
                $http.get('/api/gallery')
                 .success(function(data) {
                      deferred.resolve(data)
                  })
                  .error(function(msg, code) {
                    deferred.reject(msg);
                 });
               return deferred.promise;
            },
            getPress: function () {
              var deferred = $q.defer();
                $http.get('/api/press')
                 .success(function(data) {
                      deferred.resolve(data)
                  })
                  .error(function(msg, code) {
                    deferred.reject(msg);
                 });
               return deferred.promise;
            },
            getShows: function () {
              var deferred = $q.defer();
                $http.get('/api/shows')
                 .success(function(data) {
                      deferred.resolve(data)
                  })
                  .error(function(msg, code) {
                    deferred.reject(msg);
                 });
               return deferred.promise;
            }
        };
    });
