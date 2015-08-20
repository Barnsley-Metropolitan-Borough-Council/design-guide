/*global $ */
/*jslint browser:true */

define(['jquery'], function ($) {

    return ResponsiveTables = (function () {
        'use strict';

        return {
            init: function () {

                $('table').each(function () {
                    var headings = [];
                    $(this).addClass('table--responsive');
                    $(this).find('thead th, thead td').each(function () {
                        headings.push($(this).text().trim());
                    });
                    $(this).find('tbody td').each(function () {
                        $(this).attr('data-heading', headings[$(this).index()]);
                        $(this).wrapInner('<div></div>');
                    });
                    $(this).find('tbody th').on('click', function () {
                        $(this).toggleClass('table__heading--expanded');
                        $(this).siblings('td').toggleClass('table__cell--collapsed');
                    });
                    $(this).find('tbody th').each(function () {
                        if ($(this).siblings('td').size() > 0) {
                            $(this).siblings('td').each(function () {
                                $(this).addClass('table__cell--collapsed');
                                $(this).parent().addClass('table__row--collapse');
                            });
                        } else {
                            $(this).addClass('table__subheading');
                        }
                    });
                });

            }
        }

    }());

});