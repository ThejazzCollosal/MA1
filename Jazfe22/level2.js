class level2 extends Phaser.Scene {
    constructor() {
        super({ key: "level2" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map2", "assets/firstFloorLeft.tmj");

        //Step2
        this.load.image("castle", "assets/Castle2.png")
        this.load.image("defi", "assets/defimon3.png")
        this.load.image("kitchen", "assets/Kitchen_32x32.png")
        this.load.image("music", "assets/Music_and_sport_32x32.png")
        this.load.image("door", "assets/doors.png")
    }

    create() {

        console.log("level2")

        //Step3
        let map = this.make.tilemap({ key: "map2" });

        // Step 4 Load the game tilest
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let kitchenTiles = map.addTilesetImage("Kitchen_32x32", "kitchen");
        let musicsportsTiles = map.addTilesetImage("Music_and_sport_32x32", "music");
        let defimonTiles = map.addTilesetImage("defimon3", "defi");
        let castleTiles = map.addTilesetImage("Castle2", "castle");
        let doorTiles = map.addTilesetImage("doors", "door");

        //Step 5  create an array of tiles
        let tilesArray = [
            kitchenTiles,
            musicsportsTiles,
            defimonTiles,
            castleTiles,
            doorTiles

        ];

        // Step 6  Load in layers by layers
        this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.obstuctionLayer = map.createLayer("obstuctionLayer", tilesArray, 0, 0);
        this.obstructionLayer2 = map.createLayer("obstructionLayer2", tilesArray, 0, 0);
        this.doorLayer = map.createLayer("doorLayer", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);
        this.freeLayer2 = map.createLayer("freeLayer2", tilesArray, 0, 0);


        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")
        //var endPoint = map.findObject("summonLayer", (obj) => obj.name === "end")


        this.player = this.physics.add.sprite(startPoint.x, startPoint.y, 'MC').setScale(0.8).play('MC-down')
        // this.player = this.physics.add.sprite(endPoint.x, endPoint.y, 'MC').setScale(0.8).play('MC-right')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        window.player = this.player

        // this.player.setCollideWorldBounds(true);

        //////////////////////////////////////Collisions////////////////////////////////////////
        this.wallLayer.setCollisionByProperty({ wall: true })
        this.obstuctionLayer.setCollisionByExclusion(-1, true)
        this.obstructionLayer2.setCollisionByExclusion(-1, true)


        this.physics.add.collider(this.wallLayer, this.player)
        this.physics.add.collider(this.obstuctionLayer, this.player)
        this.physics.add.collider(this.obstructionLayer2, this.player)



    }
    update() {

        if (this.player.x > 34 && this.player.x < 61 && this.player.y < 165 && this.player.y > 136) {
            this.level1()
        }

        if (this.player.x > 630 && this.player.x < 640 && this.player.y < 383 && this.player.y > 343) {
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
    //     if
    //         (this.player.x > 490 &&
    //         this.player.x < 535 &&
    //         this.player.y < 284 &&
    //         window.key > 2) {
    //         console.log("KEYS!", window.key);
    //         this.lock.setAlpha(5);
    //         this.win();
    //     }

    //     if (this.player.x > 490 &&
    //         this.player.x < 535 &&
    //         this.player.y < 284 &&
    //         window.key < 3)

    // }

    level1() {
        player.x = 38;
        player.y = 200;
        this.scene.start('level1', {
            player: player,
            inventory: this.inventory
        });
    }

    level3() {
        player.x = 50;
        player.y = 200;
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



