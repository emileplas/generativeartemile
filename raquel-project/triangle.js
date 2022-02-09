//regenerative art project with th goal of resembling the tiles in Brasilia
//copyright Emile Plas

var tiles = 20;
var tileSize;

function setup(){
    // Creates a canvas with 800px width and 600px height
    createCanvas(800, 800);
    var backgroundColor = color(238, 240, 235)
    background(backgroundColor)
    tileWidth = width/tiles;
    tileHeight = height/tiles;
    noLoop()
}

function draw(){
  for(var j = 0; j<tiles;j++){
    for(var i = 0; i<tiles;i++){
      var random = Math.floor(Math.random() * 2)
    
      console.log(random)
      if(random === 0){ 
        let colorTriangleOne = color(62, 146, 204)
        fill(colorTriangleOne);
        triangle(i * tileWidth, j * tileHeight, (i+1) * tileWidth, (j+1)*tileHeight, i * tileWidth, (j+1) * (tileHeight))
      }else if(random === 1){
        let colorTriangleTwo = color(42, 98, 143)
        fill(colorTriangleTwo);
        triangle(i*tileWidth, j*tileHeight,(i+1) * tileWidth, j*tileHeight, (i+1) *tileWidth, (j+1) *tileWidth)
      }
      
     
    }
  }


}