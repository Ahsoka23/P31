class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 4,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.rr= random (0,255); 
        this.g= random (0,255);
        this.b= random (0,255);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        fill(this.rr,this.g,this.b);

        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};