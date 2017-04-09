var items=document.querySelectorAll("#ul_con li");//IE8以下不兼容

// console.log(items[0].style.backgroundColor="#000");
//定义一个数组类
function CArray() {
	this.dataStore=[];
	this.dataAni=[];
	this.setData=setData;
	this.swap=swap;
	this.selectionSort=selectionSort;
}
function setData(){
	
	for (var i = 0; i < items.length; i++) {
			this.dataStore[i]=parseInt(items[i].style.height);
			this.dataAni[i]=items[i];
		};
}
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}
function selectionSort(){
	var min,temp;
	for (var outer = 0; outer <= this.dataStore.length-1; outer++) {
		min=outer;
		for (var inner = outer+1; inner < this.dataStore.length; inner++) {
			if (this.dataStore[inner]<this.dataStore[outer]) {
				min=inner;
			};
		};
		swap(this.dataStore,outer,min);
	};
}