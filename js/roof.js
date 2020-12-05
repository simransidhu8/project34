class Roof{
  constructor(x,y,w,h) {
    var options = {
      isStatic: true
    }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.body=Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body);
  
  }
  display(){
    var groundPos=this.body.position;
  
    push();
    translate(groundPos.x,groundPos.y);
    rectMode(CENTER);
    fill(0);
    rect(0,0,this.w,this.h);
    pop();
 }
} 

/*<!DOCTYPE html><html><head>
    <script src="libraries/p5.js"></script>
    <script src="libraries/p5.dom.min.js"></script>
    <script src="libraries/p5.sound.min.js"></script>
<script src="libraries/./p5.play.js"></script>
    <link rel="stylesheet" type="text/css" href="libraries/style.css">
    <meta charset="utf-8">

  </head>
  <body>
      <script src="sketch.js"></script>
      <script src="pendulum.js"></script>
      <script src="roof.js"></script>
      <script src="sling.js"></script>
</body></html>*/