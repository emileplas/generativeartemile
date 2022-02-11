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
                let colorDarkBlueSquare = p.color(39, 8, 160)
                p.fill(colorDarkBlueSquare)
                p.square(i*tileWidth,j*tileHeight,tileWidth)
            }
            else{
                var startOfTileX = i*tileWidth;
                var startOfTileY = j*tileHeight
                let colorGreenSquare = p.color(94, 222, 43)
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




var triangleTiles = new p5(triangle,'triangle-div');
var armedForcesHospitalTiles = new p5(armedForcesHospital, 'armed-forces-hospital-div');
var ministryForeignAffairsTiles = new p5(ministryForeignAffairs, 'minstry-foreign-affairs')