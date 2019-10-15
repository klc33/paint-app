var size=3;
var md=false;
var color="black";
var canvas = document.getElementById("board");
canvas.addEventListener('mousedown',down);
canvas.addEventListener('mouseup',toggledraw);
canvas.addEventListener('mousemove',
	function event(evt){
	var mousePos=getMousePos(canvas,evt)
	var posx =mousePos.x;
	var posy =mousePos.y;
	draw(canvas,posx,posy);
	});

	function down(){
	md=true;
	}

	function toggledraw(){
		canvas.style.cursor="default";
		md=false;
	}

	function getMousePos(canvas,evt){
		var rect = canvas.getBoundingClientRect();
		return{
			x:evt.clientX - rect.right,
			y:evt.clientY - rect.bottom
		};
	}
	function draw(canvas,posx,posy){
		var ctx= canvas.getContext('2d');
		if(md){
			canvas.style.cursor="pointer";
			ctx.beginPath();
			ctx.fill();
			ctx.fillRect(posx, posy, size, size);
			ctx.strokeStyle=color;
			}
			else{
			ctx.moveTo(0,90);
			ctx.lineTo(300,150);
		}
	};