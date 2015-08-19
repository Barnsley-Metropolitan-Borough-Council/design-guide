---
title: "Highlight"
type: components
module: _includes/highlight.html
scss: _assets/stylesheets/_component-highlight.scss
usage: "Highlight component for displaying important content"
status: alpha
layout: page
---

Used to highlight important content on a page which is likely to be the single most piece of information relevant to the customer. 

For example; the date of the customer's next bin collection.

<div class="example">
<div class="highlight-content">
    <p>Your next bin collection</p>
    <p><em>28th February</em></p>
    <p>Grey bin</p>
</div>
</div>

{% highlight html %}
<div class="highlight-content">
    <p>Your next bin collection</p>
    <p><em>28th February</em></p>
    <p>Grey bin</p>
</div>
{% endhighlight %}