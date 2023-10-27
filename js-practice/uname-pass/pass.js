let uname = prompt("Enter Username: ");

if (uname == "Admin" ) {
	let pw = prompt("Enter Password: ");
	if (pw == "TheMaster"){
		alert("Welcome!");
	} else if (pw == ('' || null)){
			alert("Canceled");
	} else{
			alert("Wrong password");
		}
		
} else if (uname == ("" || null)){
	alert("Canceled");
} else {
	alert("I Don't know you");
}
