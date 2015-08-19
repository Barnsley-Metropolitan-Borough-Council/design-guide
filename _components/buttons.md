---
title: "Buttons"
type: components
scss: itcss/_component.button.scss
usage: "Form and link button styles"
status: production
layout: page
---

## Default Button

The default button is to be used on any supporting actions on the page. 

<div class="example">
<a class="button button--default">Default Button</a>
</div>

{% highlight html %}
    <a class="button button--default">Default Button</a>
{% endhighlight %}

## Inline Button

Upcoming feature.

## Primary Button

The button to activate the primary action on the page. There should only be a single instance of this button per page.

<div class="example">
<a class="button button--default button--primary">Primary Button</a>
</div>

{% highlight html %}    
    <a class="button button--default button--primary">Primary Button</a>
{% endhighlight %}

## Link Button

A low importance action that customers are unlikely to need, or result in premature exit from a customer journey such as cancelling a transaction.

<div class="example">
<a class="button button--default button--link">Link button</a>
</div>

{% highlight html %}    
    <a class="button button--default button--link">Primary Button</a>
{% endhighlight %}


## Hover Styles

When hovering the lightness of the button should be increased by `$color--adjust`. You can achieve this with `lighten($color--name, $color--adjust)` when using the SCSS compiler.

## Icon Buttons

Upcoming feature.