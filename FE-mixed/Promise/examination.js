/* 
实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有N个。完善下面代码中的 Scheduler 类，使得以下程序能正确输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler(n)
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// 打印顺序是：2 3 1 4
*/

class Scheduler {
	constructor(max) {
		this.count = 0;
		this.max = max;
		this.taskQueue = [];
	}

	async add(promiseCreator) {
		/*
			此时count已经满了，不能执行本次add需要阻塞在这里，将resolve放入队列中等待唤醒,
			等到count<max时，从队列中取出执行resolve,执行，await执行完毕，本次add继续
		*/
		if (this.count >= this.max) {
			await new Promise((resolve) => this.taskQueue.push(resolve));
		}

		this.count++;
		let result = await promiseCreator();
		this.count--;

		/* 
			若队列中有值，将其resolve弹出，并执行
			以便阻塞的任务，可以正常执行
		*/
		if (this.taskQueue.length > 0) {
			this.taskQueue.shift()();
		}

		return result;
	}
}

const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time)
})

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
