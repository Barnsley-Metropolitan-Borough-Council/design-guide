---
title: "Forms"
type: components
scss: itcss/_component.forms.scss
usage: "Form components"
status: production
layout: page
---

## Guidelines

Accessible, dont require javascript, client and server side validation

## Elements

### Form

#### Standard Form

By default, form labels sit above their associated element this improves form spacing and makes forms more readable.

Where possible forms should only occupy a single column, although there are some cases where users expect to names (first and last name), dates (day, month, year) and time (hour and minute) written on a single line.

We should avoid using asterisks for mandatory fields, and instead use placeholder text denoting the field as optional.

http://www.cxpartners.co.uk/cxblog/web_forms_design_guidelines_an_eyetracking_study/

<div class="example">
<form action="#">
    <h1>Report dog fouling</h1>
    <fieldset>
        <legend>Personal details</legend>
        <div class="form__element form__element--inline">
            <label for="f1">First name</label>
            <input type="text" id="f1" value="" size="15">
        </div>
        <div class="form__element form__element--inline">
            <label for="pw">Last name</label>
            <input type="text" id="pw" value="" size="15">
        </div>        
        <div>
            <label for="pw">Email</label>
            <input type="text" id="pw" value="" size="40" value="danielroddis@barnsley.gov.uk">
        </div>
        <div>
            <label for="pw">Date of Birth</label>
            <input type="text" value="" size="4" placeholder="Day" maxlength="2"/>
            <input type="text" value="" size="4" placeholder="Month" maxlength="2" />
            <input type="text" value="" size="6" placeholder="Year" maxlength="4"/>
            <span class="form__message">for example 24 08 1986</span>
        </div>
        <div>                    
            <input type="button" id="f6" value="Continue" class="button button--default button--primary">
            <input type="button" id="f6" value="Cancel" class="button button--default button--link">
        </div>                        
    </fieldset>
</form>
</div>

{% highlight html %}
<form action="#">
    <h1>Report dog fouling</h1>
    <fieldset>
        <legend>Personal details</legend>
        <div class="form__element form__element--inline">
            <label for="f1">First name</label>
            <input type="text" id="f1" value="" size="15">
        </div>
        <div class="form__element form__element--inline">
            <label for="pw">Last name</label>
            <input type="text" id="pw" value="" size="15">
        </div>        
        <div>
            <label for="pw">Email</label>
            <input type="text" id="pw" value="" size="40" value="danielroddis@barnsley.gov.uk">
        </div>
        <div>
            <label for="pw">Date of Birth</label>
            <input type="text" value="" size="4" placeholder="Day" maxlength="2"/>
            <input type="text" value="" size="4" placeholder="Month" maxlength="2" />
            <input type="text" value="" size="6" placeholder="Year" maxlength="4"/>
            <span class="form__message">for example 24 08 1986</span>
        </div>
        <div>                    
            <input type="button" id="f6" value="Continue" class="button button--default button--primary">
            <input type="button" id="f6" value="Cancel" class="button button--default button--link">
        </div>                        
    </fieldset>
</form>
{% endhighlight %}

#### Inline Form

Recommended for forms with a small number of fields, such as login forms. You can convert a form to inline by adding the class `form--inline` to the `form` element.

<div class="example">
<form class="form--inline">
    <div>
        <label for="firstname">First Name</label><input type="text" size="20" id="firstname">
    </div>
    <div>
        <label for="lastname">Last Name</label><input type="text" size="20" id="lastname">
    </div>
    <div class="form__actions">
        <label></label><input type="submit" value="Register" class="button button--default button--primary" />
    </div>
</form>
</div>

{% highlight html %}
<form class="form--inline">
    <div>
        <label for="firstname"><input type="text" size="20" id="firstname">
    </div>
    <div>
        <label for="lastname"><input type="text" size="20" id="lastname">
    </div>
    <div class="form__actions">
        <input type="submit" value="Register" type="button button--default button--primary" />
    </div>
</form>
{% endhighlight %}

### Fieldset

If you use a fieldset please title the grouping with an appropriately named `legend` element. 

<div class="example">
<fieldset>
    <legend>About you</legend>
    <!-- Form fields -->
</fieldset>
</div>

{% highlight html %}
<fieldset>
    <legend>About you</legend>
    <!-- Form fields -->
</fieldset>
{% endhighlight %}    

### Label

Make sure form elements have a simple, straightforward label. 

<div class="example">
<label for="name">Name</label><input type="text" id="name" name="name" />
</div>

{% highlight html %}
<label for="name"></label><input type="text" id="name" name="name" />
{% endhighlight %}

### Input

Use the correct HTML5 input type where possible. Make use of HTML5 validation attributes in addition to server side validation.

<div class="example">
<label for="email">Email</label><input type="email" required="required" id="email" name="email" />
</div>

{% highlight html %}
<label for="email">Email</label><input type="email" required="required" id="email" name="email" />
{% endhighlight %}

### Textarea

Textarea resize is locked by the stylesheet, make sure you appropriately size the textarea based on the intended content. 

Textareas should not be wider than 80 characters long

<div class="example">
<div>
    <label for="textarea_demo">Sample Textarea</label>
    <textarea id="textarea_demo" rows="3" cols="80" name="textarea" ></textarea>
