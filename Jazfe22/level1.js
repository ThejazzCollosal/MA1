class level1 extends Phaser.Scene {
    constructor() {
        super({ key: "level1" });
    }

    init(data) {
        this.playerpos = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("world", "assets/groundFloor.tmj");

    }

    create() {

        console.log("level1")

        //Step3
        let map = this.make.tilemap({ key: "world" });

        // Step 4 Load the game tilest
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let kitchenTiles = map.addTilesetImage("12_Kitchen_32x32", "kitchen");
        let musicsportsTiles = map.addTilesetImage("6_Music_and_sport_32x32", "music");
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
        this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.itemLayer1 = map.createLayer("itemLayer1", tilesArray, 0, 0);
        this.itemLayer2 = map.createLayer("itemLayer2", tilesArray, 0, 0);
        this.overlaylayer = map.createLayer("overlayLayer", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);
        this.freeLayer2 = map.createLayer("freeLayer2", tilesArray, 0, 0);
        this.freeLayer3 = map.createLayer("freeLayer3", tilesArray, 0, 0);

        // this.physics.world.bounds.width = this.groundLayer.width
        // this.physics.world.bounds.height = this.groundLayer.height
        

        //var startPoint = map.findObject("objectLayer", (obj) => obj.name === "start")
        // var endPoint = map.findObject("objectLayer", (obj) => obj.name === "end")

        this.half= this.physics.add.sprite(340,366,'half').setOffset(-10,0)


        this.player = this.physics.add.sprite(this.playerpos.x, this.playerpos.y, 'MC').setScale(0.8).play('MC-down')
        this.cameras.main.startFollow(this.player);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player.setCollideWorldBounds(true);

        window.player = this.player

        //////////////////////////////////////Collisions////////////////////////////////////////

        this.overlaylayer.setCollisionByExclusion(-1, true)
        this.itemLayer1.setCollisionByExclusion(-1, true)
        this.itemLayer2.setCollisionByExclusion(-1, true)
        this.wallLayer.setCollisionByExclusion(-1, true)

        this.physics.add.overlap(
            this.player, // player
            this.half,  // enemy
            this.collectHalf,    // function to call 
            null,
            this
        );
       // this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.half, this.player,this.collectHalf, null, this);

        this.physics.add.collider(this.itemLayer1, this.player)
        this.physics.add.collider(this.itemLayer2, this.player)
        this.physics.add.collider(this.overlaylayer, this.player)
        this.physics.add.collider(this.wallLayer, this.player)

       
    }
    update() {

        if (this.player.x > 20 && this.player.x < 38 && this.player.y < 187 && this.player.y > 184) {
            this.level2()
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

    level2() {
        let playerpos = {}
        playerpos.x = 66;
        playerpos.y = 183;
        this.scene.start('level2', {
            player: playerpos,
            inventory: this.inventory
        });
    }

    collectHalf(player, half) {
        half.disableBody(true, true);
        window.glass++
    
    }

    death(player, tile) {
        console.log("You died");
        this.scene.start("death");
        window.key = 0
    }

}