 'use strict';

angular.module('myapplicationApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-myapplicationApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-myapplicationApp-params')});
                }
                return response;
            },
        };
    });