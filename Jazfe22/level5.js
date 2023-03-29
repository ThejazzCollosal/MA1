class level5 extends Phaser.Scene {
    constructor() {
        super({ key: "level5" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map5", "assets/toiletRoom.tmj");

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
        this.load.image("toilet","assets/toilets.png")
        
    }

    create() {

        console.log("level5")

        //Step3
        let map = this.make.tilemap({ key: "map5" });

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
            toiletTiles

        ];

        // Step 6  Load in layers by layers

        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
        this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
        this.objectLayer2 = map.createLayer("objectLayer2", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);
       

        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")


        this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'MC').setScale(0.8).play('MC-right')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        window.player = this.player

        //////////////////////////////////////Collisions////////////////////////////////////////
        this.objectLayer.setCollisionByExclusion(-1, true)
        this.objectLayer2.setCollisionByExclusion(-1, true)
        this.wallLayer.setCollisionByExclusion(-1, true)

        this.physics.add.collider(this.objectLayer, this.player)
        this.physics.add.collider(this.objectLayer2, this.player)
        this.physics.add.collider(this.wallLayer, this.player)

        // this.player.setCollideWorldBounds(true);

    }
    update() {

        if (this.player.x > 256 && this.player.x < 286 && this.player.y < 187 && this.player.y > 185) {
            this.level6()
        }

        if (this.player.x > 398 && this.player.x < 409 && this.player.y < 390 && this.player.y > 341) {
            this.level4()
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
    level4() {
        player={}
        player.x = 42.6;
        player.y = 217.6;
        this.scene.start('level4', {
            player: player,
            inventory: this.inventory
        });
    }


    level6() {
        // player.x = 42.6;
        // player.y = 217.6;
        this.scene.start('level6', {
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