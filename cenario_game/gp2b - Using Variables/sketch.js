/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var Canyon;
var Collectable;

var MountainOne;
var MountainTwo;

var CloudTwo;
var CloudOne;

var Tree;

var TreeTop;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	CloudOne = {
	cloudX : 67,
	cloudY : 81,
	speed : 2
	}

	CloudTwo = {
	cloudX : 275,
	cloudY : 114,
	speed : 1
	}

	MountainOne = {
	mountain_x1 : 321,
	mountain_y1 : 432,
	mountain_x2 : 380,
	mountain_y2 : 232,
	mountain_x3 : 530,
	mountain_y3 : 430
	}

	MountainTwo = {
	mountain_x1 : 554,
	mountain_y1 : 432,
	mountain_x2 : 400,
	mountain_y2 : 294,
	mountain_x3 : 360,
	mountain_y3 : 430
	}

    Tree = {
    tree_x : 160,
    tree_y : 431,
    tree_w : 40,
    tree_h : -150
    }

    TreeTop = {
    treeTop_x : 100,
    treeTop_y : 100,
    treeTop_w : 50,
    treeTop_h : 40
    }

    Collectable = {
    collectableBody_x : 224,
    collectableBody_y : 418,
    collectableBody_w : 15,
    collectableBody_h : 15,

    collectableLine_x : 223,
    collectableLine_y : 412,
    collectableLine_w : 223,
    collectableLine_h : 426
    }

    Canyon = {
    canyon_x : 100,
    canyon_y : 400,
    canyon_w : 30,
    canyon_h : 100
    }
}

function draw()
{

//------>>>>> Sky Gradient <<<<<------
	colorMode(RGB, 255);

	for(let y = 0; y < 576; y++){
	    for(let x = 0; x < 1034; x++){
	    let t = map(y, 0, 576, 0, 1);
	    let r = lerp(20, 255, t) + random(-10, 20);
	    let g = lerp(60, 150, t) + random(-10, 20);
	    let b = lerp(255, 100, t) + random(-10, 20);
	    stroke(r, g, b);
	    point(x, y);
	    }
	}

//------>>>>> Cloud Methods <<<<<------
	drawCloud(CloudOne)
	CloudOne.cloudX += CloudOne.speed
	if(CloudOne.cloudX > width){ //Set cloud to start of the screen when it hits the end
		CloudOne.cloudX = -100;
	};

	drawCloud(CloudTwo);
	CloudTwo.cloudX += CloudTwo.speed
    if(CloudTwo.cloudX > width){ //Set cloud to start of the screen when it hits the end
		CloudTwo.cloudX = -100;
	};

//------>>>>> Floor <<<<<----------
	stroke(0);
	fill(155, 255, 155);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

//------>>>>> Mountains <<<<<----------
	fill(128,0,0)
	drawMountain(MountainOne);
	fill(100, 0, 0)
	drawMountain(MountainTwo);

//------>>>>> Tree <<<<<----------
	fill(102, 51, 0);
	rect(Tree.tree_x,
	Tree.tree_y,
	Tree.tree_w,
	Tree.tree_h)

    drawTreeTop(TreeTop);

//------>>>>> Collectable <<<<<----------
    drawCollectable(Collectable);

//------>>>>> Canyon <<<<<----------
    drawCanyon(Canyon);

//------>>>>> Character <<<<<----------
	//front foot
	fill(123, 104, 35);
	rect(gameChar_x + 5, gameChar_y - 10, 5, 10);
	//back foot
	rect(gameChar_x - 10, gameChar_y - 10 , 5, 10);

	//body
	fill(82, 97, 38)
	ellipse(gameChar_x, gameChar_y - 15, 25, 20);

	//head
	fill(123, 104, 35)
	ellipse(gameChar_x + 1, gameChar_y - 13, 10, 10);
	//eyes
	fill(0);
	ellipse(gameChar_x - 2, gameChar_y - 13, 2, 2);
	ellipse(gameChar_x + 4, gameChar_y - 13, 2, 2);
}


