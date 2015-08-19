---
title: "Breadcrumbs"
type: components
scss: itcss/_component.breadcrumb.scss
usage: "Breadcrumb style"
status: production
layout: page
---

<div class="example">
<div class="breadcrumbs" aria-label="breadcrumb" role="navigation">
    <h1 id="breadcrumbLabel" class="breadcrumbs__heading">You are here:</h1>
    <nav>
        <ul class="breadcrumbs__list" aria-labelledby="breadcrumbLabel">
            <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="#">Parent name</a></li>            
            <li class="breadcrumbs__item">Current page name</li>
        </ul>
    </nav>
</div>
</div>

{% highlight html %}
<div class="breadcrumbs" aria-label="breadcrumb" role="navigation">
    <h1 id="breadcrumbLabel" class="breadcrumbs__heading">You are here:</h1>
    <nav>
        <ul class="breadcrumbs__list" aria-labelledby="breadcrumbLabel">
            <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="#">Parent name</a></li>            
            <li class="breadcrumbs__item">Current page name</li>
        </ul>
    </nav>
</div>
{% endhighlight %}