---
title: "Build process"
type: about
layout: page
---

You should checkout the Barnsley Council SCSS files and create your own _manifest.scss in your project. 

Customising your manifest file allows you to only include the CSS rules for components you intend to use reducing bloat and creating leaner, faster applications.

We use [Require.js](http://requirejs.org/) to handle Javascript loading. This means you don't need to worry about execution order or dependency management. You can also automatically combine and minify only your used dependencies automatically when ready for production to minimize HTTP requests.

## Required tools

- Node.js
- Gulp
    + gulp-sass
    + gulp-minify-css
    + gulp-rename
    + gulp-autoprefixer
    + del
- sass

## Barebones installation

<div class="message message--info">
    <strong>Pro-tip</strong>
    If you're already working with a project with a <strong>package.json</strong> in the root directory you can skip the barebones installation.
</div>

Install [Node.js](https://nodejs.org/). 

Next up we'll install gulp:

{% highlight bash %}
$ npm install gulp -g
{% endhighlight %}

This installs gulp globally so you can access it's CLI from anywhere. You also need to install it locally to the project:

{% highlight bash %}
$ npm install gulp --save-dev
{% endhighlight %}

Following that request the required dependencies using

{% highlight bash %}
$ npm install gulp-sass gul-minify-css gulp-rename gulp-autoprefixer del --save-dev
{% endhighlight %}

Then create a `gulpfile.js` and configure it as needed.

## Download the dependencies

Run `npm install` to download the required dependencies prior to building.

## Build process

Run `gulp build` to compile your Sass to CSS.

Run `node r.js -o build.js` to compile your Javascript dependencies.

These can be defined as pre-build steps in your project.