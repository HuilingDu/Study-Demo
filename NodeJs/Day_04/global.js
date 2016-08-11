/**
 * Created by Administrator on 2016/7/11.
 */
/**
 * Node.js 全局对象
 * JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
 * 在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
 * 在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
 *
 * 全局对象与全局变量
 * global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
    在最外层定义的变量；
    全局对象的属性；
    隐式定义的变量（未定义直接赋值的变量）。
 * 当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。
 ** 注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。
 */

/* __filename
 * __filename 表示当前正在执行的脚本的文件名。
 * 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
 */
console.log("当前文件路径："+__filename);

/* __dirname
 * __dirname 表示当前执行脚本所在的目录。
 */
console.log("当前目录："+__dirname);

/* setTimeout / clearTimeout / setInterval(直到你按下 ctrl + c 按钮) / clearInterval */
setTimeout(function(){
    console.log("1秒后执行！");
},1000);

/* console 方法
 * console.log 接受若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
    第一个参数是一个字符串，如果没有 参数，只打印一个换行。
 * console.trace(message[, ...])
    当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
 * console.assert(value[, message][, ...])
    用于判断某个表达式或变量是否为真，接手两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。
 */
console.time('time');
console.log('log%dlog', 1991);
console.info('info');
console.warn('warn');
console.timeEnd('time');

/* process
 * 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要和它打交道。
 * 常用的成员方法：
 *      事件 & 描述 - exit：当进程准备退出时触发。
                      beforeExit：当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
                      uncaughtException：当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
 *      退出状态码 - http://www.runoob.com/nodejs/nodejs-global-object.html
 *      Process 属性 - stdout：标准输出流。
                       stderr：标准错误流。
                       ......
                       http://www.runoob.com/nodejs/nodejs-global-object.html
 *      Process 方法 - abort()：这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。
                       cwd()：返回当前进程的工作目录
                       exit([code])：使用指定的 code 结束进程。如果忽略，将会使用 code 0。
                       ......
 */
process.on('exit',function(code) {
    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);
    console.log("\n退出码："+code);
});

process.stdout.write('' +
    '输出到终端：' + process.execPath + '\n' +
    '平台信息：' + process.platform + '\n' +
    '版本：' + process.version + '\n');

console.log('' +
    '当前目录：' + process.cwd() + '\n' +
    'Node已经运行的秒数：' + process.uptime());