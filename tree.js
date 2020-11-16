class Tree {
    constructor(x, y) {
      var options = {
       isStatic: true
      }
      this.body = Bodies.rectangle(x, y, 200, 400, options);
      this.width = 200;
      this.height = 400;
      this.image = loadImage("tree.png");
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