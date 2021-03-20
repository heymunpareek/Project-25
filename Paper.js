class Paper {
    constructor(x, y) {
        var paperOp={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2            
        }

        //this.body
        this.body = Bodies.circle(x, y, 25, paperOp);

        //radius of this.body
        this.radius = 25

        //load image in this.image
        this.image = loadImage("paper.png");

        //add this.body to world
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position; //position of this.body
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);        
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2 +30, this.radius*2 +30); //increase the size of the image
        pop();        
    }
}