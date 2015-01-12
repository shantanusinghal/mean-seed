/**
 * Created by ssinghal on 9/1/15.
 */
'use strict';

describe("HomepageController", function () {

    var HomepageCtrl, $scope, UserService, defaultUser = {
        name: "Shantanu"
    };

    beforeEach(module('meanStackApp'));
    beforeEach(inject(function ($rootScope, $controller, _UserService_) {
        $scope = $rootScope;
        UserService = _UserService_;
        spyOn(UserService, 'getDefaultUser').and.callFake(function (success) {
            success(defaultUser);
        });
        HomepageCtrl = $controller('HomepageController', {
            $scope: $scope,
            UserService: UserService
        });
    }));

    it('should exist', inject(function () {
        expect(HomepageCtrl).toBeDefined();
    }));

    it("should know it's name", function () {
        expect($scope.user.name).toBe(defaultUser.name);
    });

});