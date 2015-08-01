'use strict';

angular.module('myapplicationApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


