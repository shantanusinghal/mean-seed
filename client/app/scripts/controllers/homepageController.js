/**
 * Created by ssinghal on 8/1/15.
 */
'use strict';

meanStackApp.controller('HomepageController', function ($scope, UserService) {

    (function init() {
        UserService.getDefaultUser(_getDefaultUserSuccess, _getDefaultUserFailure);
    })();


    /* private method definitions */

    function _getDefaultUserSuccess (user) {
        $scope.user = user;
    };

    function _getDefaultUserFailure (user) {
        $scope.user = user;
        console.log('[ERR] use not found!')
    };

});