/* Validation */
var name_result = 1;
var result = 1;
var result1 = 1;
function str_validate(str)
{
	var letters = /^[A-Za-z\s]+$/;  	
	if(str.match(letters))  
      	{  
      		return 0;
      	}  
      	else  
      	{  		
		return 1;
	}
}

function num_validate(num)
{
	var number = /^([0-9]{10})$/;  	
	if(num.match(number))  
      	{  
      		return 0;
      	}  
      	else  
      	{  		
		return 1;
	}
}

function email_validate(e)
{
	var eid = /[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
	if(e.match(eid))  
      	{  
      		return 0;
      	}  
      	else  
      	{  		
		return 1;
	}
}



function accept_name()
{
	var user = document.getElementById("user_name").value;	
	name_result = str_validate(user);
	if(name_result==0)  
      	{  
		document.getElementById("name_error").innerHTML = "";     
      	}  
      	else  
      	{  		
		document.getElementById("name_error").innerHTML = "Please Enter alphabet characters only";     
	}
}

function accept_number()
{
	var number = document.getElementById("phone_no").value;	
	result1 = num_validate(number);
	if(result1==0)  
      	{  
		document.getElementById("phone_error").innerHTML = "";     
      	}  
      	else  
      	{  		
		document.getElementById("phone_error").innerHTML = "Please Enter valid Mobile Numbers";     
	}
}

function accept_email()
{
	var e = document.getElementById("email").value;	
	result = email_validate(e);
	if(result==0)  
      	{  
		document.getElementById("email_error").innerHTML = "";     
      	}  
      	else  
      	{  		
		document.getElementById("email_error").innerHTML = "Please Enter Valid ID";     
	}
}



function validate()
{
	if(name_result==1)
	{
		document.getElementById("form_error").innerHTML = "Please fill all the mandatory fields";
		return false;	
	}
	else
	{
		if(result==1)
		{
			document.getElementById("form_error").innerHTML = "Please fill all the mandatory fields";
			return false;	
		} 
		else
		{
			if(result1==1)
			{
				document.getElementById("form_error").innerHTML = "Please fill all the mandatory fields";
				return false;	
			}
			else
			{
				document.getElementById("form_error").innerHTML = "";
				window.location.href = "../html/home.html";
			}
		}
	}
}

