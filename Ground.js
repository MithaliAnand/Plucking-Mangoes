class Ground{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w = width;
        this.h = height;
        World.add(world,this.body);

    }
    display(){
        
        var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER);
			fill(128,128,128)
            rect(0,0,this.w, this.h);
			pop()
    }
}