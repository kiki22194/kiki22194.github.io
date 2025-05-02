gdjs.Game_32WinCode = {};
gdjs.Game_32WinCode.localVariables = [];
gdjs.Game_32WinCode.GDWinObjects1= [];
gdjs.Game_32WinCode.GDWinObjects2= [];
gdjs.Game_32WinCode.GDTextObjects1= [];
gdjs.Game_32WinCode.GDTextObjects2= [];
gdjs.Game_32WinCode.GDScoreIconObjects1= [];
gdjs.Game_32WinCode.GDScoreIconObjects2= [];
gdjs.Game_32WinCode.GDScoreObjects1= [];
gdjs.Game_32WinCode.GDScoreObjects2= [];
gdjs.Game_32WinCode.GDbuttomObjects1= [];
gdjs.Game_32WinCode.GDbuttomObjects2= [];


gdjs.Game_32WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32WinCode.GDScoreObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "win.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Game_32WinCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32WinCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttom"), gdjs.Game_32WinCode.GDbuttomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32WinCode.GDbuttomObjects1.length;i<l;++i) {
    if ( gdjs.Game_32WinCode.GDbuttomObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32WinCode.GDbuttomObjects1[k] = gdjs.Game_32WinCode.GDbuttomObjects1[i];
        ++k;
    }
}
gdjs.Game_32WinCode.GDbuttomObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.Game_32WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32WinCode.GDWinObjects1.length = 0;
gdjs.Game_32WinCode.GDWinObjects2.length = 0;
gdjs.Game_32WinCode.GDTextObjects1.length = 0;
gdjs.Game_32WinCode.GDTextObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreObjects2.length = 0;
gdjs.Game_32WinCode.GDbuttomObjects1.length = 0;
gdjs.Game_32WinCode.GDbuttomObjects2.length = 0;

gdjs.Game_32WinCode.eventsList0(runtimeScene);
gdjs.Game_32WinCode.GDWinObjects1.length = 0;
gdjs.Game_32WinCode.GDWinObjects2.length = 0;
gdjs.Game_32WinCode.GDTextObjects1.length = 0;
gdjs.Game_32WinCode.GDTextObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreIconObjects2.length = 0;
gdjs.Game_32WinCode.GDScoreObjects1.length = 0;
gdjs.Game_32WinCode.GDScoreObjects2.length = 0;
gdjs.Game_32WinCode.GDbuttomObjects1.length = 0;
gdjs.Game_32WinCode.GDbuttomObjects2.length = 0;


return;

}

gdjs['Game_32WinCode'] = gdjs.Game_32WinCode;
