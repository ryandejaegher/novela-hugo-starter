---
title: 'Intro To CSS: Beyond Copy/Paste'
excerpt: Get a branded color overlay for your Squarespace video with one CSS class
description: 
hero: 
date: 2020-05-18T04:00:00.000+00:00
authors:
- Ryan Dejaegher
categories:
- squarespace tutorials
tags:
- squarespace
- css
series: 
codeHighlighting: false
showMailingList: false
showDisqus: true
showRelated: false
showTags: false
showCategories: false
robotsdisallow: false
showPrevNext: false

---
## Why Learn CSS? { class="text-2xl mb-6"}

1. Learn once, use anywhere If you understand CSS you won’t be limited to the features and options that are available in the Design/Style Editor with Squarespace. You can more seamlessly move between different tools or platforms. There isn’t such a thing as Squarespace CSS or WordPress CSS, it’s just CSS.
2. Stop being dependent on Copy/Paste code snippets It’s incredibly slow if you have to rely on hoping a code snippet will work When you know CSS you’ll know where to look to start troubleshooting faster
3. Troubleshoot layout and design problems faster When something doesn’t look the way you expect you’ll have a better understanding of why things aren’t working
4. Learn from other websites The great thing about the web is being able to learn from others. If you see a site that has a cool effect or design you can inspect the code to see how they achieved a certain design or result. (Don’t copy)

{{< embed/pen id="rNOoBQx">}}

## What is CSS?

Stands for **Cascading Style Sheets**, the language that controls the style, design, and look for your site. The keyword there is **_Cascading_**. What is the cascade? Styles (rules and declarations) fall down the page like a waterfall.

CSS rules can traverse down or into nested elements. But they can’t **_climb up_**.

“There are no parent selectors in CSS" https://css-tricks.com/parent-selectors-in-css/

This is what can make it difficult to style things in Squarespace which often has a lot of nested elements. With CSS you create **_rules_** to style the various parts of your site

Rules are made up of **_selectors_** and **_declarations_**

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fryandejaegher%2Ftu-Y-ixV6C.png?alt=media&token=1b2212fa-9040-4e89-9664-5d9ba99d2c44) Source: CSS-Tricks (https://css-tricks.com/css-ruleset-terminology/)

Rules are case-sensistive. There’s a difference between `.header` and `.Header`

**Selectors** are how you target elements on the page and there are multple selectors available

**_Element selectors_**

You can target elements just by using the html tag/element name

```css
p {
    font-size: 20px;
}

h2 {
    font-size: 36px;
}

button {
    background-color:purple;
    
}
```

This works but what if you don’t want all of your buttons to be purple? What if you want one button to be yellow and another to be blue? This is where classes come in handy

**Classes**

Unlike Element selectors you can name classes whatever you want. In the case of Squarespace you’ll more than likely be interacting with the classes that ahve already been set.

What are good naming conventions? BEM, SMACSS, OOCSS, Utility CSS. https://snipcart.com/blog/organize-css-modular-architecture

Elements can have multiple classes and they’re separated by a space

```html
<h1 class=“font-large color-red”></h1>
```

**IDs**

IDs are unique and can’t be shared between elements. An ID should only be used once on a page. This makes them useful for `<header>` and `<footer>`.

You can find the IDs by inspecting elements `<header id=“header-desktop”></header>`

This is why you can safely use the page collection ID in Squarespace to apply styles to a specific page because the collection ID is unique to each page

**Attributes**

`[data-section-id=“"]` You can use this to target sections in Squarespace 7.1

**What if you want multiple elements to have the same styles?**

You can target multiple selectors with a single rule

```css
h1, h2, h3, h4, h5, h6 {
    color: red;
}
```

**Declarations** consist of a property and value

            A simple example is `background-color: red`
            The values that you can use change depending on the property
                For example `background-color: red, #fff, rgb(0,0,0), rgba(0,0,0,0.5)`
            You can have **multiple declarations** in a rule:

```css
.headline {
	color: red;
	font-size: 28px;
    font-weight: bold;
}```

CSS properties don’t change and the naming is important
                **Right**: `background-color: red;`
                **Wrong**: `background-colour: red;`
        
Best Practices
            Write classes or IDs with with hyphens
                **Right:** .button-primary

As you can see there are multiple ways to target elements in CSS so what’s the best approach?
            When to use IDs, Classes, and Element?
                **IDs** are best used for elements that only appear once on a page (header, footer), also helps to target specific sections in Squarespace
                **Classes** are best used for styling groups of content and creating consistent style between eleents
                    Think of buttons, links
                    Different headlines
                **Element**
        


### What Does CSS Do? 

### What Does CSS not Do?

### Myths and Misconceptions about CSS & Web Development

## How To Use Dev Tools

## The Box Model: The Difference Between Design Apps and HTML/CSS

## What changes and what remains the same?

## The Problem With Copy/Paste Code

## What makes CSS uniquely challenging in Squarespace
```