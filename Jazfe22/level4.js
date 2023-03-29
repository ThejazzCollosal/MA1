class level4 extends Phaser.Scene {
    constructor() {
        super({ key: "level4" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map4", "assets/bossOffice.tmj");

        //Step2
        this.load.image("castle", "assets/Castle2.png")
        this.load.image("defi", "assets/defimon3.png")
        this.load.image("kitchen", "assets/Kitchen_32x32.png")
        this.load.image("music", "assets/Music_and_sport_32x32.png")
        this.load.image("door", "assets/doors.png")
        this.load.image("extra", "assets/misc_atlas.png")
        this.load.image("atlas", "assets/atlas_32x.png")
        this.load.image("basement", "assets/Basement_32x32.png")
        this.load.image("livingroom", "assets/LivingRoom_32x32.png")
    }

    create() {

        console.log("level4")

        //Step3
        let map = this.make.tilemap({ key: "map4" });

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
            livingroomTiles

        ];

        // Step 6  Load in layers by layers
        this.baseLayer = map.createLayer("baseLayer", tilesArray, 0, 0);
        this.objLayer = map.createLayer("objLayer", tilesArray, 0, 0);
        this.objLayer2 = map.createLayer("objLayer2", tilesArray, 0, 0);
        this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);
        this.freeLayer2 = map.createLayer("freeLayer2", tilesArray, 0, 0);


        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")




        this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'MC').setScale(0.8).play('MC-left')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        window.player = this.player

        //////////////////////////////////////Collisions////////////////////////////////////////
        this.objLayer.setCollisionByExclusion(-1, true)
        this.objLayer2.setCollisionByExclusion(-1, true)

        this.physics.add.collider(this.objLayer, this.player)
        this.physics.add.collider(this.objLayer2, this.player)

        // this.player.setCollideWorldBounds(true);

    }
    update() {

        if (this.player.x > 10 && this.player.x < 32 && this.player.y < 235.4 && this.player.y > 210) {
            this.level5()
        }

        if (this.player.x > 486 && this.player.x < 538  && this.player.y < 394 && this.player.y > 389) {
            this.level3()
        }

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

    level5() {
        // player.x = 605;
        // player.y = 364;
        this.scene.start('level5', {
            player: player,
            inventory: this.inventory
        });
    }

    level3() {
        player={}
        player.x = 593;
        player.y = 194;
        this.scene.start('level3', {
            player: player,
            inventory: this.inventory
        });
    }

    death(player, tile) {
        console.log("You died");
        this.scene.start("death");
        window.key = 0
    }
}