/**
 * Created by Administrator on 2016/7/7.
 */
/**
 * Node.js Stream(流)
 * Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
 * Node.js，Stream 有四种流类型：
     Readable - 可读操作。
     Writable - 可写操作。
     Duplex - 可读可写操作.
     Transform - 操作被写入数据，然后读出结果。
 * 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
     data - 当有数据可读时触发。
     end - 没有更多的数据可读时触发。
     error - 在接收和写入过程中发生错误时触发。
     finish - 所有数据已被写入到底层系统时触发。
 */

var fs = require("fs");     //以下几种流都需要用到

/* 从流中读取数据 */
var rs = fs.createReadStream("stream.txt");
rs.setEncoding("utf-8");

var data = "";
rs.on('data',function(str){
    data += str;
});
rs.on('end',function(){
    console.log(data);
});
rs.on('error',function(err){
    console.log(err);
});

/* 写入流 */
var write_str = '网金控股：www.ucsmy.com';
var ws = fs.createWriteStream("write.txt");    //与上面读取数据为同一文件，这里会将stream.txt清空再写入，所以 rs.on('end',function(){ console.log(data); });  输出空字符串
                                                //只能有一个ws引用
ws.write(write_str,'UTF-8');
ws.end();

ws.on('finish',function(){
    console.log('写入完毕');
});

/*var ws2 = fs.createWriteStream("write.txt");
ws2.write('111','UTF8');
ws2.end();

ws2.on('finish',function(){
    console.log('写入完毕2');
});*/


/* 管道流
 * 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
 */
var gd_rs = fs.createReadStream('gd_stream.txt');
var gd_ws = fs.createWriteStream('gd_write.txt');
gd_rs.pipe(gd_ws);

/* 链式流
 * 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
 * 用管道和链式来压缩和解压文件。
 */
var zlib = require('zlib');

/* 压缩文件 */
fs.createReadStream('compress.js')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('compress.js.gz'));
console.log('文件压缩完成');

/* 解压文件 --- 解压出来有问题啊啊啊啊啊啊啊啊啊*/
fs.createReadStream('compress.js.gz')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('compress1.js'));
console.log('文件解缩完成');