</div>
</div>

{% highlight html %}
<div>
<label for="textarea_demo">Sample Textarea</label>
    <textarea id="textarea_demo" rows="3" cols="80" name="textarea" ></textarea>
</div>
{% endhighlight %}

### Select

Make sure select inputs are labelled, the default entry should not be a selection queue eg 'Please select'

<div class="example">
<div>
    <label for="select_demo">Select field:</label>
    <select id="select_demo">
        <option>Option 01</option>
        <option>Option 02</option>
    </select>
</div>
</div>

{% highlight html %}
<div>
    <label for="select_demo">Select field:</label>
    <select id="select_demo">
        <option>Option 01</option>
        <option>Option 02</option>
    </select>
</div>
{% endhighlight %}

### Checkbox

#### Standard checkbox

Make sure checkboxes are wrapped in their label to create a larger clickable area. It's usually preferable to position label text to the right.

This checkbox is ideal for toggling a user preference, for example opting in to mailing list or agreeing to terms and conditions.

<div class="example">
<label><input type="checkbox" /> Yes - I'll use checkboxes properly</label>
</div>

{% highlight html %}
<label><input type="checkbox" /> Yes - I'll use checkboxes properly</label>
{% endhighlight %}

#### Touch checkbox

Touch checkboxes are formatted differently to create a larger clickable area, this method is generally preferable to standard checkboxes when selecting multiple choices e.g. Contact Preferences (such as Phone / Email / Letter)

For these to work the `input` element must be directly before to the `label` element in the HTML structure.

<div class="example">
<div>
    <label>What's your contact preference?</label>
    <div class="form__group--touch">
        <input type="checkbox" id="test1" class="checkbox__input--touch">
        <label for="test1" class="checkbox__label--touch">Email</label>

        <input type="checkbox" id="test2" class="checkbox__input--touch">
        <label for="test2" class="checkbox__label--touch">Phone</label>

        <input type="checkbox" id="test3" class="checkbox__input--touch">
        <label for="test3" class="checkbox__label--touch">Letter</label>
    </div>
</div>
</div>

{% highlight html %}
<div>
    <label>What's your contact preference?</label>
    <div class="form__group--touch">
        <input type="checkbox" id="test1" class="checkbox__input--touch">
        <label for="test1" class="checkbox__label--touch">Email</label>

        <input type="checkbox" id="test2" class="checkbox__input--touch">
        <label for="test2" class="checkbox__label--touch">Phone</label>

        <input type="checkbox" id="test3" class="checkbox__input--touch">
        <label for="test3" class="checkbox__label--touch">Letter</label>
    </div>
</div>                        
{% endhighlight %}

### Radio

Used whenever you want to provide short list of options with a single preference.

#### Standard radio buttons

<div class="example">
<div>
    <label>What's your gender?</label>
        <div>
            <label for="testa">
                <input type="radio" name="whosaw" id="testa">
                Male
            </label>
            <label for="testb">
                <input type="radio" name="whosaw" id="testb">
                Female
            </label>
        </div>
</div>
</div>

{% highlight html %}
<div>
    <label>What's your gender?</label>
        <div>
            <label for="testa">
                <input type="radio" name="whosaw" id="testa">
                Male
            </label>
            <label for="testb">
                <input type="radio" name="whosaw" id="testb">
                Female
            </label>
        </div>
</div>
{% endhighlight %}


#### Touch radio buttons

<div class="example">
<div>
    <label>What's your gender?</label>
        <div class="form__group--touch">
            <input type="radio" name="whosaw" id="testa2" class="checkbox__input--touch">
            <label for="testa2" class="checkbox__label--touch">Male</label>
            <input type="radio" name="whosaw" id="testb2" class="checkbox__input--touch">
            <label for="testb2" class="checkbox__label--touch">Female</label>   
        </div>
</div>
</div>

{% highlight html %}
<div>
    <label>What's your gender?</label>
        <div class="form__group--touch">
            <input type="radio" name="gender" id="testa2" value="Male" class="checkbox__input--touch">
            <label for="testa2" class="checkbox__label--touch">Male</label>
            <input type="radio" name="gender" id="testb2" value="Female" class="checkbox__input--touch">
            <label for="testb2" class="checkbox__label--touch">Female</label>   
        </div>
</div>
{% endhighlight %}

### Help text

If you need to provide additional context or guidance for a form control you can use a form message control.

<div class="example">
<div>
    <label>Date of Birth</label>
    <input type="text" value="" size="4" placeholder="Day" maxlength="2"/>
    <input type="text" value="" size="4" placeholder="Month" maxlength="2" />
    <input type="text" value="" size="6" placeholder="Year" maxlength="4"/>
    <span class="form__message">eg. 24/08/1986</span>
</div>
</div>

{% highlight html %}
<div>
    <label>Date of Birth</label>
    <input type="text" value="" size="4" placeholder="Day" maxlength="2"/>
    <input type="text" value="" size="4" placeholder="Month" maxlength="2" />
    <input type="text" value="" size="6" placeholder="Year" maxlength="4"/>
    <span class="form__message">eg. 24/08/1986</span>
</div>
{% endhighlight %}