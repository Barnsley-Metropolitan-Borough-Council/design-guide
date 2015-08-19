---
title: "Media"
type: objects
scss: itcss/_objects.media-object.scss
usage: "Media object pattern"
status: production
layout: page
---

The media object is a block of media, for example; an image with descriptive text to the right.

## Standard Media

The media element eg. image / video should be contained in an element with class `media__item` and the descriptive content relating to the element contained in a sibling element with the class `media__text`

<div class="example">
<div class="media">
    <a class="media__link" href="#">
        <div class="media__item">
            <img src="//placehold.it/50x50" alt="" class="media__object">                                    
        </div>
        <div class="media__text">
            Better Barnsley
        </div>
    </a>
</div>
</div>

{% highlight html %}
    <div class="media">
        <a class="media__link" href="#">
            <div class="media__item">
                <img src="//placehold.it/50x50" alt="" class="media__object">                                    
            </div>
            <div class="media__text">
                Better Barnsley
            </div>
        </a>
    </div>
{% endhighlight %}

## Expanded Media

At different breakpoints you may want the media object to expand and collapse, for example hiding the media and leaving the descriptive text. You can do this with the expanded media classes


### Expanded by default

Add the class `media--expanded` to the parent `media` element

{% highlight html %}
    <div class="media media--expanded"></div>
{% endhighlight %}


### Expanded on tablets

Add the class `md-media--expanded` to the parent `media` element

{% highlight html %}
    <div class="media md-media--expanded"></div>
{% endhighlight %}


### Expanded on desktops

Add the class `lg-media--expanded` to the parent `media` element

{% highlight html %}
    <div class="media lg-media--expanded"></div>
{% endhighlight %}