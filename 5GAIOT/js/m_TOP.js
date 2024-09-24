var canvas, stage, exportRoot, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	var comp=AdobeAn.getComposition("419010A4CB947B4CB1F5164130506801");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.m_TOP();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"m_TOP_atlas_1", frames: [[0,426,459,427],[0,855,129,88],[901,248,129,94],[770,248,129,128],[1167,248,103,49],[461,832,129,94],[770,0,460,246],[901,344,133,49],[1032,248,133,49],[234,855,133,49],[461,426,456,404],[770,378,47,38],[234,906,132,48],[819,378,40,38],[592,832,132,48],[726,832,132,48],[131,855,101,96],[0,945,101,96],[860,832,132,48],[919,395,132,48],[1036,299,132,48],[0,0,768,424]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_21 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mTOP = function() {
	this.initialize(ss["m_TOP_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.T02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2_拷貝
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(23.65,1.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(210.3,32.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_19();
	this.instance_2.setTransform(107.5,31.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(2.05,22,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_17();
	this.instance_4.setTransform(166.05,132.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_16();
	this.instance_5.setTransform(54.5,118.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_15();
	this.instance_6.setTransform(25.8,94.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_14();
	this.instance_7.setTransform(209.3,219.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_13();
	this.instance_8.setTransform(1.2,218.6,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_12();
	this.instance_9.setTransform(104.6,218.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,1.5,274.6,242.2);


(lib.T01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2_拷貝_2
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(26,-0.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(23.25,1.2,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(2.25,21.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(126.25,1.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_7();
	this.instance_4.setTransform(104.5,23.1,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(53,111.45,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(218.5,190.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(112.7,189.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(1.5,202.55,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_2();
	this.instance_9.setTransform(207.65,23.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_1();
	this.instance_10.setTransform(156.05,111.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-0.7,272.2,239);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.38,1],-41.1,0,41.1,0).s().p("AmaYiMAAAgxDIM1AAMAAAAxDg");
	this.shape.setTransform(85.925,126.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.8,-30.5,82.3,314.1);


(lib.光 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An/EnIAApNIH/koIIAEoIAAJNIoAEog");
	mask.setTransform(51.175,59.075);

	// 圖層_2
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(47.35,-12.35,0.6928,0.8358,48.7171,0,0,138.3,70);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:188.35,y:114.15},40,cjs.Ease.get(1)).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.4,118.2);


(lib.光1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.光();
	this.instance.setTransform(198.3,180.4,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_1 = new lib.光();
	this.instance_1.setTransform(93.4,180.4,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_2 = new lib.光();
	this.instance_2.setTransform(-11.5,180.4,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_3 = new lib.光();
	this.instance_3.setTransform(146.1,90.4,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_4 = new lib.光();
	this.instance_4.setTransform(41.2,90.4,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_5 = new lib.光();
	this.instance_5.setTransform(198.3,0.65,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_6 = new lib.光();
	this.instance_6.setTransform(93.4,0.65,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_7 = new lib.光();
	this.instance_7.setTransform(-11.5,0.65,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.光1, new cjs.Rectangle(-122,-109.7,431,400.8), null);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_8_複製
	this.instance = new lib.光();
	this.instance.setTransform(428.8,245.7,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_1 = new lib.光();
	this.instance_1.setTransform(323.9,245.7,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_2 = new lib.光();
	this.instance_2.setTransform(219,245.7,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_3 = new lib.光();
	this.instance_3.setTransform(376.6,155.7,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_4 = new lib.光();
	this.instance_4.setTransform(271.7,155.7,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_5 = new lib.光();
	this.instance_5.setTransform(428.8,65.95,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_6 = new lib.光();
	this.instance_6.setTransform(323.9,65.95,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.instance_7 = new lib.光();
	this.instance_7.setTransform(219,65.95,0.9419,0.9419,0,0,0,-12.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},101).wait(101));

	// 圖層_2_拷貝_2
	this.instance_8 = new lib.T01();
	this.instance_8.setTransform(381.75,216.8,1,1,0,0,0,137.6,118.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({alpha:1},12).wait(86).to({alpha:0},14).wait(1));

	// 圖層_8
	this.instance_9 = new lib.光1();
	this.instance_9.setTransform(324,156,1,1,0,0,0,93.5,90.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(78).to({alpha:0},23).to({_off:true},1).wait(100));

	// 圖層_2_拷貝
	this.instance_10 = new lib.T02();
	this.instance_10.setTransform(384.65,203.85,1,1,0,0,0,139.1,127.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({alpha:0},23).wait(86).to({alpha:1},14).wait(1));

	// 圖層_1
	this.instance_11 = new lib.mTOP();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(202));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-44.4,768,468.4);


// stage content:
(lib.m_TOP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.BG();
	this.instance.setTransform(384,213,1,1,0,0,0,384,212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(384,169.1,384,255.9);
// library properties:
lib.properties = {
	id: '419010A4CB947B4CB1F5164130506801',
	width: 768,
	height: 425,
	fps: 30,
	color: "#003333",
	opacity: 0.00,
	manifest: [
		{src:"images/m_TOP_atlas_1.png?1635501425039", id:"m_TOP_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['419010A4CB947B4CB1F5164130506801'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

window.requestAnimationFrame(init);