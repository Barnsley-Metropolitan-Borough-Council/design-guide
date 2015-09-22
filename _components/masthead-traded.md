---
title: "Masthead (Traded)"
type: components
scss: itcss/_component.masthead-traded.scss
usage: "Masthead component for traded services"
status: production
layout: page
---

The masthead is the common header bar amongst all Barnsley Council skinned applications, there are several variants of the masthead depending on the application type.

## Traded landing page

<div class="example">
<header class="masthead--traded container container--float">
    <div class="logo masthead__logo">
        <h1 class="logo__heading logo__heading--inverted">
            <a class="logo__link">
                Barnsley Council 
            </a>           
        </h1>
    </div>   
    <div class="masthead__info">
        <div class="masthead__contact">
            (01226) 774 492
        </div>
        <nav class="nav nav--divided">
            <ul class="ui-list">
                <li><a href="#">Home</a></li><!--
                --><li><a href="#">About us</a></li><!--
                --><li><a href="#">Products and services</a></li><!--
                --><li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </div>
</header>
</div>

{% highlight html %}
<header class="masthead--traded container container--float">
    <div class="logo masthead__logo">
        <h1 class="logo__heading logo__heading--inverted">
            <a class="logo__link">
                Barnsley Council 
            </a>           
        </h1>
    </div>   
    <div class="masthead__info">
        <div class="masthead__contact">
            (01226) 774 492
        </div>
        <nav class="nav nav--divided">
            <ul class="ui-list">
                <li><a class="masthead__nav__link" href="#">Home</a></li><!--
                --><li><a class="masthead__nav__link" href="#">About us</a></li><!--
                --><li><a class="masthead__nav__link" href="#">Products and services</a></li><!--
                --><li><a class="masthead__nav__link" href="#">Contact us</a></li>
            </ul>
        </nav>
    </div>
</header>
{% endhighlight %}

## Traded with subheader

<div class="example">
<header class="masthead--traded container container--float">
    <div class="logo masthead__logo">
        <h1 class="logo__heading logo__heading--traded logo__heading--inverted">
            <a class="logo__link">
                Barnsley Council 
            </a>            
        </h1>
        <h2 class="logo__subheading">Pest Control Services</h2>                
    </div>   
    <div class="masthead__info masthead__info--traded">
        <div class="masthead__contact">
            (01226) 774 492
        </div>
        <nav class="nav nav--divided">
            <ul class="ui-list">
                <li><a href="#">Home</a></li><!--
                --><li><a href="#">About us</a></li><!--
                --><li><a href="#">Products and services</a></li><!--
                --><li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </div>
</header>
</div>

{% highlight html %}
<header class="masthead--traded container container--float">
    <div class="logo masthead__logo">
        <h1 class="logo__heading logo__heading--traded logo__heading--inverted">
            <a class="logo__link">
                Barnsley Council 
            </a>            
        </h1>
        <h2 class="logo__subheading">Pest Control Services</h2>                
    </div>   
    <div class="masthead__info masthead__info--traded">
        <div class="masthead__contact">
            (01226) 774 492
        </div>
        <nav class="nav nav--divided">
            <ul class="ui-list">
                <li><a href="#">Home</a></li><!--
                --><li><a href="#">About us</a></li><!--
                --><li><a href="#">Products and services</a></li><!--
                --><li><a href="#">Contact us</a></li>
            </ul>
        </nav>
    </div>
</header>
{% endhighlight %}
