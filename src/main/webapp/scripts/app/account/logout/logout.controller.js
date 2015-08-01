'use strict';

angular.module('myapplicationApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
