class Star
{
    constructor(x, y, radius)
    {
        var options = {restitution : 0.1, friction : 0.4, density : 1.0}

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body);

        this.body.debug = true;
    }

    display()
    {
        imageMode(CENTER)

        var pos = this.body.position;

        fill("yellow")
        ellipse(pos.x, pos.y, this.radius, this.radius)
    }
}