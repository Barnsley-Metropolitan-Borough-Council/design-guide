---
title: "Gallery"
type: components
scss: itcss/_component.gallery.scss
js: app/gallery.js
usage: "Image gallery component"
status: production
layout: page
---

<div class="example">
    <div class="gallery">
        <div class="gallery__active image">
            <a class="gallery__active__link" href="//i.imgur.com/B1MCOtx.jpg"><img class="image gallery__active__image" src="//i.imgur.com/B1MCOtx.jpg" alt="Caption 1" title="Caption 1" /></a>
        </div>
        <div class="gallery__container">
            <nav class="gallery__nav">
                <ul class="gallery__list ui-list container--float">
                    <li class="gallery__item gallery__item--active">
                        <a class="gallery__link gallery__link--active" href="//i.imgur.com/B1MCOtx.jpg" title="Caption 1" style="background-image:url('//i.imgur.com/B1MCOtx.jpg');">Caption 1                           
                        </a>
                    </li><!--
                    --><li class="gallery__item">
                          <a class="gallery__link" title="Caption 2" href="//i.imgur.com/37w80TG.jpg" style="background-image:url('//i.imgur.com/37w80TG.jpg');">Caption 2                                                    
                        </a>
                    </li><!--
                    --><li class="gallery__item">
                        <a class="gallery__link" title="Caption 3" href="//i.imgur.com/tI5jq2c.jpg" style="background-image:url('//i.imgur.com/tI5jq2c.jpg');">Caption 3                                                    
                        </a>
                    </li><!--
                    --><li class="gallery__item">
                        <a class="gallery__link" title="Caption 4" href="//i.imgur.com/37w80TG.jpg" style="background-image:url('//i.imgur.com/37w80TG.jpg');">Caption 4                                                    
                        </a>
                    </li><!--
                    --><li class="gallery__item">
                        <a class="gallery__link" title="Caption 5" href="//i.imgur.com/B1MCOtx.jpg" style="background-image:url('//i.imgur.com/B1MCOtx.jpg');">Caption 5                                                    
                        </a>
                    </li>                                        
                </ul>
            </nav>
        </div>
    </div>
</div>

{% highlight html %}
<div class="gallery">
    <div class="gallery__active image">
        <a class="gallery__active__link" href="//i.imgur.com/B1MCOtx.jpg"><img class="image gallery__active__image" src="//i.imgur.com/B1MCOtx.jpg" alt="Caption text" title="Caption text" /></a>
    </div>
    <div class="gallery__container">
        <nav class="gallery__nav">
            <ul class="gallery__list ui-list container--float">
                <li class="gallery__item gallery__item--active">
                    <a class="gallery__link gallery__link--active" href="//i.imgur.com/B1MCOtx.jpg" style="background-image:url('//i.imgur.com/B1MCOtx.jpg');">Caption text                           
                    </a>
                </li><!--
                --><li class="gallery__item">
                      <a class="gallery__link" href="//i.imgur.com/37w80TG.jpg" style="background-image:url('//i.imgur.com/37w80TG.jpg');">Caption text                                                    
                    </a>
                </li><!--
                --><li class="gallery__item">
                    <a class="gallery__link" href="//i.imgur.com/tI5jq2c.jpg" style="background-image:url('//i.imgur.com/tI5jq2c.jpg');">Caption text                                                    
                    </a>
                </li><!--
                --><li class="gallery__item">
                    <a class="gallery__link" href="//i.imgur.com/37w80TG.jpg" style="background-image:url('//i.imgur.com/37w80TG.jpg');">Caption text                                                    
                    </a>
                </li><!--
                --><li class="gallery__item">
                    <a class="gallery__link" href="//i.imgur.com/B1MCOtx.jpg" style="background-image:url('//i.imgur.com/B1MCOtx.jpg');">Caption text                                                    
                    </a>
                </li>                                        
            </ul>
        </nav>
    </div>
</div>
{% endhighlight %}