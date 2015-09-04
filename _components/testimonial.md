---
title: "Testimonial"
type: components
scss: itcss/_component.testimonial.scss
usage: "Display user testimonials"
status: development
layout: page
---

Displays a list of customer testimonials via a navigatable carousel. With JavaScript disabled the list of testimonials is displayed together.

<div class="example">
<div class="testimonial">
    <h2 class="testimonial__heading">What our clients say</h2>
    <ul class="testimonial__list ui-list">
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    An efficient and quality service from start to finish,
                    they were diligent throughout the entire project
                </div>
                <footer>
                    <cite class="testimonial__author">Jim Phillips - Site Manager, ACOBA</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    Thank you for making it painless, pleasant and most of all hassle free!
                </div>
                <footer>
                    <cite class="testimonial__author">Patrick Bateman - Partner, Pierce&amp;Pierce</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    You won't regret it. Definitely worth the investment. You guys rock! Barnsley HR services is the real deal!
                </div>
                <footer>
                    <cite class="testimonial__author">Halimeda F - Managing Director, LAEMX</cite>
                </footer>
            </blockquote>
        </li>
    </ul>
</div>
</div>

{% highlight html %}
<div class="testimonial">
    <h2 class="testimonial__heading">What our clients say</h2>
    <ul class="testimonial__list ui-list">
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    An efficient and quality service from start to finish,
                    they were diligent throughout the entire project
                </div>
                <footer>
                    <cite class="testimonial__author">Jim Phillips - Site Manager, ACOBA</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    Thank you for making it painless, pleasant and most of all hassle free!
                </div>
                <footer>
                    <cite class="testimonial__author">Patrick Bateman - Partner, Pierce&amp;Pierce</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    You won't regret it. Definitely worth the investment. You guys rock! Barnsley HR services is the real deal!
                </div>
                <footer>
                    <cite class="testimonial__author">Halimeda F - Managing Director, LAEMX</cite>
                </footer>
            </blockquote>
        </li>
    </ul>
</div>
{% endhighlight %}

## Coloured variant

Add the class `testimonial--coloured` to the `testimonial` element.

<div class="example">
<div class="testimonial testimonial--coloured">
    <h2 class="testimonial__heading">What our clients say</h2>
    <ul class="testimonial__list ui-list">
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    An efficient and quality service from start to finish,
                    they were diligent throughout the entire project
                </div>
                <footer>
                    <cite class="testimonial__author">Jim Phillips - Site Manager, ACOBA</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    Thank you for making it painless, pleasant and most of all hassle free!
                </div>
                <footer>
                    <cite class="testimonial__author">Patrick Bateman - Partner, Pierce&amp;Pierce</cite>
                </footer>
            </blockquote>
        </li>
        <li class="testimonial__item">
            <blockquote class="testimonial__quote">
                <div class="testimonial__text">
                    You won't regret it. Definitely worth the investment. You guys rock! Barnsley HR services is the real deal!
                </div>
                <footer>
                    <cite class="testimonial__author">Halimeda F - Managing Director, LAEMX</cite>
                </footer>
            </blockquote>
        </li>
    </ul>
</div>
</div>