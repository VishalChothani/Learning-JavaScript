/* Validation */

function str_validate(str)
{
	var letters = /^[A-Za-z]+$/;  	
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
	var number = /^[0-9]+$/;  	
	if(num.match(number))  
      	{  
      		return 0;
      	}  
      	else  
      	{  		
		return 1;
	}
}


/* Display */ 

function var_display()
{
	var number=10;
	alert("The Variable is :- "+number);
}

/* Accept and Display Name */

function select_display()
{
	document.getElementById("accept_name").select();
}

function accept_display()
{
	var user_name = document.getElementById("accept_name").value;	
	var result=0;
	result = str_validate(user_name);
	if(user_name=="Enter Your Name")
	{
		document.getElementById("user_error").innerHTML = "Please Enter Your Name";	
	}	
      	else if(result==0)  
      	{  
		document.getElementById("user_error").innerHTML = "";	
      		alert("The User Name is :- "+user_name);		
      	}  
      	else  
      	{  		
		document.getElementById("user_error").innerHTML = "Please Enter alphabet only";	
	}
}

/* Factorial */

function select_fact()
{
	document.getElementById("accept_factorial").select();
}

function factorial()
{
	var number = document.getElementById("accept_factorial").value;
	var fact=1;
	var result=0;
	result = num_validate(number);
      	if(result!=0)  
      	{  		
		document.getElementById("fact_error").innerHTML = "Please Enter Numbers only";
	}
	else
	{
		for(var i=1;i <= number; i++ )
		{
			fact=fact *i; 
		}	
		document.getElementById("fact_error").innerHTML = "";
		alert("The factorial is :- "+fact);
	}
}

/* Convertion */

function select_con()
{
	document.getElementById("accept_celsius").select();
}

function conversion()
{
	var cel = document.getElementById("accept_celsius").value;
	var fah = (1.8 * cel) + 32;
	var result=0;
	result = num_validate(cel);
      	if(result!=0)  
      	{  		
		document.getElementById("conv_error").innerHTML = "Please Enter Numbers only";
	}
	else
	{
		document.getElementById("conv_error").innerHTML = "";
		document.getElementById("fahrenheit").value = fah;
		document.getElementById("fahrenheit").style.display = "block"; 
	}
}

/* Reverse */

function select_string()
{
	document.getElementById("accept_string").select();
}

function reverse_string()
{
	var str = document.getElementById("accept_string").value;
	var rev = str.split("").reverse().join("");
	var result=0;
	result = str_validate(str);
	if(str=="Enter the String")
	{
		document.getElementById("rev_error").innerHTML = "Please Enter the String";
	}
      	else if(result!=0)  
      	{  		
		document.getElementById("rev_error").innerHTML = "Please Enter the String";
	}
	else
	{
		document.getElementById("rev_error").innerHTML = "";
		document.getElementById("rev").value = rev;
		document.getElementById("rev").style.display = "block"; 
	}
}

/* Length */

function select_length()
{
	document.getElementById("accept_length").select();
}

function length_string()
{
	var str = document.getElementById("accept_length").value;
	var len = str.length;
	var result=0;
	result = str_validate(str);
	if(str=="Enter the String")
	{
		document.getElementById("len_error").innerHTML = "Please Enter the String";
	}
      	else if(result!=0)  
      	{  		
		document.getElementById("len_error").innerHTML = "Please Enter Alphabets only";        		
	}
	else
	{
		document.getElementById("len_error").innerHTML = "";
		document.getElementById("accept_length").value = len;
	}
	
}

/* Today's Day */

function day()
{
	var day = new Date();
	switch(day.getDay())
	{
		case 0 :
			alert("Today is Sunday");	
			break;

		case 1 :
			alert("Today is Monday");	
			break;


		case 2 :
			alert("Today is Tuesday");	
			break;


		case 3 :
			alert("Today is Wednesday");	
			break;


		case 4 :
			alert("Today is Thursday");	
			break;

		case 5 :
			alert("Today is Friday");	
			break;

		case 6 :
			alert("Today is Saturday");	
			break;
	}
}


/* Date Differences */

function select_date()
{
	document.getElementById("set_date").select();
}

function date_diff()
{
	var today=new Date();
	var date=today.getDate();
	var month=today.getMonth()+1;
	var year=today.getFullYear();	

	var t1=date+"-"+month+"-"+year;
	var t2=set_date.value;
	
	var re = /^([0-3]{1})([0-9]{1})-([0-1]{1})([0-9]{1})-([0-9]{4})$/

	var one_day=1000*60*60*24; 

	
	var new_date=t1.split("-");     
	var user_date=t2.split("-");

	var date_today=new Date(new_date[2],(new_date[1]-1),new_date[0]);						  
	var date_user=new Date(user_date[2],(user_date[1]-1),user_date[0])
	diff=Math.ceil((date_today.getTime() - date_user.getTime())/(one_day)); 

	if(t2.match(re))  
      	{  
      		document.getElementById("date_error").innerHTML = "";
		alert("The date entered by you is "+t2+". Today's date is "+t1+". The diffrence between the two dates is "+diff+" days.");
      	}  
      	else  
      	{  		
      		document.getElementById("date_error").innerHTML = "Please Enter in right Format (dd-mm-yyyy)";
	}

}