function drawCloud(cloudObject){
    fill(200, 0 ,0);
    noStroke();
	ellipse(cloudObject.cloudX +30, cloudObject.cloudY, 40, 40);
	ellipse(cloudObject.cloudX, cloudObject.cloudY, 50, 30);
	ellipse(cloudObject.cloudX +50, cloudObject.cloudY -5, 60, 25);
};

function drawMountain(mountainObject) {
	triangle(
	 mountainObject.mountain_x1,
	 mountainObject.mountain_y1,
	 mountainObject.mountain_x2,
	 mountainObject.mountain_y2,
	 mountainObject.mountain_x3,
	 mountainObject.mountain_y3)
};

function drawTreeTop(treeTopObject) {
    fill(0, 60, 0)
	ellipse(
	treeTopObject.treeTop_x + 70,
	treeTopObject.treeTop_y + 150,
	treeTopObject.treeTop_w + 70,
	treeTopObject.treeTop_h + 60)
	fill(0, 106, 0)
	ellipse(
	treeTopObject.treeTop_x + 32,
	treeTopObject.treeTop_y + 176,
	treeTopObject.treeTop_w + 50,
	treeTopObject.treeTop_h + 60)
	fill(0, 70, 0)
	ellipse(
	treeTopObject.treeTop_x + 5,
	treeTopObject.treeTop_y + 114,
	treeTopObject.treeTop_w + 30,
	treeTopObject.treeTop_h + 40)
	fill(0, 90, 0)
	ellipse(
	treeTopObject.treeTop_x + 82,
	treeTopObject.treeTop_y + 93,
	treeTopObject.treeTop_w + 40,
	treeTopObject.treeTop_h + 20)
	fill(0, 57, 0)
	ellipse(
	treeTopObject.treeTop_x + 138,
	treeTopObject.treeTop_y + 122,
	treeTopObject.treeTop_w,
	treeTopObject.treeTop_h + 40)
	fill(0, 98, 0)
	ellipse(
	treeTopObject.treeTop_x + 136,
	treeTopObject.treeTop_y + 178,
	treeTopObject.treeTop_w + 10,
	treeTopObject.treeTop_h)
	fill(0, 106, 0)
	ellipse(
	treeTopObject.treeTop_x + 106,
	treeTopObject.treeTop_y + 107,
	treeTopObject.treeTop_w + 20,
	treeTopObject.treeTop_h)
};

function drawCollectable(collectableObject){

    fill(255, 204, 0)
	stroke(0)

	ellipse(
	 collectableObject.collectableBody_x,
	 collectableObject.collectableBody_y,
	 collectableObject.collectableBody_w,
	 collectableObject.collectableBody_h);

	line(collectableObject.collectableLine_x,
	collectableObject.collectableLine_y,
	collectableObject.collectableLine_w,
	collectableObject.collectableLine_h);

	line(collectableObject.collectableLine_x - 6,
	collectableObject.collectableLine_y + 7,
	collectableObject.collectableLine_w + 7,
	collectableObject.collectableLine_h - 9);

	ellipse(
	 collectableObject.collectableBody_x + 20,
	 collectableObject.collectableBody_y,
	 collectableObject.collectableBody_w,
	 collectableObject.collectableBody_h);

	line(collectableObject.collectableLine_x + 15,
	collectableObject.collectableLine_y,
	collectableObject.collectableLine_w + 27,
	collectableObject.collectableLine_h - 6);

	line(collectableObject.collectableLine_x + 26,
	collectableObject.collectableLine_y,
	collectableObject.collectableLine_w + 15,
	collectableObject.collectableLine_h - 4);

};

function drawCanyon(canyonObject){
    stroke(0);
	fill(0)

	rect(
	canyonObject.canyon_x - 30,
	canyonObject.canyon_y + 33,
	canyonObject.canyon_w,
	canyonObject.canyon_h - 10);

	rect(
	canyonObject.canyon_x,
	canyonObject.canyon_y + 93,
	canyonObject.canyon_w,
	canyonObject.canyon_h + 100);

	rect(
	canyonObject.canyon_x + 30,
	canyonObject.canyon_y + 147,
	canyonObject.canyon_w + 440,
	canyonObject.canyon_h - 70);

};

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
