---
title: "Feature"
type: components
scss: itcss/_component.call-to-action.scss
usage: "Featured content with various display modes"
status: development
layout: page
---

## Standard Feature

<div class="example">
<div class="feature">
    <h2 class="feature__heading">Our fixed fee package</h2>    
    <div class="feature__content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
</div>

## Using multiple features

<div class="example">
<section class="features">
    <ul class="feature__list ui-list">
        <li class="feature feature--soft feature__item">
            <h2 class="feature__heading">Our fixed fee package</h2>    
            <div class="feature__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
                </p>
                <p>
                    <a class="feature__link" href="#">Learn more</a>
                </p>
            </div>
        </li>
        <li class="feature feature--soft feature__item">
            <h2 class="feature__heading">Our fixed fee package</h2>    
            <div class="feature__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
                </p>
                <p>
                    <a class="feature__link" href="#">Learn more</a>
                </p>
            </div>
        </li>
        <li class="feature feature--soft feature__item">
            <h2 class="feature__heading">Our fixed fee package</h2>    
            <div class="feature__content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
                </p>
                <p>
                    <a class="feature__link" href="#">Learn more</a>
                </p>
            </div>
        </li>
    </ul>
</section>
</div>

## Photo feature

<div class="example">
<div class="feature feature--photo feature--supersoft" style="background-image:url('//placehold.it/500x300')">
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
</div>

{% highlight html %}
<div class="feature feature--photo feature--supersoft" style="background-image:url('//placehold.it/500x300')">
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
{% endhighlight %}

## Photo Feature Inverted

<div class="example">
<div class="feature feature--photo feature--supersoft feature--inverted" style="background-image:url('//placehold.it/500x300/333333/999999')">
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
</div>

{% highlight html %}
<div class="feature feature--photo feature--supersoft feature--inverted" style="background-image:url('//placehold.it/500x300/333333/999999')">
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
{% endhighlight %}

## Media Feature

Include a responsive image with the feature

<div class="example">
<div class="feature feature--media">
    <div class="feature__image image--fill" style="background-image: url('//placehold.it/500x500'); height:200px;">        
    </div>
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
</div>

{% highlight html %}
<div class="feature feature--media">
    <div class="feature__image image--fill" style="background-image: url('//placehold.it/500x500'); height:200px;">        
    </div>
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
{% endhighlight %}

## Muted Style

Add the `feature--muted` class to your `feature` element to de-emphasize the feature, useful for including secondary features without drawing attention from the primary.

<div class="example">
<div class="feature feature--media feature--muted">
    <div class="feature__image image--fill" style="background-image: url('//placehold.it/500x500'); height:200px;">        
    </div>
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
</div>

{% highlight html %}
<div class="feature feature--media feature--muted">
    <div class="feature__image image--fill" style="background-image: url('//placehold.it/500x500'); height:200px;">        
    </div>
    <div class="feature__content">
        <h2 class="feature__heading">Our fixed fee package</h2>        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non rutrum orci. Aenean et faucibus tellus. Aenean pellentesque, nibh vitae fermentum fringilla, lacus arcu congue massa, et dignissim tortor nulla vitae tellus. Aliquam malesuada turpis enim, at lacinia mauris dignissim sit amet.
        </p>
        <p>
            <a class="feature__link" href="#">Learn more</a>
        </p>
    </div>
</div>
{% endhighlight %}