var box1;
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(15,80,90,80,0.5,1)

}

function draw() 
{
  background(220);
  box1.show();
  box1.move_y();
  box1.move();
}

