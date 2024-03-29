let i = 1;
function wastedTime() {
	document.getElementById("timer").innerHTML = "wasted time: " + i + " sec";
	document.title = ""+i;
	i = i + 1;
}

//const screenw = window.screen.width;
//const screenh = window.screen.height;
const screenh = 500 - 100 - 15;
const screenw = 750 - 160 - 10;
let desireh = screenh;
let desirew = screenw;
const volvoBox = document.getElementById("volvo");
let y = 0;
let x = 0;
function flyVolvo() {
	let finalY = y + "px";
	let finalX = x + "px";
	volvoBox.style.left = finalX;
	volvoBox.style.top = finalY;
	if (y < desireh) {
		y++;
		desireh = screenh;
	} else {
		y--;
		desireh = 0;
	}
	if (x < desirew) {
		x++;
		desirew = screenw;
	} else {
		x--;
		desirew = 0;
	}
}

const timerInterval = setInterval(wastedTime, 1000);
const flyVolvoInterval = setInterval(flyVolvo, 5);
