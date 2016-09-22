var check = true;
function hide1() {
	if(check == true) {
		document.getElementById("content1").style.display = "none";
		document.getElementById("img1").src = "images/top2.gif";
	} else {
		document.getElementById("content1").style.display = "block";
		document.getElementById("img1").src = "images/top.gif";
	}
	check = !check;
}
function hide2() {
	if(check) {
		document.getElementById("content2").style.display = "none";
		document.getElementById("img2").src = "images/top2.gif";
	} else {
		document.getElementById("content2").style.display = "block";
		document.getElementById("img2").src = "images/top.gif";	
		
	}
	check=!check;
}
function hide3() {
	if(check) {
		document.getElementById("content3").style.display = "none";
		document.getElementById("img3").src = "images/top2.gif";
	} else {
		document.getElementById("content3").style.display = "block";
		document.getElementById("img3").src = "images/top.gif";
		
	}
	check = !check;
}