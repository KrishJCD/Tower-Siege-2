class Target
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:30,
            stiffness:0.4
        }
        this.pointB=pointB;
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display()
    {
        if(this.slingshot.bodyA){
        var posA=this.slingshot.bodyA.position;
        var posB=this.pointB;
        stroke(4);
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
    fly()
    {
        this.slingshot.bodyA=null;
    }
    attach(bodyA)
    {
        this.slingshot.bodyA=bodyA;
    }
}