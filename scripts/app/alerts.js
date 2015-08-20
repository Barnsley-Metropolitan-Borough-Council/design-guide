/*global $ */
/*jslint browser:true */

define(['jquery'], function ($) {

    return Alerts = (function () {
        'use strict';

        return {
            init: function () {

                var toggleAlerts = function () {
                    $('.alerts__state').prop('checked', !$('.alerts__state').is(':checked'));
                }

                if ($('.alerts__link--empty').length == 0) {

                    var timeout;
                    var now = (new Date()).getTime(),
                    lastTime = 0;

                    if (localStorage['lastTime']) {
                        lastTime = parseInt(localStorage['lastTime'], 10);
                    }

                    if (now - lastTime > 8 * 60 * 60 * 1000) {
                        toggleAlerts();
                        timeout = setTimeout(function () { toggleAlerts(); }, 3000);
                    }

                    localStorage['lastTime'] = now;
                }

            }
        };

    }());

});