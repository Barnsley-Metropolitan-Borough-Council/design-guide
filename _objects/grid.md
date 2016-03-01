---
title: "Grid"
type: objects
scss: itcss/_objects.grid.scss
usage: "Grid object"
status: development
layout: page
---

Grid object which is intended for use with the Umbraco grid editor. You should avoid using grids when you can achieve the same effect with alternate objects / components.

The grid is based on a 12 column framework without gutters or row margins.

The grid is responsive and stacks on mobile displays.

<div class="example">
<style type="text/css">
    .grid__row {
        margin-bottom: 1em;
    }
    .grid__column {
        border: 1px solid #ccc;
        padding: 1em;        
    }
</style>
<div class="grid">
    <div class="grid__section">
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--8">
                grid__column--8
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                grid__column--6
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div>
        </div>
    </div>
</div>
</div>

{% highlight html %}
<div class="grid">
    <div class="grid__section">
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--8">
                grid__column--8
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                grid__column--6
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

## Nested grids

You are able to nest grids within grids.

<div class="example">
<div class="grid">
    <div class="grid__section">        
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                <div class="grid__column grid__column--6">
                    grid__column--6
                </div><!--
             --><div class="grid__column grid__column--6">
                    grid__column--6
                </div>
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
    </div>
</div>
</div>

{% highlight html %}
<div class="grid">
    <div class="grid__section">        
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                <div class="grid__column grid__column--6">
                    grid__column--6
                </div><!--
             --><div class="grid__column grid__column--6">
                    grid__column--6
                </div>
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
    </div>
</div>
{% endhighlight %}

## Filled grids

If you want the grid cells to fill the maximum vertical height of their cells assign the `grid--fill` class to the grid element.

<div class="example">
<div class="grid grid--fill">
    <div class="grid__section">        
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                <div class="grid__row">
                    <div class="grid__column grid__column--6">
                        grid__column--6
                    </div><!--
                --><div class="grid__column grid__column--6">
                        grid__column--6
                    </div>
                </div>
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
    </div>
</div>
</div>

## Grid with gutters

Add the modifier class `grid--gutters` onto the grid to add responsive gutters between columns.

<div class="example">
<div class="grid grid--gutters">
    <div class="grid__section">
        <div class="grid__row">
            <div class="grid__column grid__column--12">
                grid__column--12
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--8">
                grid__column--8
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div><!--
         --><div class="grid__column grid__column--4">
                grid__column--4
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--6">
                grid__column--6
            </div><!--
         --><div class="grid__column grid__column--6">
                grid__column--6
            </div>
        </div>
        <div class="grid__row">
            <div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div><!--
         --><div class="grid__column grid__column--3">
                grid__column--3
            </div>
        </div>
    </div>
</div>
</div>