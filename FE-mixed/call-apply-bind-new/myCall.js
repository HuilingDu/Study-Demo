// 实现自定义call
Function.prototype.myCall = function (context, ...args) {
	var context = context || window;
	var symbolFn = Symbol();
	context[symbolFn] = this;
	var _result = context[symbolFn](...args);
	delete context[symbolFn];
	return _result;
}


// 调用demo
var value = 1;

var foo = {
	value: 2
}

function bar(...args) {
	console.log('bar', this.value);
	console.log(...args);
}

// js 中的 call 
// 1. 改变this指向，可传参
bar.call(foo, '原生js');
bar.myCall(foo, '手写myCall');

// 2. 不传参时，默认this指向window
bar.call();
bar.myCall();

// 3. 针对函数，可以实现返回值
function bar(name, age) {
	return {
		value: this.value,
		name,
		age
	}
}

bar.call(foo, 'lily', 18);
bar.myCall(foo, 'lily', 18);