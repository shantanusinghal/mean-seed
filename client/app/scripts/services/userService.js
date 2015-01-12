/**
 * Created by ssinghal on 12/1/15.
 */
'use strict';

meanStackApp.factory('UserService', function ($http) {
    var userService = {};

    userService.getDefaultUser = function (successCallback, errorCallback) {
        $http.get("/demo/user/00")
            .success(function (data) {
                if(successCallback) successCallback({
                    name: "Good Guy Shantanu"
                });
            })
            .error(function (data) {
                if(errorCallback) errorCallback({
                    name: "Scumbag Shantanu"
                });
            });
    };

    return userService;
});