$(document).ready(function() {

	var $main = $('body');
	var $pages = $main.children( 'div.page' );
	var pagesCount = $pages.length;
	var current = 0;
	var $currPage = $pages.eq( current );
	var $automaticLength = $main.children('div.automatic').length;

	$currPage.addClass( 'page-current' );// needs to be done automatically

	var $nextPage = $pages.eq(current + 1);

	function myLoop () {           //  create a loop function
	   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			 $currPage.addClass("moveToTop");
			 $nextPage.addClass('page-current');
			 $nextPage.addClass("moveFromBottom");
			 $currPage = $pages.eq(current +1);
			 current++;
 			 $nextPage = $pages.eq(current);                   //  increment the counter
	     if (current <= $automaticLength) {            //  if the counter < 10, call the loop function
	         myLoop();             //  ..  again which will trigger another
	     }                        //  ..  setTimeout()
	   }, 2000)
	}
	myLoop();
});
