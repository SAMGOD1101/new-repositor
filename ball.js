class Ball {
constructor(x,y,width,angle){
 var options = {

isStatic:false,
restitution=0.3,
friction=0.5,
density=1.2
 }

 ellipse(56,64,55,55);

 imageMode(CENTER);
 

}
display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    
}

}




