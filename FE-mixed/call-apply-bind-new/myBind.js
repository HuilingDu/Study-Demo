Function.prototype.myBind = function (context, ...args) {
	context = context || window;
	// context.fn = this;
	// context.fn();
	// delete context.fn;
	var _this = this;
	return function () {
		// console.log('arguments', [].slice.call(arguments));
		var _argToArr = [].slice.call(arguments);
		var _lastArgs = [].concat(...args, _argToArr);
		_this.call(context, ..._lastArgs);
	}
}


var value = 1;
var foo = {
	value: 2
}
function bar() {
	console.log(this.value);
}
// 1. bind返回一个函数，没有立即执行
var iBar = bar.bind(foo);
iBar();// 2
var iBar1 = bar.myBind(foo);
iBar1();// 2



var value = 1;
var foo = {
	value: 2
}
function bar(name, age) {
	console.log(this.value, name, age);
}
// 2. 可以分开传参数, 最终合并执行
var iBar = bar.bind(foo, 'lily');
iBar(19);// 2 'lily' 19
var iBar1 = bar.myBind(foo, 'lily');
iBar1(19);// 2 'lily' 19


// 3. 用 bind 绑定过后，不能再通过 call apply bind 改变this指向
iBar.call();// 2