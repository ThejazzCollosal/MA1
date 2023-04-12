class msg2 extends Phaser.Scene {
  constructor() {
    super({
      key: "msg2",
    });

  }

  // Put global variable here

  preload() {

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("msg2", "assets/msg2.png");


  }

  create() {
    console.log("*** intro scene");

    window.readnote2 = 1
    const image = this.add.image(320, 208, 'msg2').setScale(1);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on('down', function () {
      let playerpos = {}
      playerpos.x = 260;
      playerpos.y = 388;
      this.scene.start("level4", {
        player: playerpos,
        inventory: this.inventory
      });
    }, this);
  }
}
