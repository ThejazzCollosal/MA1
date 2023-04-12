class level3 extends Phaser.Scene {
    constructor() {
        super({ key: "level3" });
    }

    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map3", "assets/firstFloorRight.tmj");

    }

    create() {

        console.log("level3")

        //Step3
        let map = this.make.tilemap({ key: "map3" });

       this.game.sound.stopAll()
       
       window.ghostmusic - this.sound.add("ghost").setVolume(0.1).setLoop(true).play()

        // Step 4 Load the game tilest
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let kitchenTiles = map.addTilesetImage("Kitchen_32x32", "kitchen");
        let musicsportsTiles = map.addTilesetImage("Music_and_sport_32x32", "music");
        let defimonTiles = map.addTilesetImage("defimon3", "defi");
        let castleTiles = map.addTilesetImage("Castle2", "castle");
        let doorTiles = map.addTilesetImage("doors", "door");
        let extraTiles = map.addTilesetImage("misc_atlas", "extra");
        let collectTiles = map.addTilesetImage("collectibles_32x32", "collect");

        //Step 5  create an array of tiles
        let tilesArray = [
            kitchenTiles,
            musicsportsTiles,
            defimonTiles,
            castleTiles,
            doorTiles,
            extraTiles,
            collectTiles

        ];

        // Step 6  Load in layers by layers
        this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
        this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
        this.objectLayer = map.createLayer("objectLayer", tilesArray, 0, 0);
        this.objectLayer2 = map.createLayer("objectLayer2", tilesArray, 0, 0);
        this.doorLayer = map.createLayer("doorLayer", tilesArray, 0, 0);
        this.freeLayer = map.createLayer("freeLayer", tilesArray, 0, 0);


        ////////tween movements///////////////

        this.time.addEvent({
            delay: 1000,
            callback: this.moveLadder,
            callbackScope: this,
            loop: false,
        });

        this.time.addEvent({
            delay: 1000,
            callback: this.moveCircle,
            callbackScope: this,
            loop: false,
        });


        this.time.addEvent({
            delay: 0,
            callback: this.moveSquare,
            callbackScope: this,
            loop: false,
        });

        this.time.addEvent({
            delay: 0,
            callback: this.moveDownUp,
            callbackScope: this,
            loop: false,
        });

        this.time.addEvent({
            delay: 0,
            callback: this.moveRightLeft,
            callbackScope: this,
            loop: false,
        });

        ///////////////////Tweens///////////////

        var startPoint = map.findObject("summonLayer", (obj) => obj.name === "start")


        this.ghost = this.physics.add.sprite(400, 200, "NPC").play('NPC-down').setScale(0.8);
        this.ghost2 = this.physics.add.sprite(600, 200, "NPC").play('NPC-left').setScale(0.8);
        this.ghost3 = this.physics.add.sprite(200, 400, "NPC").play('NPC-up').setScale(0.8);
        
        if(window.readnote ==0){
            this.page= this.physics.add.sprite(50,300,'page')
        }
        

        this.player = this.physics.add.sprite(this.player.x, this.player.y, 'MC').setScale(0.8).play('MC-right')
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

        this.physics.add.overlap(
            this.player, // player
            this.page,  // enemy
            this.collectPage,    // function to call 
            null,
            this
        );
        //this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.page, this.player,this.collectPage, null, this);


        this.physics.add.overlap(
            this.player, // player
            this.ghost,  // enemy
            this.overlapGhost,    // function to call 
            null,
            this
        );
        this.hit = this.sound.add("hit")


        this.physics.add.overlap(
            this.player, // player
            this.ghost2,  // enemy
            this.overlapGhost2,    // function to call 
            null,
            this
        );
        this.hit = this.sound.add("hit")

        this.physics.add.overlap(
            this.player, // player
            this.ghost3,  // enemy
            this.overlapGhost3,    // function to call 
            null,
            this
        );
        this.hit = this.sound.add("hit")

        this.physics.add.overlap(this.ghost, this.player, this.death, null, this);
        this.physics.add.overlap(this.ghost2, this.player, this.death, null, this);
        this.physics.add.overlap(this.ghost3, this.player, this.death, null, this);


        this.player.setCollideWorldBounds(true);

    }
    update() {

        if (this.player.x > 13 && this.player.x < 25 && this.player.y < 387 && this.player.y > 343) {
            this.level2()
        }

        if (this.player.x > 585 && this.player.x < 606 && this.player.y < 190 && this.player.y > 185) {
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


    moveSquare() {
        console.log("moveSquare");
        this.tweens.timeline({
            targets: this.ghost,
            ease: "Linear",
            loop: -1, // loop forever
            duration: 1200,
            tweens: [
                {
                    y: 390,

                },
                {
                    x: 200,
                },
                {
                    y: 200,
                },
                {
                    x: 390,
                },
            ],
        });
    }

    moveRightLeft() {
        console.log("moveRightLeft");
        this.tweens.timeline({
            targets: this.ghost2,
            ease: "Linear",
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
                {
                    x: 400,
                },
                {
                    x: 600,
                },
            ],
        });
    }

    moveDownUp() {
        console.log("moveDownUp");
        this.tweens.timeline({
            targets: this.ghost3,
            ease: "Linear",
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
                {
                    y: 200,
                },
                {
                    y: 400,
                },
            ],
        });
    }

    overlapGhost(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.scene.start("death");
        // Play a sound
        this.hit.play();

        // shake the screen 
        this.cameras.main.shake(300);

    }

    overlapGhost2(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.scene.start('death');
        // Play a sound
        this.hit.play();

        // shake the screen 
        this.cameras.main.shake(300);
    }

    overlapGhost3(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.scene.start('death');
        // Play a sound
        this.hit.play();

        // shake the screen 
        this.cameras.main.shake(300);
    }

    collectPage(player, page) {
        page.disableBody(true, true);
        this.scene.start("msg1")
        window.note++
    }


    level4() {
        let playerpos = {}
        playerpos.x = 512;
        playerpos.y = 364;
        this.scene.start('level4', {
            player: playerpos,
            inventory: this.inventory
        });
    }


    level2() {
        let playerpos = {}
        playerpos.x = 611;
        playerpos.y = 362;
        this.scene.start('level2', {
            player: playerpos,
            inventory: this.inventory
        });
    }


    death() {
        this.scene.start("death");
        window.key = 0
    }
}

