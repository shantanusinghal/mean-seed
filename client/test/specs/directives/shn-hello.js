/**
 * Created by ssinghal on 10/1/15.
 */
describe("shn-hello directive", function () {

    var $scope, element, name = "Shantanu";

    beforeEach(module('meanStackApp', 'views/shnHelloTemplate.html'));

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope;
        element = $compile("<div><shn-hello name=\"" + name + "\"></shn-hello></div>")($scope);
        $scope.$digest();
    }));

    it('should say hello', inject(function () {
        expect(shnHello().message()).toBe("Hello " + name + "!");
    }));

    function shnHello() {
        return {
            message: function () {
                return angular.element(element.find('span')).text();
            }
        }
    }
})