class opening extends Phaser.Scene {
  constructor() {
    super({
      key: "opening",
    });

  }

  // Put global variable here

  preload() {

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("start", "assets/JazfeOpening.png");


  }

  create() {
    console.log("*** intro scene");


    // this.game.sound.stopAll()
    window.mainmusic - this.sound.add("start").setVolume(0.1).setLoop(true).play()

    const image = this.add.image(320, 208, 'start').setScale(1.6);

    //   let deadSnd = this.sound.add("dead")
    //   deadSnd.play();

    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
        

    spaceDown.on(
      "down", function () {
        console.log("Jump to intro scene");
         playerpos.x = 11;
        playerpos.y = 193;
        this.scene.start('level6', {
            player: playerpos,
            inventory: this.inventory
       // this.scene.start("instructions");

      window.glass = 0
      window.readnote =0
      window.readnote2 =0
      window.readnote3 =0
      window.readnote4 =0
      window.key = 0
      window.note = 0
      window.icon = 0
      window.collected =0;
      },
      this
    );

    //   this.add.text(20, 60, "YOU WERE CAUGHT", {
    //     font: "10px Dogica light",
    //     fill: "#FF0000"
    //   });
    //   this.add.text(20, 80, "Press SPACE to replay", {
    //     font: "5px Dogica light",
    //     fill: "#ffffff"
    //   });




    // Create all the game animations here
  }
}
