/**
 * Created by Administrator on 2016/7/19.
 */

/**
 * 使用 Node 创建 Web 服务器
 * Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块
 */

var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');

// 创建服务器
http.createServer(function(req, res) {
    // 解析请求，包括文件名
    var path = url.parse(req.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + path + " received.");

    //从文件系统中读取请求的文件内容
    fs.readFile(path.substr(1), function(err,data) {
        if(err){
            console.log(err);
            //HTTP 状态码：404：NOT FOUND
            //Content Type: text/plain
            res.writeHead(404,{'Content-Type':'text/html'});
        } else {
            //HTTP 状态码: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});
            // 响应文件内容
            res.write(data.toString());
        }
        res.end();
    });
}).listen(88);

console.log('server start');