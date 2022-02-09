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
        
        console.log(random)
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
            
            console.log(random)
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
                var greenSquare = p.square(startOfTileX,startOfTileY,tileWidth)

                function squareTopLeft() {
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                }
                function squareTopRight(){
                    p.line(startOfTileX + tileWidth/2, startOfTileY, startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth, startOfTileY + tileWidth /2 , startOfTileX + tileWidth/2, startOfTileY + tileWidth/2)
                }
                function squareBottomLeft(){
                    p.line(startOfTileX + tileWidth/2, startOfTileY + tileWidth/2, startOfTileX, startOfTileY + tileWidth/2)
                    p.line(startOfTileX + tileWidth/2,startOfTileY + tileWidth/2,startOfTileX+tileWidth/2, startOfTileY + tileWidth)
                }
                function squareBottomRight(){
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

var triangleTiles = new p5(triangle,'triangle-div');
var armedForcesHospitalTiles = new p5(armedForcesHospital, 'armed-forces-hospital-div')