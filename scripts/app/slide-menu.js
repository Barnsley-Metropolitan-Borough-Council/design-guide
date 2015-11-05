/*global $ */
/*jslint browser:true */

define(['jquery', 'jquerym'], function ($) {

    return SlideMenu = (function () {
        'use strict';

        var drawers = 0;
        var self = this;

        return {
            init: function () {

                self = this;

                self.createElements();
                self.routeMenu(window.location.hash.substring(1));
                self.registerEvents();

            },
            registerEvents: function () {
                //  Fragment change event
                $(window).on("hashchange", function (e) {
                    e.preventDefault();
                    self.routeMenu(window.location.hash.substring(1));
                });

                //  Menu tap event
                $(document).on("vclick", ".showMenu", function (e) {
                    if (window.location.hash.length > 0) {
                        window.location.hash = window.location.hash + ";" + $(this).attr('href');
                    } else {
                        window.location.hash += $(this).attr('href');
                    }
                    e.preventDefault();
                });

                // Close event
                $(document).on("vclick", ".menu__mask, .menu--primary .menu__button--close", function (e) {
                    self.closeMenu(-2);
                });

                $(document).on("vclick", ".menu--secondary .menu__button--close", function (e) {
                    self.closeMenu(-1);
                });

                // Bind an escape keypress event that closes the menu
                $(document).on("keyup", function (e) {
                    if (e.keyCode === 27) {
                        self.closeMenu(-2);
                    }
                });
            },
            createElements: function () {
                $("<div class=\"container menu menu--primary\" role=\"dialogue\" ></div>").appendTo("body");
                $("<div class=\"container menu__mask menu--primary__mask\" role=\"presentation\"></div>").appendTo("body");
                $("<div class=\"container menu menu--secondary\" role=\"dialogue\"></div>").appendTo("body");
                $("<div class=\"container menu__mask menu--secondary__mask\" role=\"presentation\"></div>").appendTo("body");
            },
            routeMenu: function (url) {
                $("body").width("auto");
                $("body").removeClass("menu-is-open");
                $(".menu").removeClass("is-open");
                $(".menu__mask").removeClass("is-open");

                if (url.length == 0) {
                    self.closeMenu();
                } else {
                    drawers = 0;
                    $.each(url.split(';'), function () {
                        if ((this.length > 0) && (this.indexOf('/') != -1)) {
                            drawers++;
                            self.showMenu(this, drawers);
                            if (typeof ga !== 'undefined' && url.split(';').length == drawers) {
                                ga('send', 'pageview', this);
                            }
                        }
                    });
                }
            },
            closeMenu: function (level) {
                if (level == undefined) return;
                if (drawers + level < 0) level = 0 - drawers;
                if (drawers > 0) {
                    drawers + level;
                    window.history.go(level);
                }
            },
            showMenu: function (url, drawer) {

                // Get the menu from the DOM and clear it out            

                var menu = $(".menu.menu--primary"),
                    menuMask = $(".menu__mask.menu--primary__mask"),
                    body = $("body"),
                    menuButtonHolder = $("<div class=\"menu__button__container\"></div>"),
                    menuButton = $("<a class=\"button button--primary button--default menu__button menu__button--close\">Close menu</a>"),
                    menuContent = $("<div class=\"container container--soft menu__content menu__content--is-loading\"><div class=\"progress-container\"><div class=\"progress-indicator\">Loading...</div></div></div>");

                if (drawer == 2) {
                    menu = $(".menu.menu--secondary");
                    menuMask = $(".menu__mask.menu--secondary__mask");
                }

                if (menu.data('url') != url) {

                    menu.data('url', url);
                    menu.empty();

                    // Reconstruct the inner shell
                    menuButtonHolder.append(menuButton);
                    menu.append(menuButtonHolder);
                    menu.append(menuContent);

                    url = "//" + $(location).attr("host") + url;

                    // Get the menu content
                    $.get(url + ((url.indexOf("?") == -1) ? "menu" : ""), function (data) {

                        // Put the data in the menu                    
                        menuContent.append(data);

                        if (drawer == 2) {
                            menuContent.find('.showMenu').removeClass('showMenu');
                        }

                    }).fail(function () {

                        menuContent.append("<h1>Error</h1><p>There was a problem loading the menu content<br/> Please try again.</p>");

                    }).always(function () {

                        // Hide the progress indicator
                        $(".menu .progress-container").hide();
                        $(".menu .menu__content--is-loading").removeClass("menu__content--is-loading");

                        menuContent.find('a').first().focus();
                        menuButton.scrollTop();

                    });
                }

                // Add the mask to the DOM            
                $("body").width($("body").width() + "px");
                $("body").addClass("menu-is-open");
                $(menuMask).addClass("is-open");
                $(menu).addClass("is-open");
            }
        };

    }());

});