---
title: "Service list"
type: components
scss: itcss/_component.service-list.scss
usage: "Service listing display component"
status: development
layout: page
---

<div class="example">
    <div class="service-list">
        <h1 class="service-list__heading">Find your service</h1>
        <ul class="service-list__list ui-list">
            <li class="service-list__item">
                <a class="service-list__link" href="#">Building control</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Building maintainance</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Cleaning</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Community involvement</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Disability access</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Dog wardens</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Equality and inclusion</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Green space solutions</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Health and safety</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Infrastructure</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Marketing and comms</a>
            </li>
            <li class="service-list__item">
                <a class="service-list__link" href="#">Parking solutions</a>
            </li>
        </ul>
    </div>
</div>

{% highlight html %}
<div class="service-list">
    <h1 class="service-list__heading">Find your service</h1>
    <ul class="service-list__list ui-list">
        <li class="service-list__item">
            <a class="service-list__link" href="#">Building control</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Building maintainance</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Cleaning</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Community involvement</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Disability access</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Dog wardens</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Equality and inclusion</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Green space solutions</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Health and safety</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Infrastructure</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Marketing and communications</a>
        </li>
        <li class="service-list__item">
            <a class="service-list__link" href="#">Parking solutions</a>
        </li>
    </ul>
</div>
{% endhighlight %}

## Service List Content

A service list for holding generic content instead of navigation

<div class="example">
    <div class="service-list">
        <h1 class="service-list__heading">Pests we deal with and what we charge</h1>
        <div class="service-list__content">
            <p>
                <strong>Ants (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Pigeons (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Birds (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Moles (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Silverfish (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Flies (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Rats (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Insects (1 treatment)</strong><br/>
                £50
            </p>
        </div>
    </div>
</div>

{% highlight html %}
<div class="service-list">
    <h1 class="service-list__heading">Pests we deal with and what we charge</h1>
    <div class="service-list__content">
        <p>
            <strong>Ants (1 treatment)</strong><br/>
            £50
        </p>
        <p>
            <strong>Pigeons (3 treatments)</strong><br/>
            £50
        </p>
        <p>
            <strong>Birds (3 treatments)</strong><br/>
            £50
        </p>
        <p>
            <strong>Moles (1 treatment)</strong><br/>
            £50
        </p>
        <p>
            <strong>Silverfish (1 treatment)</strong><br/>
            £50
        </p>
        <p>
            <strong>Flies (1 treatment)</strong><br/>
            £50
        </p>
        <p>
            <strong>Rats (1 treatment)</strong><br/>
            £50
        </p>
        <p>
            <strong>Insects (1 treatment)</strong><br/>
            £50
        </p>
    </div>
</div>
{% endhighlight %}

## Inverted style

Add the class `service-list--inverted` to the `service-list` element.

<div class="example">
    <div class="service-list service-list--inverted">
        <h1 class="service-list__heading">Pests we deal with and what we charge</h1>
        <div class="service-list__content">
            <p>
                <strong>Ants (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Pigeons (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Birds (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Moles (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Silverfish (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Flies (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Rats (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Insects (1 treatment)</strong><br/>
                £50
            </p>
        </div>
    </div>
</div>

## Primary style

Add the class `service-list--primary` to the `service-list` element.

<div class="example">
    <div class="service-list service-list--primary">
        <h1 class="service-list__heading">Pests we deal with and what we charge</h1>
        <div class="service-list__content">
            <p>
                <strong>Ants (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Pigeons (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Birds (3 treatments)</strong><br/>
                £50
            </p>
            <p>
                <strong>Moles (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Silverfish (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Flies (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Rats (1 treatment)</strong><br/>
                £50
            </p>
            <p>
                <strong>Insects (1 treatment)</strong><br/>
                £50
            </p>
        </div>
    </div>
</div>