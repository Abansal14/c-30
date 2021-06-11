class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);   //transfer all the commands from the parent class
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255; //initially the pig is completely visible
  }
  display(){
   // console.log(this.body.speed)
    if(this.body.speed<3) //if pigs are just touched
{
  super.display()   //used to display the pigs
}   

else{   //if the pigs are attacked
World.remove(world, this.body)
push ();
//reduce the Visiblity by 5 in every frame
this.Visiblity=this.Visiblity-5;

//using the tint command to replace the actual pig's image with a lighter pig's imag
tint(255,this.Visiblity)

//image() to replace the pig's image woth the pig's image again
image(this.image,this.body.position.x,this.body.position.y,50,50)

pop();
}
  }

};