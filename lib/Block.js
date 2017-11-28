class Block {
  constructor(position, size, velocity,color){
    this.position = { x: position.x, y: position.y };
    this.size = { x: size.x, y: size.y };
    this.velocity = { x: velocity.x, y: velocity.y }
    this.color = color || 'black';

  };

  draw (context) {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
  }

  move(canvas) {
    this.hitWall(canvas);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  };

  hitWall(canvas) {
    if (this.position.x < 0 || this.position.x > canvas.width-15) {
      this.velocity.x = -this.velocity.x;  
    }
    if (this.position.y < 0 || this.position.y > canvas.height-15) {
      this.velocity.y = -this.velocity.y;
    }

  }
};

module.exports = Block;