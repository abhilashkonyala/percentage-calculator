var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
 var form =  document.getElementById('formid');

 form.addEventListener('submit',function(event){
if (!num1.value || !num2.value) {
	alert("please enter the values in field");
} else {
	var x = parseFloat(num1.value); 
	var y = parseFloat(num2.value);

	var answer = x / y ;
	var percent = answer * 100 ;

	// alert(percent);

result.innerText = "Result: " + percent + "%" ; 

	 event.preventDefault();
	}

 });
