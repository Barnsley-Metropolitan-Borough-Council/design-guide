---
title: "Nav"
type: objects
scss: itcss/_objects.nav.scss
usage: "Nav object pattern"
status: production
layout: page
---

When applied the `nav` class will remove undesirable presentational styles from unordered list elements to make them suitable for navigational use.


## Default nav

Suitable for use in headers and footers and when you want the list elements to display inline

<div class="example">
<nav class="nav">
    <ul>
        <li><a href="/">Link One</a></li>
        <li><a href="/">Link Two</a></li>
        <li><a href="/">Link Three</a></li>
    </ul>
</nav>
</div>

{% highlight html %}
    <nav class="nav">
        <ul>
            <li><a href="/">Link One</a></li>
            <li><a href="/">Link Two</a></li>
            <li><a href="/">Link Three</a></li>
        </ul>
    </nav>
{% endhighlight %}


## Stacked nav

Suitable for stacked navigation for example submenus 

<div class="example">
<nav class="nav nav--stacked">
    <ul>
        <li><a href="/">Link One</a></li>
        <li><a href="/">Link Two</a></li>
        <li><a href="/">Link Three</a></li>
    </ul>
</nav>  
</div>

{% highlight html %}
    <nav class="nav nav--stacked">
        <ul>
            <li><a href="/">Link One</a></li>
            <li><a href="/">Link Two</a></li>
            <li><a href="/">Link Three</a></li>
        </ul>
    </nav>
{% endhighlight %}
