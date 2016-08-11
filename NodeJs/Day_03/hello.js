/**
 * Created by Administrator on 2016/7/8.
 */
/**
 * Node.js 提供了exports 和 require 两个对象，
 * 其中 exports 是模块公开的接口，
 * require 用于从外部获取一个模块的接口，
 * 即所获取模块的 exports 对象。
 *
 * 服务端的模块放在哪里 （见图：模块.png 模块2.png）
 */

/* 通过 exports 对象把 world 作为模块的访问接口 */
/*exports.world = function () {
    console.log('Hello World!');
};

exports.name = function () {
    console.log('Lily')
};*/

/* 把一个对象封装到模块中 */
function  hello(){
    var name;
    this.setName = function(Name){
        name = Name;
    };
    this.sayHello = function (){
        console.log('Hello '+name+'!');
    }
}
module.exports = hello;








