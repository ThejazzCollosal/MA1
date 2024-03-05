
let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    backgroundColor: '#000000',
    scene: [ preloadScene,opening,instructions,morning,night,level1,level2,level3,level4,level5,level6,death,msg1,msg2,msg3,msg4,finalscene,yesscene]
    

};

let game = new Phaser.Game(config);
window.innerWidth * window.devicePixelRatio
window.innerHeight,
phaser.CANVAS,
    
window.glass = 0
window.readnote =0
window.readnote2 =0
window.readnote3 =0
window.readnote4 =0
window.key = 0
window.note = 0
window.icon = 0
window.collected =0
