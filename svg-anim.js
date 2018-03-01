var c = document.getElementById("svg_id");

var b1 = document.getElementById("clear");
var b2 = document.getElementById("stop");
var b3 = document.getElementById("enlarge");
var b4 = document.getElementById("dvd");


var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, 500, 500);
    ctx.stroke();
    window.cancelAnimationFrame(requestID);
};

var stop = function(){
    window.cancelAnimationFrame(requestID);
};

var circle_enlarge = function(){
    window.cancelAnimationFrame(requestID);
    var radius = 0
    var bigger = true;
    var draw = function(){
	clear();
	ctx.fillStyle = "lightsteelblue";
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if (bigger){
	    radius++;
	}
	else{
	    radius--;
	}
	if (radius <= 0 || radius >= c.height/2){
	    bigger = !bigger;
	}	requestID = window.requestAnimationFrame(draw);
    };
    draw();
};

var dvd_move = function(){
    window.cancelAnimationFrame(requestID);
    var xmove = 1;
    var ymove = 1;
    x = 0;
    y = 100;
    var draw = function(){
	clear();
	ctx.fillStyle = "lightsteelblue";
	ctx.beginPath();
	ctx.fillRect(x, y, 50, 30);
	x = x + xmove;
	y = y + ymove;
	if (x <= 0 || x+50 >= c.width){
	    xmove = xmove * -1;
	    ctx.fillStyle = "magenta"
	}
	if (y <= 0 || y+30 >= c.height){
	    ymove = ymove * -1;
	    ctx.fillStyle = "lightsteelblue";
	}
	requestID = window.requestAnimationFrame(draw);
    };
    draw();
};
	


b1.addEventListener("click", clear);
b2.addEventListener("click", stop);
b3.addEventListener("click", circle_enlarge);
b4.addEventListener("click", dvd_move);
