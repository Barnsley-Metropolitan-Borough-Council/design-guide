---
title: "Logo"
type: foundations
module: _includes/logo.html
scss: itcss/_component.logo.scss
usage: "Logo for presenting on header or footer"
status: production
layout: page
---

The Barnsley Council logo should be displayed in full as an SVG with an accessible text fallback. 

On small screen devices where space is at a premium the logo may be collapsed to just display the symbol and omit the logotype. In all other cases, use the full Barnsley Council logo.

An optional print friendly PNG image (image with class `logo__print`) is included by default.

<div class="example example--dark">
<h1 class="logo__heading">
    <a class="logo__link" href="/">
        Barnsley Council
    </a>
    <img class="logo__print" alt="Barnsley Council" src="/images/bmbc-print.png" />
</h1>
</div>

{% highlight html %}
<h1 class="logo__heading">
    <a class="logo__link" href="/">
        Barnsley Council
    </a>
    <img class="logo__print" alt="Barnsley Council" src="/images/bmbc-print.png" />
</h1>
{% endhighlight %}