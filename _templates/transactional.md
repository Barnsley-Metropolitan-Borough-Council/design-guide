---
title: "Transactional"
type: templates
usage: "Transactional templates used for applications"
status: alpha
layout: page
---

The transactional template is a minimal, tunnelled template aimed at guiding the customer through a specific transaction.

## Wireframe

![Transactional wireframe](/assets/wireframes/transactional_template.png)

## Example

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

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Tell us about a problem with our website</h1>
                    </div>                
                </header>
            </div>
        </article>
    </div>
</div>
</div>

{% highlight html %}
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

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Tell us about a problem with our website</h1>
                    </div>                
                </header>
            </div>
        </article>
    </div>
</div>
{% endhighlight %}

## Customer Journey

Transactional applications should be launched in the same window. They will be consistently branded but lightweight (i.e. tunnelled, no superflous links). There will be no cancel button.

When the transaction is submitted, the customer will be taken to a "thank you" page. There will be only one of these for the entire website that will display parameterised values for reference number, SLA and a description of the service the they applied for. We'll apply goal tracking to this page.

That page will then direct them on as follows, in order of preference:

 1. the referring page the customer came from
 2.  the most relevant page on site which may or may not be where they came from
 3. the homepage as a worst case scenario