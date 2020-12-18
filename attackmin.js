
window.addEventListener('DOMContentLoaded', (event) =>{


    let upgrading = -1
    
    let keysPressed = {}
    let counterhold = 0

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
     });
     
     document.addEventListener('keyup', (event) => {
         delete keysPressed[event.key];
      });

    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');
    //  tutorial_canvas_context.imageSmoothingEnabled = true

    tutorial_canvas.style.background = "#999999"



    let flex = tutorial_canvas.getBoundingClientRect();

    // Add the event listeners for mousedown, mousemove, and mouseup
    let tip = {}
    let xs
    let ys
    let tap = {}
    let xz
    let yz
   
   
   
    
    window.addEventListener('mousedown', e => {
        flex = tutorial_canvas.getBoundingClientRect();
    
    
        xs = e.clientX - flex.left;
        ys = e.clientY - flex.top;
          tip.x = xs
          tip.y = ys
    
          tip.body = tip

          if(player.dead == 0){
          upgrades.isPointInside(tip)
 
          if(player.circ.isPointInside(tip)){
            player.gridpush(player.circ)
        }
        if(player.rect.isPointInside(tip)){
            player.gridpush(player.rect)
        }
        if(player.trig.isPointInside(tip)){
            player.gridpush(player.trig)
        }
        if(player.cres.isPointInside(tip)){
            player.gridpush(player.cres)
        }
        if(player.hex.isPointInside(tip)){
            player.gridpush(player.hex)
        }
        if(player.pill.isPointInside(tip)){
            player.gridpush(player.pill)
        }
        if(player.cast.isPointInside(tip)){
            if(enemies.length > 0){
                if(enemies[0].attacking < 1 && player.attacking == 0){
                    player.spell()
                }
            }
        }

        for(let t = 0; t< player.grid.length; t++){

            if(player.grid[t].isPointInside(tip)){
                switch(player.grid[t].detail.color){
                    case "transparent":

                    break
                    case "#FF00AA":
                        player.tempmagenta += (11-player.discount)

                    break
                    case "yellow":
                        player.tempyellow += (11-player.discount)

                    break
                    case "purple":
                        player.temppurple += (11-player.discount)

                    break
                    case "orange":
                        player.temporange += (11-player.discount)

                    break
                    case "#00FF00":
                        player.tempgreen += (11-player.discount)

                    break
                    case "cyan":
                        player.tempcyan += (11-player.discount)

                    break


                }
                player.grid[t].detail.color = "transparent"
            }
        }
        for(let t = 0; t<enemies.length; t++){
            if(enemies[t].body.isPointInside(tip)){
                player.target = enemies[t]
            }
        }
          }
     });
    
    
     class Upgrades{
         constructor(){
             this.onswitch = new Rectanglex(30,30,20,20,"white")
             this.body = new Rectanglex(50,50, 250,200, "#999999")
             this.plus1 = new Rectanglex( 225,55, 20,20, "#00FF00")
             this.plus2 = new Rectanglex( 225,80, 20,20, "#00FF00")
             this.plus3 = new Rectanglex( 225,105, 20,20, "#00FF00")
             this.plus4 = new Rectanglex( 225,130, 20,20, "#00FF00")
             this.plus5 = new Rectanglex( 225,155, 20,20, "#00FF00")
             this.plus6 = new Rectanglex( 225,180, 20,20, "#00FF00")
             this.plus7 = new Rectanglex( 225,205, 20,20, "#00FF00")
             this.plus8 = new Rectanglex( 225,230, 20,20, "#00FF00")
             this.plus9 = new Rectanglex( 225,255, 20,20, "#00FF00")
             this.plus10 = new Rectanglex( 225,280, 20,20, "#00FF00")
             this.minus1 = new Rectanglex( 55,55, 20,20, "#FF0000")
             this.minus2 = new Rectanglex( 55,80, 20,20, "#FF0000")
             this.minus3 = new Rectanglex( 55,105, 20,20, "#FF0000")
             this.minus4 = new Rectanglex( 55,130, 20,20, "#FF0000")
             this.minus5 = new Rectanglex( 55,155, 20,20, "#FF0000")
             this.minus6 = new Rectanglex( 55,180, 20,20, "#FF0000")
             this.minus7 = new Rectanglex( 55,205, 20,20, "#FF0000")
             this.minus8 = new Rectanglex( 55,230, 20,20, "#FF0000")
             this.minus9 = new Rectanglex( 55,255, 20,20, "#FF0000")
             this.minus10 = new Rectanglex( 55,280, 20,20, "#FF0000")
             this.potential = new Circle(150, 30, 0, "white")


             this.barset = []

             let bars1 = []


             for(let k = 60; k<300; k+=25){
             bars1= []
             for(let t = 85; t<215; t+=200){
                 let bar =  new Rectanglex(t, k, 12.5, 2.5, "white")
                bars1.push(bar)
             }
             this.barset.push(bars1)
            }

            let check = 0
            for(let t = 0; t<this.barset.length;t++){
                check+=this.barset[t].length
            }
            this.potential.radius = (player.level-(check-this.barset.length ))*2.1
            if(this.potential.radius > 21){
                this.potential.radius = 21
            }


         }
         draw(){
            let check = 0
            for(let t = 0; t<this.barset.length;t++){
                check+=this.barset[t].length
            }
            this.potential.radius = (player.level-(check-this.barset.length ))*2.1
            if(this.potential.radius > 21){
                this.potential.radius = 21
            }

             this.onswitch.draw()
             if(upgrading == 1){
                // this.body.draw()
                this.plus1.draw()
                this.plus2.draw()
                this.plus3.draw()
                this.plus4.draw()
                this.plus5.draw()
                this.plus6.draw()
                this.plus7.draw()
                this.plus8.draw()
                this.plus9.draw()
                this.plus10.draw()
                
                this.potential.draw()
    
                this.minus1.draw()
                this.minus2.draw()
                this.minus3.draw()
                this.minus4.draw()
                this.minus5.draw()
                this.minus6.draw()
                this.minus7.draw()
                this.minus8.draw()
                this.minus9.draw()
                this.minus10.draw()
                for(let t = 0; t<this.barset.length; t++){
                    for(let k = 0; k<this.barset[t].length; k++){
                        this.barset[t][k].draw()
                    }
                }
             }
         }
         isPointInside(point){

            if(this.onswitch.isPointInside(point)){
                upgrading*=-1
            }
            if(upgrading == 1){
             if(this.body.isPointInside(point)){
                if(this.minus1.isPointInside(point)){
                    if(this.barset[0].length > 1){
                    this.barset[0].splice(this.barset[0].length-1,1)
                    }
                }
                if(this.minus2.isPointInside(point)){
                    if(this.barset[1].length > 1){
                    this.barset[1].splice(this.barset[1].length-1,1)
                    }
                }
                if(this.minus3.isPointInside(point)){
                    if(this.barset[2].length > 1){
                    this.barset[2].splice(this.barset[2].length-1,1)
                    }
                }
                if(this.minus4.isPointInside(point)){
                    if(this.barset[3].length > 1){
                    this.barset[3].splice(this.barset[3].length-1,1)
                    }
                }
                if(this.minus5.isPointInside(point)){
                    if(this.barset[4].length > 1){
                    this.barset[4].splice(this.barset[4].length-1,1)
                    }
                }
                if(this.minus6.isPointInside(point)){
                    if(this.barset[5].length > 1){
                    this.barset[5].splice(this.barset[5].length-1,1)
                    }
                }
                if(this.minus7.isPointInside(point)){
                    if(this.barset[6].length > 1){
                    this.barset[6].splice(this.barset[6].length-1,1)
                    }
                }
                if(this.minus8.isPointInside(point)){
                    if(this.barset[7].length > 1){
                    this.barset[7].splice(this.barset[7].length-1,1)
                    }
                }
                if(this.minus9.isPointInside(point)){
                    if(this.barset[8].length > 1){
                    this.barset[8].splice(this.barset[8].length-1,1)
                    }
                }
                if(this.minus10.isPointInside(point)){
                    if(this.barset[9].length > 1){
                    this.barset[9].splice(this.barset[9].length-1,1)
                    }
                }


                let check = 0
                for(let t = 0; t<this.barset.length;t++){
                    check+=this.barset[t].length
                }
                this.potential.radius = (player.level-(check-this.barset.length ))*2.1
                if(this.potential.radius > 21){
                    this.potential.radius = 21
                }
    
                // //console.log(check)

                if(check-this.barset.length < player.level){

                    if(this.plus1.isPointInside(point)){
                        if(this.barset[0].length < 18){
                        this.barset[0].push( new Rectanglex((this.barset[0][this.barset[0].length-1].x+7.5),this.barset[0][this.barset[0].length-1].y,12.5,2.5, "#00FF00" ))
                        }
                       }
                       if(this.plus2.isPointInside(point)){
                           if(this.barset[1].length < 18){
                           this.barset[1].push( new Rectanglex((this.barset[1][this.barset[1].length-1].x+7.5),this.barset[1][this.barset[1].length-1].y,12.5,2.5, "orange" ))
                           }
                          }
                          if(this.plus3.isPointInside(point)){
                              if(this.barset[2].length < 18){
                              this.barset[2].push( new Rectanglex((this.barset[2][this.barset[2].length-1].x+7.5),this.barset[2][this.barset[2].length-1].y,12.5,2.5, "purple" ))
                              }
                             }
                             if(this.plus4.isPointInside(point)){
                                 if(this.barset[3].length < 18){
                                 this.barset[3].push( new Rectanglex((this.barset[3][this.barset[3].length-1].x+7.5),this.barset[3][this.barset[3].length-1].y,12.5,2.5, "red" ))
                                 }
                                }
                                if(this.plus5.isPointInside(point)){
                                    if(this.barset[4].length < 18){
                                    this.barset[4].push( new Rectanglex((this.barset[4][this.barset[4].length-1].x+7.5),this.barset[4][this.barset[4].length-1].y,12.5,2.5, "gold" ))
                                    }
                                   }
                                   if(this.plus6.isPointInside(point)){
                                       if(this.barset[5].length < 18){
                                       this.barset[5].push( new Rectanglex((this.barset[5][this.barset[5].length-1].x+7.5),this.barset[5][this.barset[5].length-1].y,12.5,2.5, "black" ))
                                       }
                                      }
                                      if(this.plus7.isPointInside(point)){
                                          if(this.barset[6].length < 18){
                                          this.barset[6].push( new Rectanglex((this.barset[6][this.barset[6].length-1].x+7.5),this.barset[6][this.barset[6].length-1].y,12.5,2.5, "white" ))
                                          }
                                         }
                                         if(this.plus8.isPointInside(point)){
                                             if(this.barset[7].length < 18){
                                             this.barset[7].push( new Rectanglex((this.barset[7][this.barset[7].length-1].x+7.5),this.barset[7][this.barset[7].length-1].y,12.5,2.5, "cyan" ))
                                             }
                                            }
                                            if(this.plus9.isPointInside(point)){
                                                if(this.barset[8].length < 18){
                                                this.barset[8].push( new Rectanglex((this.barset[8][this.barset[8].length-1].x+7.5),this.barset[8][this.barset[8].length-1].y,12.5,2.5, "yellow" ))
                                                }
                                               }
                                               if(this.plus10.isPointInside(point)){
                                                   if(this.barset[9].length < 18){
                                                   this.barset[9].push( new Rectanglex((this.barset[9][this.barset[9].length-1].x+7.5),this.barset[9][this.barset[9].length-1].y,12.5,2.5, "#FF00AA" ))
                                                   }
                                                  }
                }
               
             }
         }
        }
     }
    
    class Triangle{
        constructor(x, y, color, length){
            this.x = x
            this.y = y
            this.color= color
            this.length = length
            this.x1 = this.x + this.length
            this.x2 = this.x - this.length
            this.tip = this.y - this.length*2
            this.accept1 = (this.y-this.tip)/(this.x1-this.x)
            this.accept2 = (this.y-this.tip)/(this.x2-this.x)

        }

        draw(){

            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.lineWidth = 0
            tutorial_canvas_context.moveTo(this.x, this.y)
            tutorial_canvas_context.lineTo(this.x1, this.y)
            tutorial_canvas_context.lineTo(this.x, this.tip)
            tutorial_canvas_context.lineTo(this.x2, this.y)
            tutorial_canvas_context.lineTo(this.x, this.y)
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.fill()
        }

        isPointInside(point){
            if(point.x <= this.x1){
                if(point.y >= this.tip){
                    if(point.y <= this.y){
                        if(point.x >= this.x2){
                            this.accept1 = (this.y-this.tip)/(this.x1-this.x)
                            this.accept2 = (this.y-this.tip)/(this.x2-this.x)
                            this.basey = point.y-this.tip
                            this.basex = point.x - this.x
                            if(this.basex == 0){
                                return true
                            }
                            this.slope = this.basey/this.basex
                            if(this.slope >= this.accept1){
                                return true
                            }else if(this.slope <= this.accept2){
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
    }


    class Rectangle {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
        }
        draw(){
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = 2
            // tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)
        }
        move(){
            this.x+=this.xmom
            this.y+=this.ymom
        }
        isPointInside(point){
            if(point.x >= this.x){
                if(point.y >= this.y){
                    if(point.x <= this.x+this.width){
                        if(point.y <= this.y+this.height){
                        return true
                        }
                    }
                }
            }
            return false
        }
    }

    class Rectanglex {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
        }
        draw(){
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
            // tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)
        }
        move(){
            this.x+=this.xmom
            this.y+=this.ymom
        }
        isPointInside(point){
            if(point.x >= this.x){
                if(point.y >= this.y){
                    if(point.x <= this.x+this.width){
                        if(point.y <= this.y+this.height){
                        return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle{
        constructor(x, y, radius, color, xmom = 0, ymom = 0){

            this.height = 0
            this.width = 0
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.lens = 0
        }       
         draw(){
             if(this.radius >= 0){
                tutorial_canvas_context.lineWidth = 0
                tutorial_canvas_context.strokeStyle = this.color
                tutorial_canvas_context.fillStyle = this.color
                tutorial_canvas_context.beginPath();
                tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
               tutorial_canvas_context.fill()
                // tutorial_canvas_context.stroke(); 
             }
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom
        }
        isPointInside(point){
            this.areaY = point.y - this.y 
            this.areaX = point.x - this.x
            if(((this.areaX*this.areaX)+(this.areaY*this.areaY)) <= (this.radius*this.radius)){
                return true
            }
            return false
        }
    }


    class Observer{
        constructor(){
            this.body = new Circle( 500, 500, 5, "white")
            this.ray = []
            this.rayrange = 220
            this.globalangle = Math.PI
            this.gapangle = Math.PI/8
            this.currentangle = 0
            this.obstacles = []
            this.raymake = 40
        }

        beam(){
            this.currentangle  = this.gapangle/2
            for(let k = 0; k<this.raymake; k++){
                this.currentangle+=(this.gapangle/Math.ceil(this.raymake/2))
                let ray = new Circle(this.body.x, this.body.y, 1, "white",((this.rayrange * (Math.cos(this.globalangle+this.currentangle))))/this.rayrange*2, ((this.rayrange * (Math.sin(this.globalangle+this.currentangle))))/this.rayrange*2 )
                ray.collided = 0
                ray.lifespan = this.rayrange-1
                this.ray.push(ray)
            }
            for(let f = 3; f<this.rayrange/2; f++){
                for(let t = 0; t<this.ray.length; t++){
                    if(this.ray[t].collided < 1){
                        this.ray[t].move()
                    for(let q = 0; q<this.obstacles.length; q++){
                        if(this.obstacles[q].isPointInside(this.ray[t])){
                            this.ray[t].collided = 1
                        }
                      }
                    }
                }
            }
        }

        draw(){
            this.beam()
            this.body.draw()
            tutorial_canvas_context.lineWidth = 1
            tutorial_canvas_context.fillStyle = "red"
            tutorial_canvas_context.strokeStyle = "red"
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.body.x, this.body.y)
            for(let y = 0; y<this.ray.length; y++){
                    tutorial_canvas_context.lineTo(this.ray[y].x, this.ray[y].y)
                        tutorial_canvas_context.lineTo(this.body.x, this.body.y)
                }
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.fill()
            this.ray =[]
        }

        control(){
            if(keysPressed['t']){
                this.globalangle += .05
            }
            if(keysPressed['r']){
                this.globalangle -= .05
            }
            if(keysPressed['w']){
                this.body.y-=2
            }
            if(keysPressed['d']){
                this.body.x+=2
            }
            if(keysPressed['s']){
                this.body.y+=2
            }
            if(keysPressed['a']){
                this.body.x-=2
            }
        }
    }

    class Shape{
        constructor(){
            this.circle = new Circle(360,350, 50, "red")
            this.circle2 = new Circle(320,350, 30, "red")
            this.circle3  = new Circle(400,350, 30, "red")
            this.rectangle = new Rectangle(300,140, 110, 110, "red")
            this.rectangle = new Rectangle(300,140, 110, 110, "red")
            this.triangle2 = new Triangle(340,350, "red", 40)
            this.triangle1 = new Triangle(380,350, "red", 50)
            this.triangle1.x2+=40
            this.triangle2.tip-=20

        }
        isPointInside(point){
            if(this.circle.isPointInside(point)){
                if(!this.circle2.isPointInside(point)){
                    // return true
                // if(this.rectangle.isPointInside(point)){
                    if(!this.circle3.isPointInside(point)){
                        return true
                    }
                // }
            }
        }
            return false
        }

    }

    class Pill{
        constructor(x,y,color,size){
        this.color = color
        this.body = new Rectanglex(x,y, size,size, color)
        this.orb = new Circle((this.body.x+size/2), this.body.y, (size/2), color)
        this.orb2 = new Circle((this.body.x+size/2), this.body.y+size, (size/2), color)
        }
        draw(){
            this.body.color = this.color
            this.orb.color = this.color
            this.orb2.color = this.color
            this.body.draw()
            this.orb.draw()
            this.orb2.draw()
        }
        isPointInside(point){
            return (this.body.isPointInside(point) || this.orb.isPointInside(point) || this.orb2.isPointInside(point))
        }
    }

    class Hexagon{
        constructor(x, y, color, size){
            this.body = new Circle(x,y,size, "transparent")
            this.show = []
            let shower = new Circle(x,y+size,0,"transparent")
            this.show.push(shower)
            shower = new Circle(x-(size*.8),y+(size*.5),0,"transparent")
            this.show.push(shower)
            shower = new Circle(x-(size*.8),y-(size*.5),0,"transparent")
            this.show.push(shower)
            shower = new Circle(x,y-size,0,"transparent")
            this.show.push(shower)
            shower = new Circle(x+(size*.8),y-(size*.5),0,"transparent")
            this.show.push(shower)
            shower = new Circle(x+(size*.8),y+(size*.5),0,"transparent")
            this.show.push(shower)
            shower = new Circle(x,y+size,0,"transparent")
            this.show.push(shower)
            this.color = color
        }
        draw(){

            tutorial_canvas_context.lineWidth = 0
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.beginPath()

            tutorial_canvas_context.moveTo(this.body.x, this.body.y)

            for(let t=0;t<this.show.length; t++){
                tutorial_canvas_context.lineTo(this.show[t].x, this.show[t].y)
            }

            tutorial_canvas_context.stroke()
            tutorial_canvas_context.fill()



        }
        isPointInside(point){
            return this.body.isPointInside(point)
        }
        

    }

    class Line{
        constructor(x,y, x2, y2, color, width){
            this.x1 = x
            this.y1 = y
            this.x2 = x2
            this.y2 = y2
            this.color = color
            this.width = width
        }
        hypotenuse(){
            let xdif = this.x1-this.x2
            let ydif = this.y1-this.y2
            let hypotenuse = (xdif*xdif)+(ydif*ydif)
            return Math.sqrt(hypotenuse)
        }
        draw(){
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = this.width
            tutorial_canvas_context.beginPath()
            tutorial_canvas_context.moveTo(this.x1, this.y1)         
            tutorial_canvas_context.lineTo(this.x2, this.y2)
            tutorial_canvas_context.stroke()
            tutorial_canvas_context.lineWidth = 1
        }
    }
    class Player{
        constructor(){
            
            this.level = 1
            this.counterbase = 0
            this.body = new Circle(100,600, 30, "white")
            this.combo = 0
            this.dead = 0
            this.grid = []
            this.target = {}
            this.target.body = {}
            this.target.body.x = -1000
            this.target.body.y = -1000
            this.target.body.radius = 0
            this.magentamax = 100
            this.magenta = 100
            this.cyanmax = 100
            this.cyan = 100
            this.orbs = []
            this.attacking = 0
            this.yellowmax = 100
            this.yellow = 100
            this.greenmax = 100
            this.green = 100
            this.purplemax = 100
            this.purple = 100
            this.orangemax = 100
            this.orange = 100
            this.greenlock = 0
            this.orangelock = 0
            this.purplelock = 0
            this.counter = 0
            this.discount = 0
            this.defense = 1
            this.magentabonus = 0
            this.yellowbonus = 0
            this.cyanbonus = 0
            this.tempgreen = -1
            this.tempmagenta = -1
            this.tempyellow = -1
            this.tempcyan = -1
            this.temporange = -1
            this.temppurple = -1
            this.vampirism= .1
            this.cast = new Rectanglex(this.body.x - 50, this.body.y-180, 20, 100, "white")
            this.rect = new Rectanglex(this.body.x - 49, this.body.y-150, 20, 20, "#FF00AA")
            this.trig = new Triangle(this.body.x, this.body.y-130, "yellow", 10)
            this.circ = new Circle(this.body.x+40, this.body.y-140, 10, "cyan")
            this.cres = new Crescent(this.body.x+40, this.body.y-105,10, "#00FF00")       
            this.hex = new Hexagon(this.body.x - 38,this.body.y-105,"orange", 11.5)       
            this.pill = new Pill(this.body.x-5.5, this.body.y-111,"purple", 13)       
            // for(let t = 0; t<9; t++){
            // }
            for(let g = 0; g<99; g+=33){   
                for(let h = 0; h<99; h+=33){   
                        let block = new Rectangle(50+(h),600 - 293+(g),33,33, "white")
                        block.detail =  new Circle(this.body.x+40, this.body.y-80, 10, "transparent")
                        this.grid.push(block)
                        // g+=6
                }
                // h+=5
            }

        }
        spell(){

            //console.log(this)
            this.green = this.tempgreen+7
            this.magenta = this.tempmagenta+7
            this.yellow = this.tempyellow+7
            this.purple = this.temppurple+7
            this.cyan = this.tempcyan+7
            this.orange = this.temporange+7

            //console.log(this)

            if(this.green > this.greenmax){
                this.green = this.greenmax
            }
            if(this.magenta > this.magentamax){
                this.magenta = this.magentamax
            }
            if(this.yellow > this.yellowmax){
                this.yellow = this.yellowmax
            }
            if(this.purple > this.purplemax){
                this.purple = this.purplemax
            }
            if(this.cyan > this.cyanmax){
                this.cyan = this.cyanmax
            }
            if(this.orange > this.orangemax){
                this.orange = this.orangemax
            }

            this.tempgreen = -1
            this.tempmagenta = -1
            this.tempyellow = -1
            this.tempcyan = -1
            this.temporange = -1
            this.temppurple = -1
            
            this.attacking = 1
            let mag = 0
            let cy = 0
            let yel = 0
            let org = 0
            let gre = 0
            let purp = 0
            this.combo = 0


            for(let f = 0; f< this.grid.length;f++){
                let app1 = 0
                let app2 = 0
                if(f+3<this.grid.length){
                    if(this.grid[f+3].detail.color == this.grid[f].detail.color){
                        if(this.grid[f+3].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                          
                        }else{
                            app1 = 1
                        }
                    }
                }
                if(f-3>=0 ){
                    if(this.grid[f-3].detail.color == this.grid[f].detail.color){
                        if(this.grid[f-3].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                           
                        }else{
                            app2 = 1
                        }
                    }
                }
                    if(app1 == 1 && app2 == 1){
                      this.combo+=.4 //.5
                      }else  if(app1 == 1 || app2 == 1){
                        this.combo+=.25
                      }else{
                        this.combo+=.05
                      }
                }

                for(let f = 0; f< this.grid.length;f++){
                    let app1 = 0
                    let app2 = 0
                    if(f+2<this.grid.length){
                        if(this.grid[f+2].detail.color == this.grid[f].detail.color){
                            if(this.grid[f+2].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                              
                            }else{
                                app1 = 1
                            }
                        }
                    }
                    if(f-2>=0 ){
                        if(this.grid[f-2].detail.color == this.grid[f].detail.color){
                            if(this.grid[f-2].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                               
                            }else{
                                app2 = 1
                            }
                        }
                    }
                        if(app1 == 1 && app2 == 1){
                          this.combo+=.4 //.5
                          }else  if(app1 == 1 || app2 == 1){
                            this.combo+=.25
                          }else{
                            this.combo+=.05
                          }
                    }
    
    
    
                    for(let f = 0; f< this.grid.length;f++){
                        let app1 = 0
                        let app2 = 0
                        if(f%3 == 1){
                            if(f+1<this.grid.length){
                                if(this.grid[f+1].detail.color == this.grid[f].detail.color){
                                    if(this.grid[f+1].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                                      
                                    }else{
                                        app1 = 1
                                    }
                                }
                            }
                            if(f-1>=0 ){
                                if(this.grid[f-1].detail.color == this.grid[f].detail.color){
                                    if(this.grid[f-1].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                                       
                                    }else{
                                        app2 = 1
                                    }
                                }
                            }
                        }
                            if(app1 == 1 && app2 == 1){
                              this.combo+=.4 //.5
                              }else  if(app1 == 1 || app2 == 1){
                                this.combo+=.25
                              }else{
                                this.combo+=.05
                              }
                        }
        
        
    
    
                    for(let f = 0; f< this.grid.length;f++){
                        let app1 = 0
                        let app2 = 0
                        if(f+4<this.grid.length){
                            if(this.grid[f+4].detail.color == this.grid[f].detail.color){
                                if(this.grid[f+4].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                                  
                                }else{
                                    app1 = 1
                                }
                            }
                        }
                        if(f-4>=0 ){
                            if(this.grid[f-4].detail.color == this.grid[f].detail.color){
                                if(this.grid[f-4].detail.color == "transparent" ||this.grid[f].detail.color == "transparent"  ){
                                   
                                }else{
                                    app2 = 1
                                }
                            }
                        }
                            if(app1 == 1 && app2 == 1){
                              this.combo+=.4 //.5
                              }else  if(app1 == 1 || app2 == 1){
                                this.combo+=.25
                              }else{
                                this.combo+=.05
                              }
                        }
        
        
                

                        //console.log(this.combo)

            this.counter = this.combo+this.counterbase
            for(let t = 0; t< this.grid.length; t++){
                if(this.grid[t].detail.color == "cyan"){
                    if(cy==0){
                        cy = 1
                        this.counter*=player.target.circresist+this.cyanbonus
                    }
                    // this.cyan-=11-this.discount
                }
                if(this.grid[t].detail.color == "yellow"){
                    if(yel==0){
                        yel = 1
                        this.counter*=player.target.trigresist+this.yellowbonus
                    }
                    // this.yellow-=11-this.discount
                }
                if(this.grid[t].detail.color == "#FF00AA"){
                    if(mag==0){
                        mag = 1
                        this.counter*=player.target.rectresist+this.magentabonus
                    }
                    // this.magenta-=11-this.discount
                }
                if(this.grid[t].detail.color == "#00FF00"){
                    if(gre==0){
                        gre = 1
                        this.counter*=player.target.cresresist+((this.cyanbonus+this.yellowbonus)/2)
                    }
                    // this.green-=11-this.discount
                }
                if(this.grid[t].detail.color == "orange"){
                    if(org==0){
                        org = 1
                        this.counter*=player.target.hexresist+((this.magentabonus+this.yellowbonus)/2)
                    }
                    // this.orange-=11-this.discount
                }
                if(this.grid[t].detail.color == "purple"){
                    if(purp==0){
                        purp = 1
                        this.counter*=player.target.pillresist+((this.cyanbonus+this.magentabonus)/2)
                    }
                    // this.purple-=11-this.discount
                }

            }   

            // //console.log(counter)
            //console.log(this.counter)
            counterhold = this.counter
            setTimeout(function(){
            player.target.body.radius -=  counterhold
            setTimeout(function(){
                if(player.target.body.radius <=4){
                    for(let e = 0; e<enemies.length; e++){
                        if(enemies[e].body.radius<=4){
                            enemies.splice(e,1)
                        }
                    }
                }
        }, 50); 
        }, 500); 
            player.body.radius+=(this.counter*this.vampirism)

            if(player.body.radius < 0){
                player.body.radius = 0
            }

            if(player.body.radius > 30){
                player.body.radius = 30
            }


            // setTimeout(function(){
        // }, 10); 

            this.grid = []

            for(let g = 0; g<99; g+=33){   
                for(let h = 0; h<99; h+=33){   
                    let block = new Rectangle(50+(h),600 - 293+(g),33,33, "white")
                        block.detail =  new Circle(this.body.x+40, this.body.y-80, 10, "transparent")
                        this.grid.push(block)
                        // g+=6
                }
                // h+=5
            }
        }
        gridpush(obj){
            if(obj == this.circ){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){
                        if(this.tempcyan > 11-this.discount){
                            this.grid[t].detail = new Circle(this.grid[t].x+(this.grid[t].width/2), this.grid[t].y+(this.grid[t].height/2), 8, "cyan")
                            t = this.grid.length
                            this.tempcyan-=(11-this.discount)
                        }
                    }
                }
            }
            if(obj == this.rect){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){

                        if(this.tempmagenta > 11-this.discount){
                        this.grid[t].detail = new Rectanglex(this.grid[t].x+(this.grid[t].width/4), this.grid[t].y+(this.grid[t].height/4), this.grid[t].width/2, this.grid[t].width/2,"#FF00AA")
                        t = this.grid.length

                        this.tempmagenta-=(11-this.discount)
                        }
                    }
                }
            }
            if(obj == this.trig){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){
                        if(this.tempyellow > 11-this.discount){
                        this.grid[t].detail = new Triangle(this.grid[t].x+16.5, this.grid[t].y+24, "yellow", 7.25)
                        t = this.grid.length

                        this.tempyellow-=(11-this.discount)
                        }
                    }
                }
            }
            if(obj == this.cres){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){

                        if(this.tempgreen > 11-this.discount){
                        this.grid[t].detail = new Crescent(this.grid[t].x+(this.grid[t].width/2), this.grid[t].y+(this.grid[t].height/2), 8, "#00FF00")
                        t = this.grid.length

                        this.tempgreen-=(11-this.discount)
                        }
                    }
                }
            }
            if(obj == this.hex){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){
                        if(this.temporange > 11-this.discount){
                        this.grid[t].detail = new  Hexagon(this.grid[t].x+(this.grid[t].width/2), this.grid[t].y+(this.grid[t].height/2), "orange" ,8)
                        t = this.grid.length
                        this.temporange-=(11-this.discount)
                        }
                    }
                }
            }
            if(obj == this.pill){
                for(let t = 0; t< this.grid.length; t++){
                    if(this.grid[t].detail.color =="transparent"){
                        if(this.temppurple > 11-this.discount){
                        this.grid[t].detail = new  Pill(this.grid[t].x+(this.grid[t].width/(33/12)), this.grid[t].y+(this.grid[t].height/2.5), "purple" ,8)
                        t = this.grid.length
                        this.temppurple-=(11-this.discount)
                        }
                    }
                }
            }

        }
        draw(){
            if(this.dead == 0){

                if(this.tempgreen == -1){
                    this.tempgreen = this.green
                }
                if(this.temporange == -1){
                    this.temporange = this.orange
                }
                if(this.temppurple == -1){
                    this.temppurple = this.purple
                }
                if(this.tempcyan == -1){
                    this.tempcyan = this.cyan
                }
                if(this.tempmagenta == -1){
                    this.tempmagenta = this.magenta
                }
                if(this.tempyellow == -1){
                    this.tempyellow = this.yellow
                }
                if(upgrades.barset[0].length > 1){
                    this.greenlock = 1
                }else{
                    this.greenlock = 0
                }
                if(upgrades.barset[1].length > 1){
                    this.orangelock = 1
                }else{
                    this.orangelock = 0
                }
                if(upgrades.barset[2].length > 1){
                    this.purplelock = 1
                }else{
                    this.purplelock = 0
                }
                this.counterbase = upgrades.barset[3].length/34
                this.discount = (upgrades.barset[4].length-1)/3
                this.defense = 1+(((upgrades.barset[5].length-1)/17)*12)
                this.vampirism = .1+(((upgrades.barset[6].length-1)/17)*1)
                this.cyanbonus = (((upgrades.barset[7].length-1)/17)*.9)
                this.yellowbonus = (((upgrades.barset[8].length-1)/17)*.9)
                this.magentabonus = (((upgrades.barset[9].length-1)/17)*.9)
                this.cyanbonus += (((upgrades.barset[0].length-1)/34)*.9)
                this.yellowbonus += (((upgrades.barset[0].length-1)/34)*.9)
                this.yellowbonus += (((upgrades.barset[1].length-1)/34)*.9)
                this.magentabonus += (((upgrades.barset[1].length-1)/34)*.9)
                this.cyanbonus += (((upgrades.barset[2].length-1)/34)*.9)
                this.magentabonus += (((upgrades.barset[2].length-1)/34)*.9)
    
    
    
                // this.discount = (upgrades.barset[5].length-1)/3
    
    
            if(this.attacking == 1){
                let attack = new Line(this.body.x, this.body.y, this.target.body.x, this.target.body.y, this.body.color, this.counter/2)
                attack.draw()
                
                setTimeout(function(){
                    player.attacking = -1
                    // if(enemies.length > 0){
                        setTimeout(function(){

                    player.attacking = 0
                            for(let e = 0; e<enemies.length; e++){
                                if(!enemies[e].body.radius<=5){
                                enemies[e].attacking +=1
                                }
                            }
                        }, 500); 
                    // }
            }, 500); 
            }
            
                // this.body.radius-=.01
                for(let t = 0; t< 25; t++){
                    if(Math.random()<(this.tempmagenta/this.magentamax)/9){
                        let orb = new Circle(this.body.x, this.body.y, 2, "#FF00AA", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                        this.orbs.push(orb)
                    }
                    if(Math.random()<(this.tempcyan/this.cyanmax)/9){
                        let orb = new Circle(this.body.x, this.body.y, 2, "cyan", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                        this.orbs.push(orb)
                        
                    }
                    if(Math.random()<(this.tempyellow/this.yellowmax)/9){
                        let orb = new Circle(this.body.x, this.body.y, 2, "yellow", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                        this.orbs.push(orb)
                        
                    }
                    if(Math.random()<(this.tempgreen/this.greenmax)/9){
                        if(this.greenlock ==1){
    
                            let orb = new Circle(this.body.x, this.body.y, 2, "#00FF00", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                            this.orbs.push(orb)
                        }
                        
                    }
                    if(Math.random()<(this.temporange/this.orangemax)/9){
                        if(this.orangelock == 1){
                            let orb = new Circle(this.body.x, this.body.y, 2, "orange", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                            this.orbs.push(orb)
                        }
                    }
                    if(Math.random()<(this.temppurple/this.purplemax)/9){
                        if(this.purplelock == 1){
                            let orb = new Circle(this.body.x, this.body.y, 2, "purple", 2.51*(Math.random()-.5),2.51*(Math.random()-.5))
                            this.orbs.push(orb)
                        }
                    }
                    for(let t = 0; t<this.orbs.length; t++){
                        if(this.orbs[t].y > 629){
                            this.orbs.splice(t,1)
                        }
                     }
                }
                // if(this.body.radius < 0){
                //     this.dead = 1
                // }else{
                    if(this.body.radius >= 0){
                        player.body.y=floor.y1-player.body.radius
    
                    }
                    for(let t = 0; t<this.orbs.length; t++){
                        if(!this.body.isPointInside(this.orbs[t])){ 
                        this.orbs[t].radius -=.05
                        }else{
                            this.orbs[t].xmom *=1.03
                            this.orbs[t].ymom *=1.03
                        }
                    }
    
                    for(let t = 0; t<this.orbs.length; t++){
                 
                        if(this.orbs[t].radius <=1.2){
                            this.orbs.splice(t,1)
                        }
                     }  for(let t = 0; t<this.orbs.length; t++){
                        if(this.orbs[t].y > 625){
                            this.orbs.splice(t,1)
                        }
                     }
                    for(let t = 0; t<this.orbs.length; t++){
                        this.orbs[t].move()
                        if(this.orbs[t].radius > 0){
                            this.orbs[t].draw()
                        }
                    }
                    this.cast.draw()
                    this.rect.draw()
                    this.trig.draw()
                    this.circ.draw()
                    if(this.greenlock == 1){
                        this.cres.draw()
                    }
                    if(this.orangelock == 1){
                    this.hex.draw()
                    }
                    if(this.purplelock == 1){
                    this.pill.draw()
                    }
                    if(this.body.radius > 0){
                        this.body.draw()
                    }else{
                        this.dead = 1
                    }
                    for(let t = 0; t<this.grid.length; t++){
                        this.grid[t].draw()
                        this.grid[t].detail.draw()
                    }
                
                // }
            }

        }

    }

    class Pointer{
        constructor(x,y, color, length=40){
            this.x = x
            this.y = y
            this.color = color
            this.length = length
            this.radius = length
        }
        draw(){
 
            tutorial_canvas_context.beginPath(); 
    
            tutorial_canvas_context.moveTo(this.x, this.y+this.length/2); 
            
            tutorial_canvas_context.lineTo(this.x+this.length, this.y+this.length/2); 
            
            tutorial_canvas_context.lineTo(this.x,this.y+this.length*1.41); 
            
            tutorial_canvas_context.lineTo(this.x-this.length, this.y+this.length/2); 
 
            tutorial_canvas_context.lineTo(this.x,this.y+this.length/2); 
 
            tutorial_canvas_context.stroke();  
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fill()
 
 
        }
 
 }


class X{
    constructor(x = 200, y = 200){
        this.x = x
        this.y = y
        this.radius = (20*2.82)
        this.y1 = y-(this.radius/2.82)
        this.linewidth = 10
        // this.width = 40
    }
    draw(){

        this.linewidth = this.radius/5.64
        tutorial_canvas_context.strokeStyle = "red"
        tutorial_canvas_context.lineWidth = this.linewidth

        tutorial_canvas_context.beginPath(); 

        tutorial_canvas_context.moveTo(this.x- this.radius/2, this.y1+this.radius/2); 
        
        tutorial_canvas_context.lineTo(this.x+this.radius/2, this.y1-this.radius/2); 

        tutorial_canvas_context.stroke();  
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.fill()


        tutorial_canvas_context.beginPath(); 

        tutorial_canvas_context.moveTo(this.x+ this.radius/2, this.y1+this.radius/2); 
        
        tutorial_canvas_context.lineTo(this.x-this.radius/2, this.y1-this.radius/2); 

        tutorial_canvas_context.stroke();  
        tutorial_canvas_context.fillStyle = this.color
        tutorial_canvas_context.fill()

        tutorial_canvas_context.lineWidth = 1

    }

}

class Crescent{
    constructor(x,y, radius, color){
        this.body = new Circle(x,y, radius, color)
        this.color = color
        this.body2 = new Circle(x-2.5,y-2.5, radius-3, tutorial_canvas.style.background)
    }
    draw(){
        this.body.color = this.color
        this.body.draw()
        this.body2.draw()
    }
    isPointInside(point){
        return this.body.isPointInside(point) 
    }
}

//  class Clover{
//     constructor(){
//         this.body = new X()
//         this.lobes = []
//         this.dis = 0
//         let lobe1 = new Circle(this.body.x, this.body.y, 10, "green")
//         let lobe2 = new Circle((this.body.x, this.body.y, 10, "green"))
//     }

//  }

 class Enemy{
     constructor(x,y,radius,color){
         this.body = new Circle(x,y,radius,color)
         this.attacking = 0
         this.attacked = 0
         this.trigresist = 1
         this.circresist = 1
         this.rectresist = 1
         this.cresresist = 1.25
         this.hexresist = 1.25
         this.pillresist = 1.25
         this.bob = Math.floor(Math.random()*50)
         this.displace = (Math.random()-.33)*200
         if(this.displace > (-(25*.4))){
             this.displace+=(25*.4)
         }
         this.attack = 1+(Math.random()*3+(player.level/10))
         this.hat = new Line(this.body.x, this.body.y, this.body.x, this.body.y-(this.body.radius*1.6), this.body.color, this.body.radius/10)
         this.prop = new Line(this.body.x+(this.body.radius*.8), this.body.y-(this.body.radius*1.6), this.body.x-(this.body.radius*.8), this.body.y-(this.body.radius*1.6), this.body.color, this.body.radius/10)
     }
     balance(){
         let summer = this.rectresist+this.circresist+this.trigresist
         //console.log(summer)
         //console.log(this)
         if(summer < 3.6){
            this.rectresist*=1.2
            this.circresist*=1.2
            this.trigresist*=1.2
         } 
         summer = this.rectresist+this.circresist+this.trigresist
         //console.log(summer)
     }
     draw(){

        let summer = this.rectresist+this.circresist+this.trigresist
        if(summer < 3.6){
        this.balance()
        }
        this.bob++

        if(this.displace> 0){
        if(this.bob%50 > 24){
            this.displace+=.4
        }else{
            this.displace-=.4
        }
    }

    if(this.body.radius > 0){
        this.body.y=floor.y1-this.body.radius
        if(this.displace > 0){
            this.body.y -= this.displace
        }
    }
        this.hat = new Line(this.body.x, this.body.y, this.body.x, this.body.y-(this.body.radius*1.6), this.body.color, this.body.radius/10)
         this.prop = new Line(this.body.x+(this.body.radius*.8), this.body.y-(this.body.radius*1.6), this.body.x-(this.body.radius*.8), this.body.y-(this.body.radius*1.6), this.body.color, this.body.radius/10)
  

        if(this.displace> 0){
            if(this.body.radius > 0){
                this.hat.draw()
                this.prop.draw()
            }
        }




        if(this.attacking > 0){
            if(this.attacked == 0){
                this.attacked = 1
                player.body.radius-=(this.attack)/player.defense
            }
            let attack = new Line(this.body.x, this.body.y, player.body.x, player.body.y, this.body.color, (this.attack/player.defense))
            attack.draw()
            
            setTimeout(function(){
                for(let e = 0; e<enemies.length; e++){
                    
                    // if(enemies[e].attacking > 2){
                        enemies[e].attacking = 0
                    // }
                    enemies[e].attacked =0

                }
            }, 500); 
        }

         this.body.draw()
     }
 }


 function getRandomLightColor() {
    var letters = '01234CDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        // //console.log(letters[(Math.floor(Math.random() * 15))])
      color += letters[(Math.floor(Math.random() * 8)+1)];
    }
    //console.log(color)
    return color;
  }



    let player = new Player()
    let floor = new Line(0, 630, 700, 630, "white", 2)
    
    let upgrades = new Upgrades()

    let tringle = new Pointer(-100, 120, "white", 10)
    let enemies = []

    let enemy1 = new Enemy(500, 600, 16, "yellow")
    let enemy2 = new Enemy(580, 600, 25, "magenta")

    enemy1.trigresist = .5
    enemy1.circresist = 1.5
    enemy1.rectresist = 1

    enemy2.trigresist = 2
    enemy2.circresist = 1.5
    enemy2.rectresist = .3


    enemies.push(enemy1)
    enemies.push(enemy2)

    // let hex = new Hexagon(320,350,"orange", 10)

    let spawnercheck = 0


    window.setInterval(function(){ 
        tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
        player.draw()
        for(let e = 0; e<enemies.length; e++){
            if(!enemies[e].body.radius<=0){
            enemies[e].draw()
            }
        }
        tringle.x = player.target.body.x
        if(player.target.body.radius > 0){
            tringle.y =(player.target.body.y-(player.target.body.radius*3))-30
        }
        if(!enemies.includes(player.target)){
            if(enemies.length > 0){
                player.target = enemies[Math.floor(enemies.length*Math.random())]
            }
        }
        floor.draw()
        if(player.dead == 0){
            tringle.draw()
            upgrades.draw()
        }
        // hex.draw()

        if(enemies.length < 1){
        if(spawnercheck == 0){
            spawnercheck = 1

            setTimeout(function(){
                spawnercheck = 0


                player.green = player.greenmax
                player.orange = player.orangemax
                player.purple = player.purplemax
                player.yellow = player.yellowmax
                player.cyan = player.cyanmax
                player.magenta = player.magentamax
                player.tempgreen = player.greenmax
                player.temporange = player.orangemax
                player.temppurple = player.purplemax
                player.tempyellow = player.yellowmax
                player.tempcyan = player.cyanmax
                player.tempmagenta = player.magentamax
                        player.body.radius = 30
            
            
                        player.level+=1
            
                        let enemy1 = new Enemy(490, 600, 16, getRandomLightColor())
                        let enemy2 = new Enemy(560, 600, 25, getRandomLightColor())
                        let enemy3 = new Enemy(630, 600, 14+(Math.random()*14), getRandomLightColor())
                    
                        enemy1.trigresist = 5*(Math.abs(Math.random()-.43))
                        enemy1.circresist =  5*(Math.abs(Math.random()-.43))
                        enemy1.rectresist =  5*(Math.abs(Math.random()-.43))
                    
                        enemy2.trigresist =  5*(Math.abs(Math.random()-.43))
                        enemy2.circresist =  5*(Math.abs(Math.random()-.43))
                        enemy2.rectresist =  5*(Math.abs(Math.random()-.43))
                    
                        enemy3.trigresist =  5*(Math.abs(Math.random()-.43))
                        enemy3.circresist =  5*(Math.abs(Math.random()-.43))
                        enemy3.rectresist =  5*(Math.abs(Math.random()-.43))


                    
                        enemy1.attacking = -2
                        enemy2.attacking = -2
                        enemy3.attacking = -2
                        enemy1.attacked = 1
                        enemy2.attacked = 1 
                        enemy3.attacked = 1 
                    
                    
                        enemies.push(enemy1)
                        if(Math.random()<.5){
                    
                            enemies.push(enemy2)
                            
                        }
                            if(Math.random()<.5){
                
                        enemies.push(enemy3)
                        
                        }
            }, 1000); 
        }
    }
    }, 20) 



    // //console.log(parseFloat("1.01"))

        
})