
let config = {
    type: Phaser.AUTO,
    width: 500,
    height: 350,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scene: [ preloadScene,level1,level2,level3,level4,level5,level6,death]
    

};

let game = new Phaser.Game(config);

window.notes = 0

window.icon = 0