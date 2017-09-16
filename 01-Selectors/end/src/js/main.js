(function($) {
    
	// jQuery Selectors
	// var header = $("#header"),    // jQuery ID
	//     h1 = $("h1"),             // jQuery tag
	//     intro = $(".intro"),      // jQuery class
	//     firstItem = $("li:first-child"),    // jQuery first item
	//     secondItem = $("li:nth-child(2)"),    // jQuery second item
	//     lastItem = $("li:last-child");      // jQuery last item

	// JavaScript Selectors
	var header = document.getElementById("header"),
	    h1 = document.getElementsByTagName("h1"),
	    intro = document.getElementsByClassName("intro"),
	    firstItem = document.getElementsByClassName("list")[0].firstElementChild,
	    secondItem = document.getElementsByClassName("list")[0].children[1],
	    lastItem = document.getElementsByClassName("list")[0].lastElementChild;
	
	// JavaScript querySelector
	var	select = function(s) {
		return document.querySelector(s);
	};

	// JavaScript querySelectorAll
	var selectAll = function(s) {
		return document.querySelectorAll(s);
	};

	var intro2 = select('.intro');
	var allItems = selectAll('li');

	// Simple Tween
	TweenLite.to(allItems, 1.5, {y: 50, autoAlpha: 0});



})(jQuery);