"use strict"; //<--- I dont know exactly what this is, but the script had errors without it.

var setcolor;
var sec5wid;


//sliding logics and variables
var a;
var aa;
function SetWidth(){
	a=document.getElementsByClassName("slide")[0];
	a.style.width=(a.children.length*4)+"0vw";
	
	aa=document.getElementsByClassName("slider")[0];
	aa.style.width=a.children.length+"00vw";
}

function changeTop(i){
	var p;
	if(i){
		if (aa.style.left=="0%"){
			//aa.style.transitionDuration="0s";
			aa.style.left="-"+(aa.children.length-1)+"00%";
			//setTimeout(function(){aa.style.transitionDuration="1s";},0);
		}
		else{
			p = aa.style.left;
			aa.style.left=(parseInt(p)+100)+"%";
		}
	}
	else{
		if (aa.style.left=="-"+(aa.children.length-1)+"00%"){
		//	aa.style.transitionDuration="0s";
			aa.style.left="0%";
		//	setTimeout(function(){aa.style.transitionDuration="1s";},0);
		}
		else{
			p = aa.style.left;
			aa.style.left=(parseInt(p)-100)+"%";
		}
	}
}

function change(i){
	var p;
	if(i){
		if (a.style.left=="0%"){
			//a.style.transitionDuration="0s";
			a.style.left="-"+(a.children.length-1)+"00%";
			//setTimeout(function(){a.style.transitionDuration="1s";},0);
		}
		else{
			p = a.style.left;
			a.style.left=(parseInt(p)+100)+"%";
		}
	}
	else{
		if (a.style.left=="-"+(a.children.length-1)+"00%"){
			//a.style.transitionDuration="0s";
			a.style.left="0%";
			//setTimeout(function(){a.style.transitionDuration="1s";},0);
		}
		else{
			p = a.style.left;
			a.style.left=(parseInt(p)-100)+"%";
		}
	}
}



function ColorChange(a){
	var x;
	var i;
	if (a=="PleaseDontWriteThis"){a=setcolor;}
	setcolor = a;
	//Text color change
	x=document.getElementsByClassName('color');	
	for(i=0; i<x.length; i++){
	x[i].style.color = a;
		}

	//Border color change
	x=document.getElementsByClassName('border');	
	for(i=0; i<x.length; i++){
	x[i].style.borderColor = a;
		}
	
	//Background color change
	
	x=document.getElementsByClassName('bg');	
	for(i=0; i<x.length; i++){
	x[i].style.backgroundColor = a;
		}     
}


function ColorChange2(){
	
	var a=document.getElementById('cust_color').value;
	
	ColorChange(a);
}

function SettingsToggle(){
	
	var l=document.getElementById("settings").style;
	
	if (l.left==='0px'){
		l.left= '-210px';
	}
	else{
		l.left= '0px';
	}
}
var i;


function one(){
	var a; 
	a=document.getElementsByClassName('sec3');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='88%';
		 a[i].style.padding='6%';
	 }
	
	 a=document.getElementsByClassName('sec2');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='100%';
	 }
	
	 a=document.getElementsByClassName('sec5');
	sec5wid='50%';
	 for(i=0; i<a.length; i++){
		 a[i].style.width='50%';
	 }
	
	document.getElementsByClassName('sec6p')[0].style.float='none';
	document.getElementsByClassName('sec6b')[0].style.float='left';
	document.getElementsByClassName('sec6b')[0].style.marginTop='20px';
	document.getElementById('form').style.width='70%';
	document.getElementsByClassName('sec2i')[0].style.margin='0 33%';
	
}



function two(){
	var a; 
	a=document.getElementsByClassName('sec3');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='40%';
		 a[i].style.padding='3%';
	 }
	
	 a=document.getElementsByClassName('sec2');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='70%';
	 }
	
	 a=document.getElementsByClassName('sec5');
	sec5wid='45%';
	 for(i=0; i<a.length; i++){
		 a[i].style.width='45%';
	 }
	
	document.getElementsByClassName('sec6p')[0].style.float='left';
	document.getElementsByClassName('sec6b')[0].style.float='right';
	document.getElementsByClassName('sec6b')[0].style.marginTop='0px';
	document.getElementById('form').style.width='50%';
	document.getElementsByClassName('sec2i')[0].style.margin='0';
	
}



