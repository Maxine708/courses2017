var items;

//定义一个数组类
function CArray() {
	this.dataStore=[];
	this.setData=setData;
	this.swap=swap;
	this.selectionSort=selectionSort;
}
function setData(){
	items=document.querySelectorAll("#ul_con li");//IE8以下不兼容
	for (var i = 0; i < items.length; i++) {
		this.dataStore[i]=items[i].offsetHeight;
	};
}
function swap(arr,index1,index2,arr2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
	// items[index1].style.backgroundColor="#000";
	// items[index2].style.backgroundColor="#000";
	
	items[index1].style.height=arr[index1]+'px';
	items[index2].style.height=arr[index2]+'px';
}
function selectionSort(){
	var min,temp;
	for (var outer = 0; outer <this.dataStore.length-1; outer++) {
		min=outer;
		for (var inner = outer + 1; inner < this.dataStore.length; inner++) {
			if (this.dataStore[inner] < this.dataStore[outer]) {
				min=inner;
				swap(this.dataStore,outer,min);				
			};

		};		
	};
}
function clearColor(){
	for (var i = 0; i < items.length; i++) {
		items[i].style.backgroundColor="#ff0000";
	};
}
