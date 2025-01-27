class morning extends Phaser.Scene {
    constructor() {
      super({
        key: "morning",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("Mshift", "assets/Mshift.png");
    }
  
    create() {
      console.log("*** intro scene");
    
      const image = this.add.image(320,208, 'Mshift').setScale(1);
    
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
  
      spaceDown.on(
        "down", function () {
          console.log("Jump to intro scene");
          let playerPos = {};
          playerPos.x = 35;
          playerPos.y = 330;
          this.scene.start("level1", { player: playerPos });

        },
        this
      );
    }
    
  
  }
