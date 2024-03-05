class preloadScene extends Phaser.Scene {

    constructor() {
        super({ key: 'preloadScene' });
    }
    preload() {
        this.load.spritesheet('MC', 'assets/Player.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('NPC', 'assets/enemy.png', { frameWidth: 64, frameHeight: 64 });

        this.load.image("castle", "assets/Castle2.png")
        this.load.image("defi", "assets/defimon3.png")
        this.load.image("kitchen", "assets/Kitchen_32x32.png")
        this.load.image("music", "assets/Music_and_sport_32x32.png")
        this.load.image("door", "assets/doors.png")
        this.load.image("extra", "assets/misc_atlas.png")
        this.load.image("atlas", "assets/atlas_32x.png")
        this.load.image("basement", "assets/Basement_32x32.png")
        this.load.image("livingroom", "assets/LivingRoom_32x32.png")
        this.load.image("toilet", "assets/toilets.png")
        this.load.image("collect", "assets/collectibles_32x32.png")
        this.load.image("key", "assets/key.png")
        this.load.image("collect", "assets/collectibles_32x32.png")
        this.load.image("page", "assets/note.png")
        this.load.image("msg1", "assets/Nmsg1.jpg");
        this.load.image("msg2", "assets/Nmsg2.jpg");
        this.load.image("boy", "assets/boyspirit.png");
        this.load.audio("hit", "assets/ghost.mp3")
        this.load.audio("ghost", "assets/scary.mp3")
        this.load.image("half", "assets/glass2.png")
        this.load.image("empty", "assets/glass1.png")
        this.load.audio("start", "assets/main.mp3")
        this.load.audio( "dead", "assets/death.mp3")
    }

    create() {
        
    //  window.mainmusic - this.sound.add("start").setVolume(0.1).setLoop(true).play()

        

        // var spaceDown = this.input.keyboard.addKey('SPACE');
        // var key1 = this.input.keyboard.addKey(49)
        // var key2 = this.input.keyboard.addKey(50)
        // var key3 = this.input.keyboard.addKey(51)
        // var key4 = this.input.keyboard.addKey(52)
        // var key5 = this.input.keyboard.addKey(53)
        // var key6 = this.input.keyboard.addKey(54)
        // var key7 = this.input.keyboard.addKey(55)


        // spaceDown.on('down', function () {
        //     this.scene.start("opening");
        // }, this);

        // key2.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 35;
        //     playerpos.y = 330;
        //     this.scene.start("level1",{
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        // }, this);

        // key3.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 66;
        //     playerpos.y = 183;
        //     this.scene.start("level2",{
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        // }, this);

        // key4.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 50;
        //     playerpos.y = 370;
        //     this.scene.start("level3",{
        //         player: playerpos,
        //         inventory: this.inventory   
        //     });
        // }, this);

        // key5.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 512;
        //     playerpos.y = 364;
        //     this.scene.start("level4",{
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        // }, this);

        // key6.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 378;
        //     playerpos.y = 360;
        //     this.scene.start('level5', {
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        // }, this);

        // key7.on('down', function () {
        //     let playerpos = {}
        //     playerpos.x = 11;
        //     playerpos.y = 193;
        //     this.scene.start('level6', {
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        // }, this);
        




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

        // spaceDown.on('down', function(){
        //     let playerpos = {}
        //     playerpos.x = 35;
        //     playerpos.y = 330;
        //     this.scene.start('level1', {
        //         player: playerpos,
        //         inventory: this.inventory
        //     });
        //     }, this );

this.scene.start("opening")


    }


}
