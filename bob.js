class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution : 1,
            friction : 0,
            density : 0.8
            
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y,35, options);
        this.radius = 35;
       World.add(world, this.body);
    }
    display(){
        push();
         translate(this.body.position.x, this.body.position.y);
        fill("purple");
        ellipse(0,0,35,35)
     pop();
    }
}