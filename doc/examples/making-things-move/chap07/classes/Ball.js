function createBall (radius, color) {
  color = color || "#ff0000";
  return doodle.createSprite(function () {
    this.vx = 0;
    this.vy = 0;
    this.radius = (radius === undefined) ? 40 : radius;
    
    this.graphics.beginFill(color);
    this.graphics.circle(0, 0, this.radius);
    this.graphics.endFill();
  });
}
