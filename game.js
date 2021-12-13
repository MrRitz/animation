class Enter extends Phaser.Scene {
    constructor() {
        super('Enter')
    }
    create() {
        this.add.circle(config.width/2,config.height/2,200,0x111111)
        this.add.circle(config.width/2,config.height/2,100,0x123456)
        this.add.text(config.width/2,config.height/2,'Click\n to\nEnter', {
            fontSize: 30, fill: '#ffffff'
        }).setOrigin(.5)
        this.input.on('pointerdown', () => {
            this.scene.stop()
            this.scene.start('GameScene')
        })

    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        this.load.audio('slow','audio/slow.mp3')
    }

    create() {
        g.number = 30
        g.array = []
        g.music = this.sound.add('slow', {volume: .5,loop:true})
        g.music.play()
        
        setTimeout(() => {
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,5,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
        }, 1000)

        setTimeout(() => {
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,10,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
        }, 5000)

        setTimeout(() => {
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,15,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
        }, 8000)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].body.setVelocity(slowVelocity(), slowVelocity())
            }
        }, 13000)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.circle.destroy()
                g.array[i].destroy()
                g.circle = this.add.circle(config.width/2,config.height/2,0,randomColor())
            }
            g.array = []
        }, 14200)
        
        setTimeout(() => {
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,5,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,10,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,15,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
        }, 14800)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].body.setVelocity(slowVelocity(),slowVelocity())
            }
            
        }, 20000)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].body.setVelocity(randomVelocity(), randomVelocity())
            }
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,20,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
            
        }, 24000)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].body.setVelocity(slowVelocity(),slowVelocity())
            }
            
        }, 30000)

        setTimeout(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].body.setVelocity(randomVelocity(), randomVelocity())
            }
            for (let i = 0; i < g.number; i++) {
                g.circle = this.add.circle(config.width/2,config.height/2,25,randomColor())
                this.physics.add.existing(g.circle)
                g.circle.body.setCollideWorldBounds(true, 1, 1).setVelocity(randomVelocity(), randomVelocity())
                g.array.push(g.circle)
            }
            
        }, 35000)

        setTimeout(() => {
            setInterval(() => {
                for (let i = 0; i < g.array.length; i++) {
                    if(g.array[i].radius < -30) {
                        g.array[i].radius = 15
                    } 
                    g.array[i].radius -= .5
                }
                
            }, 100)
        }, 2000)
        

        



        setInterval(() => {
            for (let i = 0; i < g.array.length; i++) {
                g.array[i].fillColor = randomColor()
            }
        }, 300)
            
        

        

    }
}

function randomVelocity() {
    let choice = Math.floor(Math.random() * 2)
    if (choice === 0) {
        return Math.floor(Math.random() * 600) + 100
    } else {
        return -Math.floor(Math.random() * 600) - 100
    }
}

function slowVelocity() {
    let choice = Math.floor(Math.random() * 2)
    if (choice === 0) {
        return 50
    } else {
        return -50
    }
}

function randomColor() {
    let d = '0123456789ABCDEF';
    let c = '';
    for (let i = 0; i < 6; i++) {
        c += d[Math.floor(Math.random() * 16)]
    }
    return '0x' + c
}

window.addEventListener('resize', () => {
    window.location.reload()
})

const g = {}
const config = {
    type: Phaser.AUTO,
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: '0x123456',
    physics: {
        default: 'arcade'
    },
    scene: [Enter, GameScene]
}

const game = new Phaser.Game(config)

