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
    
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
    //   On spacebar event, call the world scene
  
      spaceDown.on('down', function () {
        this.scene.start("yesscene");
    }, this)

//     key1.on('down', function () {
//         this.scene.start("death");
//     }, this)
    
// }
}
}