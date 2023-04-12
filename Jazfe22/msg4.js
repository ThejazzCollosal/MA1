class msg4 extends Phaser.Scene {
    constructor() {
      super({
        key: "msg4",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
      this.load.image("msg4", "assets/msg4.png");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      window.readnote4 = 1
      const image = this.add.image(320, 208, 'msg4').setScale(1);
  
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on('down', function () {
        let playerpos = {}
        playerpos.x = 251;
        playerpos.y = 346;
        this.scene.start("level5", {
          player: playerpos,
          inventory: this.inventory
        });
      }, this);
    }
  }
  