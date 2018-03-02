var svg = document.getElementById("svg_id");

var b1 = document.getElementById("clear");
var b2 = document.getElementById("stop");
var b3 = document.getElementById("enlarge");
var b4 = document.getElementById("dvd");

var intervalID;

var clear = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var clear_total = function(){
    stop();
    clear();
};

var stop = function(){
    clearInterval(intervalID);
};

var circle_enlarge = function(){
    stop();
    var radius = 0
    var bigger = true;
    var draw = function(){
	clear();
	circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("fill", "lightsteelblue");
	circle.setAttribute("cx", 250);
	circle.setAttribute("cy", 250);
	circle.setAttribute("r", radius);
	svg.appendChild(circle);
	if (bigger){
	    radius++;
	}
	else{
	    radius--;
	}
	if (radius <= 0 || radius >= 250){
	    bigger = !bigger;
	}
    };
    intervalID = setInterval(draw, 40);
    draw();
};

var dvd_move = function(){
    stop()
    var xmove = 1;
    var ymove = 1;
    x = 0;
    y = 100;
    var draw = function(){
	clear();
	rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	rect.setAttribute("width", 50);
	rect.setAttribute("height", 30);
	rect.setAttribute("fill", "lightsteelblue");
	svg.appendChild(rect);
	x = x + xmove;
	y = y + ymove;
	if (x <= 0 || x+50 >= 500){
	    xmove = xmove * -1;
	}
	if (y <= 0 || y+30 >= 500){
	    ymove = ymove * -1;
	}
    };
    intervalID = setInterval(draw, 30);
    draw();
};
	


b1.addEventListener("click", clear_total);
b2.addEventListener("click", stop);
b3.addEventListener("click", circle_enlarge);
b4.addEventListener("click", dvd_move);
