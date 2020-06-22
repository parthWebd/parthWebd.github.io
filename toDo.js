var tex=document.getElementById('tex');
var demo=document.getElementById('demo');
var add=document.getElementById('add');
var del=document.getElementById('delete');

let totalTask=3;

var listAll=document.querySelectorAll('li');
for(var i=0;i<listAll.length;i++){
	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className="close";
  	span.appendChild(txt);
  	listAll[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
	close[i].onclick=function(){
		var div=this.parentElement	;
		div.style.display="none";
		totalTask-=1;
		document.getElementById('totalTask').innerHTML=totalTask;


let ch=0;
var inputs = document.getElementsByTagName("input");  
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && inputs[i].checked){
        ch++;
        document.getElementById('taskCompleted').innerHTML=ch;
        
    }
}
ch=0;
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && !inputs[i].checked){
    	ch++;
        if(ch==totalTask)
        document.getElementById('taskCompleted').innerHTML=0;
        
    }
}





	};
}
add.addEventListener('click',function(){

	var para = document.createElement("li");

	var check=document.createElement("input");
  	check.setAttribute("type","checkbox");
  	var checkNode=document.createTextNode(check);
  	para.appendChild(check);
  	check.className="check";

	
	if(tex.value!=""){
		totalTask+=1;
		var node = document.createTextNode(tex.value);
	}
	if(tex.value===''){
		alert('pehle kuch type to karo! baad me add karna');
	}
	console.log(totalTask);
	document.getElementById('totalTask').innerHTML=totalTask;
	para.appendChild(node);
	var element = document.getElementById("div1");
	element.appendChild(para);
	tex.value="";
	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className="close";
  	span.appendChild(txt);
  	para.appendChild(span);

 var c=document.getElementsByClassName("check");
for(var x=0;x<c.length;x++){
c[x].addEventListener('click',function(){
let ch=0;
var inputs = document.getElementsByTagName("input");  
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && inputs[i].checked){
        ch++;
        document.getElementById('taskCompleted').innerHTML=ch;

    }
}
ch=0;
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && !inputs[i].checked){
    	ch++;
        if(ch==totalTask)
        document.getElementById('taskCompleted').innerHTML=0;
        
    }
}
});
}




  	var close=document.getElementsByClassName("close");
	for(var i=0;i<close.length;i++){
			close[i].onclick=function(){
			var div=this.parentElement	;
			div.style.display="none";
			totalTask-=1;
			document.getElementById('totalTask').innerHTML=totalTask;


				let ch=0;
var inputs = document.getElementsByTagName("input");  
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && inputs[i].checked){
        ch++;
        document.getElementById('taskCompleted').innerHTML=ch;
        
    }
}
ch=0;
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && !inputs[i].checked){
    	ch++;
        if(ch==totalTask)
        document.getElementById('taskCompleted').innerHTML=0;
        
    }
}


		};
	}

});

var c=document.getElementsByClassName("check");
for(var x=0;x<c.length;x++){
c[x].addEventListener('click',function(){
	let ch=0;
var inputs = document.getElementsByTagName("input");  
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && inputs[i].checked){
        ch++;
        document.getElementById('taskCompleted').innerHTML=ch;
        
    }
}
ch=0;
for (var i = 0; i < inputs.length; i++) {   
    var input = inputs[i];
    if('checkbox' == inputs[i].type && !inputs[i].checked){
    	ch++;
        if(ch==totalTask)
        document.getElementById('taskCompleted').innerHTML=0;
        
    }
}

});
}


// document.addEventListener('click',function(event){
// 	if(event.target.tagName==='li' ){
// 		totalDone++;
// 		document.getElementById('taskCompleted').innerHTML=totalDone;
// 		console.log(totalDone);
// 	}
// 	console.log("maghia");
// });
// var inputs = document.getElementsByTagName("input");
// var checked = 0;   
// for (var i = 0; i < inputs.length; i++) {   
//     var input = inputs[i];
//     if('checkbox' == inputs[i].type && inputs[i].checked){
//         totalDone++;
//         document.getElementById('taskCompleted').innerHTML=totalDone;
//         console.log(totalDone);
//     }
// }
// var list=document.querySelector('ul');
// list.addEventListener('click',function(event){
// 	if(event.target.tagName==='li'){
// 		totalDone++;
// 		document.getElementById('taskCompleted').innerHTML=totalDone;
// 	}
// },false);

