class Box {
    constructor(x, y){
      var options={
        restitution: 0,
        friction: 0
      }
  
      this.body = Matter.Bodies.rectangle(x, y, 40, 40,options);
  
      World.add(world, this.body);
    }
  
    display(){
      if(this.body.speed < 3){
        rectMode(CENTER);
        fill("green");
      rect(this.body.position.x, this.body.position.y, 40, 40);
       
       }
       else{
         World.remove(world, this.body);
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
       
      }
    }
  }