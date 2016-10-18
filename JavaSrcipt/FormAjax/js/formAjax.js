function checkUserName() {
	var username = document.getElementById("username").value;
	if (username.length <= 8) {
		document.getElementById('error_name').innerHTML = "Username phải lớn hơn 8 kí tự";
	} else {
		document.getElementById('error_name').innerHTML = "";
		return true;
	}
}

function checkPassWord() {
	var password = document.getElementById("password").value;
		if (password.length <= 8) {
			document.getElementById('error_pass').innerHTML = "Password phải lớn hơn 8 kí tự";
		} else {
			document.getElementById('error_pass').innerHTML = "";
			return true;
		}
	
}
function checkEmail() {
	var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;	
	var email    = document.getElementById("email").value;
		if (reg_mail.test(email)) {
			document.getElementById('error_email').innerHTML = "";
		 	return true;
		} else {
		 	document.getElementById('error_email').innerHTML = "Vui lòng nhập đúng format abc@gmail.com";
		}
	


}
function checkBrithday() {
	var date  = document.getElementById("output").value;
		if (date.length > 0) {
			document.getElementById('error_output').innerHTML = "";
		 	return true;
		} else {
		 	document.getElementById('error_output').innerHTML = "Vui lòng nhập đúng format dd/mm/yyyy";
		}
}

function xyly(url) {
	checkUserName();
	checkPassWord();	
	checkEmail();
	checkBrithday();
	if (checkUserName() && checkPassWord() && checkEmail() && checkBrithday()) {
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
				alert(xmlhttp.responseText);
			}
		};
		var username = document.getElementById("username").value;
		var data = "?user=" + username;
		url += data;
		xmlhttp.open("GET", url, true);
		xmlhttp.send()
	}

}