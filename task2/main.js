window.onload=function(){
	var objB=document.getElementById("box"),
		objM=document.getElementById("menu"),
		menuW=objM.offsetWidth,//自定义菜单的宽度
		menuH=objM.offsetHeight,//自定义菜单的高度
		boxW=objB.offsetWidth,//可右键点击区域的宽度
		boxH=objB.offsetHeight;//可右键点击区域的高度
	
	//假如通过监听事件,测试时,IE下objB.addEventListener("contextmenu",menu);里阻止不了默认事件

	//元素上右击鼠标时执行oncontextmenu事件
	objB.oncontextmenu=function(event){
		//获取鼠标的位置,将鼠标位置和自定义菜单的位置联系起来
		getPos();
		//阻止默认事件,这里阻止右键菜单
		return false;
		
	}
	
	function getPos(){
		var e=event||window.event,
			cliX=e.clientX,//获取鼠标在窗口的X轴位置
			cliY=e.clientY,//获取鼠标在窗口的Y轴位置
			offX=e.offsetX,//获取鼠标在当前对象的X轴位置
			offY=e.offsetY,//获取鼠标在当前对象的Y轴位置
			posX=cliX,//自定义菜单的x轴默认和鼠标的x轴位置一致
			//scrollTop兼容性写法
			scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
			posY=cliY+scrollTop,//自定义菜单的Y轴
			top,left;
			//如果鼠标在当前对象的位置的x轴+自定义菜单的宽度>可右键点击区域的宽度,向左移进去一个自定义菜单的宽度
			if ((offX+menuW)>=boxW) {
				left=posX-menuW;
			}else{
				left=posX;
			}
			//如果鼠标在当前对象的位置的y轴+自定义菜单的高度>可右键点击区域的高度,向上移进去一个自定义菜单的宽度
			if (offY+menuH>=boxH) {
					top=posY-menuH;
			}else{
					top=posY;
			}
			//将top和left值付给自定义菜单
			objM.style.top=top+'px';
			objM.style.left=left+'px';
	}
	//使自定义菜单消失
	objB.onclick=function(){
		objM.style.top='-9999em';
	}
	//点击自定义菜单每一项使得弹出信息,同时阻止事件冒泡
	var liA=document.getElementsByTagName("li");
	for (var i = 0; i < liA.length; i++) {
		liA[i].onclick=function(){
			alert(this.innerHTML);
			return false;
		}
	};

}