/**
 * Created by Administrator on 2016/7/8.
 */
/**
 * Node.js 模块系统
 * 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
 * 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
 */

/* 对应 hello.js 中 exports
var getHello = require('./hello');
getHello.world();
getHello.name();
*/

/* 对应 hello.js 中 module.exports */
var modHello = require('./hello');
var _hello = new modHello();
_hello.setName('Lily');
_hello.sayHello();



