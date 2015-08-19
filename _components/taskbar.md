---
title: "Taskbar"
type: components
scss: itcss/_component.taskbar.scss
usage: "Taskbar component"
status: production
layout: page
---

Taskbar containing 4 high importance, primary, actions.

<div class="example">
<section class="taskbar">
        <h1 class="hidden">Use our most popular...</h1>
        <nav class="nav nav--stacked" aria-label="Most popular tasks">
            <ul>
<!----><li class="taskbar__item   current">
                            <a href="/find-your-nearest/" class="taskbar__link showMenu § nearby">
                                <span class="taskbar__link__image nearby"></span>
                                <span class="taskbar__link__name">
Find
                                </span>
                                <span class="taskbar__link__introduction">Such as: libraries, leisure centres, doctors, schools</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/apply-for-it/" class="taskbar__link showMenu § apply">
                                <span class="taskbar__link__image apply"></span>
                                <span class="taskbar__link__name">
Apply
                                </span>
                                <span class="taskbar__link__introduction">Such as: jobs, council tax discount, housing benefit, blue badge</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/tell-us-about-it/" class="taskbar__link showMenu § report">
                                <span class="taskbar__link__image report"></span>
                                <span class="taskbar__link__name">
Tell
                                </span>
                                <span class="taskbar__link__introduction">Such as: child or adult abuse, missed bins, fly tipping, pest problems</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/pay-for-it/" class="taskbar__link showMenu § pay">
                                <span class="taskbar__link__image pay"></span>
                                <span class="taskbar__link__name">
Pay
                                </span>
                                <span class="taskbar__link__introduction">Such as: business rates, council tax, invoices, benefits over-payment</span>
                            </a>
        </li><!----><!---->
            </ul>
        </nav>
    </section>
</div>

{% highlight html %}
<section class="taskbar">
        <h1 class="hidden">Use our most popular...</h1>
        <nav class="nav nav--stacked" aria-label="Most popular tasks">
            <ul>
<!----><li class="taskbar__item   current">
                            <a href="/find-your-nearest/" class="taskbar__link showMenu § nearby">
                                <span class="taskbar__link__image nearby"></span>
                                <span class="taskbar__link__name">
Find
                                </span>
                                <span class="taskbar__link__introduction">Such as: libraries, leisure centres, doctors, schools</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/apply-for-it/" class="taskbar__link showMenu § apply">
                                <span class="taskbar__link__image apply"></span>
                                <span class="taskbar__link__name">
Apply
                                </span>
                                <span class="taskbar__link__introduction">Such as: jobs, council tax discount, housing benefit, blue badge</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/tell-us-about-it/" class="taskbar__link showMenu § report">
                                <span class="taskbar__link__image report"></span>
                                <span class="taskbar__link__name">
Tell
                                </span>
                                <span class="taskbar__link__introduction">Such as: child or adult abuse, missed bins, fly tipping, pest problems</span>
                            </a>
        </li><!----><!----><li class="taskbar__item ">
                            <a href="/pay-for-it/" class="taskbar__link showMenu § pay">
                                <span class="taskbar__link__image pay"></span>
                                <span class="taskbar__link__name">
Pay
                                </span>
                                <span class="taskbar__link__introduction">Such as: business rates, council tax, invoices, benefits over-payment</span>
                            </a>
        </li><!----><!---->
            </ul>
        </nav>
    </section>
{% endhighlight %}