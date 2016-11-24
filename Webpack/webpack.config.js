var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app.js')//需要打包的文件
    ],
    output: {
        path: path.resolve(__dirname, 'build'),//打包后的文件位置
        filename: 'bundle.js'
    }
};
