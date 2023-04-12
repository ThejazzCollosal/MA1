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
        this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
        this.objectLayer2 = map.createLayer("objectLayer2", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);

        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")
       
        this.key= this.physics.add.sprite(25,325,'key')

        if (window.readnote4 == 0) {
            this.page = this.physics.add.sprite(206, 344, 'page')
        }
        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'MC').setScale(0.8).play('MC-left')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        if (window.readnote4 == 0) {
            this.physics.add.overlap(
                this.player, // player
                this.page,  // enemy
                this.collectPage,    // function to call 
                null,
                this
            );
        }
        //this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.page, this.player, this.collectPage, null, this);
        
        this.player.setCollideWorldBounds(true);

        this.physics.world.bounds.width = this.floorLayer.width
        this.physics.world.bounds.height = this.floorLayer.height

        window.player = this.player


        //////////////////////////////////////Collisions////////////////////////////////////////

        this.physics.add.overlap(
            this.player, // player
            this.key,  // enemy
            this.collectKey,    // function to call 
            null,
            this
        );
        //this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.key, this.player,this.collectKey, null, this);


        this.objectLayer.setCollisionByExclusion(-1, true)
        this.objectLayer2.setCollisionByExclusion(-1, true)
        this.wallLayer.setCollisionByExclusion(-1, true)

        this.physics.add.collider(this.objectLayer, this.player)
        this.physics.add.collider(this.objectLayer2, this.player)
        this.physics.add.collider(this.wallLayer, this.player)



    }
    update() {

        
        if (this.player.x > 256 && this.player.x < 286 && this.player.y < 187 && this.player.y > 185) {
            if (window.key >= 1) {
            this.level6()
            
        }
    }

        if (this.player.x > 380 && this.player.x < 390 && this.player.y < 390 && this.player.y > 341) {
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
        let playerpos = {}
        playerpos.x = 42.6;
        playerpos.y = 217.6;
        this.scene.start('level4', {
            player: playerpos,
            inventory: this.inventory
        });
    }


    level6() {
        let playerpos = {}
        playerpos.x = 11;
        playerpos.y = 193;
        this.scene.start('level6', {
            player: playerpos,
            inventory: this.inventory
        });
    }

    collectKey(player, key) {
        key.disableBody(true, true);
        window.key ++
    
    }

    collectPage(player, page) {
        page.disableBody(true, true);
        this.scene.start("msg4")
        window.note++


    }
    // death(player, tile) {
    //     console.log("You died");
    //     this.scene.start("death");
    //     window.key = 0
    // }

}