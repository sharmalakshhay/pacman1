var gameState = "wait"
var bgimg, splashscreen, playbutton, howbutton
var playimg,level1img,playerimg



function preload() {

    bgimg = loadImage("assets/splashscreenimg.png")
level1img=loadImage("assets/wallpaper2.jpg")
platform1img=loadImage("assets/platform1.png")
platform2img=loadImage("assets/platform2.png")
platform3img=loadImage("assets/platform3.png")
playerimg=loadImage("assets/pacman.gif")




}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/playbutton.png")
    playbutton.position(width / 2 - 250, height - 145)
    playbutton.size(180, 145)
    playbutton.hide()


   soundbutton = createImg("/assets/soundbutton.png")
   soundbutton.position(width / 2 + 45, height - 150)
   soundbutton.size(170, 160)
   soundbutton.hide()


  mutebutton = createImg("assets/mutebutton.png")
  mutebutton.position(width / 2 + 70, height - 150)
  mutebutton.size(165, 150)
  mutebutton.hide()


  level1popbutton=createButton("pop")
  level1popbutton.position(width/2,height/2)
  level1popbutton.hide()


  player=createSprite(50,height-100)
  player.addImage(playerimg)
  player.scale=0.5
  player.visible=false

}


function draw() {

if(gameState==="wait"){

    background(bgimg)
    playbutton.show()
    soundbutton.show()

}


playbutton.mousePressed(()=>{
    gameState="play"
    playbutton.hide()
    soundbutton.show()

})


if(gameState==="play"){
background(level1img)
soundbutton.position(0,0)
mutebutton.position(0,0)
level1popbutton.show()

playbutton.hide()
}

soundbutton.mousePressed(()=>{
    soundbutton.hide()
    mutebutton.show()
})
mutebutton.mousePressed(()=>{
    soundbutton.show()
    mutebutton.hide()
})

level1popbutton.mousePressed(()=>{
  gameState="level1"  
})


if(gameState==="level1"){
    level1popbutton.hide()
    PLAYLEVEL1()

}


drawSprites()
}



function PLAYLEVEL1(){
    player.visible=true

    platform1= createSprite(width/4,height-120)
    platform1.addImage(platform1img)
    platform1.scale=0.25
    
    
    platform2= createSprite(width/1.5,height/2)
    platform2.addImage(platform2img)
    platform2.scale=0.25

    platform3= createSprite(width/2.5,height/4)
    platform3.addImage(platform3img)
    platform3.scale=0.25

    
    }