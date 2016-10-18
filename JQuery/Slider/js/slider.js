$(document).ready(function() {
	var current_image = 0;
	
	showImage(current_image);
	setPointer(current_image);

	setInterval(function() {
		hideImage(current_image);
		current_image++;
		if (current_image > 3)  {
			current_image = 0;
		}
		showImage(current_image);
		setPointer(current_image);
	}, 5000);

	function showImage(image) {
		$(".image" + image).fadeIn("low");
	}

	function hideImage(image) {
		$(".image" + image).fadeOut("low");
	}

	function setPointer(image) {
		$(".pointer .btn").css("background", "#fff");
		$("#btn" + image).css("background", "#000099");
	}

	$(".btn_previous").click(function() {
		hideImage(current_image);
		current_image--;
		if (current_image < 0)  {
			current_image = 3;
		}
		showImage(current_image);
		setPointer(current_image);
	});

	$(".btn_next").click(function() {
		hideImage(current_image);
		current_image++;
		if (current_image > 3)  {
			current_image = 0;
		}
		showImage(current_image);
		setPointer(current_image);
	});

	$.fn.onClick =  function(id) {
		hideImage(current_image);
		setPointer(id);
		showImage(id);
		current_image = id;
	}
});