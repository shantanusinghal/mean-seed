/**
 * Created by ssinghal on 10/1/15.
 */
'use strict';

meanStackApp.directive('shnHello', function () {
    return {
        restrict: 'E',
        scope: {
            name: '@'
        },
        replace: true,
        templateUrl: "views/shnHelloTemplate.html"
    };
})