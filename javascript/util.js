//random number generators and other utilities
function randInt(min,max){//generates a random ingeger between min and max
	return Math.floor(Math.random() * (max - min + 1)) + min;
}