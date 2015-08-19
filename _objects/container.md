---
title: "Containers"
type: objects
scss: _assets/stylesheets/_objects.container.scss
usage: "Wrappers for elements and components"
status: production
layout: page
---

Containers are wrappers for elements and components which provide a scaffold with minimal formatting for components and elements

## Generic containers

### Basic container

Any `block` element is capable of being a container. 

{% highlight html %}
	<div class="container"></div>
{% endhighlight %}

### Fill container

A container that will fill 100% the width of it's parent

{% highlight html %}
	<div class="container container--fill"></div>
{% endhighlight %}

### Screen container

A container that will fill 100% the width of it's parent but will not be visible when printed

{% highlight html %}
	<div class="container container--screen"></div>
{% endhighlight %}

### Print container

A container that is only visible when printed

{% highlight html %}
	<div class="container container--print"></div>
{% endhighlight %}

### Page container

A container that limits the maximum width of it's content up to the configured page width (eg. 1100 pixels)

{% highlight html %}
	<div class="container container--page"></div>
{% endhighlight %}

### Grid container

A container for grid friendly content which fills 100% of it's parent and allows inline-block element children.

{% highlight html %}
    <div class="container container--grid"></div>
{% endhighlight %}

### Transactional container

A container for transactional content to ensure the vertical rythymn of the page is properly implemented for transactional content

{% highlight html %}
    <div class="container container--transactional"></div>
{% endhighlight %}

### Float container

A container for floating children which automatically clears floats

{% highlight html %}
    <div class="container container--float"></div>
{% endhighlight %}

## Component containers

### Title container

Used for containing primary title headings on pages

{% highlight html %}
    <div class="container container--title"></div>
{% endhighlight %}

### Content container

Used to contain content heavy pages to provide additional padding

{% highlight html %}
    <div class="container container--content"></div>
{% endhighlight %}

### Main content container

Primary content area on a content page which uses 70% of the width of it's parent

<div class="message message--info"><strong>Tip</strong> Ensure there is no whitespace between this and sibling containers to prevent elements wrapping.</div>

{% highlight html %}
    <div class="container container--content-main"></div>
{% endhighlight %}

### Complementary content container

Complementary content area which uses 30% of the width of it's parent. Typically used for submenus, related images

{% highlight html %}
    <div class="container container--content-complementary"></div>
{% endhighlight %}

### Embeddable container

Container designed for use with embeddable content, for example YouTube video content. Currently only supports 16:9 aspect ratio.

<div class="example">
    <div class="container container--embed">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vTHosgk_FKg" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

{% highlight html %}
<div class="container container--embed">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vTHosgk_FKg" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}