function three(){
	var a; 
	a=document.getElementsByClassName('sec3');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='26.73%';
		 a[i].style.padding='1.98%';
	 }
	
	 a=document.getElementsByClassName('sec2');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='36%';
	 }
	
	 a=document.getElementsByClassName('sec5');
	sec5wid='30%';
	 for(i=0; i<a.length; i++){
		 a[i].style.width='30%';
	 }
	
	document.getElementsByClassName('sec6p')[0].style.float='left';
	document.getElementsByClassName('sec6b')[0].style.float='right';
	document.getElementsByClassName('sec6b')[0].style.marginTop='0px';
	document.getElementById('form').style.width='50%';
	document.getElementsByClassName('sec2i')[0].style.margin='0';
	
}



function four(){
	var a;
	 a=document.getElementsByClassName('sec3');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='21.671%';
		 a[i].style.padding='1.5%';
	 }
	
	 a=document.getElementsByClassName('sec2');
	 for(i=0; i<a.length; i++){
		 a[i].style.width='36%';
	 }
	
	 a=document.getElementsByClassName('sec5');
	sec5wid='22.671%';
	 for(i=0; i<a.length; i++){
		 a[i].style.width='22.671%';
	 }
	
	document.getElementsByClassName('sec6p')[0].style.float='left';
	document.getElementsByClassName('sec6b')[0].style.float='right';
	document.getElementsByClassName('sec6b')[0].style.marginTop='0px';
	document.getElementById('form').style.width='50%';
	document.getElementsByClassName('sec2i')[0].style.margin='0';
}


function start(c){
	switch (c){
		case 1:
			one();
			break;
		case 2:
			two();
			break;
		case 3:
			three();
			break;
		case 4:
			four();
			break;
		default:
			alert ('wrong');
	}
	WorkView('l');
}


function WorkView(n){
	var i;
	var h;
	// Heading Color Change
	h = document.getElementsByName("options");
	for (i=0; i<h.length; i++){
		h[i].setAttribute('class', 'options');
		h[i].style.color="inherit";
		h[i].style.textDecoration='none';
	}
	
	h=document.getElementById('view_'+n);
	h.setAttribute('class', 'color options');
	h.style.textDecoration='line-through solid';
	
	ColorChange('PleaseDontWriteThis');
	
	// Works visibility chnage
	if (n=="l"){
		h = document.getElementsByClassName("sec5");
		for(i=0; i<h.length; i++){
			
			h[i].style.width=sec5wid;
			h[i].style.margin='1%';
			
		}
	}
	else{
		h = document.getElementsByClassName("sec5");
		for(i=0; i<h.length; i++){
			h[i].style.width='0';
			h[i].style.margin='0';
			
		}
		
		h = document.getElementsByName(n);
		for(i=0; i<h.length; i++){
			
			h[i].style.width=sec5wid;
			h[i].style.margin='1%';
			
		}
	}
}


function zoom(src){
	document.getElementById('background').style.display='block';
	document.getElementById('image').innerHTML='<img src=\"images/'+src+'.jpg\"/>';
	
}

function unzoom(){
	document.getElementById('background').style.display='none';
}


function menu(){
	
	if(document.getElementsByClassName('nav')[0].style.right=='calc(-100% + 50px)')
	{
		document.getElementById('bar1').style.transform='rotate(405deg) translate(5px)';
		document.getElementById('bar2').style.transform='rotate(-405deg) translate(5px)';
		document.getElementsByClassName('nav')[0].style.right='0';
	}
	else
	{
		document.getElementById('bar1').style.transform='rotate(0deg) translate(0px)';
		document.getElementById('bar2').style.transform='rotate(0deg) translate(0px)';
		document.getElementsByClassName('nav')[0].style.right='calc(-100% + 50px)';
	}
}

