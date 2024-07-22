class CutsceneS1 extends Phaser.Scene {
    constructor() {
      super({
        key: "CutsceneS1",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("scene1", "assets/S1C1.png");
  
    }
  
    create() {
      console.log("*** intro scene");

      const image = this.add.image(640, 360, 'scene1');
      var enter = this.input.keyboard.addKey("ENTER");
  
      // On spacebar event, call the world scene
      enter.on(
        "down", function () {
          console.log("Jump to intro scene");
          let playerPos = {};
          playerPos.x = 1750;
              playerPos.y = 583;
              this.scene.start("Stage1", { player: playerPos });
        },
        this
      );
    }
    
  
  }