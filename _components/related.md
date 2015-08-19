---
title: "Related"
type: components
scss: itcss/_component.related-content.scss
usage: "Related content component"
status: production
layout: page
---

Designates a related content menu 

<div class="example">
<aside>
    <div class="related-content" role="complementary">
        <h1 class="related-content__heading heading heading--color">See also...</h1>
        <nav class="related-content__nav nav nav--stacked t-nav--slim">
            <ul>
                <li class="related-content__item">
                    <a href="#" class="related-content__link">Council tax support and housing benefit change in circumstances</a>
                </li>
                <li class="related-content__item">
                    <a href="#" class="related-content__link">Council tax change in circumstances</a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
</div>

{% highlight html %}
<aside>
    <div class="related-content" role="complementary">
        <h1 class="related-content__heading heading heading--color">See also...</h1>
        <nav class="related-content__nav nav nav--stacked t-nav--slim">
            <ul>
                <li class="related-content__item">
                    <a href="#" class="related-content__link">Council tax support and housing benefit change in circumstances</a>
                </li>
                <li class="related-content__item">
                    <a href="#" class="related-content__link">Council tax change in circumstances</a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
{% endhighlight %}
