---
title: "Banner"
type: components
scss: itcss/_component.banner.scss
usage: "Attractive display for a clear value proposition"
status: development
layout: page
---

<div class="example">
<div class="banner" style="background-image: url('//placehold.it/500x300');">
    <p class="banner__text">
        Barnsley HR Services provide expert HR support to help schools, business and partner organisations manage their employees to protect them from expensive employment litigation
    </p>
</div>
</div>

{% highlight html %}
<div class="banner">
    <p class="banner__text" style="background-image: url('//placehold.it/500x300');">
        Barnsley HR Services provide expert HR support to help schools,
        business and partner organisations manage their employees to protect 
        them from expensive employment litigation
    </p>
</div>
{% endhighlight %}

## Modifiers

The standard banner can be modified in various ways using the following modifiers

### Stripe

Add the `banner--stripe` class to the `banner` element.

<div class="example">
<div class="banner banner--stripe" style="background-image: url('//placehold.it/500x300');">
    <p class="banner__text">
        Barnsley HR Services provide expert HR support to help schools, business and partner organisations manage their employees to protect them from expensive employment litigation
    </p>
</div>
</div>

### Inverted

Add the `banner--inverted` class to the `banner` element. This can be used with `banner--stripe` as shown in the example.

<div class="example">
<div class="banner banner--stripe banner--inverted" style="background-image: url('//placehold.it/500x300');">
    <p class="banner__text">
        Barnsley HR Services provide expert HR support to help schools, business and partner organisations manage their employees to protect them from expensive employment litigation
    </p>
</div>
</div>

### Large

Add the `banner--large` class to the `banner` element to increase the size of the banner.

<div class="example">
<div class="banner banner--stripe banner--inverted banner--large" style="background-image: url('//placehold.it/500x300');">
    <p class="banner__text">
        Barnsley HR Services provide expert HR support to help schools, business and partner organisations manage their employees to protect them from expensive employment litigation
    </p>
</div>
</div>