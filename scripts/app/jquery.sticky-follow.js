define(['jquery'], function ($) {

    return (function ($, window, document, undefined) {

        "use strict";

        var pluginName = "stickyFollow",
            defaults = {
                container: ".js-sticky-panel__container",
                matchMedia: "only screen and (min-width: 1140px)"
            };

        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        $.extend(Plugin.prototype, {

            init: function () {
           
                var elementHeight = $(this.element).height(),
                    initialOffset = $(this.element).offset().top;
                this.updateStickyElement(this.element, this.settings, elementHeight, initialOffset);

                $(window).on("load", { plugin: this }, function (e) {
                    elementHeight = $(e.data.plugin.element).height(),
                    initialOffset = $(e.data.plugin.element).offset().top;
                });

                $(window).on("load resize scroll", { plugin: this }, function (e) {
                    e.data.plugin.updateStickyElement(e.data.plugin.element, e.data.plugin.settings, elementHeight, initialOffset);
                });

            },

            updateStickyElement: function (element, settings, elementHeight, initialOffset) {

                if (window.matchMedia(settings.matchMedia).matches === false) {
                    $(element).css({ 'position': 'static', 'top': '0px', 'width': $(element).parent().width() + 'px' });
                    return false;
                }

                var maxScrollHeight = $(settings.container).height(),
                    scrollY = $(document).scrollTop(),
                    elementOffset = $(element).offset().top;

                if (maxScrollHeight <= $(element).height()) {
                    $(element).css({ 'position': 'static', 'top': '0px', 'width': $(element).parent().width() + 'px' });
                    return false;
                }

                if ((elementOffset - scrollY) <= 0) {
                    $(element).css({ 'position': 'fixed', 'top': '0px', 'width': $(element).parent().width() + 'px' });
                }

                if (initialOffset > $(document).scrollTop()) {
                    $(element).css({ 'position': 'static', 'top': '0px', 'width': $(element).parent().width() + 'px' });
                }

                if (($(document).scrollTop() + elementHeight - initialOffset) > maxScrollHeight) {
                    $(element).css({
                        'position': 'fixed',
                        'top': (0 - ($(document).scrollTop() + elementHeight - initialOffset - maxScrollHeight)) + 'px',
                        'width': $(element).parent().width() + 'px'
                    });
                }

            }

        });

        $.fn[pluginName] = function (options) {
            return this.each(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            });
        };

    })(jQuery, window, document);

});