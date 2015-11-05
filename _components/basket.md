---
title: "Basket"
type: components
scss: itcss/_component.basket.scss
usage: "Shopping basket"
status: suggestion
layout: page
---

To be developed

<div class="example">
    <div class="basket">
        <div class="basket__content">
            <ul class="basket__items ui-list">
                <li class="basket__item container--float">
                    <div class="basket__item__name basket__item__field">
                        Council Tax
                        <div class="basket__item__description">
                            Ref #469065345
                        </div>
                    </div>
                    <ul class="basket__item__actions basket__item__field ui-list">
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Pay via PingIt
                            </a>
                        </li>
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Pay via Card
                            </a>
                        </li>
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Remove
                            </a>
                        </li>
                    </ul>
                    <div class="basket__item__price basket__item__field">
                        £49.31
                    </div>                    
                </li>
                <li class="basket__item container--float">                    
                    <div class="basket__item__name basket__item__field">
                        Parking Fine
                        <div class="basket__item__description">
                            Ref #34524356
                        </div>
                    </div>
                    <ul class="basket__item__actions basket__item__field ui-list">
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Pay via PingIt
                            </a>
                        </li>
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Pay via Card
                            </a>
                        </li>
                        <li class="basket__item__action">
                            <a href="#" class="basket__item__action__link">
                                Remove
                            </a>
                        </li>                        
                    </ul>
                    <div class="basket__item__price basket__item__field">
                        £22.31
                    </div>
                </li>
            </ul>
        </div>
        <div class="basket__actions">
            <a class="basket__action__link basket__action__primary button button--default button--main button--primary" href="#">
                Checkout £71.62
            </a>
            <a class="basket__action__link basket__action__secondary button button--default" href="#">
                Add another payment
            </a>
            <a class="button button--default button--link" href="#">
                Cancel
            </a>                        
        </div>
    </div>
</div>

{% highlight html %}
<div class="basket">
    <div class="basket__content">
        <ul class="basket__items ui-list">
            <li class="basket__item container--float">
                <div class="basket__item__name basket__item__field">
                    Council Tax
                    <div class="basket__item__description">
                        Ref #469065345
                    </div>
                </div>
                <ul class="basket__item__actions basket__item__field ui-list">
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Pay via PingIt
                        </a>
                    </li>
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Pay via Card
                        </a>
                    </li>
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Remove
                        </a>
                    </li>
                </ul>
                <div class="basket__item__price basket__item__field">
                    £49.31
                </div>                    
            </li>
            <li class="basket__item container--float">                    
                <div class="basket__item__name basket__item__field">
                    Parking Fine
                    <div class="basket__item__description">
                        Ref #34524356
                    </div>
                </div>
                <ul class="basket__item__actions basket__item__field ui-list">
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Pay via PingIt
                        </a>
                    </li>
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Pay via Card
                        </a>
                    </li>
                    <li class="basket__item__action">
                        <a href="#" class="basket__item__action__link">
                            Remove
                        </a>
                    </li>                        
                </ul>
                <div class="basket__item__price basket__item__field">
                    £22.31
                </div>
            </li>
        </ul>
    </div>
    <div class="basket__actions">
        <a class="basket__action__link basket__action__primary button button--default button--main button--primary" href="#">
            Checkout £71.62
        </a>
        <a class="basket__action__link basket__action__secondary button button--default" href="#">
            Add another payment
        </a>
        <a class="button button--default button--link" href="#">
            Cancel
        </a>                        
    </div>
</div>
{% endhighlight %}