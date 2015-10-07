define(["jquery", "app/carousel", "app/slide-menu", "app/responsive-tables", "app/alerts", "app/gallery", "app/jquery.respondimg", "lib/jquery.placeholder.min", "app/jquery.sticky-follow", "app/jquery.testimonial"], function ($, Carousel, SlideMenu, ResponsiveTables, Alerts, Gallery) {

    $(function () {
        'use strict';

        // Load modules
        Carousel.init();
        SlideMenu.init();
        ResponsiveTables.init();
        Alerts.init();
        Gallery.init();

        // Bind jQuery plugins
        $('input, textarea').placeholder();
        $('.js-sticky-panel__content').stickyFollow({ container: ".container--content" });
        $('.js-responsive').respondImg();        
        $('.testimonial').testimonial();

    });

});