/**
 * Created by Administrator on 2016/7/11.
 */

var server = require('./server');
var route = require('./route');

server.start(route.route);