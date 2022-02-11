var test = function(p){
    var tiles = 20;
    

    p.setup = function(){
    // Creates a canvas with 800px width and 600px height
        p.createCanvas(800, 800);
        var backgroundColor = p.color(238, 240, 235)
        p.background(backgroundColor)
        tileWidth = p.width/tiles;
        tileHeight = p.height/tiles;
        p.noLoop()
    }

    p.draw = function(){
        for(var j = 0; j<tiles;j++){
            for(var i = 0; i<tiles;i++){
                let colorDarkBlueSquare = p.color(39, 8, 160)
                var lineCollor = p.color(238, 240, 235);
                p.fill(colorDarkBlueSquare)
                p.stroke(lineCollor)
                p.square(i*tileWidth,j*tileHeight,tileWidth)

                var startOfTileX = i*tileWidth;
                var startOfTileY = j*tileHeight

                var lineCollor = p.color(238, 240, 235);

                function squareTopLeft() {
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                }
                function squareTopRight(){
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth, startOfTileY + tileWidth /2 , startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                }
                function squareBottomLeft(){
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2,startOfTileY + tileWidth/2,startOfTileX+tileWidth/2, startOfTileY + tileWidth)
                }
                function squareBottomRight(){
                    p.stroke(lineCollor)
                    p.strokeWeight(3)
                    p.line(startOfTileX + tileWidth, startOfTileY + tileWidth /2 , startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2,startOfTileY + tileWidth/2,startOfTileX+tileWidth/2, startOfTileY + tileWidth)
                }

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

                //TODO: insert half circle
                function halfCircleOpenTop(){
                    p.fill(lineCollor)
                    // p.strokeWeight(3)
                    p.arc(startOfTileX + (tileWidth/2), startOfTileY,tileWidth,tileWidth,p.radians(0),p.radians(180))
                }

                function halfCircleOpenBottom(){
                    p.fill(lineCollor)
                    // p.strokeWeight(3)
                    
                    p.arc(startOfTileX + (tileWidth/2), startOfTileY+tileWidth,tileWidth,tileWidth,p.radians(180),p.radians(0))
                }

 


                function halfCircleOpenToLeft(){
                    p.fill(lineCollor)
                    p.arc(startOfTileX,startOfTileY + (tileWidth/2),tileWidth,tileWidth,p.radians(270),p.radians(90))
                }

                function halfCircleOpenToRight(){
                    p.fill(lineCollor)
                    p.arc(startOfTileX+tileWidth,startOfTileY + (tileWidth/2),tileWidth,tileWidth,p.radians(90),p.radians(270))
                }

                var randomShape = Math.floor(Math.random() * 20)

                if(randomShape === 0){
                    
                    squareTopLeft() 
                }
                else if(randomShape === 1){
                    squareTopRight()
                }
                else if(randomShape === 2){
                    squareBottomLeft()
                }
                else if(randomShape === 3){
                    squareBottomRight()
                }
                else if(randomShape === 4){
                    verticalLine()
                }
                else if(randomShape === 5){
                    horizontalLine()
                }else if(randomShape === 6){
                    halfCircleOpenTop()
                }else if(randomShape === 7){
                    halfCircleOpenBottom()
                }else if(randomShape === 8){
                    halfCircleOpenToLeft()
                }else if(randomShape === 9){
                    halfCircleOpenToRight()
                }
                else{
                    
                }


            }
        }

    }
}



var testTiles = new p5(test, 'test')