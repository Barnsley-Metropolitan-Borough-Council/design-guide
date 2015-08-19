---
title: "Typography"
type: foundations
scss: itcss/_settings.global.scss
usage: "Typography and font styles"
status: production
layout: page
---

We use **Open Sans** as the primary typeface for headings and body text with a **sans-serif** fallback for browsers that don't support web fonts.

## Headings

<div class="message message--info">
    <strong>Remember</strong>
    Headings should reflect the document structure and there should only be one first level (top) heading on a page.
</div>

<div class="example">
<h1>First Level Heading</h1>
</div>

{% highlight html %}
<h1>First Level Heading</h1>
{% endhighlight %}

<div class="example">
<h2>Second Level Heading</h2>
</div>

{% highlight html %}
<h2>Second Level Heading</h2>    
{% endhighlight %}

<div class="example">
<h3>Third Level Heading</h3>
</div>

{% highlight html %}
<h3>Third Level Heading</h3>
{% endhighlight %}

<div class="example">
<h4>Fourth Level Heading</h4>
</div>

{% highlight html %}
<h4>Fourth Level Heading</h4>
{% endhighlight %}

<div class="example">
<h5>Fifth Level Heading</h5>
</div>

{% highlight html %}
<h5>Fifth Level Heading</h5>
{% endhighlight %}

## Paragraph

<div class="example">
<p>
    This is an example paragraph which demonstrates our style for <a href="#">links</a>, <strong>strong text</strong> and <em>emphasized text</em>.
</p>
</div>

{% highlight html %}
<p>
    This is an example paragraph which demonstrates our style for <a href="#">links</a>, <strong>strong text</strong> and <em>emphasized text</em>.
</p>
{% endhighlight %}

## Lists

<div class="example">
<ul>
    <li>This is a list item</li>
    <li>So is this - there could be more</li>
    <li>
        Make sure to style list items to:
        <ul>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
        </ul>
    </li>
    <li>A couple more</li>
    <li>top level list items</li>
</ul>
</div>

{% highlight html %}
<ul>
    <li>This is a list item</li>
    <li>So is this - there could be more</li>
    <li>
        Make sure to style list items to:
        <ul>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
            <li>Not forgetting child list items</li>
        </ul>
    </li>
    <li>A couple more</li>
    <li>top level list items</li>
</ul>
{% endhighlight %}

<div class="example">
<ol>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>
        Aliquam tincidunt mauris eu risus.
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
    </li>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
</ol>
</div>

{% highlight html %}
<div class="example">
<ol>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>
        Aliquam tincidunt mauris eu risus.
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
    </li>
    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
    <li>Aliquam tincidunt mauris eu risus.</li>
</ol>
</div>
{% endhighlight %}

## Blockquotes

<div class="example">
<blockquote>
    <p><em>This is a properly formatted blockquote, btw.</em> Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
    <footer>
    — <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
    </footer>
</blockquote>
</div>

{% highlight html %}
<blockquote>
    <p><em>This is a properly formatted blockquote, btw.</em> Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
    <footer>
    — <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
    </footer>
</blockquote>
{% endhighlight %}

## Definition Lists

<dl>
    <dt>Definition list</dt>
    <dd>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </dd>
    <dt>Lorem ipsum dolor sit amet</dt>
    <dd>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </dd>
</dl>

{% highlight html %}
<dl>
    <dt>Definition list</dt>
    <dd>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </dd>
    <dt>Lorem ipsum dolor sit amet</dt>
    <dd>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </dd>
</dl>
{% endhighlight %}

## Preformatted Text

<pre>
<strong>Preformated:</strong>Testing one row
     and another
</pre>

{% highlight html %}
<pre>
    <strong>Preformated:</strong>Testing one row
        and another
</pre>
{% endhighlight %}