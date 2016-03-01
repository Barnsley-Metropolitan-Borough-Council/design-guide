define(['jquery', 'jquerym'], function ($) {
	$(".button--dropdown > a").click(function (event) {
	    $(".button--dropdown__menu").hide();
	    $(this).siblings(".button--dropdown__menu").slideToggle(150);
	    event.stopPropagation();
	});

	$("html").click(function() {
	    $(".button--dropdown__menu").hide();
	});
});