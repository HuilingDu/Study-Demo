## Webpack

#### 安装node.js

#### 全局安装webpack

$ npm install webpack -g

#### 全局安装webpack-dev-server

$ npm install webpack-dev-server -g

#### 新建 webpack.config.js 文件,配置文件

#### 进入到项目文件下,初始化新建package.json文件

$ npm init -y

#### package.json 中添加执行命令

    "scripts": {
        "build": "webpack --progress --colors --watch",
        "watch": "webpack-dev-server --inline --progress --colors"
    }

    //执行watch命令,如果命令中添加--hot(webpack-dev-server --hot --inline --progress --colors),本人的会报错,原因不明

    $ npm run watch

#### index.html 中要引用 http://localhost:8080/ 下的js文件,否则无法看到修改后的文件变化

