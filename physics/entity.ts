import Vector2 from "./vectors"

/*
 * This is our interface that will represent all
 * physics-objects in our game environments.
 * TODO: ADD SPRITE IMAGES, EMITTERS, AND DEFORMATION
 */
export interface Entity {
  // Instance properties for all physics entities
  position:Vector2;
  velocity:Vector2;
  acceleration:Vector2;
  hitbox:Vector2;
  collidable:boolean;
  bounded:boolean;

  // Physics calculations
  move():void;
  checkCollision(other:Entity):boolean;
  checkBounds(canvas:HTMLCanvasElement):boolean;

  // Rendering
  render(ctx:CanvasRenderingContext2D):void;
}

export default Entity