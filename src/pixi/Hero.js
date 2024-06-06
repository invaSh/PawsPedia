import { Application, Assets, Sprite, Rectangle } from "pixi.js";

export default async function pixi() {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ resizeTo: window, backgroundColor: 0xf0f0f0 });

  // Append the application canvas to the document body
  const container = document.getElementById("canvasCont2");
  container.innerHTML = ""; // Clear the container
  container.appendChild(app.view);

  // Function to handle window resize
  function resize() {
    // Resize PIXI application
    app.renderer.resize(window.innerWidth, window.innerHeight);
  }

  // Listen for window resize events
  window.addEventListener("resize", resize);

  // Call resize initially to set the correct size
  resize();

  // Define the URLs of the textures
  const textureURLs = [
    "/src/assets/img/pixi/1.png",
    "/src/assets/img/pixi/3.png",
    "/src/assets/img/pixi/4.png",
    "/src/assets/img/pixi/5.png",
    "/src/assets/img/pixi/6.png",
    "/src/assets/img/pixi/7.png",
    "/src/assets/img/pixi/8.png",
    "/src/assets/img/pixi/9.png",
    "/src/assets/img/pixi/10.png",
    "/src/assets/img/pixi/11.png",
    "/src/assets/img/pixi/12.png",
    "/src/assets/img/pixi/13.png",
  ];

  // Load all textures
  const textures = await Promise.all(
    textureURLs.map((url) => {
      return Assets.load(url).catch((error) => {
        console.error(`Failed to load texture: ${url}`, error);
        return null; // Return null if the asset fails to load
      });
    })
  );

  // Filter out any null textures
  const validTextures = textures.filter((texture) => texture !== null);

  if (validTextures.length === 0) {
    console.error("No textures were loaded successfully.");
    return;
  }

  // Create an array to store the sprites
  const sprites = [];

  const totalSprites = 200;

  for (let i = 0; i < totalSprites; i++) {
    // Randomly select a texture
    const texture =
      validTextures[Math.floor(Math.random() * validTextures.length)];

    // Create a new sprite with the selected texture
    const sprite = new Sprite(texture);

    // Set the anchor point so the texture is centered on the sprite
    sprite.anchor.set(0.5);

    // Set a smaller scale for the sprite
    const scale = 0.2 + Math.random() * 0.2; // Adjust the range for smaller size
    sprite.scale.set(scale);

    // Set a random position for the sprite
    sprite.x = Math.random() * app.screen.width;
    sprite.y = -Math.random() * app.screen.height; // Start above the screen

    // Create some extra properties that will control movement:
    sprite.speed = 2 + Math.random() * 2; // Random speed between 2 and 4

    // Push the sprite into the sprites array
    sprites.push(sprite);

    // Add the sprite to the stage
    app.stage.addChild(sprite);
  }

  // Create a bounding box for the sprites
  const boundsPadding = 100;
  const bounds = new Rectangle(
    -boundsPadding,
    -boundsPadding,
    app.screen.width + boundsPadding * 2,
    app.screen.height + boundsPadding * 2
  );

  app.ticker.add(() => {
    // Iterate through the sprites and update their position
    for (let i = 0; i < sprites.length; i++) {
      const sprite = sprites[i];

      sprite.y += sprite.speed; // Move downwards

      // If sprite is below the screen, reset its position to above the screen
      if (sprite.y > app.screen.height + boundsPadding) {
        sprite.y = -Math.random() * app.screen.height;
      }
    }
  });
}
