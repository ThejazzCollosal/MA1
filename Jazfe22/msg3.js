class msg3 extends Phaser.Scene {
    constructor() {
      super({
        key: "msg3",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
      this.load.image("msg3", "assets/msg3.png");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      window.readnote3 = 1
      const image = this.add.image(320, 208, 'msg3').setScale(1);
  
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on('down', function () {
        let playerpos = {}
        playerpos.x = 326;
        playerpos.y = 227;
        this.scene.start("level4", {
          player: playerpos,
          inventory: this.inventory
        });
      }, this);
    }
  }
  