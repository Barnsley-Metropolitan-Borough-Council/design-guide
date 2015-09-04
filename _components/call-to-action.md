---
title: "Call to action"
type: components
scss: itcss/_component.call-to-action.scss
usage: "Prominent call for user to take action"
status: development
layout: page
---

<div class="example">
<div class="call-to-action">
    <header class="call-to-action__header">
        <h1 class="call-to-action__heading">Get in touch</h1>
    </header>
    <div class="call-to-action__content">
        <img class="call-to-action__icon" src="//placehold.it/150x150"/>
        <p class="call-to-action__text">
            <em class="call-to-action__primary">(01226) 774492</em>
            Call us today for FREE help and advice on the next stages 
            of HR Support
        </p>
    </div>
    <footer class="call-to-action__footer">        
        <a class="call-to-action__secondary">
            <img class="call-to-action__icon call-to-action__icon--secondary" src="//placehold.it/32x32" />
            enquiries@barnsleyhrservices.co.uk
        </a>
    </footer>
</div>
</div>

{% highlight html %}
<div class="call-to-action">
    <header class="call-to-action__header">
        <h1 class="call-to-action__heading">Get in touch</h1>
    </header>
    <div class="call-to-action__content">
        <img class="call-to-action__icon" src="//placehold.it/150x150"/>
        <p class="call-to-action__text">
            <em class="call-to-action__primary">(01226) 774492</em>
            Call us today for FREE help and advice on the next stages 
            of HR Support
        </p>
    </div>
    <footer class="call-to-action__footer">        
        <a class="call-to-action__secondary">
            <img class="call-to-action__icon call-to-action__icon--secondary" src="//placehold.it/32x32" />
            enquiries@barnsleyhrservices.co.uk
        </a>
    </footer>
</div>
{% endhighlight %}

## Customisation

If desired you can omit the header/footer elements from the call to action:

<div class="example">
<div class="call-to-action">
    <div class="call-to-action__content">
        <img class="call-to-action__icon" src="//placehold.it/150x150"/>
        <p class="call-to-action__text">
            <em class="call-to-action__primary">(01226) 774492</em>
            Call us today for FREE help and advice on the next stages 
            of HR Support
        </p>
    </div>
</div>
</div>

{% highlight html %}
<div class="call-to-action">
    <div class="call-to-action__content">
        <img class="call-to-action__icon" src="//placehold.it/150x150"/>
        <p class="call-to-action__text">
            <em class="call-to-action__primary">(01226) 774492</em>
            Call us today for FREE help and advice on the next stages 
            of HR Support
        </p>
    </div>
</div>
{% endhighlight %}