class Tree{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w=width;
        this.h = height;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       imageMode(CENTER);
       image(this.image,0,0,this.w,this.h);
       pop();

    }
}