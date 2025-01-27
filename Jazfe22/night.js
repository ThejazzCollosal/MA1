class night extends Phaser.Scene {
    constructor() {
      super({
        key: "night",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("Nshift", "assets/Nshift.png");
    }
  
    create() {
      console.log("*** intro scene");
    
      const image = this.add.image(320,208, 'Nshift').setScale(1);
    
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
  
      spaceDown.on(
        "down", function () {
          console.log("Jump to intro scene");
          let playerPos = {};
          playerPos.x = 572;
          playerPos.y = 364;
          this.scene.start("level2", { player: playerPos });   
        },
        this
      );
    }
    
  
  }
