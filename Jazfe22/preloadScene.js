class preloadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'preloadScene22' });
    }
    preload() {
        this.load.spritesheet('MC', 'assets/player.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('NPC','assets/enemy.png', { frameWidth: 64, frameHeight: 64});
    }

    create() {
        this.scene.start("level1")

        this.add.text(10, 400, 'Animation labs, press spacebar to continue',
            { font: '24px Courier', fill: '#ffffff' });

        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49)
        var key2 = this.input.keyboard.addKey(50)
        var key3 = this.input.keyboard.addKey(51)
        var key4 = this.input.keyboard.addKey(52)
        var key5 = this.input.keyboard.addKey(53)
        var key6 = this.input.keyboard.addKey(54)

        key1.on('down', function () {
            this.scene.start("level1");
        }, this);

        key2.on('down', function () {
            this.scene.start("level2");
        }, this);

        key3.on('down', function () {
            this.scene.start("level3");
        }, this);

        key4.on('down', function () {
            this.scene.start("level4");
        }, this);

        key5.on('down', function () {
            this.scene.start("level5");
        }, this);

        key6.on('down', function () {
            this.scene.start("level6");
        }, this);


        this.anims.create({
            key: 'MC-up',
            frames: this.anims.generateFrameNumbers('MC',
                { start: 105, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'MC-left',
            frames: this.anims.generateFrameNumbers('MC',
                { start: 118, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'MC-down',
            frames: this.anims.generateFrameNumbers('MC',
                { start: 131, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'MC-right',
            frames: this.anims.generateFrameNumbers('MC',
                { start: 144, end: 151 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'NPC-up',
            frames: this.anims.generateFrameNumbers('NPC',
                { start: 105, end: 112 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'NPC-left',
            frames: this.anims.generateFrameNumbers('NPC',
                { start: 118, end: 125 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'NPC-down',
            frames: this.anims.generateFrameNumbers('NPC',
                { start: 131, end: 138 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'NPC-right',
            frames: this.anims.generateFrameNumbers('NPC',
                { start: 144, end: 151 }),
            frameRate: 5,
            repeat: -1
        });


        let playerpos = {}
        playerpos.x = 35;
        playerpos.y = 330;
        this.scene.start('level1', {
            player: playerpos,
            inventory: this.inventory
        });

    }


}
