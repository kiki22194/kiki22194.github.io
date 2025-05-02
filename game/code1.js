gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.GDNewPanelSpriteObjects1= [];
gdjs.startCode.GDNewPanelSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewSprite2Objects1= [];
gdjs.startCode.GDNewSprite2Objects2= [];
gdjs.startCode.GDNewSprite3Objects1= [];
gdjs.startCode.GDNewSprite3Objects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Fun Fun Fun dayo, Lucky Star.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.startCode.GDNewPanelSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDNewPanelSpriteObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDNewPanelSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDNewPanelSpriteObjects1[k] = gdjs.startCode.GDNewPanelSpriteObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDNewPanelSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.startCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.startCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewSprite2Objects1.length = 0;
gdjs.startCode.GDNewSprite2Objects2.length = 0;
gdjs.startCode.GDNewSprite3Objects1.length = 0;
gdjs.startCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
