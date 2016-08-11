/**
 * Created by Administrator on 2016/6/6.
 * 事件驱动程序
 * EventEmitter 类
 * 两种写法：
 *      1.var ev = require('events');
 *        var evEmt = new ev.EventEmitter();
 *      2.var ev = require('events').EventEmitter;
 *        var evEmt = new ev();
 */
//引入events模块
var ev = require('events');
//创建eventEmitter对象
var evEmt = new ev.EventEmitter();
evEmt.on('some_event',function(){
    console.log('some_event 事件被触发');
});
setTimeout(function(){
    evEmt.emit('some_event');
},1000);

/**
 * EvertEmitter 类
 * 绑定同一个事件，执行不同function，依次执行
 */
var ev_2 = require('events').EventEmitter;
var evEmt_2 = new ev_2();
evEmt_2.addListener('say_hello',function(){
    console.log('say hello!')
})
evEmt_2.on('set_event',function(arg1,arg2){
    console.log(evEmt_2.listeners('set_event'));
    console.log(evEmt.listenerCount('some_event'));
});
evEmt_2.on('set_event',function(arg1){
    console.log('listen1',arg1);
});
evEmt_2.emit('say_hello');
evEmt_2.emit('set_event','11','22');
