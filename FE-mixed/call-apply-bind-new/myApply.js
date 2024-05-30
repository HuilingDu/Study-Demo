Function.prototype.myApply = function (context, arr) {
	context = context || window;
	var fnSymbol = Symbol();
	context[fnSymbol] = this;
	var _result;
	if (!arr) {
		_result = context[fnSymbol]();
	} else {
		_result = context[fnSymbol](...arr);
	}
	delete context[fnSymbol];
	return _result;
}

var value = 1;

var foo = {
	value: 2
}

function bar1() {
	console.log(this.value);
}

// 1. 一般使用
bar1.apply(foo);// 2
bar1.myApply(foo);// 2

// 2. 不加参数默认指向window
bar1.apply();// 1
bar1.myApply();// 1

// 3. 第二个参数是数组
function bar2(name, age) {
	console.log(this.value, name, age);
}
bar2.apply(foo, ['lily', 18]);
bar2.myApply(foo, ['lily', 18]);

// 4. bar 函数有返回值
function bar3(name, age) {
	return {
		value: this.value,
		name,
		age
	}
}
bar3.apply(foo, ['lily', 18]);
bar3.myApply(foo, ['lily', 18]);
