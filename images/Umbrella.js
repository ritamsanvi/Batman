class Umbrella {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
      this.image= loadImage("images/Walking Frame/Walking_1.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //translate(pos.x,pos.y);
      fill("black");
      rect(200,200,30,20);
      image(this.image,150,180,100,100)
      //this.image.scale=10;
    }
    };