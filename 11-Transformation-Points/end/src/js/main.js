(function($) {

	var box = $('.box'),
		boxSVG = $('#boxSVG'),
		boxHTML = $('#boxHTML'),
		htmlDot = $('#htmlDOT'),
		svgDot = $('#boxSVG .circ'),
		svgRect = $('#boxSVG rect'),
		svgCircStroke = $('#boxSVG .circStroke'),
		svgText = $('#boxSVG text'),
		lines = $('.line'),
		buttons = $('button'),
		body = $('body'),
		txtThanks = $('.thanks'),
		tl = new TimelineLite({paused: true}),
		tlFinal = new TimelineMax();

	// Transformation Points - SVG and HTML
	tl
		.to(boxHTML, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {x: '100%', y: '100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(htmlDot, 0.7, {left: 0, top: 0, ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {left: '50%', top: '50%', x: '-50%', y: '-50%', ease:Power2.easeInOut})
		.to(svgDot, 0.7, {attr:{cx: 0, cy: 0}, ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {rotation: 90, transformOrigin: '100% 100%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {xPercent: -100, rotation: 0, ease:Power2.easeInOut})
		.addPause()
		.to(boxSVG, 0.7, {x: '0%', rotation: 0, ease:Power2.easeInOut})
		.addPause()
		.to(htmlDot, 0.7, {left: '50%', top: '50%', ease:Power2.easeInOut})
		.to(svgDot, 0.7, {attr:{cx: 100, cy: 100}, ease:Power2.easeInOut}, '-=0.7')
		.addPause()
		.to([boxSVG,boxHTML], 0.7, {rotation: 720, transformOrigin: '50% 50%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotationX: -180, transformOrigin: '0% 50%', ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -180, transformOrigin: '100% 50%', ease:Power2.easeInOut})
		.addPause()
		.to(boxHTML, 0.7, {rotationX: -360, ease:Power2.easeInOut})
		.to(boxSVG, 0.7, {rotationY: -360, ease:Power2.easeInOut})
		.add(tlFinal);

	tlFinal
		.set(svgCircStroke, {autoAlpha: 0})
		.to([boxHTML,boxSVG], 0.7, {x: '-50%', ease:Power2.easeInOut})
		.to([boxHTML,boxSVG], 3, {rotation: -1440, transformOrigin: '50% 50%', ease:Power4.easeIn})
		.to([svgRect, boxHTML, svgText, svgDot], 0.3, {autoAlpha: 0, ease:Power0.easeNone}, '-=0.3')
		.to(svgCircStroke, 0.3, {autoAlpha: 1, ease:Power0.easeNone}, '-=0.3')
		.to(lines, 0.2, {scale: 0.1, autoAlpha: 0, ease:Power4.easeIn}, '-=0.2')
		.to(boxSVG, 0.3, {scale: 1.1, transformOrigin: '50% 50%', ease:Power4.easeOut})
		.to(boxSVG, 0.2, {scale: 0.2, autoAlpha: 0, ease:Power4.easeOut})
		.to(body, 0.2, {backgroundColor: '#2b4d66', ease:Power0.easeNone}, '-=0.2')
		.to(buttons, 0.3, {opacity: 0}, '-=0.2')
		.fromTo(txtThanks, 0.4, {autoAlpha: 0, scale: 0.8}, {autoAlpha: 1, scale: 1, ease:Back.easeOut}, '-=0.2');
	
	$('#btnNext').on('click',function(){
		tl.play();
	});

	$('#btnPrev').on('click',function(){
		tl.reverse();
	});

})(jQuery);






