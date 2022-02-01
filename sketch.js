

function preload(){
backgroundImage = loadImage("background.jpg")
iImage = loadImage("a.jpg")
mImage = loadImage("m.jpg")
jImage = loadImage("j.jpg")
cImage = loadImage("c.png")
bImage = loadImage("b.jpeg")
eImage = loadImage("c.jpg")
tImage = loadImage("t.jpg")
uImage = loadImage("spidy.png")
hImage = loadImage("h.png")
rImage = loadImage("r.png")
wImage = loadImage("w.png")
nImage = loadImage("n.png")

}

function setup(){
 createCanvas(1355,600)

 u = createSprite(200,300,20,10)
 u.addImage(uImage)
 u.scale = 0.7;
 u.visible = false;

 h = createSprite(200,300,20,10)
 h.addImage(hImage)
 
 h.visible = false;

 c = createSprite(200,300,20,10)
 c.addImage(cImage)
 c.scale = 0.7;
 c.visible = false;

 r = createSprite(900,300,20,10)
 r.addImage(rImage)
 r.scale = 0.5;
 r.visible = false;

 w = createSprite(900,300,20,10)
 w.addImage(wImage)
 w.scale = 0.2;
 w.visible = false;

 n = createSprite(900,300,20,10)
 n.addImage(nImage)
 n.scale = 0.45;
 n.visible = false;

 i = createSprite(250,550,20,10)
 i.addImage(iImage)
 i.scale = 0.5;
 
 b = createSprite(370,550,20,10)
 b.addImage(bImage)
 b.scale = 0.2;

 e = createSprite(480,550,20,10)
 e.addImage(eImage)
 e.scale = 0.5;

 t = createSprite(570,550,20,10)
 t.addImage(tImage)
 t.scale = 0.5;

 m = createSprite(660,550,20,10)
 m.addImage(mImage)
 m.scale = 0.5;

 m = createSprite(660,550,20,10)
 m.addImage(mImage)
 m.scale = 0.5;

 j = createSprite(750,550,20,10)
 j.addImage(jImage)
 j.scale = 0.5;

 
}

function draw(){
background(backgroundImage)



if(mousePressedOver(b)){
    reset();
    
}
if(mousePressedOver(i)){
    start();
    
}
if(mousePressedOver(e)){
    end();
    
}
if(mousePressedOver(t)){
    insert();
   
}
if(mousePressedOver(m)){
    enter();
}
if(mousePressedOver(j)){
    control();
   
}


drawSprites();

  
  
}
function reset(){
    u.visible = true;
    h.visible = false;
    c.visible = false;
    
}
function start(){
    r.visible = true;
    w.visible = false;
    n.visible = false;

}
function end(){
    w.visible = true;
    r.visible = false;
    n.visible = false;
}
function insert(){
    h.visible = true;
    u.visible = false;
    c.visible = false;
}
function enter(){
    w.visible = false;
    r.visible = false;
    n.visible = true;
}
function control(){
    u.visible = false;
    h.visible = false;
    c.visible = true;
}