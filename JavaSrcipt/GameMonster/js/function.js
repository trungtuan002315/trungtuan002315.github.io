var canvas = document.getElementById("canvas");
var header = document.getElementById("header");
var context = canvas.getContext("2d");
var contextAction = header.getContext("2d");
document.body.appendChild(canvas);
var background = false;
var speed = 1;
var run = true;
var heart = 3;
var booleanStop = false;
var booleanPause = false;
var booleanBoom = true;
var countClick = 0;
var numberBoom = 3;
var numberStop = 3;
var numberMonster = 1;
var bestScore = 10;
var tempScore = 10
var score = 20;
var listBlood = new Array();
var imgMonster = new Image();
			
if (typeof(Storage) !== "underfined"){
	localStorage.setItem( "bestScore",bestScore);
}

// draw image monster
imgMonster.onload = function() {
}
imgMonster.src = "images/vit.png";
			
// draw image background
var imgBackGround = new Image();
imgBackGround.onload = function() {
	background = true;
}
imgBackGround.src = "images/background.jpg";
			
//draw images boom
var imgBoom = new Image();
imgBoom.onload = new function() {
}
imgBoom.src = "images/boom.gif";
			
//draw image heart
var imgHeart = new Image();
imgHeart.onload = new function() {
}
imgHeart.src = "images/heart.png";
			
//draw image blood
var imgBlood = new Image();
imgHeart.onload = new function() {
}
imgBlood.src = "images/blood.png";
			
//draw image button pause
var imgPause = new Image();
imgPause.onload = new function() {
}
imgPause.src = "images/pause.png";
			
// draw image button restart
var imgRestart = new Image();
imgRestart.onload = new function() {
}
imgRestart.src = "images/restart.png";
			
// draw image button stop
var imgStop = new Image();
imgStop.onload = new function() {
}
imgStop.src = "images/stop.png";
			
