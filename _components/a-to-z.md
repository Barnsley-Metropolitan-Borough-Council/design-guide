---
title: "A to Z"
type: components
scss: itcss/_component.atoz.scss
usage: "A to Z listing style"
status: production
layout: page
---

## Bar display

<div class="example">
<section class="[ atoz atoz--bar ] container--float">
    <h3 class="atoz__heading--bar">A - Z Directory</h3>
    <nav class="nav">
        <ul class="atoz__list--bar"><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="#">A</a>
            </li><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="#">B</a></li><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="# /atoz/?letter=c">C</a></li>
        </ul>
    </nav>
</section>
</div>

{% highlight html %}
<section class="[ atoz atoz--bar ] container--float">
    <h3 class="atoz__heading--bar">A - Z Directory</h3>
    <nav class="nav">
        <ul class="atoz__list--bar"><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="#">A</a>
            </li><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="#">B</a></li><!--
            --><li class="atoz__item">
                <a class="atoz__link" href="#">C</a>
            </li>
        </ul>
    </nav>
</section>
{% endhighlight %}

## Block display

<div class="example">
<div class="atoz atoz--block">
    <nav class="nav">
        <ul><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">A</a></li><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">B</a></li><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">C</a></li>
        </ul>
    </nav>
</section>
</div>

{% highlight html %}
<div class="atoz atoz--block">
    <nav class="nav">
        <ul><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">A</a></li><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">B</a></li><!--
            --><li class="atoz__item"><a class="atoz__link" href="#">C</a></li>
        </ul>
    </nav>
</section>
{% endhighlight %}