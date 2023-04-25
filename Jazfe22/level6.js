class level6 extends Phaser.Scene {
    constructor() {
        super({ key: "level6" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map6", "assets/finalAlley.tmj");

        //Step2
        // this.load.image("castle", "assets/Castle2.png")
        this.load.image("defi", "assets/defimon3.png")
        this.load.image("kitchen", "assets/Kitchen_32x32.png")
        // this.load.image("music", "assets/Music_and_sport_32x32.png")
        // this.load.image("door", "assets/doors.png")
        // this.load.image("extra", "assets/misc_atlas.png")
        // this.load.image("atlas", "assets/atlas_32x.png")
        // this.load.image("basement", "assets/Basement_32x32.png")
        // this.load.image("livingroom", "assets/LivingRoom_32x32.png")
        // this.load.image("toilet", "assets/toilets.png")
        this.load.image("collect", "assets/collectibles_32x32.png")
        this.load.image("light", "assets/light.png")
        this.load.audio("break", "assets/shatter.mp3")
        this.load.audio("omen", "assets/omen.mp3")

    }

    create() {

        console.log("level6")
        this.game.sound.stopAll()
        
        this.omen = this.sound.add("omen").play()

        //Step3
        let map = this.make.tilemap({ key: "map6" });

        // Step 4 Load the game tilest
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let kitchenTiles = map.addTilesetImage("Kitchen_32x32", "kitchen");
        let musicsportsTiles = map.addTilesetImage("Music_and_sport_32x32", "music");
        let defimonTiles = map.addTilesetImage("defimon3", "defi");
        let castleTiles = map.addTilesetImage("Castle2", "castle");
        let doorTiles = map.addTilesetImage("doors", "door");
        let extraTiles = map.addTilesetImage("misc_atlas", "extra");
        let atlasTiles = map.addTilesetImage("atlas_32x", "atlas");
        let basementTiles = map.addTilesetImage("Basement_32x32", "basement");
        let livingroomTiles = map.addTilesetImage("LivingRoom_32x32", "livingroom");
        let toiletTiles = map.addTilesetImage("toilets", "toilet");
        let collectTiles = map.addTilesetImage("collectibles_32x32", "collect");

        //Step 5  create an array of tiles
        let tilesArray = [
            kitchenTiles,
            musicsportsTiles,
            defimonTiles,
            castleTiles,
            doorTiles,
            extraTiles,
            atlasTiles,
            basementTiles,
            livingroomTiles,
            toiletTiles,
            collectTiles

        ];

        // Step 6  Load in layers by layers

        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
        this.ceilingLayer = map.createLayer("ceilingLayer", tilesArray, 0, 0);

        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")

        this.cursors = this.input.keyboard.createCursorKeys();
        this.light = this.physics.add.sprite(94, 205, 'light').setOffset(100, 0)
        this.light2 = this.physics.add.sprite(257, 205, 'light').setOffset(100, 0)
        this.light3 = this.physics.add.sprite(417, 205, 'light').setOffset(100, 0)
        this.light4 = this.physics.add.sprite(737, 205, 'light')
        this.boy = this.physics.add.sprite(737, 203, 'boy').setScale(0.7)
       

        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'MC').setScale(0.8).play('MC-right')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();



        this.player.setCollideWorldBounds(true);

        window.player = this.player

        this.physics.world.bounds.width = this.floorLayer.width
        this.physics.world.bounds.height = this.floorLayer.height

        //////////////////////////////////////Collisions////////////////////////////////////////
        this.wallLayer.setCollisionByExclusion(-1, true)

        this.physics.add.collider(this.wallLayer, this.player)

        this.physics.add.overlap(
            this.player, // player
            this.light,  // enemy
            this.collectLight,    // function to call 
            null,
            this
        );
        this.break = this.sound.add("break")

        this.physics.add.overlap(this.light, this.player, this.collectlight, null, this);

        this.physics.add.overlap(
            this.player, // player
            this.light2,  // enemy
            this.collectLight2,    // function to call 
            null,
            this
        );
        this.break = this.sound.add("break")

        this.physics.add.overlap(this.light2, this.player, this.collectLight2, null, this);

        this.physics.add.overlap(
            this.player, // player
            this.light3,  // enemy
            this.collectLight3,    // function to call 
            null,
            this
        );
        this.break = this.sound.add("break")

        this.physics.add.overlap(this.light3, this.player, this.collectLight3, null, this);

        this.physics.add.overlap(
            this.player, // player
            this.boy,  // enemy
            this.interact,    // function to call 
            null,
            this
        );

        this.physics.add.overlap(this.boy, this.player, this.interact, null, this);



    }
    update() {


        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100);
            this.player.anims.play('MC-left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(100);
            this.player.anims.play('MC-right', true);

        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-100);
            this.player.anims.play('MC-up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(100);
            this.player.anims.play('MC-down', true);

        }
        else {
            this.player.setVelocity(0);
            this.player.anims.stop();
        }


    }

    collectLight(player, light) {
        light.disableBody(true, true);
        this.break.play();

    }

    collectLight2(player, light2) {
        this.light2.disableBody(true, true);
        this.break.play();
    }

    collectLight3(player, light3) {
        this.light3.disableBody(true, true);
        this.break.play();
    }
}