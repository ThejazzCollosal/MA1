class finalscene extends Phaser.Scene {
    constructor() {
        super({ key: "finalscene" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
        this.load.image("finalscene", "assets/finalscene.png");  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(320,208,"finalscene").setScale(1);
    
      //var spaceDown = this.input.keyboard.addKey("SPACE");
      var KeyY = this.input.keyboard.addKey(89);
      var KeyN = this.input.keyboard.addKey(78);

  
    //   On spacebar event, call the world scene
  
    //   spaceDown.on('down', function () {
    //     this.scene.start("yesscene");
    // }, this)

         KeyN.on(
      "down", function () {
        this.scene.start("yesscene");
      }

          KeyY.on(
      "down", function () {
        this.scene.start("death");
      }

//     key1.on('down', function () {
//         this.scene.start("death");
//     }, this)
    
// }
}
}
