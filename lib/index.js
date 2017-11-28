var Block = require('./Block.js');
var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var blockSize = {x: 15, y:15}

var blocks = [ ]


canvas.addEventListener('click', function(event) {
  var position = {x: event.offsetX, y: event.offsetY};
  var velocity = {x: Math.random()*10 - 5, y: Math.random()*6 - 3}
  blocks.push(new Block(position, blockSize, velocity, "#"+((1<<24)*Math.random()|0).toString(16)))

})

function draw() {
  context.clearRect(0,0,canvas.width,canvas.height)

  blocks.forEach(block => {
    block.draw(context);
  })
}

function update(){
  blocks.forEach(block => {
    block.move(canvas)
  })
}


function gameLoop() {
  update()
  draw();
  requestAnimationFrame(gameLoop)
}

gameLoop();