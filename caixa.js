class caixa{
    constructor(x,y,width,height,options){
  var options = {
    isStatic:false
    restitution:0.8

  }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

    }
    mostrar(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.body.width,this.body.height);
    }
}