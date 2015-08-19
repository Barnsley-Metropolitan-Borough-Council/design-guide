---
title: "Search"
type: objects
scss: itcss/_objects.search.scss
usage: "Search object pattern"
status: production
layout: page
---

Basic styling to search form elements. Hides the search label and adds padding to the search field.

<div class="example">
<label for="search" class="ui-search__label">Search</label>
<input type="text" class="ui-search__field" name="search" placeholder="Search" />
</div>

{% highlight html %}
    <label for="search" class="ui-search__label">Search</label>
    <input type="text" class="ui-search__field" name="search" placeholder="Search" />
{% endhighlight %}