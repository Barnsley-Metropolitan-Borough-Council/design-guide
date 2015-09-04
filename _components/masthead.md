---
title: "Masthead"
type: components
scss: itcss/_component.masthead.scss
usage: "Masthead component"
status: production
layout: page
---

The masthead is the common header bar amongst all Barnsley Council skinned applications, there are several variants of the masthead depending on the application type.

## Corporate masthead

<div class="example">
<header role="banner">
    <div class="container container--screen">
        <div class="masthead">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link" href="/">
                        Barnsley Council
                    </a>
                <img class="logo__print" alt="Barnsley Council" src="/Images/bmbc-print.png">
                </h1>
            </div>
            <p class="masthead__strapline">Working together for a brighter future, a better Barnsley</p>
            <!-- Alerts Component -->
            <div class="masthead__button alerts">
                <a href="/alerts" class="alerts__link ">Alerts</a>
                <div class="alerts__container">
                    <h2 class="alerts__heading">Important</h2>
                    <nav class="alerts__menu">
                        <ul class="alerts__list ui-list">                    
                            <li class="alerts__item">
                                <a href="/alerts/temporary-road-closures-on-11-july-for-mayors-parade/" class="alerts__item__link">Temporary road closures on 11 July for Mayor's Parade</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" class="alerts__close">CLOSE X</a>
                </div>       
            </div>
            <!-- Masthead Navigation -->
            <nav class="masthead__nav">
                <a href="/search" class="masthead__nav__button showMenu" data-menu-content=".masthead__nav__container">Menu</a>
                <div class="masthead__nav__container">
                    <ul class="ui-list">
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="#start" accesskey="S">Skip to content</a></li>
                        <li class="masthead__nav__item md-hidden"><a class="masthead__nav__link" href="/search">Search</a></li>
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="/atoz">A to Z</a></li>
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="/accessibility">Accessibility</a></li>
                    </ul>
                </div>
            </nav>       
            <!-- Masthead Search -->     
            <div class="masthead__search">
                <div class="container container--page">                
                    <div>
                        <form action="/search" method="get" role="search">
                            <h1 class="search__heading">Search for...</h1>
                            <label class="ui-search__label search__label" for="search">Search</label>
                            <input class="ui-search__field search__field" type="search" name="search" id="search" placeholder="Search (e.g. Council Tax)" accesskey="4"><!--
                         --><button class="button button--primary button--search search__button" type="submit">Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container container--print container--float">
        <div class="logo masthead__logo">
            <h1 class="logo__heading">
                <a class="logo__link" href="/">
                    Barnsley Council
                </a>
                <img class="logo__print" alt="Barnsley Council" src="/Images/bmbc-print.png">
            </h1>
        </div>
        <!-- QR Code containing page URL -->
        <div class="masthead__qr-code">
            <div class="qr-code">
                <img class="qr-code__image" alt="http://localhost:50973/" src="http://localhost:50973/.qr">
            </div>
        </div>
    </div>
</header>
</div>

{% highlight html %}
<header role="banner">
    <div class="container container--screen">
        <div class="masthead">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link" href="/">
                        Barnsley Council
                    </a>
                <img class="logo__print" alt="Barnsley Council" src="/Images/bmbc-print.png">
                </h1>
            </div>
            <p class="masthead__strapline">Working together for a brighter future, a better Barnsley</p>
            <!-- Alerts Component -->
            <div class="masthead__button alerts">
                <a href="/alerts" class="alerts__link ">Alerts</a>
                <div class="alerts__container">
                    <h2 class="alerts__heading">Important</h2>
                    <nav class="alerts__menu">
                        <ul class="alerts__list ui-list">                    
                            <li class="alerts__item">
                                <a href="/alerts/temporary-road-closures-on-11-july-for-mayors-parade/" class="alerts__item__link">Temporary road closures on 11 July for Mayor's Parade</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" class="alerts__close">CLOSE X</a>
                </div>       
            </div>
            <!-- Masthead Navigation -->
            <nav class="masthead__nav">
                <a href="/search" class="masthead__nav__button showMenu" data-menu-content=".masthead__nav__container">Menu</a>
                <div class="masthead__nav__container">
                    <ul class="ui-list">
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="#start" accesskey="S">Skip to content</a></li>
                        <li class="masthead__nav__item md-hidden"><a class="masthead__nav__link" href="/search">Search</a></li>
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="/atoz">A to Z</a></li>
                        <li class="masthead__nav__item"><a class="masthead__nav__link" href="/accessibility">Accessibility</a></li>
                    </ul>
                </div>
            </nav>       
            <!-- Masthead Search -->     
            <div class="masthead__search">
                <div class="container container--page">                
                    <div>
                        <form action="/search" method="get" role="search">
                            <h1 class="search__heading">Search for...</h1>
                            <label class="ui-search__label search__label" for="search">Search</label>
                            <input class="ui-search__field search__field" type="search" name="search" id="search" placeholder="Search (e.g. Council Tax)" accesskey="4"><!--
                         --><button class="button button--primary button--search search__button" type="submit">Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container container--print container--float">
        <div class="logo masthead__logo">
            <h1 class="logo__heading">
                <a class="logo__link" href="/">
                    Barnsley Council
                </a>
                <img class="logo__print" alt="Barnsley Council" src="/Images/bmbc-print.png">
            </h1>
        </div>
        <!-- QR Code containing page URL -->
        <div class="masthead__qr-code">
            <div class="qr-code">
                <img class="qr-code__image" alt="http://localhost:50973/" src="http://localhost:50973/.qr">
            </div>
        </div>
    </div>
</header>
{% endhighlight %}

## Transactional masthead

A slim, link-free header for use on transactional applications.

<div class="example">
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>                
                </h1>
            </div>            
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div>
    </div>        
</header>
</div>

{% highlight html %}
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>                
                </h1>
            </div>            
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div>
    </div>        
</header>
{% endhighlight %}

## Competitive

<div class="example">
<header role="banner">
    <div class="container container--screen">
        <div class="masthead masthead--competitive container--float">
            <div class="logo masthead__logo masthead__logo--competitive">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council Traded Services
                    </a>
                </h1>
            </div>
            <p class="masthead__strapline">
                Call us today on <em>01226 000 000</em>
            </p>
        </div>
    </div>
</header>
</div>

## Traded Service

<div class="example">
<header role="banner">
    <div class="container container--screen">
        <div class="masthead masthead--traded container--float">
            <div class="logo masthead__logo masthead__logo--traded">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council Traded Services
                    </a>
                </h1>
            </div>
            <p class="masthead__strapline">
                Call us today on <em>01226 000 000</em>
            </p>
        </div>
    </div>
</header>
</div>