---
title: "Change Number of Blog Posts on Mobile Squarespace"
description: ""
excerpt: "A default excerpt"
date: 2020-05-20T12:05:40-04:00
hero: /images/hero-3.jpg
authors:
  - Ryan Dejaegher
categories: []
tags: []
series: []
type:
layout:
codeHighlighting: false
draft: true
---

Problem: How can I change the number of blog posts or summary items on mobile in Squarespace

Use Cases
- Show only the latest summary item (i.e. a blog post)
- Change the number of summary items on mobile (from 6 to 2)

Solution: We can use `CSS nth` selector
This gives you some more control to select specific ranges of elements. 
Typically when you're using Classes, you're targetting all elements that have that class. But it's possible to do select 

- Target first # of elements
- Target last # of elements
- Target range of elements


`:not(:first-of-type)`
If 


```css
@media(max-width:900px){
  #collection-5eafad82a7cc6227c0dda467 .summary-item-list.sqs-gallery.sqs-gallery-design-autogrid .summary-item:not(:first-of-type){
display: none;
}
}
```


