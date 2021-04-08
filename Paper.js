class paper{
    constructor(x,y,radius){
    var options = {
        'restitution' : 0.3,
      'friction':0,
      'density':1.2,
      'isStatic': false
    }
    this.x = x;
    this.y = y;
    this.radius = radius ;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);

    }
    display(){
        var paperpos=this.body.position; 
        push() 
        translate(paperpos.x, paperpos.y);
         rectMode(CENTER) //strokeWeight(4);
          fill(255,0,255)
          ellipse(0,0,this.radius, this.radius); 
          pop()
    }
}