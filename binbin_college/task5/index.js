

function $(name){
	return document.getElementById(name);
}
var aLi=$("ul_con").getElementsByTagName('li');
var reg=/^([1-9][0-9])$/;

var myNums=new CArray();

$("start").onclick=function(){
		myNums.setData();
		myNums.selectionSort();
		console.log(myNums.dataStore);
		// setTimeout('myNums.setHeight()',1000);

	}
	$("left_in").onclick=function(){
		var n=document.createElement("li");
		var t=document.createTextNode($("content").value);
		var tt=parseInt($("content").value);
			//检查是否为数字
			if (reg.test($("content").value)) {
				// n.appendChild(t);
				// n.setAttribute('height', '100px');
				n.style.height=tt*2+'px';
				$("content").value="";
				if(aLi.length>0)  
		          {  
		          	if (aLi.length>=60) {
			        	alert("超出限定60个")
			        }else{
			        	$("ul_con").insertBefore(n,aLi[0]);
			        }
		            //第一个参数是要插入的元素，第二个参数是在哪个元素之前插入  
		            
		           }else{  
		            $("ul_con").appendChild(n);  
		           }  
		        
				eClick();
			}else{
				alert("请检查数字")
			}
			
		
		

	};
	$("right_in").onclick=function(){
		var n=document.createElement("li");
		var t=document.createTextNode($("content").value);
		
			if (reg.test($("content").value)) {
				n.appendChild(t);
				$("content").value="";
				$("ul_con").appendChild(n); 
				eClick();
			}else{
				alert("请检查数字")
				
			}
			
		
		
	};
	$("left_out").onclick=function(){
		if (aLi.length>0) {
			$("ul_con").removeChild($("ul_con").firstChild);
		}else{alert("请插入")};
		eClick();
	};
	$("right_out").onclick=function(){
		if (aLi.length>0) {
			$("ul_con").removeChild($("ul_con").lastChild);
		}else{alert("请插入")};
		eClick()
		
	};

	
	function eClick(){
		if (aLi.length>0) {
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].onclick=function(){
					$("ul_con").removeChild(this);
				}
			}
		}
	}