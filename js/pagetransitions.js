$(document).ready(function() {

	var $main = $('body');
	var $pages = $main.children( 'div.page' );
	var pagesCount = $pages.length;
	var current = 0;
	var $currPage = $pages.eq( current );
	var $automaticLength = $main.children('div.automatic').length;

	$currPage.addClass( 'page-current' );

	var $nextPage = $pages.eq(current + 1);

	/*Auto changes */
	function myLoop () {
		 setTimeout(function () {
			 $currPage.find('p').addClass('strikethrough');
		 }, 1000)
	   setTimeout(function () {
			 $currPage.addClass('moveToTop');
			 $nextPage.addClass('page-current');
			 $nextPage.addClass('moveFromBottom');
			 $currPage = $pages.eq(current +1);
			 current++;
 			 $nextPage = $pages.eq(current + 1);
	     if (current < $automaticLength) {
	         myLoop();
	     } else {
				 $('nav').addClass('nav-anim');
				 $('nav li:first-child').addClass('selected');
				 current = $automaticLength;
			 }
	   }, 2000)
	}
	myLoop();


	/* Menu changes */
	$("nav li").click(function(event) {
		var oldCurrent = current;
		var pageNum = parseInt(event.target.id) + $automaticLength;
		$currPage = $pages.eq(current);
		$toPage = $pages.eq(pageNum);
		if (pageNum > current) {
			$currPage.attr('class', 'page-current page moveToTop');
			$toPage.attr('class', 'page-current page moveFromBottom');
			current = pageNum;
		} else if (pageNum < current) {
			$currPage.attr('class', 'page-current page moveToBottom');
			$toPage.attr('class', 'page-current page moveFromTop');
			current = pageNum;
		}
		$('body').find("#".concat(pageNum - $automaticLength)).addClass("selected");
		$('body').find("#".concat(oldCurrent - $automaticLength)).removeClass("selected");

	});

});
