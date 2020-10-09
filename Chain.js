class Chain {
  constructor(body1 ,body2){
var option = {
bodyA:body1, bodyB:body2,
stiffness:0.01,
length:40
   }
this.chain=Constraint.create(option);
World.add(world,this.chain)

 }
display(){
var A =this.chain.bodyA.position
var B=this.chain.bodyB.position
strokeWeight(4);
line(A.x,A.y,B.x,B.y)



}





}
















