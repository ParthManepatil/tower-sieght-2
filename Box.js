class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   // this.image = loadImage("wood1.png");
  }
display(){
  fill("pink");
  if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world,this.body);

  }
}
};
