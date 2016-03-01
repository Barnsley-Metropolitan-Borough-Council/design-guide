---
title: "Table"
type: components
scss: itcss/_component.table.scss
js: app/responsive-tables.js
usage: "Responsive table component"
status: production
layout: page
---

Table classes for responsive, collapsable tables. 

<div class="message message--warn">
    <strong>Warning</strong> the Javascript will populate the data-heading attributes automatically. But whenever possible you should populate this attribute on the server side.
</div>

<div class="example">
<table border="0" class="table table--responsive">
    <thead>
    <tr>
        <td>&nbsp;</td>
        <td>Windows</td>
        <td>Linux</td>
        <td>Mac</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th data-heading=""><div>Internet Explorer</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>N/A</div></td>
        <td data-heading="Mac"><div>N/A</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Chrome</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>ALT</div></td>
        <td data-heading="Mac"><div>CTRL + OPT</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Firefox</div></th>
        <td data-heading="Windows"><div>ALT + SHIFT</div></td>
        <td data-heading="Linux"><div>ALT + SHIFT</div></td>
        <td data-heading="Mac"><div>CTRL&nbsp;</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Safari</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>ALT</div></td>
        <td data-heading="Mac"><div>CTRL</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Opera</div></th>
        <td data-heading="Windows"><div>SHIFT + ESC</div></td>
        <td data-heading="Linux"><div>SHIFT + ESC</div></td>
        <td data-heading="Mac"><div>CTRL</div></td>
    </tr>
    </tbody>
</table>
</div>

{% highlight html %}
<table border="0" class="table table--responsive">
    <thead>
        <tr>
            <td>&nbsp;</td>
            <td>Windows</td>
            <td>Linux</td>
            <td>Mac</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-heading=""><div>Internet Explorer</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>N/A</div></td>
            <td data-heading="Mac"><div>N/A</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Chrome</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>ALT</div></td>
            <td data-heading="Mac"><div>CTRL + OPT</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Firefox</div></th>
            <td data-heading="Windows"><div>ALT + SHIFT</div></td>
            <td data-heading="Linux"><div>ALT + SHIFT</div></td>
            <td data-heading="Mac"><div>CTRL&nbsp;</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Safari</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>ALT</div></td>
            <td data-heading="Mac"><div>CTRL</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Opera</div></th>
            <td data-heading="Windows"><div>SHIFT + ESC</div></td>
            <td data-heading="Linux"><div>SHIFT + ESC</div></td>
            <td data-heading="Mac"><div>CTRL</div></td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

## Application Tables

Tables for use in applications displaying tabular data rather.

<div class="example">
<table border="0" class="table table--application">
    <thead>
    <tr>
        <td>&nbsp;</td>
        <td>Windows</td>
        <td>Linux</td>
        <td>Mac</td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th data-heading=""><div>Internet Explorer</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>N/A</div></td>
        <td data-heading="Mac"><div>N/A</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Chrome</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>ALT</div></td>
        <td data-heading="Mac"><div>CTRL + OPT</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Firefox</div></th>
        <td data-heading="Windows"><div>ALT + SHIFT</div></td>
        <td data-heading="Linux"><div>ALT + SHIFT</div></td>
        <td data-heading="Mac"><div>CTRL&nbsp;</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Safari</div></th>
        <td data-heading="Windows"><div>ALT</div></td>
        <td data-heading="Linux"><div>ALT</div></td>
        <td data-heading="Mac"><div>CTRL</div></td>
    </tr>
    <tr>
        <th data-heading=""><div>Opera</div></th>
        <td data-heading="Windows"><div>SHIFT + ESC</div></td>
        <td data-heading="Linux"><div>SHIFT + ESC</div></td>
        <td data-heading="Mac"><div>CTRL</div></td>
    </tr>
    </tbody>
</table>
</div>

{% highlight html %}
<table border="0" class="table table--application">
    <thead>
        <tr>
            <td>&nbsp;</td>
            <td>Windows</td>
            <td>Linux</td>
            <td>Mac</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-heading=""><div>Internet Explorer</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>N/A</div></td>
            <td data-heading="Mac"><div>N/A</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Chrome</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>ALT</div></td>
            <td data-heading="Mac"><div>CTRL + OPT</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Firefox</div></th>
            <td data-heading="Windows"><div>ALT + SHIFT</div></td>
            <td data-heading="Linux"><div>ALT + SHIFT</div></td>
            <td data-heading="Mac"><div>CTRL&nbsp;</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Safari</div></th>
            <td data-heading="Windows"><div>ALT</div></td>
            <td data-heading="Linux"><div>ALT</div></td>
            <td data-heading="Mac"><div>CTRL</div></td>
        </tr>
        <tr>
            <th data-heading=""><div>Opera</div></th>
            <td data-heading="Windows"><div>SHIFT + ESC</div></td>
            <td data-heading="Linux"><div>SHIFT + ESC</div></td>
            <td data-heading="Mac"><div>CTRL</div></td>
        </tr>
    </tbody>
</table>
{% endhighlight %}