---
title: "Image"
type: objects
scss: _assets/stylesheets/_objects.image.scss
usage: "Image object"
status: production
layout: page
---

Classes and tips for handling images

## Image class

By applying the `image` class to an `<img>` tag, the element will scale to 100% the width of it's container. By omitting width and height information on the image the aspect ratio will be preserved and the client will handle image scaling.

<div class="example">
<img class="image" src="//placehold.it/200x200" alt="Example" />
</div>

{% highlight html %}
	<img class="image" src="//placehold.it/200x200" alt="Example" />
{% endhighlight %}