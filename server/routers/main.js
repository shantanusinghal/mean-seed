/**
 * Created by ssinghal on 13/1/15.
 */
'use strict';

module.exports = function (app) {
//    app.get('/', function (req, res) {
//        res.send('Hello Shantanu!');
//    });

    app.get('/demo/user/00', function (req, res) {
        res.send({
            name: "Shantanu"
        })
    });
};