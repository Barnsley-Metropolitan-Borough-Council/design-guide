---
title: "Message"
type: components
scss: itcss/_component.message.scss
usage: "On screen message component"
status: production
layout: page
---

Messages were developed with urgent alerts in mind, for example a situation the public need to be aware of on the corporate website.

## Alert message

<div class="example">
<section class="message message--alert">
    <header>
	    <h1>Important</h1>
    </header>
    <nav class="nav message__nav">
        <ul>
    	    <li>
                <a class="message__link" href="/" role="alert">
                    Important situation you need to know about!
        	    </a>
            </li>
	    </ul>
    </nav>
</section>
</div>

{% highlight html %}
<section class="message message--alert">
    <header>
        <h1>Important</h1>
    </header>
    <nav class="nav message__nav">
        <ul>
            <li>
                <a class="message__link" href="/" role="alert">
                    Dangerous situation you need to know about!
                </a>
            </li>
        </ul>
    </nav>
</section>
{% endhighlight %}


## Information message

**This component is still in development and not approved for use**

<div class="example">
    <div class="message message--info">
        <strong>Remember!</strong> Don't share any personal information on this form
    </div>
</div>

{% highlight html %}
<div class="message message--info">
    <strong>Remember!</strong> Don't share any personal information on this form
</div>
{% endhighlight %}


## Warning message

**This component is still in development and not approved for use**

<div class="example">
    <div class="message message--warn">
        <strong>Important!</strong> Dial 999 for emergencies
    </div>
</div>

{% highlight html %}
<div class="message message--warn">
    <strong>Important!</strong> Dial 999 for emergencies
</div>
{% endhighlight %}

## Error message

**This component is still in development and not approved for use**

<div class="example">
    <div class="message message--error">
        <strong>Oops!</strong> We had a problem collecting your payment, please try again
    </div>
</div>

{% highlight html %}
<div class="message message--error">
    <strong>Oops!</strong> We had a problem collecting your payment, please try again
</div>
{% endhighlight %}

## Success message

**This component is still in development and not approved for use**

<div class="example">
    <div class="message message--success">
        <strong>All done!</strong> We've received your council tax payment
    </div>
</div>

{% highlight html %}
<div class="message message--success">
    <strong>All done!</strong> We've received your council tax payment
</div>
{% endhighlight %}