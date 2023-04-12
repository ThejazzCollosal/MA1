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
            collectTiles

        ];

        // Step 6  Load in layers by layers
        this.baseLayer = map.createLayer("baseLayer", tilesArray, 0, 0);
        this.objLayer = map.createLayer("objLayer", tilesArray, 0, 0);
        this.objLayer2 = map.createLayer("objLayer2", tilesArray, 0, 0);
        this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);
        this.freeLayer2 = map.createLayer("freeLayer2", tilesArray, 0, 0);



        // var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")



        // this.page= this.physics.add.sprite(217,390,'page')


        if (window.readnote2 == 0) {
            this.page = this.physics.add.sprite(217, 390, 'page')
        }

        if (window.readnote3 == 0) {
            this.page2 = this.physics.add.sprite(366, 185, 'page')
        }

        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'MC').setScale(0.8).play('MC-up')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        window.player = this.player

        
        // this.time.addEvent({
        //     delay: 1000,
        //     callback: this.moveLadder,
        //     callbackScope: this,
        //     loop: false,
        // });

        // this.time.addEvent({
        //     delay: 1000,
        //     callback: this.moveCircle,
        //     callbackScope: this,
        //     loop: false,
        // });


        // this.time.addEvent({
        //     delay: 0,
        //     callback: this.moveSquare,
        //     callbackScope: this,
        //     loop: false,
        // });

        // this.time.addEvent({
        //     delay: 0,
        //     callback: this.moveDownUp,
        //     callbackScope: this,
        //     loop: false,
        // });

        this.time.addEvent({
            delay: 0,
            callback: this.moveRightLeft,
            callbackScope: this,
            loop: false,
        }); 

        //////////////////////////////////////Collisions////////////////////////////////////////
        this.objLayer.setCollisionByExclusion(-1, true)
        this.objLayer2.setCollisionByExclusion(-1, true)

        this.physics.add.collider(this.objLayer, this.player)
        this.physics.add.collider(this.objLayer2, this.player)

        if (window.readnote2 == 0) {
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

        if (window.readnote3 == 0) {
            this.physics.add.overlap(
                this.player, // player
                this.page2,  // enemy
                this.collectPage2,    // function to call 
                null,
                this
            );
        }
        //this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.page2, this.player, this.collectPage2, null, this);


        

    

        this.player.setCollideWorldBounds(true);

        this.physics.world.bounds.width = this.baseLayer.width
        this.physics.world.bounds.height = this.baseLayer.height


    }
    update() {

        if (this.player.x > 10 && this.player.x < 32 && this.player.y < 235.4 && this.player.y > 210) {
            this.level5()
        }

        if (this.player.x > 486 && this.player.x < 538 && this.player.y < 394 && this.player.y > 389) {
            if (window.note >= 2) {
                this.level3()
            }

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
        let playerpos = {}
        playerpos.x = 378;
        playerpos.y = 360;
        this.scene.start('level5', {
            player: playerpos,
            inventory: this.inventory
        });
    }

    level3() {
        let playerpos = {}
        playerpos.x = 593;
        playerpos.y = 194;
        this.scene.start('level3', {
            player: playerpos,
            inventory: this.inventory
        });
    }

    death(player, tile) {
        console.log("You died");
        this.scene.start("death");
        window.key = 0
    }

    collectPage(player, page) {
        page.disableBody(true, true);
        this.scene.start("msg2")
        window.note++


    }

    collectPage2(player, page2) {
        page2.disableBody(true, true);
        this.scene.start("msg3")
        window.note++

    }

}