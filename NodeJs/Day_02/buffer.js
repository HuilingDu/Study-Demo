/**
 * Created by Administrator on 2016/7/7.
 */
/**
 * Node.js Buffer（缓冲区）
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
   但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
   一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 * 更多内容：http://www.runoob.com/nodejs/nodejs-buffer.html
 * /

/* 创建 buffer 类 */
//方法一：创建长度为 10 字节的 Buffer 实例
var buf = new Buffer(10);

//方法二：通过给定的数组创建 Buffer 实例
var buf2 = new Buffer([97, 98, 99, 100, 101]);

//方法三：通过一个字符串来创建 Buffer 实例
//        utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
var buf3 = new Buffer("www.baidu.com","utf-8");

/* 写入缓冲区
 * 语法：buf.write(string[, offset[, length]][, encoding])
 * 参数：string - 写入缓冲区的字符串。
        offset - 缓冲区开始写入的索引值，默认为 0 。
        length - 写入的字节数，默认为 buffer.length
        encoding - 使用的编码。默认为 'utf8' 。
 * 返回值：返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
 */
var len = buf.write('123 456 78');
console.log("写入缓冲区:");
console.log(len+"\n");

/* 从缓冲区读取数据
 * 语法：buf.toString([encoding[, start[, end]]])
 * 参数：encoding - 使用的编码。默认为 'utf8' 。
         start - 指定开始读取的索引位置，默认为 0。
         end - 结束位置，默认为缓冲区的末尾。
 * 返回值：解码缓冲区数据并使用指定的编码返回字符串。
 */
console.log("从缓冲区读取数据:");
console.log(buf2.toString()+"\n");

/* 将 Buffer 转换为 JSON 对象
 * 语法：buf.toJSON()
 * 返回值：返回 JSON 对象。
 */
var json = buf3.toJSON(buf3);
console.log("将 Buffer 转换为 JSON 对象:");
console.log(json+"\n");

/* 缓冲区合并
 * 语法：Buffer.concat(list[, totalLength])
 * 参数：list - 用于合并的 Buffer 对象数组列表。
         totalLength - 指定合并后Buffer对象的总长度。
 * 返回值：返回一个多个成员合并的新 Buffer 对象。
 */
var concat = Buffer.concat([buf,buf2,buf3]);
console.log("缓冲区合并:");
console.log(concat.toString()+"\n");

/* 缓冲区比较
 * 语法：buf.compare(otherBuffer);
 * 参数：otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
 * 返回值：返回一个数字，表示 buf 在 otherBuffer (<0)之前，(>0)之后或(=0)相同。
 */
var buff1 = new Buffer("abb");
var buff2 = new Buffer("abc");
var compare = buff1.compare(buff2);
console.log("缓冲区比较:");
console.log("buff1:"+buff1+"\nbuff2:"+buff2+"对比是"+compare+"\n");

/* 拷贝缓冲区
 * 语法：buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
 * 参数：targetBuffer - 要拷贝的 Buffer 对象。
         targetStart - 数字, 可选, 默认: 0
         sourceStart - 数字, 可选, 默认: 0
         sourceEnd - 数字, 可选, 默认: buffer.length
 * 返回值：没有返回值。
 */
var copy1 = new Buffer("abc");
var copy2 = new Buffer(3);
copy1.copy(copy2);
console.log("拷贝缓冲区:");
console.log(copy2.toString()+"\n");

/* 缓冲区裁剪
 * 语法：buf.slice([start[, end]])
 * 参数：start - 数字, 可选, 默认: 0
         end - 数字, 可选, 默认: buffer.length
 * 返回值：返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
 */
var slice1 = new Buffer("www.baidu.com");
var slice2 = slice1.slice(4,9);
console.log("缓冲区裁剪:");
console.log(slice2.toString()+"\n");


