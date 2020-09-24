class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
   // this.image = loadImage("enemy.png");
  this.visiblity=255;
  }
display(){
  fill("turquoise");
  if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world,this.body);

  }
}
};
