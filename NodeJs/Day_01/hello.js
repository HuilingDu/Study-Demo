/**
 * Created by Administrator on 2016/6/6.
 */

//console.log("Hello World");

/**
 * 步骤一、创建服务器
 * 接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。
 */
var http = require('http');
http.createServer(function(request,response) {
    //发送HTTP头部
    //HTTP 状态值 ： 200：OK
    //内容类型：text/plain
    response.writeHead(200,{'conten-Type':'text/plain'});
    response.end('Hello World!!');
}).listen(8888,'127.0.0.1');
console.log('Server run in http://127.0.0.1:8888/');

/**
 * Node.js 回调函数
 * 阻塞代码(fs.readFileSync)与非阻塞代码(fs2.readFile)实例
 */
var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('1.程序执行完毕！');

var fs2 = require('fs');
fs2.readFile('input.txt','utf-8', function(error,data){
    if (error) {
        console.log(error);
    }
    console.log(data);
});
console.log('2.程序执行完毕！');
