---
title: "Panel"
type: components
scss: itcss/_component.panel.scss
usage: "Seperate content into different regions on screen"
status: production
layout: page
---

Panel class 

<div class="example">
<div class="panel">
    <h1 class="panel__heading">Panel Heading</h1>
    <p>Panel content - this could be anything</p>    
</div>
</div>

{% highlight html %}
<div class="example">
<div class="panel">
    <h1 class="panel__heading">Panel Heading</h1>
    <p>Panel content - this could be anything</p>    
</div>
</div>
{% endhighlight %}

## Panel sets using grids

Within applications it may be useful to utilize panels within grids to clearly seperate regions.

<div class="example">
    <div class="panels">
        <div class="grid grid--gutters">
            <div class="grid__section">
                <div class="grid__row">
                    <div class="grid__column grid__column--8">
                        <div class="panel">
                            <h1 class="panel__heading">Panel Heading</h1>
                            <p>Panel content - this could be anything</p>    
                        </div>
                    </div>
                    <div class="grid__column grid__column--4">
                        <div class="panel">
                            <h1 class="panel__heading">Panel Heading</h1>
                            <p>Panel content - this could be anything</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{% highlight html %}
<div class="example">
    <div class="panels">
        <div class="grid grid--gutters">
            <div class="grid__section">
                <div class="grid__row">
                    <div class="grid__column grid__column--8">
                        <div class="panel">
                            <h1 class="panel__heading">Panel Heading</h1>
                            <p>Panel content - this could be anything</p>    
                        </div>
                    </div>
                    <div class="grid__column grid__column--4">
                        <div class="panel">
                            <h1 class="panel__heading">Panel Heading</h1>
                            <p>Panel content - this could be anything</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}