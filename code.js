var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var deathcount=5;
var boundry1=createSprite(200,150,400,5);
var boundry2=createSprite(200,300,400,5);
var box1=createSprite(130,165,10,10);
box1.shapeColor="red";
var box2=createSprite(185,280,10,10);
box2.shapeColor="red";
var box3=createSprite(230,165,10,10);
box3.shapeColor="red";
var box4=createSprite(290,280,10,10);
box4.shapeColor="red";
var startarea=createSprite(40,225,80,150);
startarea.shapeColor="yellow";
var finisharea=createSprite(360,225,80,150);
finisharea.shapeColor="green";
var sam=createSprite(40,225,20,20);
sam.shapeColor="tan";
box1.velocityX=0;
box1.velocityY=10;
box2.velocityX=0;
box2.velocityY=10;
box3.velocityX=0;
box3.velocityY=10;
box4.velocityX=0;
box4.velocityY=10;
function draw()
{
  
  background("white");
  createEdgeSprites();
  
  box1.bounceOff(boundry1);
  box1.bounceOff(boundry2);
box2.bounceOff(boundry1);
  box2.bounceOff(boundry2);
box3.bounceOff(boundry1);
  box3.bounceOff(boundry2);
box4.bounceOff(boundry1);
  box4.bounceOff(boundry2);
if(keyDown("right")){
  sam.x=sam.x+8;
}
if(sam.isTouching(box1)
||sam.isTouching(box2)
||sam.isTouching(box3)
||sam.isTouching(box4))
 {
   sam.x=40;
   sam.y=225;
   deathcount=deathcount+1;
   
 }
 textSize(20);
 fill("black");
 text("LIFE :"+deathcount,150,140);
  drawSprites();
   if (sam.isTouching(finisharea)){
     text("YOU WON",200,200);
   } 
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
