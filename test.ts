import ParticleEmitter from './physics/particleEmitter.js'
import Sprite from './physics/sprite.js';
import Vector2 from './physics/vectors.js';
let canvas = <HTMLCanvasElement> document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');
let turtle = new Sprite(
  './src/images/turtle.png',
  new Vector2(50, 5),
  new Vector2(50, 50),
  1,
  false,
  true
);
let fireball = new Sprite(
  './src/images/fireball.png',
  new Vector2(100, 50),
  new Vector2(50, 50),
  1,
  false,
  false
);
let emitter = new ParticleEmitter (
  [turtle, fireball],
  new Vector2(200, 200),
  50,
  10,
  1
);
turtle.applyForce(new Vector2(0,9.8));
setInterval(() => {
  //console.log(`V: ${thing.velocity.magnitude}\nA: ${thing.acceleration.magnitude}`);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  emitter.update(ctx, 0.05);
  turtle.render(ctx);
  if (!turtle.checkBounds(canvas)) {
    turtle.move(0.05);
  }
}, 10);
