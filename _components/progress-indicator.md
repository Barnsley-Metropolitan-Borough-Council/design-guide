---
title: "Progress indicator"
type: components
scss: itcss/_component.progress-indicator.scss
usage: "Progress indicator component"
status: production
layout: page
---

Used to indicate loading progress for long running operations with an unknown completion time.

## Light on Dark

A simple pure CSS loading indicator, the default is light on dark.

<div class="example example--dark">
    <div class="progress-container">
        <div class="progress-indicator">
            Loading...
        </div>
    </div>
</div>

{% highlight html %}
<div class="progress-container">
    <div class="progress-indicator">
        Loading...
    </div>
</div>
{% endhighlight %}

## Dark on Light

Just add the `progress-indicator--dark` modifier to the progress indicator.

<div class="example">
    <div class="progress-container">
        <div class="progress-indicator progress-indicator--dark">
            Loading...
        </div>
    </div>
</div>

{% highlight html %}
<div class="progress-container">
    <div class="progress-indicator progress-indicator--dark">
        Loading...
    </div>
</div>
{% endhighlight %}
