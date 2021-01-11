class Box{
    constructor(x, y, width,height){
       
    var ballOptions={
    restitution: 0.8,
    friction: 0.3,
    density: 1.0
    }

  this.body=Bodies.rectangle(x,y,width,height,ballOptions);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(75);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}