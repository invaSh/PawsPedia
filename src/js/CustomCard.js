import { Sprite, Texture } from "pixi.js";
import gsap from "gsap";

class CustomCard extends Sprite {
  constructor(frontTexture, backTexture) {
    super(backTexture);

    this.frontTexture = frontTexture;
    this.backTexture = backTexture;
    this.isFlipped = false;

    this.interactive = true;
    this.buttonMode = true;
    this.cursor = "pointer";

    this.on("pointerdown", this.toggleCard.bind(this));
  }

  toggleCard() {
    this.isFlipped = !this.isFlipped;
    const newTexture = this.isFlipped ? this.frontTexture : this.backTexture;
    
    // Flip animation
    gsap.to(this.scale, { x: 0, duration: 0.3, onComplete: () => {
      this.texture = newTexture;
      gsap.to(this.scale, { x: 1, duration: 0.3 });
    } });
  }
}

export default CustomCard;
