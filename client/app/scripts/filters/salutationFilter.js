/**
 * Created by ssinghal on 15/1/15.
 */
'use strict';

meanStackApp.filter('salutation', function () {
    return function (input) {
        return 'Mr. ' + input;
    }
})