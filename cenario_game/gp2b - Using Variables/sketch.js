/*

The Game Project

2b - using variables

*/


var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;

var cloudX = 67;
var cloudY = 81;
var speed= 20;

var cloud2X= 275;
var cloud2Y = 114;
var cloud2Speed= 10;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
}

function draw()
{
	//------>>>>> CEU <<<<<----------

	function drawCloud(cloudX, cloudY){
		noStroke();
		fill(200, 0, 0)
		ellipse(cloudX +30, cloudY, 40, 40);
		ellipse(cloudX, cloudY, 50, 30);
		ellipse(cloudX +50, cloudY -5, 60, 25);
	}

	function drawCloud2(cloudX, cloudY){
		noStroke();
		fill(200, 0, 0)
		ellipse(cloudX +30, cloudY, 40, 40);
		ellipse(cloudX, cloudY, 50, 30);
		ellipse(cloudX +50, cloudY -5, 60, 25);
	}


	background(100, 155, 255); //fill the sky blue

	colorMode(RGB, 255);

	for (let y = 0; y < 576; y += 1) { // Varre verticalmente
		let t = map(y, 0, 576, 0, 1); // Gradiente vertical
		let r = lerp(20, 255, t);     // Vermelho: baixo -> forte
		let g = lerp(60, 150, t);     // Verde: meio tom
		let b = lerp(255, 100, t);    // Azul: forte -> fraco

		for (let x = 0; x < 1034; x += 1) { // Varre horizontalmente
			stroke(r, g, b); // Mistura de cores
			point(x, y);
		}
	}

	drawCloud(cloudX, cloudY)
	drawCloud2(cloud2X , cloud2Y);

	cloudX += speed

	cloud2X += cloud2Speed

	if(cloudX > width){
		cloudX = -100;
	}

	if(cloud2X > width){
		cloud2X = -100;
	}

	//------>>>>> CHAO <<<<<----------
	stroke( 0);
	fill(155, 255, 155);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	fill(128,0,0)
	triangle(321, 432, 380, 232, 530, 430)
	fill(100, 0, 0)
	triangle(554, 432, 400, 294, 360, 430)



	//------>>>>> ARVORE <<<<<----------
	fill(102, 51, 0);
	rect(treePos_x-370, treePos_y + 145, 40, -150)

	fill(0, 60, 0)
	ellipse(170, 250,120, 100)
	//fill(0, 106, 0)
	ellipse(132, 276, 100, 100);
	//fill(0, 70, 0)
	ellipse(105, 214, 80, 80);
	//fill(0, 90, 0)
	ellipse(182, 193, 90, 60);
	//fill(0, 57, 0)
	ellipse(238, 222, 50, 80);
	//fill(0, 98, 0)
	ellipse(236, 278, 60, 40);
	//fill(0, 106, 0)
	ellipse(206, 307, 70, 40)

	//TODO:ITEM
	fill(255, 204, 0)
	stroke(0)
	ellipse(224, 418, 15, 15)
	line(223, 412, 223, 426);
	line(217, 419, 230, 417);

	stroke(0)
	ellipse(244, 418, 15, 15)
	line(238, 412, 250, 420);
	line(249, 412, 238, 422);

	//TODO:CANYON
	stroke(0);
	fill(0)
	rect(70, 433, 30, 90);
	rect(100, 493, 30, 200);
	rect(130, 547, 470, 30);


	//------>>>>> PERSONAGEM <<<<<----------
	//front foot
	fill(123, 104, 35);
	rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
	//back foot
	rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);

	//body
	fill(82, 97, 38)
	ellipse(gameChar_x, gameChar_y - 15, 25, 20)

	//head
	fill(123, 104, 35)
	ellipse(gameChar_x + 1, gameChar_y - 13, 10, 10);
	//eyes
	fill(0);
	ellipse(gameChar_x - 2, gameChar_y - 13, 2, 2)
	ellipse(gameChar_x + 4, gameChar_y - 13, 2, 2)

	push();
	noStroke();
	fill(0, 255, 0);
	text(mouseX + ", " + mouseY, mouseX, mouseY);
	pop();
}



function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
