function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(250, 250);
  video = createCapture(VIDEO);
  video.hide();

  
}

function draw() {
  image(video, 0, 0, 640, 480);
 rect(30, 20, 550, 55);
 rect(30, 400, 550, 55);
 rect(560, 50, 55, 400);
 rect(20, 50, 55, 400);
 circle(50,50,100);
 circle(590,50,100);
 circle(590,430,100);
 circle(50,430,100);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

