/*global $ */
/*jslint browser:true */

define(['jquery', 'jquerym'], function ($) {

	return (function ($, window, document, undefined) {

		"use strict";

		var pluginName = "testimonial",
			defaults = {};			

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
				var self = this;
				var elementCount = $(e).find(".testimonial__item").size();				

				var htmlNav = $("<nav class=\"testimonial__nav\"><ul class=\"testimonial__nav__list ui-list\"></ul></nav>");
				var navLink = $("<li class=\"testimonial__nav__item\">+</li>");
				var i = 0;

				$(e).find(".testimonial__item").each(function(key, element) {
					$(htmlNav).find(".testimonial__nav__list").append(navLink.clone().attr('data-testimonial', i));
					$(element).addClass("testimonial__item--hidden");            		
					i++;
				});

				$(e).append(htmlNav);

				$(e).find(".testimonial__nav__item").click(function() {										
					self.gotoTestimonial($(e).find(".testimonial__item")[$(this).data('testimonial')], e, $(this).data('testimonial'));
				});

				self.gotoTestimonial($(e).find(".testimonial__item").first(), e, 0);
			},
			previousTestimonial: function (e) {

			},
			nextTestimonial: function (e) {

			},
			gotoTestimonial: function (e, parent, index) {						
				$(parent).find(".testimonial__nav__item").removeClass('testimonial__nav__item--active');	
				$(parent).find(".testimonial__nav__item").eq(index).addClass('testimonial__nav__item--active');	
				$(e).siblings().addClass('testimonial__item--hidden').removeClass('testimonial__item--active');				
				$(e).addClass('testimonial__item--active').removeClass('testimonial__item--hidden');
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