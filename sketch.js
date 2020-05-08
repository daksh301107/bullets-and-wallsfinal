//refernce to snowflake 
var balloon=[];
var ram;
var p=0; 
var imgz=["birthday.jpg"];
var image;
var img;
var img2; 
function preload(){
  img=loadImage("Birthday-wishes-images-1.jpg"); 
  img2=loadImage("birthday.jpg");
  backgroundImg = loadImage("sprites/download91.png");
}
function setup() {
  createCanvas(400, 400);
  //ram = createSprite(20,30,40,50);
  //background1.loadImage("download88.jpg");
  colorMode(HSB);
  console.log(balloon); // print the element in the array 
  console.log(balloon.length);

 }
function draw() { 
  background(backgroundImg);//make the background dark 
  var  t = frameCount/60; //a counter 
  // noprotect
  for (var i = 0; i < random(5); i++) {
    balloon.push(new balloons()); // balloon object
  }
  for(var falling of balloon) {
    falling.update(t); // changing the balloon position
    falling.display(); // drawing the balloon 
  } 
   push();//save
  translate(30,200);
  textStyle(BOLD)
  textSize(40);
  strokeWeight(5);
  fill(0,100,100);
 // text("HAPPY BIRTHDAY",0,30);
  noFill();
  pop();//restore
  translate(0,0);
  //drawSprites();
}
function balloons(){
  fill(0,0,100,0.7)
  noStroke();
  this.X = 0;//starting postion 
  this.Y = random(-20, 0);//the random value of the y 
  this.inalangle = random(0, 2 * PI); //setting the angle randomly between 0 and 2 times pie
  this.size = random(25,9); //the size of the balloon 
  //sqrt means the square root of a number
  //pow is the expontent 
  this.radius = sqrt(random(pow(width / 2, 2))); //makes the balloons spread apart on the screen 

  this.update = function(time) {
    // x position follows a circle
    var a = 0.6; // angular speed
    var angle = a * time + this.inalangle;
    this.X = width / 2 + this.radius * sin(angle);

    // different size balloon fall at slightly different y speeds
    this.Y += pow(this.size, 0.5);// the exponet of the y values 

    // delete balloons if past end of screen
    if (this.Y > height){
      var index = balloon.indexOf(this);
      balloon.splice(index,1);
    }
  };
  this.display = function() {
    ellipse(this.X, this.Y, this.size);
  };  
}
// function imgz(x){
//   image(img2,0,300,50,50);
//   }
function mousePressed(){
  //image(imgz[0],10,10,50,50); //imgz[0] is a string, not an img, so that's why we are getting an error
  //image(img2, 10, 10, width, height) //this also didn't work, but I'm not sure why
  img = img2; //this worked, but I'm not is the desired behavior
  
}

