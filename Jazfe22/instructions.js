class instructions extends Phaser.Scene {
    constructor() {
      super({
        key: "instructions",
      });
  
    }
  
    // Put global variable here
  
    preload() {
  
      // Step 2 : Preload any images here, nickname, filename
        this.load.image("instructionspage", "assets/instructionspage.png");
  
  
    }
  
    create() {
      console.log("*** intro scene");
  
      const image = this.add.image(320,208, 'instructionspage').setScale(1);
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down", function () {
          this.scene.start("morning", {});
        },
        this
      );
}
}