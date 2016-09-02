## Canvas-动画

#### 创建循环

	function animate(){
		setTimeout(animate,33);
    }
    animate();

#### 开始、暂停动画的开关

	//开始与暂停按钮
	<button id="start">start</button>
    <button id="stop">stop</button>
	
	var play = true, $start = $('#start'), $stop = $('#stop');

	//点击按钮切换play的值
	$start.hide();
    $start.click(function(){
        $(this).hide();
        $stop.show();
        play = true;
        animate();
    });
    $stop.click(function(){
        $(this).hide();
        $start.show();
        play = false;
    });

	function animate(){
		if(play){
			setTimeout(animate,33);
		}
    }
	
#### 记忆绘制形状

* 需解决问题：

  	- 不管形状数量多少，首先考虑如何存储每个形状__位置值__；
	
	- 在不复制代码情况下，如何绘制每个形状。 
###

	//创建存储对象
	var shape = function(x,y){
        this.x = x;
        this.y = y;
    };

	var shapes = new Array();
	shapes[0] = new shape(50,50);	//存储初始位置值

#### 例子：

+ [圆周运动](./canvas_animate_01.html)
+ [会反弹的小球](./canvas_animate_02.html)