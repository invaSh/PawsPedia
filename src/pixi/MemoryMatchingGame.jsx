import {
  Application,
  Assets,
  Sprite,
  Texture,
  Ticker,
  Container,
  Text,
  TextStyle,
} from "pixi.js";
import gsap from "gsap";
export default async function MemoryMatchingGame() {
  const app = new Application();

  await app.init({ resizeTo: window });

  const container = document.getElementById("canvasCont");
  container.innerHTML = ""; // Clear the container
  container.appendChild(app.view);

  await Assets.load([
    "/src/assets/img/game-cards/gamebg.png",
    "/src/assets/img/game-cards/PawsPedia..png",
    "/src/assets/img/game-cards/1.png",
    "/src/assets/img/game-cards/2.png",
    "/src/assets/img/game-cards/3.png",
    "/src/assets/img/game-cards/4.png",
    "/src/assets/img/game-cards/5.png",
    "/src/assets/img/game-cards/6.png",
    "/src/assets/img/game-cards/7.png",
    "/src/assets/img/game-cards/8.png",
    "/src/assets/img/game-cards/9.png",
    "/src/assets/img/game-cards/10.png",
    "/src/assets/img/game-cards/11.png",
    "/src/assets/img/game-cards/12.png",
  ]);

  const background = Sprite.from("/src/assets/img/game-cards/gamebg.png");

  background.width = app.screen.width;
  background.height = app.screen.height;

  app.stage.addChild(background);

  const cardTextures = [
    Texture.from("/src/assets/img/game-cards/1.png"),
    Texture.from("/src/assets/img/game-cards/2.png"),
    Texture.from("/src/assets/img/game-cards/3.png"),
    Texture.from("/src/assets/img/game-cards/4.png"),
    Texture.from("/src/assets/img/game-cards/5.png"),
    Texture.from("/src/assets/img/game-cards/6.png"),
    Texture.from("/src/assets/img/game-cards/7.png"),
    Texture.from("/src/assets/img/game-cards/8.png"),
    Texture.from("/src/assets/img/game-cards/9.png"),
    Texture.from("/src/assets/img/game-cards/10.png"),
    Texture.from("/src/assets/img/game-cards/11.png"),
    Texture.from("/src/assets/img/game-cards/12.png"),
  ];

  let cards = [];
  cardTextures.forEach((texture) => {
    cards.push(texture, texture);
  });

  cards = cards.sort(() => Math.random() - 0.5);

  const rows = 3;
  const cols = 8;
  const cardWidth = 150;
  const cardHeight = 150;
  const spacing = 50;
  const topMargin = 70;

  const totalGridWidth = cols * cardWidth + (cols - 1) * spacing;
  const totalGridHeight = rows * cardHeight + (rows - 1) * spacing;

  const offsetX = (app.screen.width - totalGridWidth) / 2;
  const offsetY = (app.screen.height - totalGridHeight) / 2 + topMargin;

  let cardsFlipped = 0;
  let flippedCards = [];
  let isProcessing = false;
  let matchedPairs = 0;
  const totalPairs = cardTextures.length;

  const textStyle = new TextStyle({
    fontFamily: ["Honk", "Arial", "sans-serif"],
    fontSize: 100,
    fill: "#ffffff",
    stroke: "#ff0000",
    strokeThickness: 5,
    align: "center",
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 10,
    dropShadowDistance: 5,
  });

  const textStyle1 = new TextStyle({
    fontFamily: ["Bungee Spice", "sans-serif"],
    fontSize: 60,
  });

  const titleText = new Text("PawsPedia's Memory Game", textStyle1);
  titleText.anchor.set(0.5);
  titleText.x = app.screen.width / 2;
  titleText.y = app.screen.height / 7;

  const matchText = new Text("MATCHED!", textStyle);
  matchText.anchor.set(0.5);
  matchText.x = app.screen.width / 2;
  matchText.y = app.screen.height / 2;
  matchText.visible = false;

  const winText = new Text("YOU WON THE GAME!", textStyle);
  winText.anchor.set(0.5);
  winText.x = app.screen.width / 2;
  winText.y = app.screen.height / 2;
  winText.visible = false;

  const textContainer = new Container();
  textContainer.addChild(titleText);
  textContainer.addChild(matchText);
  textContainer.addChild(winText);
  textContainer.zIndex = 10;

  app.stage.addChild(textContainer);

  for (let i = 0; i < cards.length; i++) {
    const cardContainer = new Container();
    const card = new Sprite(cards[i]);
    const backImage = Sprite.from("/src/assets/img/game-cards/PawsPedia..png");

    const row = Math.floor(i / cols);
    const col = i % cols;

    const ticker = new Ticker();
    ticker.add(() => {
      cardContainer.y += Math.sin((ticker.lastTime + i * 10) / 300) * 0.2;
      titleText.y += Math.sin((ticker.lastTime + i * 50) / 200) * 0.2;
    });
    ticker.start();

    card.width = cardWidth;
    card.height = cardHeight;
    backImage.width = cardWidth;
    backImage.height = cardHeight;

    cardContainer.x = col * (cardWidth + spacing) + offsetX + cardWidth / 2;
    cardContainer.y = row * (cardHeight + spacing) + offsetY + cardHeight / 2;

    cardContainer.interactive = true;
    cardContainer.buttonMode = true;
    cardContainer.cursor = "pointer";

    backImage.visible = true;
    card.visible = false;

    cardContainer.pivot.set(cardWidth / 2, cardHeight / 2);

    cardContainer.addChild(backImage);
    cardContainer.addChild(card);

    cardContainer.on("pointerover", () => {
      if (!isProcessing) {
        gsap.to(cardContainer.scale, { x: 1.1, y: 1.1, duration: 0.2 });
      }
    });
    cardContainer.on("pointerout", () => {
      if (!isProcessing) {
        gsap.to(cardContainer.scale, { x: 1, y: 1, duration: 0.2 });
      }
    });

    cardContainer.on("pointerdown", () => {
      if (!isProcessing) {
        isProcessing = true;
        gsap.to(cardContainer.scale, {
          x: 0,
          duration: 0.1,
          onComplete: () => {
            card.visible = !card.visible;
            backImage.visible = !backImage.visible;
            cardsFlipped += 1;
            flippedCards.push(cardContainer);

            gsap.to(cardContainer.scale, { x: 1, duration: 0.1 });

            if (cardsFlipped === 2) {
              setTimeout(() => {
                flipCardsBack(flippedCards);
              }, 1000);
            } else {
              isProcessing = false;
            }
          },
        });
      }
    });

    app.stage.addChild(cardContainer);
  }

  function flipCardsBack(array) {
    if (array.length === 2) {
      const [card1, card2] = array;
      const card1Sprite = card1.getChildAt(1);
      const card2Sprite = card2.getChildAt(1);

      if (card1Sprite.texture !== card2Sprite.texture) {
        array.forEach((cardContainer) => {
          const card = cardContainer.getChildAt(1);
          const backImage = cardContainer.getChildAt(0);

          gsap
            .to(cardContainer.scale, {
              x: 0,
              duration: 0.1,
              onComplete: () => {
                card.visible = false;
                backImage.visible = true;
                gsap.to(cardContainer.scale, { x: 1, duration: 0.1 });
              },
            })
            .delay(0.1);
        });
      } else {
        matchText.visible = true;
        gsap.fromTo(
          matchText,
          { alpha: 1, scale: 1 },
          {
            alpha: 0,
            scale: 2,
            duration: 2,
            onComplete: () => {
              matchText.visible = false;
            },
          }
        );

        gsap.to(matchText.scale, {
          x: 1.2,
          y: 1.2,
          yoyo: true,
          repeat: -1,
          duration: 0.5,
        });

        array.forEach((cardContainer) => {
          gsap.to(cardContainer.scale, {
            x: 0,
            y: 0,
            duration: 0.5,
            onComplete: () => {
              app.stage.removeChild(cardContainer);
            },
          });
        });

        matchedPairs += 1;

        if (matchedPairs === totalPairs) {
          titleText.visible = false;
          winText.visible = true;
          matchText.visible = false;
        }
      }

      cardsFlipped = 0;
      flippedCards = [];
      isProcessing = false;
    }
  }
}
