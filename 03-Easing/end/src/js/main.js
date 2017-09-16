(function($) {
    
	var img = $('img'),
		h2 = $('h2');

	// Simple Tween
	//TweenLite.from(img, 1, {x: -200, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})});
	//TweenLite.from(img, 1, {x: -200, ease: SlowMo.ease.config(0.7, 0.7, false)});
	TweenLite.from(img, 1, {x: -200, ease: SteppedEase.config(20)});
	//TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

})(jQuery);