class mangomachine1000{
    constructor(body, anchor){
        var options = {
            bodyA:body, 
            bodyB:anchor,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body;
        this.bodyB=anchor;
        this.mangomachine9000=Constraint.create(options);

        World.add(world,this.mangomachine9000);
    }
    attach(body){
        this.mangomachine9000.bodyA = body;
    }
    
    fly(){
        this.mangomachine9000.bodyA = null;
    }
    display(){
        if (this.mangomachine9000.bodyA){
            var pointA = this.bodyA.position;
            var pointB =this.bodyB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}