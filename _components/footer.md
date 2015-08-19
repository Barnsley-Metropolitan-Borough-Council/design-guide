---
title: "Footer"
type: components
scss: itcss/_component.footer.scss
usage: "Footer for use in Corporate Layout"
status: production
layout: page
---

# Footer

Footer for use in the corporate layout.

<footer>
    <div class="container container--fill">
        <div class="footer">
            <div class="logo masthead__logo">
    			<h1 class="logo__heading">
        			<a class="logo__link" href="/">
            			Barnsley Council
        			</a>       			
    			</h1>
			</div>
            <nav class="footer__menu">
                <ul class="ui-list">
                    <li class="footer__menu__item">
                    	<a class="footer__menu__link" href="#top">#top</a>
                    </li>
                    <li class="footer__menu__item">
                    	<a class="footer__menu__link" href="http://gov.uk" target="_blank">GOV.UK</a>
                    </li>
                    <li class="footer__menu__item">
                    	<a class="footer__menu__link" href="/disclaimer" accesskey="8">Disclaimer</a>
                    </li>                    
				</ul>
            </nav>
            <p role="contentinfo">© 2015 Barnsley Metropolitan Borough Council. All rights reserved</p>
        </div>
    </div>
</footer>

{% highlight html %}
<footer>
    <div class="container container--fill">
        <div class="footer">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link" href="/">
                        Barnsley Council
                    </a>                
                </h1>
            </div>
            <nav class="footer__menu">
                <ul class="ui-list">
                    <li class="footer__menu__item">
                        <a class="footer__menu__link" href="#top">#top</a>
                    </li>
                    <li class="footer__menu__item">
                        <a class="footer__menu__link" href="http://gov.uk" target="_blank">GOV.UK</a>
                    </li>
                    <li class="footer__menu__item">
                        <a class="footer__menu__link" href="/disclaimer" accesskey="8">Disclaimer</a>
                    </li>                    
                </ul>
            </nav>
            <p role="contentinfo">© 2015 Barnsley Metropolitan Borough Council. All rights reserved</p>
        </div>
    </div>
</footer>
{% endhighlight %}