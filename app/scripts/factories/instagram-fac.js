'use strict';

angular.module('jamritual')
    .factory('instagramFac', function ($http) {
        var getInstagram = function(tag){
            return {
                'get': function() {
                    var base = 'https://api.instagram.com/v1';
                    var request = '/tags/' + tag + '/media/recent';
                    var clientId = '036e1503210046a59931ed2cbcf2924d';

                    var url = base + request;
                    var config = {
                        'params': {
                            'client_id': clientId,
                            'count': 15,
                            'callback': 'JSON_CALLBACK'
                        }
                    };
                    return $http.jsonp(url, config);
                }
            };
        };
        return {
            getInstagram: getInstagram
        };
    });