// draw monsterOne -> monsterNight
var monsterOne = {
	beginX: 0,
	beginY: 0,
	endX: 120,
	endY: 120,
	startX: 0,
	startY: 0,
	stopX: 120,
	stopY: 120,
	speed: speed,
	click: false,
	show: true,
	dieX: 0,
	dieY:0
}
var monsterTow = {
	beginX: 190,
	beginY: 0,
	endX: 190,
	endY: 120,
	startX: 190,
	startY: 0,
	stopX: 190,
	stopY: 120,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterThree = {
	beginX: 380,
	beginY: 0,
	endX: 260,
	endY: 120,
	startX: 380,
	startY: 0,
	stopX: 260,
	stopY: 120,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterFour = {
	beginX: 380,
	beginY: 190,
	endX: 380,
	endY: 120,
	startX: 380,
	startY: 120,
	stopX: 380,
	stopY: 120,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterFive = {
	beginX: 380,
	beginY: 380,
	endX: 260,
	endY: 260,
	startX: 380,
	startY: 380,
	stopX: 260,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterSix = {
	beginX: 190,
	beginY: 380,
	endX: 190,
	endY: 260,
	startX: 190,
	startY: 380,
	stopX: 190,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterSeven = {
	beginX: 0,
	beginY: 380,
	endX: 120,
	endY: 260,
	startX: 0,
	startY: 38,
	stopX: 120,
	stopY: 260,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterEight = {
	beginX: 0,
	beginY: 190,
	endX: 120,
	endY: 190,
	startX: 0,
	startY: 380,
	stopX: 120,
	stopY: 190,
	speed: speed,
	click: false,
	show: false,
	dieX: 0,
	dieY:0
}
var monsterCenter = {
	startX: Math.floor((Math.random() * 500) +1),
	startY: Math.floor((Math.random() * 500) +1),
	stopX: Math.floor((Math.random() * 500) +1),
	stopY: Math.floor((Math.random() * 500) +1),
	speed: 1,
	click: false,
	show: true,
	dieX: 0,
	dieY: 0
}

			//event onClick monster 
canvas.addEventListener("click", function(e){
	locationX = e.pageX - this.offsetLeft;
	locationY = e.pageY - this.offsetTop;
	if (!booleanPause) {
		score -= 5;
		tempScore -= 5;
		heart--;
		if (monsterOne.show) {
			executeAction(monsterOne, locationX, locationY);
		}
		if (monsterTow.show) {
			executeAction(monsterTow, locationX, locationY);
		}
		if (monsterThree.show) {
			executeAction(monsterThree, locationX, locationY);
		}
		if (monsterFour.show) {
			executeAction(monsterFour, locationX, locationY);
		}
		if (monsterFive.show) {
			executeAction(monsterFive, locationX, locationY);
		}
		if (monsterSix.show) {
			executeAction(monsterSix, locationX, locationY);
		}
		if (monsterSeven.show) {
			executeAction(monsterSeven, locationX, locationY);
		}
		if (monsterEight.show) {
			executeAction(monsterEight, locationX, locationY);
		}
		if (monsterCenter.show && monsterCenter.startX < locationX && locationX < (monsterCenter.startX + imgMonster.width) && monsterCenter.startY < locationY && locationY < (monsterCenter.startY + imgMonster.height)) {
			heart++;
			score += 15;
			tempScore += 15;
			countClick++;
			monsterCenter.click = true;
			monsterCenter.show = false;
			monsterCenter.dieX = monsterCenter.startX;
			monsterCenter.dieY = monsterCenter.startY;
			monsterCenter.startX = Math.floor((Math.random() * 500) + 1);
			monsterCenter.startY = Math.floor((Math.random() * 500) + 1);
			monsterCenter.stopX = Math.floor((Math.random() * 500) + 1);
			monsterCenter.stopY = Math.floor((Math.random() * 500) + 1);
			addElementBlood(monsterCenter.dieX, monsterCenter.dieY);
		}
	}
	if(booleanStop) {
		if(monsterOne.show) {
			executeActionStop(monsterOne, locationX, locationY);
		}
		if(monsterTow.show) {
			executeActionStop(monsterTow, locationX, locationY);
		}
		if(monsterThree.show) {
			executeActionStop(monsterThree, locationX, locationY);
		}
		if(monsterFour.show) {
			executeActionStop(monsterFour, locationX, locationY);
		}
		if(monsterFive.show) {
			executeActionStop(monsterFive, locationX, locationY);
		}
		if(monsterSix.show) {
			executeActionStop(monsterSix, locationX, locationY);
		}
		if(monsterSeven.show) {
			executeActionStop(monsterSeven, locationX, locationY);
		}
		if(monsterEight.show) {
			executeActionStop(monsterEight, locationX, locationY);
		}
		if(monsterCenter.show) {
			executeActionStop(monsterCenter, locationX, locationY);
		}
	}
}, false);

// event button onClick Stop, Pause, Restart, Bomm	
header.addEventListener("click", function(e) {
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageY - this.offsetTop;

	// Button Pause
	if(locationX > 400 && locationX < 440 && locationY > 60 && locationY < 100) {
		 booleanStop = false;
		 if (run) {
		 	run = false;
		 	booleanPause = true;
		 } else {
		 	run = true;
		 	main();
		 	booleanPause = false;
		 }
	}
	// Button Restart
	if (locationX > 450 && locationX < 490 && locationY > 60 && locationY < 100) {
		context.clearRect(0, 0, canvas.width, canvas.height);
		restart();
		main();

	}

	// Button Boom
	if (locationX > 290 && locationX < 340 && locationY > 60 && locationY < 100) {
		if (booleanBoom) {
			executeActionBoom();
			numberBoom--;
			if (numberBoom <= 0) {
				booleanBoom = false;
			}
		}

	}

	// Button Stop
	if (locationX > 350 && locationX < 390 && locationY > 60 && locationY < 100) {
		booleanPause = false;
		if (numberStop > 0) {
			if (run) {
				run = false;
				booleanStop = true;
				numberStop--;
			} else {
				run = true;
				main();
				booleanStop = false;
			}
			setTimeout(function() {
				run = true;
				main();
				booleanStop = false;
			}, 2000)
		} else {
			run = true;
			main();
			booleanStop = false;
		}
	}
});

// event onClick canvas
var executeAction = function(monster, locationX, locationY) {
	if (monster.click) {
		if (monster.startX < locationX &&  locationX < (monster.startX + imgMonster.width) && monster.startY < locationY && locationY < (monster.startY + imgMonster.height)){
			countClick ++;
			heart++;
			if (countClick == 30){
				heart ++;
				countClick = 0;
			}
			if (countClick % 5 == 0){
				monsterCenter.show = true;
			}
			score += 15;
			tempScore += 15;
			monster.click = false;
			monster.show = false;
			monster.dieX = monster.startX;
			monster.dieY = monster.startY;
			monster.startX = monster.beginX;
			monster.startY = monster.beginY;
			monster.stopX = monster.endX;
			monster.stopY = monster.endY;
			for (var i = 0; i < numberMonster; i++) {
				random();
			}
			addElementBlood(monster.dieX, monster.dieY)
			render();
		}
	}
}
// event onClick Stop
var executeActionStop = function(monster, locationX, locationY) {
	if(monster.click) {
		if(monster.startX < locationX && locationX < (monster.startX +imgMonster.width) && monster.startY < locationY && locationY < (monster.startY + imgMonster.height)) {
			score += 10;
			tempScore += 10;
			monster.click = false;
			monster.show = false;
			monster.dieX = monster.startX;
			monster.dieY = monster.startY;
			monster.startX = monster.beginX;
			monster.startY = monster.beginY;
			monster.stopX = monster.endX;
			monster.stopY = monster.endY;
			addElementBlood(monster.dieX, monster.dieY);
			render();
			random();
		}
	}
}
			
// check num_moster and speed for tempScore
var executeLever = function() {
	var temp = tempScore / 100;
	switch (parseInt(temp)) {
		case 1:
		speed = 1;
		numberMonster = 1;
		break;
		
		case 2:
		speed = 1;
		numberMonster = 2;
		break;
			
		case 3:
		speed = 2;
		numberMonster = 3;
		break;
					
		case 4:
		speed = 2;
		numberMonster = 4;
		break;
					
		case 5:
		speed = 3;
		numberMonster = 5;
		break;
			
		case 6:
		speed = 3;
		numberMonster = 6;
		break;
		case 7:
		speed = 4;
		numberMonster = 7;
		break;
		case 8:
		speed = 4;
 		numberMonster = 8;
		break;
	}
}
// update monster
var updateMonster = function(monster) {
	monster.click = true;
	if(monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if(monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}
	if(monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if(monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}
	if(monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = monster.beginX;
		monster.startY = monster.beginY;
	}
	if(monster.startX == monster.beginX && monster.startY == monster.beginY){
		monster.show = false;
		monster.stop = true;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		score -= 10;
		heart --;
		random();
	}
}

// random numbers show
var random = function() {
	if (!monsterOne.show){
		refreshMonster(monsterOne);
	}
	if (!monsterTow.show){
		refreshMonster(monsterTow);
	}
	if (!monsterThree.show){
		refreshMonster(monsterThree);
	}
	if (!monsterFour.show){
		refreshMonster(monsterFour);
	}
	if (!monsterFive.show) {
		refreshMonster(monsterFive);
	}
	if (!monsterSix.show) {
		refreshMonster(monsterSix);
	}
	if (!monsterSeven.show) {
		refreshMonster(monsterSeven);
	}
	if (!monsterEight.show) {
		refreshMonster(monsterEight);
	}
	var value = Math.floor((Math.random() * 8) +1);
	switch(value) {
		case 1:
		if (!monsterOne.show) {
			monsterOne.show = true;
		}
		break;
		case 2:
		if(!monsterTow.show) {
			monsterTow.show = true;
		}
		break;
		case 3:
		if (!monsterThree.show){
			monsterThree.show = true;
		}
		break;
		case 4:
		if (!monsterFour.show) {
			monsterFour.show = true;
		}
		break;
		case 5:
		if (!monsterFive.show) {
			monsterFive.show = true;
		}
		break;
		case 6:
		if(!monsterSix.show) {
			monsterSix.show = true;
		}
		break;
		case 7:
		if(!monsterSeven.show) {
			monsterSeven.show = true;
		}
		break;
		case 8:
		if (!monsterEight.show) {
			monsterEight.show = true;
		}
		break;
	}
}
var refreshMonster = function(monster) {
	monster.show = false;
	monster.startX = monster.beginX;
	monster.startY = monster.beginY;
	monster.stopX = monster.endX;
	monster.stopY = monster.endY;
	monster.speed = speed;
}

// event blood after onClick monster
var addElementBlood = function(initX, initY){
	var Blood = {
		initX: initX,
		initY: initY
	}
	listBlood[listBlood.length] = Blood;
}

// update blood 
var updateBlood = function() {
	if(listBlood.length > 0) {
		for (var i = 0; i < listBlood.length; i++) {
			context.drawImage(imgBlood, listBlood[i].initX, listBlood[i].initY);
		}
	}
}

// update monsterCenter 
var updateMonsterCenter = function (monster) {
	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if (monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}
	if (monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if (monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}
					
	if (monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = Math.floor((Math.random() * 500) + 1);
		monster.stopY = Math.floor((Math.random() * 500) + 1);
		}
}

// daw monster, back, 
var render = function() {
	if(background) {
		context.drawImage(imgBackGround, 0, 0, canvas.width, canvas.height);
	}
	updateBlood();
	if (monsterOne.show) {
		context.drawImage(imgMonster, monsterOne.startX, monsterOne.startY);
	}
	if (monsterTow.show) {
		context.drawImage(imgMonster, monsterTow.startX, monsterTow.startY);
	}
	if (monsterThree.show) {
		context.drawImage(imgMonster, monsterThree.startX, monsterThree.startY);
	}
	if (monsterFour.show) {
		context.drawImage(imgMonster, monsterFour.startX, monsterFour.startY);
	}
	if (monsterFive.show) {
		context.drawImage(imgMonster, monsterFive.startX, monsterFive.startY);
	}
	if (monsterSix.show) {
		context.drawImage(imgMonster, monsterSix.startX, monsterSix.startY);
	}
	if (monsterSeven.show) {
		context.drawImage(imgMonster, monsterSeven.startX, monsterSeven.startY);
	}
	if (monsterEight.show) {
		context.drawImage(imgMonster, monsterEight.startX, monsterEight.startY);
	}
	if (monsterCenter.show) {
		updateMonsterCenter(monsterCenter);
		context.drawImage(imgMonster, monsterCenter.startX, monsterCenter.startY);
	}
	contextAction.clearRect( 0, 0, header.width, header.height);
	contextAction.fillStyle = "rgb(29, 214, 4)";
	contextAction.font = "20px Arial";
	contextAction.fillText("Score: " + score, 10, 30);
	contextAction.fillText("Random: " + numberMonster, 300, 30);
	contextAction.fillText("Heart: " , 10, 60);
	contextAction.fillText("Speed: " + speed, 10, 90);
	var temp = 0;
	for (var i = 0; i < heart; i++) {
		contextAction.drawImage(imgHeart, (70+temp), 45, 20, 20);
		temp += 20;
	}
	contextAction.drawImage(imgBoom, 290, 60, 50, 40);
	contextAction.drawImage(imgStop, 350, 60, 40, 40);
	contextAction.drawImage(imgPause, 400, 60, 40, 40);
	contextAction.drawImage(imgRestart, 450, 60, 40, 40);
	contextAction.fillStyle= "#FFFFFF";
	contextAction.font = "35px Arial";
	contextAction.fillText(numberBoom, 300, 75);
	contextAction.fillText(numberStop, 360, 75);
	if (booleanStop) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Stop", 180, 240);
	}
	if (booleanPause) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Pause", 180, 240);
	}
}

			// draw event actionBoom 
var executeActionBoom = function() {
	if (monsterOne.show) {
		score += 10;
		monsterOne.show = false;
		monsterOne.click = false;
		addElementBlood(monsterOne.startX, monsterOne.startY);
	}
	if (monsterTow.show) {
		score += 10;
		monsterTow.show = false;
		monsterTow.click = false;
		addElementBlood(monsterTow.startX, monsterTow.startY);
	}
	if (monsterThree.show) {
		score += 10;
		monsterThree.show = false;
		monsterThree.click = false;
		addElementBlood(monsterThree.startX, monsterThree.startY);
	}
	if (monsterFour.show) {
		score += 10;
		monsterFour.show = false;
		monsterFour.click = false;
		addElementBlood(monsterFour.startX, monsterFour.startY);
	}
	if (monsterFive.show) {
		score += 10;
		monsterFive.show = false;
		monsterFive.click = false;
		addElementBlood(monsterFive.startX, monsterFive.startY);
	}
	if (monsterSix.show) {
		score += 10;
		monsterSix.show = false;
		monsterSix.click = false;
		addElementBlood(monsterSix.startX, monsterSix.startY);
	}
	if (monsterSeven.show) {
		score += 10;
		monsterSeven.show = false;
		monsterSeven.click = false;
		addElementBlood(monsterSeven.startX, monsterSeven.startY);
	}
	if (monsterEight.show) {
		score += 10;
		monsterEight.show = false;
		monsterEight.click = false;
		addElementBlood(monsterEight.startX, monsterEight.startY);
	}
	if (monsterCenter.show) {
		score += 10;
		monsterCenter.show = false;
		monsterCenter.click = false;
		addElementBlood(monsterCenter.startX, monsterCenter.startY);
	}
	speed = speed;
	render();
	for (var i = 0; i < numberMonster; i++) {
		random();
	}
}

			// event restart
var restart = function() {
	speed = 1;
	run = true;
	score = 10;
	heart = 3;
	background = true;
	numberMonster = 1;
	numberStop = 3;
	numberBoom = 3;
	tempScore = 10;
	booleanPause = false;
	booleanStop = false;
	booleanBoom = true;
	listBlood = new Array();
	refreshMonster(monsterOne);
	refreshMonster(monsterTow);
	refreshMonster(monsterThree);
	refreshMonster(monsterFour);
	refreshMonster(monsterFive);
	refreshMonster(monsterSix);
	refreshMonster(monsterSeven);
	refreshMonster(monsterEight);
	monsterOne.show = true;
}

// main running
var main = function() {
	executeLever();
	if (monsterOne.show) {
		updateMonster(monsterOne);
	}
	if (monsterTow.show) {
		updateMonster(monsterTow);
	}
	if (monsterThree.show) {
		updateMonster(monsterThree);
	}
	if (monsterFour.show) {
		updateMonster(monsterFour);
	}
	if (monsterFive.show) {
		updateMonster(monsterFive);
	}
	if (monsterSix.show) {
		updateMonster(monsterSix);
	}
	if (monsterSeven.show) {
		updateMonster(monsterSeven);
	}
	if (monsterEight.show) {
		updateMonster(monsterEight);
	}
	render();
	if (heart == 0) {
		var temp = parseInt(localStorage.getItem("bestScore"));
		if (temp < score) {
			localStorage.setItem("bestScore", score);
		}
		context.fillStyle = "#FFFFFF";
		context.font = "40px Arial";
		context.fillText("Game Over", 130, 200);
		context.font = "20px Arial";
		context.fillStyle = "#5bfa3f";
		context.fillText("Score = " + score, 130, 240);
		context.fillText("Best score = " + localStorage.getItem("bestScore"), 130, 280);
		} else {
		if (run) {
			requestAnimationFrame(main);
		}
	}
}
//main run
main();