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

function login()
{
	var email_id = document.getElementById("select_email").value;	
	var pwd = document.getElementById("password").value;	
	if(email_id=="") 
	{

		document.getElementById("email_error").innerHTML = "Please Enter Email ID" ;
		//return false;
		if(pwd=="")
		{
			document.getElementById("pass_error").innerHTML ="Please Enter Password";
			alert(pwd);

			return false;
		}
	}
	if(email_id!="")
	{
		var val = email_validate(email_id);
		if(val==1)
		{
			document.getElementById("email_error").innerHTML ="Please Enter Valid Email";
			return false;
		}
		else
		{
			document.getElementById("email_error").innerHTML ="";
		}
	}
	if(email_id!="" && pwd=="")
	{
		document.getElementById("pass_error").innerHTML ="Please Enter Password";
		document.getElementById("email_error").innerHTML ="";
		return false;
	}
	else if(email_id=="admin@admin.com" && pwd=="admin")
	{			
		document.getElementById("email_error").innerHTML ="";
		document.getElementById("pass_error").innerHTML ="";
		window.location.href = "../html/home.html";
	}
	else
	{
		document.getElementById("email_error").innerHTML ="";
		document.getElementById("pass_error").innerHTML ="";
		window.location.href = "../html/error.html";
		return false;
	}

}


