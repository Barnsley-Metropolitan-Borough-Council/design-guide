define(['jquery', 'underscore'], function ($, _) {

    return (function ($, window, document, undefined) {

        "use strict";

        var pluginName = "respondImg",
            defaults = {
                behaviorClass: "js-respond-img",
                minStep: 100
            };

        // The actual plugin constructor
        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init(element);
        }

        // Avoid Plugin.prototype conflicts
        $.extend(Plugin.prototype, {
            init: function (e) {
                var self, smartResize;
                self = this;

                if ($(e).is('img')) {
                    $(e).data('original-src', $(e).prop('src'));
                } else {
                    if (typeof $(e).data('original-src') !== 'undefined' && $(e).data('original-src').length == 0) {
                        $(e).data('original-src', $(e).css('background-image').substr(4, $(e).css('background-image').length - 5));
                    }
                }                

                smartResize = _.debounce(function (event) { self.updateImage(e); }, 300);
                $(window).resize(smartResize);
                self.updateImage(e);

            },
            updateImage: function (e) {

                if (typeof $(e).data('original-src') === 'undefined' || $(e).data('original-src').indexOf("?") == -1) {
                    return;
                }

                var imgPath = $(e).data('original-src').split("?")[0],
                    imgRawProperties = $(e).data('original-src').split("?")[1].split("&"),
                    imgProperties = {},
                    fillParent = true,
                    width = (fillParent) ? $(e).parent().width() : $(e).width(),
                    height = (fillParent) ? $(e).parent().outerHeight() : $(e).outerHeight(),
                    ratio = 1,
                    scaleHeight = false,
                    targetPath = imgPath + "?",
                    image;

                $.each(imgRawProperties, function (key, value) {
                    key = value.split("=")[0];
                    value = value.split("=")[1];
                    imgProperties[key] = value;
                });

                ratio = imgProperties.height / imgProperties.width;
                imgProperties.width = width;
                imgProperties.height = scaleHeight ? width * ratio : height;
                imgProperties.quality = 85;

                $.each(imgProperties, function (key, value) {
                    targetPath += key + "=" + value + "&";
                });

                image = new Image();          
                image.onload = function () {                
                    if ($(e).is('img')) {
                        $(e).prop("src", targetPath);
                    } else {
                        $(e).css('background-image', "url(" + targetPath + ")");
                    }
                }
                image.src = targetPath;

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