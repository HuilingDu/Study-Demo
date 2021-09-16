const setOnline = require('./config');
// 这里使用了express, 执行npm i express 或者 cnpm i express安装依赖
var express = require('express');
var app = express();

// 允许跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// get 请求
// app.get('/v1/permission', (req, res) => {
// 	res.status(200);
// 	res.json(require(`./api/permission.json`));  // 返回处理结果
// });

// Mock数据
setOnline.forEach((m) => {
	app[m.type](`/api${m.url}`, m.callback ? m.callback : (req, res) => {
		res.status(200);
		res.json(require(`./api/${m.name}.${m.fileType || 'json'}`));  // 返回处理结果
	});
});

// 监听端口
app.listen('8801', function () {
	console.log('localhost:8801/');
});