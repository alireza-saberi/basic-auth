// Simple server just to make the routing part work

/*
* @Author: alireza-saberi
* @Date:   2016-11-02 18:43:25
* @Last Modified by:   Ali
* @Last Modified time: 2017-03-09 09:38:08
*/

'use strict';
/******** Requiring libraries ********/
var express = require('express');
var app = express();


/******** Setting ********/
app.disable('x-powered-by');
app.set('port', 3000 || process.env.PORT);


/******** Routing ********/
app.use(express.static(__dirname + '/dist'));


app.listen(app.get('port'), () => {
    console.log('Server is listening on port ' + app.get('port') + '. Press CTRL-C to terminate.');
});