function getRequest()
{
	var ajaxRequest;
	
	try
	{//Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	}
	
	catch(e)
	{
		try
		{//Some versions of IE
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}		
			catch(e)
			{
				try
				{//Other versions of IE
					ajaxRequest = newActiveXObject("Microsoft.XMLHTTP");
				}
					catch (e)
					{
						alert("You are using an outdated browser" + 
							  " that doesn't support this website");
							return false;
					}
			}
	}
	return ajaxRequest
}

function submitOnEnter(e)
{
    if(window.event) {e = window.event;}
    if(e.keyCode == 13)
    {
        submitMessage();
    }
}

function submitMessage()
{
    var message = document.getElementById('message').value;
    if(message == "")
    {
        return;
    }
    
    message = message + "<br/>";
    
    var ajaxRequest = getRequest();
    
    ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
		{   
			//getMessages();
		}
	};
    
	var rand = Math.round(99999999999*Math.random());
	ajaxRequest.open("GET", "sendMessage.php?msg=" + message +"&rand=" + rand, true);
	ajaxRequest.send(null);
	document.getElementById('message').value = "";
}

function getMessages()
{
    var ajaxRequest = getRequest();
    ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
		{   
			document.getElementById('messages').innerHTML = ajaxRequest.responseText;
			updateMessages();
		}
	};
		
	var rand = Math.round(99999999999*Math.random());
	ajaxRequest.open("GET", "getMessages.php?rand=" + rand, true);
	ajaxRequest.send(null);
}

function updateMessages()
{
    setTimeout(getMessages, 50);
}