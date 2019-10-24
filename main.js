function begin() {
	//webgazer.begin();
}

var engine = {
    frameDelay : 1000 / FPS,
	particles : [],
	run : function() {
		var desiredTime = Date.now() + this.frameDelay;
		var dick = webgazer.getPrediction();
		if (dick) {
			console.log(dick.x + ", " + dick.y);
		} else {
			console.log("butt");
		}
		setTimeout(()=>this.run(), Math.max(0, desiredTime-Date.now()));
	},
	
}