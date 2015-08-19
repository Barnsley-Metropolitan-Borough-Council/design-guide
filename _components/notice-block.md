---
title: "Notice block"
type: components
scss: itcss/_component.notice-block.scss
usage: "Notice content component"
status: production
layout: page
---

Content block to capture important notification sections. This block should be used to provide links to time-sensitive information; for example news, alerts, events, jobs. 

The block collapses to a list when viewed on mobile or tablet screens.

<div class="example">
<nav aria-labelledby="notice-header">
    <ul class="ui-list notice-block"><!--
        --><li class="notice-block__item lg-percent-20">
        <div class="media lg-media--expanded notice-block__media ">
            <a class="media__link notice-block__link" href="/news/">
                <div class="media__item notice-block__media-item">
                            <svg viewBox="0 800 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__newspaper"></use>
                            </svg>
                </div>
                <div class="media__text notice-block__media-text">
                    News
                </div>
            </a>
        </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/have-your-say/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 600 54 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__question-mark"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Help
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/services/jobs/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 500 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__briefcase"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Jobs
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/services/events/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 700 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__calendar"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Events
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/alerts/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 400 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__radio"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Alerts
                    </div>
                </a>
            </div>
        </li><!--
--></ul>
</nav>
</div>

{% highlight html %}
<nav aria-labelledby="notice-header">
    <ul class="ui-list notice-block"><!--
        --><li class="notice-block__item lg-percent-20">
        <div class="media lg-media--expanded notice-block__media ">
            <a class="media__link notice-block__link" href="/news/">
                <div class="media__item notice-block__media-item">
                            <svg viewBox="0 800 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__newspaper"></use>
                            </svg>
                </div>
                <div class="media__text notice-block__media-text">
                    News
                </div>
            </a>
        </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/have-your-say/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 600 54 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__question-mark"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Help
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/services/jobs/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 500 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__briefcase"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Jobs
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/services/events/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 700 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__calendar"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Events
                    </div>
                </a>
            </div>
        </li><!----><li class="notice-block__item lg-percent-20">
            <div class="media lg-media--expanded notice-block__media ">
                <a class="media__link notice-block__link" href="/alerts/">
                    <div class="media__item notice-block__media-item">
                                <svg viewBox="0 400 100 100" class="media__object notice-block__media-object thumbnail--tn lg-thumbnail--md">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sprite__radio"></use>
                                </svg>
                    </div>
                    <div class="media__text notice-block__media-text">
                        Alerts
                    </div>
                </a>
            </div>
        </li><!--
--></ul>
</nav>
{% endhighlight %}