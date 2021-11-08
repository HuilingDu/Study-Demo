## 跨域问题与同源策略



### 同源策略

> 1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。
>
> ——2016/4/8 《浏览器同源政策及其规避方法（阮一峰）》

> 用于限制一个[origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。
>
> ——《浏览器的同源策略（MDN）》



#### 三个相同：

+ 协议相同
+ 域名相同
+ 端口相同

与 URL `http://www.example.com/dir/page.html` 的源进行对比的示例:

| URL                                        | 结果   | 原因                               |
| :----------------------------------------- | :----- | :--------------------------------- |
| `http://www.example.com/dir2/other.html`   | 同源   | 只有路径不同                       |
| `http://example.com/dir/other.html`        | 不同源 | 域名不同                           |
| `http://v2.www.example.com/dir/other.html` | 不同源 | 域名不同                           |
| `http://www.example.com:81/dir/other.html` | 不同源 | 端口不同 ( `http://` 默认端口是80) |
| `https://www.example.com/dir/page.html`    | 不同源 | 协议不同                           |
| `http://192.168.1.10/dir/page.html`        | 不同源 | 域名和域名对应相同 ip 也不允许通信 |

http协议默认端口号是`80`，https默认端口号`443`。

**拓展**：

1. [网站域名到底加不加 WWW](https://cloud.tencent.com/developer/article/1483042)
2. [域名www，要还是不要，这是个问题](https://network.51cto.com/art/202002/610753.htm)



#### 三种限制：

+ Cookie、LocalStorage 和 IndexDB 无法读取

+ DOM 无法获得

+ AJAX 请求不能发送



##### 关于Cookie:

> 浏览器允许通过设置`document.domain`共享 Cookie。
>
> 举例来说，A网页是`http://w1.example.com/a.html`，B网页是`http://w2.example.com/b.html`，那么只要设置相同的`document.domain`，两个网页就可以共享Cookie。
>
> > ```javascript
> > document.domain = 'example.com';
> > ```
>
> 现在，A网页通过脚本设置一个 Cookie。
>
> > ```javascript
> > document.cookie = "test1=hello";
> > ```
>
> B网页就可以读到这个 Cookie。
>
> > ```javascript
> > var allCookie = document.cookie;
> > ```
>
> 注意，这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexDB 无法通过这种方法，规避同源政策，而要使用下文介绍的PostMessage API。
>
> 另外，服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，比如`.example.com`。
>
> > ```http
> > Set-Cookie: key=value; domain=.example.com; path=/
> > ```
>
> 这样的话，二级域名和三级域名不用做任何设置，都可以读取这个Cookie。



##### 关于iframe:

> 如果两个网页不同源，就无法拿到对方的DOM。典型的例子是`iframe`窗口和`window.open`方法打开的窗口，它们与父窗口无法通信。
>
> 比如，父窗口运行下面的命令，如果`iframe`窗口不是同源，就会报错。
>
> > ```javascript
> > document.getElementById("myIFrame").contentWindow.document
> > // Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.
> > ```
>
> 上面命令中，父窗口想获取子窗口的DOM，因为跨源导致报错。
>
> 反之亦然，子窗口获取主窗口的DOM也会报错。
>
> > ```javascript
> > window.parent.document.body
> > // 报错
> > ```
>
> 如果两个窗口一级域名相同，只是二级域名不同，那么设置上一节介绍的`document.domain`属性，就可以规避同源政策，拿到DOM。



###### 解决方案一：片段识别符（fragment identifier）

> 片段标识符（fragment identifier）指的是，URL的`#`号后面的部分，比如`http://example.com/x.html#fragment`的`#fragment`。如果只是改变片段标识符，页面不会重新刷新。
>
> 父窗口可以把信息，写入子窗口的片段标识符。
>
> > ```javascript
> > var src = originURL + '#' + data;
> > document.getElementById('myIFrame').src = src;
> > ```
>
> 子窗口通过监听`hashchange`事件得到通知。
>
> > ```javascript
> > window.onhashchange = checkMessage;
> > 
> > function checkMessage() {
> >   var message = window.location.hash;
> >   // ...
> > }
> > ```
>
> 同样的，子窗口也可以改变父窗口的片段标识符。
>
> > ```javascript
> > parent.location.href= target + "#" + hash;
> > ```







##### 关于Ajax：

























### 参考资料

1. [浏览器的同源策略——MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

2. [浏览器同源政策及其规避方法——阮一峰](