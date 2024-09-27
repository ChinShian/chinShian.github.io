
	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	function init() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		var comp=AdobeAn.getComposition("9E8A9DA0E17B114D9B5BF2ACBD45923A");
		var lib=comp.getLibrary();
		createjs.MotionGuidePlugin.install();
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
		exportRoot = new lib.heartbeat();
		stage = new lib.Stage(canvas);	
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}	    
		//Code to support hidpi screens and responsive scaling.
		AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}
	(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"heartbeat_atlas_", frames: [[0,245,572,572],[0,0,1595,243],[574,245,206,24]]}
	];


	// symbols:



	(lib.CachedTexturedBitmap_10 = function() {
		this.initialize(ss["heartbeat_atlas_"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.CachedTexturedBitmap_11 = function() {
		this.initialize(ss["heartbeat_atlas_"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.CachedTexturedBitmap_9 = function() {
		this.initialize(ss["heartbeat_atlas_"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


	(lib.紅線 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層_1
		this.instance = new lib.CachedTexturedBitmap_11();
		this.instance.parent = this;
		this.instance.setTransform(-1,-1,0.5,0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.紅線, new cjs.Rectangle(-1,-1,797.5,121.5), null);


	(lib.紅光 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層_1
		this.instance = new lib.CachedTexturedBitmap_10();
		this.instance.parent = this;
		this.instance.setTransform(-35.45,-35.45,0.124,0.124);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.紅光, new cjs.Rectangle(-35.4,-35.4,70.9,70.9), null);


	(lib.心跳 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層_1
		this.instance = new lib.紅光();
		this.instance.parent = this;
		this.instance.setTransform(0,0,0.9155,0.9155);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.098,scaleY:1.098},24,cjs.Ease.get(0.5)).to({scaleX:0.9155,scaleY:0.9155},30,cjs.Ease.get(-0.5)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-38.9,-38.9,77.9,77.9);


	// stage content:
	(lib.heartbeat = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 圖層_7
		this.instance = new lib.心跳();
		this.instance.parent = this;
		this.instance.setTransform(53.95,118.75,0.539,0.539,0,0,0,0.4,0.3);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

		// 圖層_2
		this.instance_1 = new lib.紅光();
		this.instance_1.parent = this;
		this.instance_1.setTransform(53.95,119.2,0.2821,0.2821,0,0,0,0.6,0.4);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:0.4,regY:0.2,scaleX:0.2819,scaleY:0.2819,guide:{path:[54,118.8,101.6,118.8,149.2,118.8,150.5,118.8,152.8,112.9,155.2,106.9,156.9,106.6,157.8,106.5,158.7,107.6,159.7,108.8,160.8,111.2,163,116.2,164.4,116.2,165.9,116.2,170.2,115.7,174,115.4,174.4,116.3,174.7,117,176.2,123.5,177.1,126.6,178,128.1,178.9,129.6,179.8,129.6,180.7,129.6,181.9,116.3,183.1,103,184.5,76.4,186,49.9,186.7,36.7,187.5,23.4,187.6,23.4,187.7,23.4,188.3,38.3,189,53.2,190.3,83,191.6,112.9,192.9,127.8,194.2,142.7,195.5,142.7,196.6,142.7,197.5,139.4,198.4,136.1,199.1,129.4,200.6,115.8,202.3,115.4,204.3,114.9,209.9,116.2,215.9,117.7,217.7,117.5,220,117.2,221,113.6,222.4,108.8,223,108.1,224.1,106.8,227.8,100.8,231.8,95.5,235.3,95.3,239.1,95.1,243.1,102,246.4,107.7,246.7,111.6,246.9,113.5,247.6,121.5,248.1,125.1,248.7,126.9,249.4,128.7,250.3,128.7,251.6,128.7,256.8,119.8,262,110.9,264.8,110.8,266.4,110.8,267.9,112,268.2,112.3,270.4,114.7,273.9,118.8,278.9,118.8,397.4,118.8,515.8,118.8]}},66).to({regX:0.2,regY:0,scaleX:4.0312,scaleY:0.1732,guide:{path:[515.8,118.9,516.3,118.9,516.8,118.9]}},11,cjs.Ease.get(1)).to({guide:{path:[516.8,118.9,510.8,118.9,504.8,118.9]}},38).to({regX:0.4,scaleX:1.8599,x:954.15,y:118.9,alpha:0},32,cjs.Ease.get(-1)).wait(40));

		// 圖層_1
		this.instance_2 = new lib.CachedTexturedBitmap_9();
		this.instance_2.parent = this;
		this.instance_2.setTransform(0.45,113.15,0.5,0.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210));

		// 線
		this.instance_3 = new lib.紅線();
		this.instance_3.parent = this;
		this.instance_3.setTransform(415.65,83,1,1,0,0,0,397.9,59.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(210));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(405.5,101.4,614,48.19999999999999);
	// library properties:
	lib.properties = {
		id: '9E8A9DA0E17B114D9B5BF2ACBD45923A',
		width: 810,
		height: 175,
		fps: 30,
		color: "#1B53A4",
		opacity: 0.00,
		manifest: [
			{src:"images/heartbeat_atlas_.png?1621911394874", id:"heartbeat_atlas_"}
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
	an.compositions['9E8A9DA0E17B114D9B5BF2ACBD45923A'] = {
		getStage: function() { return exportRoot.getStage(); },
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


	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;
	init();