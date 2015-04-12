var name;
var dot=0;
/* Validation */

function num_validate(num)
{
	var number = /^([0-9.])+$/;  	
	if(num.match(number))  
      	{  
      		return 0;
      	}  
      	else  
      	{  		
		return 1;
	}
}


function view_name()
{
	name = prompt("Enter Your Name","Team D");
	
	if(name==null)
	{
		document.getElementById('wel_name').innerHTML="Welcome Team D";
		return;
	}
	if(name=="")
	{
		document.getElementById('wel_name').innerHTML="Welcome Team D";
	}
	else
	{
		document.getElementById('wel_name').innerHTML="Welcome "+name;
	}
}

function loading()
{
	var time=new Date();
	var hrs=time.getHours();
	var mint=time.getMinutes();
	var sec=time.getSeconds();	
	/*setInterval(function() {loading()},1000);*/

	var date=new Date();
	var day=date.getDate();
	var month=date.getMonth()+1;
	var year=date.getFullYear();	
	document.getElementById('date').innerHTML="Date :- "+day+"/"+month+"/"+year;
	document.getElementById('time').innerHTML=" Time :- "+hrs+":"+mint+":"+sec;
}

function browser_info()
{

	document.getElementById("cd_name").innerHTML="Browser CodeName: " + navigator.appCodeName;
	document.getElementById("app_name").innerHTML="Browser Name: " + navigator.appName;
	document.getElementById("app_version").innerHTML="Browser Version: " + navigator.appVersion;
	document.getElementById("co_enabled").innerHTML="Cookies Enabled: " + navigator.cookieEnabled;
	document.getElementById("platform").innerHTML="Platform: " + navigator.platform;
	document.getElementById("ua_header").innerHTML="User-agent header: " + navigator.userAgent;
	document.getElementById("ua_language").innerHTML="User-agent language: " + navigator.systemLanguage;
}

function social(number)
{
	switch(number)
	{

		case 1 :
			window.open("http://www.facebook.com" );
			break;

		case 2 :
			window.open("http://www.twitter.com");
			break;

		case 3 :
			window.open("http://www.linkedin.com");
			break;

		case 4 :
			window.open("http://www.google.com");
			break;

	}
}

/* Confirmation */

function confirmExit()
{
	var needToConfirm =true;
	if (needToConfirm)
	{	
		return "Are You Sure?";
	}
}

window.onbeforeunload = confirmExit;

/* reverse link */

function reverse_header()
{
	var rev = name.split("").reverse().join("");
	document.getElementById("wel_name").innerHTML = "Welcome "+rev;
	name = rev;
}
/* background color */
function change_color()
{
	if(document.getElementById("sd").style.backgroundColor=="lightBlue")
	{
		document.getElementById("sd").style.backgroundColor = "black";
	}
	else
	{
		document.getElementById("sd").style.backgroundColor = "lightBlue";
	}
}
/* div color */
function change_table_color()
{
	if(document.getElementById("browser_table").style.backgroundColor == "orange")
	{
		document.getElementById("browser_table").style.backgroundColor = "transparent";	
	}
	else
	{
		document.getElementById("browser_table").style.backgroundColor = "orange";
	}
}
/* quotes */

function quote_display()
{

	var ran = Math.floor((Math.random()*5)+1); 	
	switch(ran)
	{
		case 1:
			document.getElementById("quotes").innerHTML = "AN EYE FOR AN EYE,WILL MAKE WHOLE WORLD BLIND";
			break;
		case 2: 
			document.getElementById("quotes").innerHTML = "Small things amuse small minds.";
			break;
		case 3:
			document.getElementById("quotes").innerHTML = "Time will pass, Will you?";
			break;
		case 4:
			document.getElementById("quotes").innerHTML = "Where there is a will there is a way";
			break;
		case 5:
			document.getElementById("quotes").innerHTML = "Always have CAN DO attitude";
			break;

	}/*
"AN EYE FOR AN EYE,WILL MAKE WHOLE WORLD BLIND"-M.K.GANDHI
	if (document.getElementById("quotes").style.display == "block") 
	{ 
	   	document.getElementById("quotes").style.display = "none"; 	         
	}   	          
	else 	         
	{ 
	  	 document.getElementById("quotes").style.display = "block"; 
	} */
	
}


/* calci*/

function accept_number()
{
	var number = document.getElementById("screen").value;
	result = num_validate(number);
	if(result==0)  
      	{  
		document.getElementById("calc_error").innerHTML = "";     		
      	}  
      	else  
      	{  		
		document.getElementById("calc_error").innerHTML = "Please Enter Numbers only";     
		document.getElementById("screen").value = "";
	}
}

var num=0;
var number1=0, number2=0;
var operator= "+";

function pushButton(number)
{
	document.getElementById("calc_error").innerHTML = "";     			
	if(number==".")
	{
		dot=dot+1;
	}
	if(dot==0 || dot==1 || number!=".")
	{
		if(num==0)
		{
			num=number;
		}
		else
		{
			num = (num + number);
		}
		document.getElementById("screen").value = num;
	}
}

function push(oper)
{
	num = document.getElementById("screen").value ;
	number1 = num;
	operator = oper;
	num = 0;
	dot = 0;
	document.getElementById("screen").value = "";	
}

function calculate()
{
	num = document.getElementById("screen").value ;
	

	var number2 = num;
	var result=0.0;
	
	if(operator=="*")
	{
		 result = (number1 * number2);	
	}
	if(operator=="+")
	{
		 result = (parseFloat(number1) + parseFloat(number2));	
	}
	if(operator=="-")
	{
		 result = (number1 - number2);	
	}
	if(operator=="/")
	{
		if(number2!=0)
		{
			result = (number1 / number2);	
		}
		else
		{
			result = "undefined";
		}
	}
	if(operator=="C")
	{
		document.getElementById("screen").value = "";	
	}
	if(isNaN(num) || num=="")
	{		
		document.getElementById("screen").value = "";	
	}
	else
	{
		document.getElementById("screen").value = result;
	}
	num = 0;		
}

function sin1()
{
	num = document.getElementById("screen").value;
	document.getElementById("screen").value = Math.sin(num);
	num = 0;		
}

function cos1()
{
	num = document.getElementById("screen").value;
	document.getElementById("screen").value = Math.cos(num);	
	num = 0;		
}

function tan1()
{
	num = document.getElementById("screen").value;
	document.getElementById("screen").value = Math.tan(num);	
	num = 0;		
}

/* slideshow */

var i = 0;
var path = new Array();
 
// LIST OF SLIDES
path[0] = "../images/s1.jpg";
path[1] = "../images/s2.jpg";
path[2] = "../images/s3.jpg";
path[3] = "../images/s4.jpeg";
 
function slideshow()
{
	document.slide.src = path[i];
	if(i < path.length - 1) 
	{
		i++; 
	}
	else 
	{
		i = 0;
	}
	setTimeout("slideshow()",5000);
}
