define(["jquery", "app/carousel", "app/slide-menu", "app/responsive-tables", "app/alerts", "app/jquery.respondimg", "lib/jquery.placeholder.min", "app/jquery.sticky-follow", "app/jquery.testimonial"], function ($, Carousel, SlideMenu, ResponsiveTables, Alerts) {

    $(function () {
        'use strict';

        // Load modules
        Carousel.init();
        SlideMenu.init();
        ResponsiveTables.init();
        Alerts.init();

        // Bind jQuery plugins
        $('input, textarea').placeholder();
        $('.js-sticky-panel__content').stickyFollow({ container: ".container--content" });
        $('.js-responsive').respondImg();        
        $('.testimonial').testimonial();

    });

});