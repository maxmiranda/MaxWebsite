$(document).ready(function() {

	var $main = $('body');
	var $allpages = $main.children( 'div.page' ).not('.side');
	var current = 0;
	var $currPage = $allpages.eq( current );
	var $automaticLength = $main.children('div.automatic').length;
	var $sides = $main.children('div.side');
	var $pages = $main.children( 'div.page' ).not('.side').not('.automatic');

	$currPage.addClass( 'page-current' );

	var $nextPage = $allpages.eq(current + 1);

	/*Auto changes */
	function myLoop () {
		 setTimeout(function () {
			 $currPage.find('p').addClass('strikethrough');
		 }, 2000)
	   setTimeout(function () {
			 $currPage.addClass('moveToTop');
			 $nextPage.addClass('page-current');
			 $nextPage.addClass('moveFromBottom');
			 $currPage = $allpages.eq(current +1);
			 current++;
 			 $nextPage = $allpages.eq(current + 1);
	     if (current < $automaticLength) {
	         myLoop();
	     } else {
				 $('nav').addClass('nav-anim');
				 $('nav li:first-child').addClass('selected');
				 current = 0;
			 }
	   }, 3000)
	}
	myLoop();


/* Menu changes */

	$("nav li, .box").click(function(event) {
		var subpageNum = parseFloat(event.target.id) - 1;
		var pageNum = Math.floor(subpageNum);
		var currIsSide = false;
		if (subpageNum == pageNum) {
			$('.submenu').removeClass("visible");
			if (current != subpageNum && Math.floor(current) == subpageNum) { // if clicking back to third page (Work) menu
				$currPage = $sides.eq(Math.round(10 * (current - pageNum) - 1));
				$toPage = $pages.eq(subpageNum);
				$currPage.attr('class', 'page-current page moveToRight');
				$toPage.attr('class', 'page-current side page moveFromLeft');
			} else {
					if (Math.floor(current) != current) {
						$currPage = $sides.eq(Math.round(10 * (current % 1) - 1));
						currIsSide = true;
					} else {
						$currPage = $pages.eq(current);
						currIsSide = false;
					}
					$toPage = $pages.eq(subpageNum);
					if (pageNum > current) {
						$currPage.attr('class', 'page-current page moveToTop');
						$toPage.attr('class', 'page-current page moveFromBottom');
					} else if (pageNum < current) {
						$currPage.attr('class', 'page-current page moveToBottom');
						$toPage.attr('class', 'page-current page moveFromTop');
					}
			}
			$("#".concat(current + 1)).removeClass("selected"); // not working for the submenu, the hidden content
			$("#".concat(subpageNum + 1)).addClass("selected");
		} else {
				$('.submenu').addClass("visible");
				if (Math.floor(current) != current) {
					$currPage = $sides.eq(Math.round(10 * (current - pageNum) - 1));
					currIsSide = true;
				} else {
					$currPage = $pages.eq(current);
					currIsSide = false;
				}
				var index = Math.round(10 * (subpageNum % 1) -1);
				$toPage = $sides.eq(index);
				if (subpageNum > current) {
					$currPage.attr('class', 'page-current page moveToLeft');
					$toPage.attr('class', 'page-current side page moveFromRight');
				} else if (subpageNum < current) {
					$currPage.attr('class', 'page-current page moveToRight');
					$toPage.attr('class', 'page-current side page moveFromLeft');
				}
			}
			if (currIsSide) {
				$currPage.addClass('side');
			}
			current = subpageNum;
		});

});
