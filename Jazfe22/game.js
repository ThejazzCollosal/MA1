
let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    backgroundColor: '#000000',
    scene: [ preloadScene,opening,instructions,morning,night,level1,level2,level3,level4,level5,level6,death,msg,msg2,msg3,msg4,finalscene,yesscene]
    

};

let game = new Phaser.Game(config);

window.glass = 0
window.readnote =0
window.readnote2 =0
window.readnote3 =0
window.readnote4 =0
window.key = 0
window.note = 0
window.icon = 0
window.collected =0
