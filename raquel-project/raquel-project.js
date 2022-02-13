//regenerative art project with th goal of resembling the tiles in Brasilia
//copyright Emile Plas

//sketch one
var triangle = function(p){
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
        var random = Math.floor(Math.random() * 2)
        
        
        if(random === 0){ 
            let colorTriangleOne = p.color(62, 146, 204)
            p.fill(colorTriangleOne);
            p.triangle(i * tileWidth, j * tileHeight, (i+1) * tileWidth, (j+1)*tileHeight, i * tileWidth, (j+1) * (tileHeight))
        }else if(random === 1){
            let colorTriangleTwo = p.color(42, 98, 143)
            p.fill(colorTriangleTwo);
            p.triangle(i*tileWidth, j*tileHeight,(i+1) * tileWidth, j*tileHeight, (i+1) *tileWidth, (j+1) *tileWidth)
        }
        
        
        }
    }


    }
}


//sketch two
var armedForcesHospital = function(p){
    var tiles = 20;
    var greenSquareArray = []

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
            var random = Math.floor(Math.random() * 2)
            
            
            if(random === 0){ 
                let colorDarkBlueSquare = p.color(5,17,146)
                p.fill(colorDarkBlueSquare)
                p.square(i*tileWidth,j*tileHeight,tileWidth)
            }
            else{
                var startOfTileX = i*tileWidth;
                var startOfTileY = j*tileHeight
                let colorGreenSquare = p.color(7,112,16)

        
                p.fill(colorGreenSquare)
                var greenSquare = p.square(startOfTileX,startOfTileY,tileWidth);

                var lineCollor = p.color(238, 240, 235);

                function squareTopLeft() {
                    p.stroke(lineCollor)
                    p.strokeWeight(1.5)
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                }
                function squareTopRight(){
                    p.stroke(lineCollor)
                    p.strokeWeight(1.5)
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth, startOfTileY + tileWidth /2 , startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                }
                function squareBottomLeft(){
                    p.stroke(lineCollor)
                    p.strokeWeight(1.5)
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2,startOfTileY + tileWidth/2,startOfTileX+tileWidth/2, startOfTileY + tileWidth)
                }
                function squareBottomRight(){
                    p.stroke(lineCollor)
                    p.strokeWeight(1.5)
                    p.line(startOfTileX + tileWidth, startOfTileY + tileWidth /2 , startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2,startOfTileY + tileWidth/2,startOfTileX+tileWidth/2, startOfTileY + tileWidth)
                }

                var randomSquare = Math.floor(Math.random() * 4)

                if(randomSquare === 0){
                    squareTopLeft() 
                }
                else if(randomSquare === 1){
                    squareTopRight()
                }
                else if(randomSquare === 2){
                    squareBottomLeft()
                }
                else{
                    squareBottomRight()
                }

                



            }
            
            }
        }



}
}


//sketch tree: Tile Panel from Ministry of Foreing Affairs - Annex I - 8th floor
var ministryForeignAffairs = function(p){
    var tiles = 20;
    var greenSquareArray = []

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
                let colorDarkBlueSquare = p.color(5,6,169)
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


                //chooses a random shape to fill the tiles. The higher the number n, the higher the change that there are empty tile, and the less busy the tile panel is
                var n = 20;
                var randomShape = Math.floor(Math.random() * n)

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

var tvTower = function(p){
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









var armedForcesHospitalTiles = new p5(armedForcesHospital, 'armed-forces-hospital-div');
var ministryForeignAffairsTiles = new p5(ministryForeignAffairs, 'minstry-foreign-affairs');
var tvTowerTiles = new p5(tvTower, 'tv-tower');
var triangleTiles = new p5(triangle,'triangle-div');