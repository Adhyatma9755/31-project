class Divisions{
        constructor(x,y,width,height) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.w = w;
          this.h = h;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("white");
          rect(pos.x, pos.y, this.w, this.h);
          for (var k = 0; k <=width; k = k + 80) {
            divisions.push(new Divisions(k, height-divisionsHeight/2,10,divisionsHeight));
          }
        }
      };
