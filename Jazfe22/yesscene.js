class yesscene extends Phaser.Scene {
    constructor() {
      super({
        key: "yesscene",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("goodend", "assets/goodend.png");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(320,208, 'goodend').setScale(1);
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on('down', function () {
        this.scene.start("opening");
    }, this);
    }
}