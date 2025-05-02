gdjs.storyCode = {};
gdjs.storyCode.localVariables = [];
gdjs.storyCode.GDNewTextObjects1= [];
gdjs.storyCode.GDNewTextObjects2= [];
gdjs.storyCode.GDNewText2Objects1= [];
gdjs.storyCode.GDNewText2Objects2= [];
gdjs.storyCode.GDNewSpriteObjects1= [];
gdjs.storyCode.GDNewSpriteObjects2= [];
gdjs.storyCode.GDNewSprite2Objects1= [];
gdjs.storyCode.GDNewSprite2Objects2= [];
gdjs.storyCode.GDNewSprite3Objects1= [];
gdjs.storyCode.GDNewSprite3Objects2= [];


gdjs.storyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.storyCode.GDNewText2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Fun Fun Fun dayo, Lucky Star.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.storyCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.storyCode.GDNewText2Objects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.storyCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDNewSpriteObjects1[k] = gdjs.storyCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.storyCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.storyCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.storyCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.storyCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.storyCode.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.storyCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.storyCode.GDNewText2Objects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.storyCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.storyCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.storyCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.storyCode.GDNewSpriteObjects1[k] = gdjs.storyCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.storyCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}}

}


};

gdjs.storyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.storyCode.GDNewTextObjects1.length = 0;
gdjs.storyCode.GDNewTextObjects2.length = 0;
gdjs.storyCode.GDNewText2Objects1.length = 0;
gdjs.storyCode.GDNewText2Objects2.length = 0;
gdjs.storyCode.GDNewSpriteObjects1.length = 0;
gdjs.storyCode.GDNewSpriteObjects2.length = 0;
gdjs.storyCode.GDNewSprite2Objects1.length = 0;
gdjs.storyCode.GDNewSprite2Objects2.length = 0;
gdjs.storyCode.GDNewSprite3Objects1.length = 0;
gdjs.storyCode.GDNewSprite3Objects2.length = 0;

gdjs.storyCode.eventsList0(runtimeScene);
gdjs.storyCode.GDNewTextObjects1.length = 0;
gdjs.storyCode.GDNewTextObjects2.length = 0;
gdjs.storyCode.GDNewText2Objects1.length = 0;
gdjs.storyCode.GDNewText2Objects2.length = 0;
gdjs.storyCode.GDNewSpriteObjects1.length = 0;
gdjs.storyCode.GDNewSpriteObjects2.length = 0;
gdjs.storyCode.GDNewSprite2Objects1.length = 0;
gdjs.storyCode.GDNewSprite2Objects2.length = 0;
gdjs.storyCode.GDNewSprite3Objects1.length = 0;
gdjs.storyCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['storyCode'] = gdjs.storyCode;
