/*global $ */
/*jslint browser:true */

define(['jquery', 'jquerym'], function ($) {

    return Gallery = (function () {
        'use strict';

        return {
            init: function () {                
                $(".gallery").each(function () {
                    
                	$(".gallery__link").click(function( event ) {      

                		var el = $(this);

            			$('.gallery__active__image').attr('src', el.prop('href'));
            			$('.gallery__active__link').attr('href', el.prop('href'));
            			$('.gallery__active__image').attr('alt', el.prop('title'));
            			$('.gallery__active__image').attr('title', el.prop('title'));
            			
                		$(this).parent().siblings().removeClass('gallery__item--active');
                		$(this).parent().addClass('gallery__item--active');
                		event.preventDefault();
                	});

                });
            }
        };

    }());

})