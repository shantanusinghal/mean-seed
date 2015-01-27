/**
 * Created by ssinghal on 13/1/15.
 */
'use strict';

/* module dependencies */

var express = require('express');
var app = express();

require('./routers/main')(app);

/* middleware */

app.use(express.static(__dirname + '/dist'));

/* server */

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('meanstack-server listening at http://%s:%s', host, port);
});

