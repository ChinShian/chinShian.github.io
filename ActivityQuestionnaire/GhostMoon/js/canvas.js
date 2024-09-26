var canvas, stage, exportRoot, fnStartAnimation;

let init = () => {
  canvas = document.getElementById('canvas1');
  var comp1 = AdobeAn.getComposition('B67B049718FA5441981CEB63F793D3A7');
  var lib1 = comp1.getLibrary();
  createjs.MotionGuidePlugin.install();
  var ss1 = comp1.getSpriteSheet();
  exportRoot = new lib1.ALL();
  stage = new lib1.Stage(canvas);

  let fnStartAnimation1 = () => {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib1.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, 'both', false, 1, [canvas]);
  AdobeAn.compositionLoaded(lib1.properties.id);
  fnStartAnimation1();
};
window.requestAnimationFrame(init);
