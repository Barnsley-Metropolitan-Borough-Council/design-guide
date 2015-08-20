---
title: "Carousel"
type: components
scss: itcss/_component.carousel.scss
js: app/carousel.js
usage: "Image carousel component"
status: production
layout: page
---

<div class="example">
<section>
    <h1 id="campaign-header" class="hidden">Let us tell you about...</h1>
    <nav aria-labelledby="campaign-header">
        <ul class="ui-list carousel"><!--
            --><li class="carousel__item js-responsive current" style="background-image: url(//placehold.it/200x200);">
            <a class="carousel__link" href="#">Example Slide 1</a>
        </li><!----><li class="carousel__item js-responsive" style="background-image: url(//placehold.it/200x200);">
            <a class="carousel__link" href="#">Example Slide 2</a>
        </li><!--
        --><a class="carousel__button carousel__button--previous">Previous</a><a class="carousel__button carousel__button--next">Next</a></ul>
    </nav>
</section>
</div>

{% highlight html %}
<section>
    <h1 id="campaign-header" class="hidden">Let us tell you about...</h1>
    <nav aria-labelledby="campaign-header">
        <ul class="ui-list carousel"><!--
            --><li class="carousel__item js-responsive current" style="background-image: url(//placehold.it/200x200);">
            <a class="carousel__link" href="#">Example Slide 1</a>
        </li><!----><li class="carousel__item js-responsive" style="background-image: url(//placehold.it/200x200);">
            <a class="carousel__link" href="#">Example Slide 2</a>
        </li><!--
        --><a class="carousel__button carousel__button--previous">Previous</a><a class="carousel__button carousel__button--next">Next</a></ul>
    </nav>
</section>
{% endhighlight %}