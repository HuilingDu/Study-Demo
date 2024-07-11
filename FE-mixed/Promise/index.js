class MyPromise {
	constructor(executor) {
		this.initValue();
		this.initBind();

		try {
			executor(this.resolve, this.reject);
		} catch (e) {
			this.reject(e);
		}
	}

	initValue() {
		this.PromiseStatus = "pending";
		this.PromiseResult = null;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
	}

	initBind() {
		this.resolve = this.resolve.bind(this);
		this.reject = this.reject.bind(this);
	}

	resolve(value) {
		if (this.PromiseStatus !== 'pending') return;
		this.PromiseStatus = "fulfilled";
		this.PromiseResult = value;

		for (let i = 0; i < this.onFulfilledCallbacks.length; i++) {
			this.onFulfilledCallbacks[i](this.PromiseResult);
		}
		this.onFulfilledCallbacks = [];
	}

	reject(reason) {
		if (this.PromiseStatus !== 'pending') return;
		this.PromiseStatus = "rejected";
		this.PromiseResult = reason;

		for (let i = 0; i < this.onRejectedCallbacks.length; i++) {
			this.onRejectedCallbacks[i](this.PromiseResult);
		}
		this.onRejectedCallbacks = [];
	}

	/*
	(method) Promise<any>.then<any, never>(
		onfulfilled?: ((value: any) => any) | null | undefined, 
		onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined
		): Promise<any>
	*/
	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { };
		onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

		let result;
		if (this.PromiseStatus === "fulfilled") {
			result = onFulfilled(this.PromiseResult);
		} else if (this.PromiseStatus === "rejected") {
			result = onRejected(this.PromiseResult);
		} else if (this.PromiseStatus === "pending") {
			this.onFulfilledCallbacks.push(onFulfilled.bind(this));
			this.onRejectedCallbacks.push(onRejected.bind(this));
		}
		// console.log('result', result);
		const thenPromise = new MyPromise((resolve, reject) => {
			if (result instanceof MyPromise) {
				result.then(resolve);
			} else {
				resolve(result);
			}
		});

		return thenPromise;

		/* 资料手写方法中 判断 x === thenPromise && x 的原因
		https://baijiahao.baidu.com/s?id=1727800187996821734&wfr=spider&for=pc
		
		let p = new Promise(resolve => {
			resolve(0);
		});
		var p2 = p.then(data => {
			// 循环引用，自己等待自己完成，一辈子完不成
			return p2;
		}) 
		*/

		// if (this.PromiseStatus === "fulfilled") {
		// 	onFulfilled(this.PromiseResult);
		// } else if (this.PromiseStatus === "rejected") {
		// 	onRejected(this.PromiseResult);
		// } else if (this.PromiseStatus === "pending") {
		// 	this.onFulfilledCallbacks.push(onFulfilled.bind(this));
		// 	this.onRejectedCallbacks.push(onRejected.bind(this));
		// }
	}
}