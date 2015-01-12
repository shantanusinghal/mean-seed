/**
 * Created by ssinghal on 10/1/15.
 */

describe('homepage', function() {

    it('should have a title', function() {
        browser.get('http://localhost:9001');
        expect(browser.getTitle()).toEqual('Mean Stack Application Seed');
    });

});