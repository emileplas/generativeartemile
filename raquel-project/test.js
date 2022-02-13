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
                let colorDarkBlueSquare = p.color(39, 8, 160)
                var lineCollor = p.color(238, 240, 235);
                p.fill(colorDarkBlueSquare)
                p.stroke(lineCollor)
                p.square(i*tileWidth,j*tileHeight,tileWidth)

                var startOfTileX = i*tileWidth;
                var startOfTileY = j*tileHeight

                var lineCollor = p.color(238, 240, 235);



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
                function triangeleCornerTopLef()

                var randomShape = Math.floor(Math.random() * 20)

                if(randomShape === 0){
                    
                
                }
                else if(randomShape === 1){
                  
                }
                else if(randomShape === 2){
                  
                }
                else if(randomShape === 3){
                 
                }
                else if(randomShape === 4){
                    verticalLine()
                }
                else if(randomShape === 5){
                    horizontalLine()
                }else{
                    //
                }


            }
        }

    }
}



var testTiles = new p5(test, 'test')