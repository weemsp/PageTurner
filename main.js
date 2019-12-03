const FPS = 30;
var pagenumDisplay;
var modeSelector;
var setBlinking = false;
var book;
var textHere;
var _content;

function begin() {
	console.log("please work");
	//webgazer.begin();
	book = document.getElementById("Book");
	textHere = document.getElementById("TextHere");
	textHere.innerHTML = LOREM_IPSUM;
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
		if (_content) {
			_content.style.position = "absolute";
			_content.style.left = "0";
			_content.style.top = "0";
		} else
			_content = document.getElementById("content");
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
	if (pagenum > 1) {
		pagenum--;
		pagenumDisplay.innerHTML = pagenum;
		book.scrollTop -= 800;
	}
}

function pageRight() {
	pagenum++;
	pagenumDisplay.innerHTML = pagenum;
	book.scrollTop += 800;
}