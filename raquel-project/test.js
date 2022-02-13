var test = function(p){
    var tiles = 20;
    

    p.setup = function(){
    // Creates a canvas with 800px width and 600px height
        p.createCanvas(800, 800);
        var backgroundColor = p.color(238, 240, 235)
        p.background(backgroundColor)
        tileWidth = p.width/tiles;
        tileHeight = p.height/tiles;
        // p.frameRate(10);
        p.noLoop()
    }

    p.draw = function(){
        for(var j = 0; j<tiles;j++){
            for(var i = 0; i<tiles;i++){
                let lineCollor = p.color(39, 8, 160)
                //colorDarkBlueSquare
                var colorDarkBlueSquare = p.color(238, 240, 235);

    
                p.fill(colorDarkBlueSquare)
                p.stroke(lineCollor)
                p.square(i*tileWidth,j*tileHeight,tileWidth)

                var startOfTileX = i*tileWidth;
                var startOfTileY = j*tileHeight

                //var lineCollor = p.color(238, 240, 235);



                function verticalLine(){
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth)
                }

                function horizontalLine(){
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX, startOfTileY + tileWidth/2, startOfTileX + tileWidth, startOfTileY + tileWidth/2)
                }

                function triangle90DegreesLeftCornerBottom(){
                    p.fill(lineCollor)
                    p.triangle(startOfTileX,startOfTileY,startOfTileX,startOfTileY+tileWidth,startOfTileX+tileWidth,startOfTileY+tileWidth)
                }

                function triangle90DegreesLeftCornerTop(){
                    p.fill(lineCollor)
                    p.triangle(startOfTileX+tileWidth,startOfTileY,startOfTileX,startOfTileY,startOfTileX,startOfTileY+tileWidth)
                }

                function triangle90DegreesRightCornerBottom(){
                    p.fill(lineCollor)
                    p.triangle(startOfTileX,startOfTileY+tileWidth,startOfTileX+tileWidth,startOfTileY+tileWidth,startOfTileX+tileWidth,startOfTileY)
                }

                function triangle90DegreesRightCornerTop(){
                    p.fill(lineCollor)
                    p.triangle(startOfTileX,startOfTileY,startOfTileX+tileWidth,startOfTileY,startOfTileX+tileWidth,startOfTileY+tileWidth)
                }



           
                // function setup() {
                //     createCanvas(400, 400);
                //     frameRate(5)
                //   }
                  
                //   function draw() {
                //     background(220);
                //     //triangle 90 left corner bottom: 0x,0y,0x,fullY,fullX,Fully
                //     //triangle(0, 0, 0, 400, 400, 400)
                    
                //     //triangle 90 left corner top: fullX,0Y,0X,0Y,0X,FullY
                //     //triangle(400,0,0,0,0,400)
                    
                //     //triangle 90 right corner bottom
                //     triangle(0,400,400,400,400,0)
                //   }


                //the higher n, the emptier the panel
                var n = 10

                var randomShape = Math.floor(Math.random() * n)

                if(randomShape === 0){
                    triangle90DegreesLeftCornerBottom()
                
                }
                else if(randomShape === 1){
                    triangle90DegreesLeftCornerTop()
                }
                else if(randomShape === 2){
                    triangle90DegreesRightCornerBottom()
                }
                else if(randomShape === 3){
                    triangle90DegreesRightCornerTop()
                }
                else if(randomShape === 4 || randomShape === 5 || randomShape === 7){
                    verticalLine()
                }
                else if(randomShape === 8 || randomShape === 9 || randomShape === 10){
                    horizontalLine()
                }else{
                    //
                }


            }
        }

    }
}



var testTiles = new p5(test, 'test')