/* Confirmation */

function select_fname()
{
	document.getElementById("first_name").select();
}
function select_mname()
{
	document.getElementById("middle_name").select();
}
function select_lname()
{
	document.getElementById("last_name").select();
}

function confirmation()
{
	var first_name = document.getElementById("first_name").value;
	var result=0;
	result = str_validate(first_name);
	if(first_name=="Enter First Name")
	{
      		document.getElementById("first_error").innerHTML = "Please Enter First Name";
	}
      	else if(result!=0)  
      	{  		
      		document.getElementById("first_error").innerHTML = "Please Enter Alphabets only for First name";
	}
	else
	{
      		document.getElementById("first_error").innerHTML = "";
		var middle_name = document.getElementById("middle_name").value;
		result = str_validate(middle_name);
		if(middle_name=="Enter Middle Name")
		{
			document.getElementById("middle_error").innerHTML = "Please Enter Middle Name";
		}
	      	else if(result!=0)  
	      	{  		
	      		document.getElementById("middle_error").innerHTML = "Please Enter Alphabets only for Middle name";
		}
		else
		{
	      		document.getElementById("middle_error").innerHTML = "";
			var last_name = document.getElementById("last_name").value;
			result = str_validate(last_name);
			if(last_name=="Enter Last Name")
			{
				document.getElementById("last_error").innerHTML = "Please Enter Last Name";
			}
		      	else if(result!=0)  
		      	{  		
		      		document.getElementById("last_error").innerHTML = "Please Enter Alphabets only for Last name";
			}
			else
			{
				var company_name = prompt("Enter Your company name");
				if(company_name==null)
				{
					return;
				}
				result = str_validate(company_name);
				if(result==1)  
			      	{  					
			      		alert("Please Enter Alphabets only");		
			      	}  
			      	else  
			      	{  		
					var con = confirm("Do you want to go with "+ company_name);
					if(con==true)
					{		
						alert(first_name+" works with "+company_name+" company");
				      		document.getElementById("last_error").innerHTML = "";
					}
					else 
					{
						return;
					}
				}
			}
		}
	}
}

/* Concepts */

function select_num()
{
	document.getElementById("number").select();
}

function prime_num()
{
	var num = document.getElementById("number").value;
	var flag=0;
	var result=0;
	result = num_validate(num);
      	if(result!=0)  
      	{  		
		document.getElementById("radio_error").innerHTML = "Please Enter Numbers only";
	}
	else
	{
		document.getElementById("radio_error").innerHTML = "";
		if (num==1)
		{
			alert("1 neither prime nor composite");
		}
		else
		{	
			for(i=2;i<num;i++)
			{
				if(num%i==0)
				{
					flag=0;
					break;
				}
				else
				{
					flag=1;
				}
			}
			if(flag==1)
			{
				alert("The number is prime");
			}
			else
			{
				alert("The number is not prime");
			}
		}
	}
}

function arm_num()
{
	var arm_num = document.getElementById("number").value;
	var arm_num1 = document.getElementById("number").value;
	var arm_rem, arm_cube, arm_total=0;
	
	var result=0;
	result = num_validate(arm_num);
      	if(result!=0)  
      	{  		
		document.getElementById("radio_error").innerHTML = "Please Enter Numbers only";       		
	}
	else
	{
		document.getElementById("radio_error").innerHTML = "";
		while(arm_num !=0)
		{
			arm_rem = arm_num%10;
			arm_total = arm_total + arm_rem * arm_rem * arm_rem;
	  	        arm_num = arm_num/10;
			arm_num = parseInt(arm_num); 
		}
		if(arm_total == arm_num1)
		{		
			alert("Number is Armstrong");
		}

		else
		{		
			alert("Number is Not Armstrong");
		}
	}
}

function pal_num()
{
	var pal_str = document.getElementById("number").value;
	
	var i=0;
	var text="";

	var result=0;
	result = num_validate(pal_str);
      	if(result!=0)  
      	{  		
		document.getElementById("radio_error").innerHTML = "Please Enter Numbers only";     		
	}
	else
	{
		document.getElementById("radio_error").innerHTML = "";
		for (i = 0; i <= pal_str.length; i++)
		text = pal_str.substring(i, i+1) + text;
		if(pal_str==text)
		{
			alert("The entered string is a palindrome");
		}
		else
		{
			alert("The entered string is not a palindrome");
		}
	}
}

function tables()
{
	var tables=document.getElementById("number").value;
	var i, j, total;
	
	var result=0;
	result = num_validate(tables);
      	if(result!=0)  
      	{  		
		document.getElementById("radio_error").innerHTML = "Please Enter Numbers only";
		return false;
	}
	else
	{
		document.write("<h2 align='Center'>Multiplication Table of " +tables);
		for(i=1;i<=10;i++)
		{
			document.write("<p>"); 
			total=tables * i;
			total= tables +" * "+ i + " = " + total; 
			document.write(total);
		}
		document.write("</p>");
		window.open("js_asg1.html" );
		//document.write("<a href=js_asg1.html target=_blank align=center>Home Page</a></h2>");
	}

}
