class Stone {
    constructor(x, y) {
      var options = {
       isStatic: false,
       restitution: 0, 
       friction: 5, 
       density: 5, 
       stiffness: 0.00001
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     
    }
  };