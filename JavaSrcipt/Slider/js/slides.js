var image_list = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var position = 0;
var image = image_list[position];
var index;

createHTML();

//add images from index
function dawImage(img) {
	document.write("<div>");
	document.write("<img id='img' src='" + img + "' alt='" + img + "'>");
	document.write("</div>");
}
//add previous form index
function dawPrevious() {
	document.write("<div>");
	document.write("<img src='images/previous.png' alt='previous' class='next_pre' id='pre' onclick='getPrevious();' ");
	document.write("</div>");
}
//add previous form index
function dawNext() {
	document.write("<div>");
	document.write("<img src='images/next.png' alt='previous' class='next_pre' id='next' onclick='getNext();'> ");
	document.write("</div>");
}
//add previous form index
function dawIndexItem() {
	document.write("<div id='index'>");
	for (var i = 0; i < image_list.length; i++) {
		document.write("<div class='item' id='item" + i + "' onclick='onclickItem(" + i + ");'></div>");
		document.getElementById("item" + i).style.background = "#b3b3ff";
		document.getElementById("item" + 0).style.background = "#3333ff";
	};
	document.write("</div>");
}
 
 //back images
function getPrevious() {
	document.getElementById("item" + position).style.background = "#b3b3ff";
	position--;
	if(position < 0) {
		position = image_list.length - 1;
	}
	document.getElementById("item" + position).style.background = "#3333ff"	;
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

//next images
function getNext() {
	document.getElementById("item" + position).style.background = "#b3b3ff";
	position++;
	if (position > 3) {
		position = 0;
	}
	document.getElementById("item" + position).style.background = "#3333ff"	;
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

//choose images 
function onclickItem(current_position) {
	position = current_position;
	document.getElementById("item" + position).style.background = "#3333ff";	
	for(var i = 0; i < image_list.length; i++) {
		if (i != current_position) {
				document.getElementById("item" + i).style.background = "#b3b3ff";
		}
	}
	image = image_list[position];
	document.getElementById("img").src = image;
	document.getElementById("img").alt = image;
}

//create contructor html 
function createHTML() {
	document.write("<div class='slider'>");
	dawImage(image);
	dawPrevious();
	dawNext();
	dawIndexItem();
	document.write("</div>");
}
// tiem out
setInterval(getNext, 3000);