"use strict"

var buttons=document.getElementsByClassName('elements');
var display=document.getElementById('onscreen');
var operand1=0;
var operand2=null;
var operator=null;
var prev=null;

for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',function(event){
		var value=this.getAttribute('data-value');
		if(value=='+' || value=='-' || value=='*' || value=='/'){
			operand1=parseFloat(display.textContent);
			display.innerText = '';
			operator=value;
		}
		else if(value=='+/-'){
			display.innerText = -1 * parseFloat(display.textContent);
		}
		else if(value=='AC'){
			display.innerText = '';
		}
		else if(value=='%'){
			operand1=parseFloat(display.textContent);
			display.innerText += value;
			prev='%';
			/*display.innerText=parseFloat(display.textContent) /100;*/
		}
		else if(value=='='){
			if(prev=='%'){
				operand2=100;
				display.innerText=eval(operand1+" "+'/'+" "+operand2);
				prev='=';
				return;
			}
			if(prev=='='){
				display.innerText = parseFloat(display.textContent);
				/*prev=null;*/
				return;
			}
			operand2=parseFloat(display.textContent);
			display.innerText = '';
			var result=eval(operand1+" "+operator+" "+operand2);
			if(result=='Infinity'){
				display.innerText = "Error:Can't Divide by Zero!";
				prev='=';
				return;
			}
			display.innerText = result;
			/*operand1='0';
			operator='+';*/
			prev='=';
		}
		else{
			if(prev=='='){
				display.innerText = value;
				prev=null;
				return;
			}
			prev=null;
			display.innerText += value;
		}
	});
}