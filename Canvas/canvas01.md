## Canvas

#### 1.判断是否支持canvas

	var canvas = document.getElementById('can_1');
    if(canvas.getContext) {
        console.log('支持canvas');
        var ctx = canvas.getContext('2d');
		//TODO...
    } else {
        console.log('不支持canvas');
    }

#### 2.绘制矩形

	canvas提供了三种方法绘制矩形：

	fillRect(x, y, width, height)
	绘制一个填充的矩形

	strokeRect(x, y, width, height)
	绘制一个矩形的边框

	clearRect(x, y, width, height)
	清除指定矩形区域，让清除部分完全透明。

#### 3.绘制路径

	beginPath()
	新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
	
    ctx.moveTo(x,y);
	将笔触移动到指定的坐标x以及y上。

    lineTo(x, y)
	绘制一条从当前位置到指定x以及y位置的直线。

	closePath()
	闭合路径之后图形绘制命令又重新指向到上下文中。

	stroke()
	通过线条来绘制图形轮廓。

	fill()
	通过填充路径的内容区域生成实心的图形。

#### 4.绘制圆弧

	arc(x, y, radius, startAngle, endAngle, anticlockwise)
	画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

	** arcTo(x1, y1, x2, y2, radius)
	根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。


#### 5.用“宽度/高度技巧”清除画布

	$canvas.attr({'width':$canvas.width()});
	或
	$canvas.attr({'height':$canvas.height()});
	//$canvas是用jQuery获取的对象

	var $canvas = $('#can_1');
    var canvas = $canvas.get(0);

	**缺点：会完全重置Canvas上的所以内容，包括样式和颜色

#### 6.使Canvas填满浏览器窗口

	var $can = $('#can_1');
	var ctx = $can.get(0).getContext('2d');

	$can.attr({
		'width':$(window).get(0).innerWidth,
		'height':$(window).get(0).innerHeight
	});