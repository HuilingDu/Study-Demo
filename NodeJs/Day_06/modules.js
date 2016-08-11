/**
 * Created by Administrator on 2016/7/18.
 */
/**
 * Node.js 工具模块
 * 常用模块的使用：
        OS 模块: 提供基本的系统操作函数。
        Path 模块: 提供了处理和转换文件路的工具。
        Net 模块: 用于底层的网络通信。提供了服务端和客户端的的操作。
        DNS 模块: 用于解析域名。
        Domain 模块: 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。
 */

/* OS 模块 http://www.runoob.com/nodejs/nodejs-os-module.html */
var os = require('os');
console.log('' +
    '操作系统名：' + os.platform() + '\n' +
    '操作系统名：' + os.type() + '\n' +
    '操作系统运行时间（s）:' + os.uptime());

/* Path 模块 http://www.runoob.com/nodejs/nodejs-path-module.html */
var path = require('path');
console.log('' +
    '连接路径（join）：' + path.join('/test1','subtest','last/test') + '\n' +
    '转为绝对路径（resolve）：' + path.resolve('util.js') + '\n' +
    '文件后缀名（extname）：' + path.extname('modules.js'));

/* Net 模块 http://www.runoob.com/nodejs/nodejs-net-module.html */


