const FPS = 30;
var pagenumDisplay;
var modeSelector;
var setBlinking = false;

function begin() {
	console.log("please work");
	//webgazer.begin();
	engine.run();
}

var pagenum = 1;

var engine = {
    frameDelay : 1000 / FPS,
	particles : [],
	run : function() {
		var desiredTime = Date.now() + this.frameDelay;
		
		if (!pagenumDisplay)
			pagenumDisplay = document.getElementById("pagenumber");
		if (!modeSelector) {
			modeSelector = document.getElementsByClassName("qs_select")[2];
			//if (modeSelector)
				//modeSelector.value = "advanced - face tracking - blink detection";
		}
		if (!setBlinking && stupidScopeEscaper.onExampleChosen) {
			console.log("let's start blinking");
			setBlinking = true;
			stupidScopeEscaper.onExampleChosen({index: 20, label: "advanced - face tracking - blink detection", value: "advanced - face tracking - blink detection"});
		}
		/*var dick = webgazer.getPrediction();
		if (dick) {
			console.log(dick.x + ", " + dick.y);
		} else {
			console.log("butt");
		}*/
		
		setTimeout(()=>this.run(), Math.max(0, desiredTime-Date.now()));
	},
	
}

function pageLeft() {
	pagenum--;
	pagenumDisplay.innerHTML = pagenum;
}

function pageRight() {
	pagenum++;
	pagenumDisplay.innerHTML = pagenum;
}