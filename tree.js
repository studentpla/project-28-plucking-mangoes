class Tree  {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true
      }
      this.body =  Bodies.rectangle(x, y, width/2,height/2, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
       imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
      pop();
    }
  };