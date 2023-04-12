class msg1 extends Phaser.Scene {
    constructor() {
      super({
        key: "msg1",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("msg", "assets/msg.png");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      window.readnote = 1
      const image = this.add.image(320,208, 'msg').setScale(1);
  
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
    spaceDown.on('down', function () {
      let playerpos = {}
      playerpos.x = 50;
      playerpos.y = 342;
      this.scene.start("level3",{
          player: playerpos,
          inventory: this.inventory
      });
  }, this);
    }
    }
  