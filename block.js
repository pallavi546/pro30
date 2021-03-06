class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.visibility=225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<6){
        var angle=this.body.angle;
        var pos=this.body.position;
        push()
        var pos =this.body.position;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black")
        fill("pink");
        rect(0,0, this.width, this.height);
        pop();
      }else{
       World.remove(world,this.body);
       push();
       this.visibility=this.visibility-5;
       pop();
      }

         }
  };