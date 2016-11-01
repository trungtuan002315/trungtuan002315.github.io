$(document).ready(function() {
	// get index start = 0
	var current_image = 0;
	
	//hien thi hinh dau tien
	showImage(current_image);
	
	//diem dau tien
	setPointer(current_image);

	//chuyen hinh sao thoi gian 5000
	setInterval(function() {
		hideImage(current_image);
		current_image++;
		if (current_image > 3)  {
			current_image = 0;
		}
		showImage(current_image);
		setPointer(current_image);
	}, 5000);

	// hien thi hinh
	function showImage(image) {
		$(".image" + image).show("low");
	}
	//show hinh anh
	function hideImage(image) {
		$(".image" + image).hide("low");
	}

	//thay doi diem 
	function setPointer(image) {
		$(".pointer .btn").css("background", "#fff");
		$("#btn" + image).css("background", "#000099");
	}

	// event previous
	$(".btn_previous").click(function() {
		hideImage(current_image);
		current_image--;
		if (current_image < 0)  {
			current_image = 3;
		}
		showImage(current_image);
		setPointer(current_image);
	});

	// event next
	$(".btn_next").click(function() {
		hideImage(current_image);
		current_image++;
		if (current_image > 3)  {
			current_image = 0;
		}
		showImage(current_image);
		setPointer(current_image);
	});

	// event onlick index
	$.fn.onClick =  function(id) {
		hideImage(current_image);
		setPointer(id);
		showImage(id);
		current_image = id;
	}
});