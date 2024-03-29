let i = 1;
function wastedTime() {
	document.getElementById("timer").innerHTML = "wasted time: " + i + " sec";
	document.title = "Penis"+i;
	i = i + 1;
}

const timerInterval = setInterval(wastedTime, 1000);
