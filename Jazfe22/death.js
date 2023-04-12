class death extends Phaser.Scene {
  constructor() {
    super({
      key: "death",
    });

  }

  // Put global variable here

  preload() {

    // Step 2 : Preload any images here, nickname, filename
      this.load.image("death", "assets/deathScene.png");

      this.load.audio( "dead", "assets/ghost.mp3")

  }

  create() {
    console.log("*** intro scene");
    this.game.sound.stopAll()

    const image = this.add.image(320,208, 'death').setScale(1);

    let dead = this.sound.add("dead")
    dead.play();
    this.cameras.main.shake(300);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene

    spaceDown.on('down', function () {
      this.scene.start("opening");
  }, this);
  }
  

}