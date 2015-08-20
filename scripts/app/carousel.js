/*global $ */
/*jslint browser:true */

define(['jquery', 'jquerym'], function ($) {

    return Carousel = (function () {
        'use strict';

        return {
            init: function () {                
                $(".carousel").each(function () {

                    // Create the back and forth buttons
                    var prevButton = $("<a class=\"carousel__button carousel__button--previous\">Previous</a>"),
                        nextButton = $("<a class=\"carousel__button carousel__button--next\">Next</a>"),
                        carousel = $(".carousel"),
                        items = $(".carousel__item"),
                        counter = 0,
                        amount = items.length - 1,
                        current = items[counter];

                    $(carousel).append(prevButton);
                    $(carousel).append(nextButton);

                    $(carousel).on("swipeleft", function () {
                        $(current).removeClass("current");
                        if (counter === amount) { counter = 0; } else { counter += 1; }
                        current = items[counter];
                        $(current).addClass("current");
                    });

                    $(carousel).on("swiperight", function () {
                        $(current).removeClass("current");
                        if (counter === 0) { counter = amount; } else { counter -= 1; }
                        current = items[counter];
                        $(current).addClass("current");
                    });

                    $(nextButton).on("click", function () {
                        $(current).removeClass("current");
                        if (counter === amount) { counter = 0; } else { counter += 1; }
                        current = items[counter];
                        $(current).addClass("current");
                    });

                    $(prevButton).on("click", function () {
                        $(current).removeClass("current");
                        if (counter === 0) { counter = amount; } else { counter -= 1; }
                        current = items[counter];
                        $(current).addClass("current");
                    });

                    // Make the first item visible
                    $(current).addClass("current");

                });
            }
        };

    }());

})