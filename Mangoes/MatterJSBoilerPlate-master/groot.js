class groot{
    constructor(x, y){
    var options = {
        isStatic: true
    }
      this.width = 450;
      this.height = 600;
      this.thickness = 10;
      this.x = x;
      this.y = y;
      this.image = loadImage("images/groot.png");
      this.body = Bodies.rectangle(x,y,this.width,this.thickness,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      imageMode(CENTER);
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };