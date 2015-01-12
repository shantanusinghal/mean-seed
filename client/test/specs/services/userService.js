/**
 * Created by ssinghal on 12/1/15.
 */
'use strict';

describe("UserService", function () {

    var UserService, defaultUser = {
        name: "Good Guy Shantanu"
    };

    beforeEach(module('meanStackApp'));
    beforeEach(inject(function (_UserService_) {
        UserService = _UserService_;
    }));

    it('should return the default user', inject(function ($httpBackend) {
        $httpBackend.whenGET('/demo/user/00').respond(204);
        UserService.getDefaultUser();
        $httpBackend.flush();
    }));
})