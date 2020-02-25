// Goal:
// Create a single pattern of movement, gradually more and more of that same pattern happens until the entire screen
// is full of that same pattern. This continues for X amount of time, then a single patter of movement occurs again.
// Slowly the previous patterns begin to die off, and there is only the single new pattern. Gradually more and more
// of that same pattern happens until the entire screen is full of that same pattern. This process repeats itself
// forever, every time with a new pattern.

// Notes:
// Pattern Variants:
// - change in shape/appearance (color, size)
// - change in behavior (speed)
// - change in initial position

// Need to seperate stages of events into separate functions


// Steps:
// generator random X & Y coordinates
let randX, randY, frameRateVal;
// append to array while pattern


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	//print(randX, randY);
	background(100);
	frameRateVal = 0;
}

function draw() {
	frameRateVal += 1;
	print(frameRateVal);
	if (frameRateVal > 0){
		frameRate(frameRateVal);
		frameRateVal += 1;
	}
	if (frameRateVal >= 1000){
		frameRateVal = 0;
		frameRate(1);
		background(100);
	} 
	randX = random(windowWidth);
	randY = random(windowHeight);
	
	ellipse(randX, randY, 20, 20);
}