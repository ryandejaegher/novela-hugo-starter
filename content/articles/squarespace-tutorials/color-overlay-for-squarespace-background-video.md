---
title: "Color Overlay For Squarespace Background Video"
excerpt: "Get a branded color overlay for your Squarespace video with one CSS class"
description: 
hero: 
date: 2020-04-07T04:00:00Z
authors: 
    - Ryan Dejaegher
categories: 
    - squarespace tutorials
tags: ["squarespace","code snippet"]
series: "Wow so cool"
codeHighlighting: true
showMailingList: false
showDisqus: false
showRelated: false
showTags: false
showCategories: false 
robotsdisallow: false
---

Squarespace lets you add video backgrounds to your pages and banners.</p>

{{< livestream src="https://app.livestorm.co/p/da103c9c-aa27-4e7f-a16d-c5e6d13f525b/form" size="max-w-sm"  >}}

But the challenge with video is that unless the video was made to match your brand and color's, it may not fit with the rest of your design. The video background may also make it difficult to read text that's overlaid on the banner.

Let's change that with a quick CSS class that will give you a custom color overlay to help tie the video in with your brand colors.

Just follow these steps

1. Add the code to your Custom CSS (Design -> Custom CSS) in Squarespace
2. Change the **`background`** to match your brand colors
3. Experiment with the **`mix-blend-modes`** to see how it affects the color overlay. You can examples of the various blend modes in the Codepen below.

```css
.sqs-video-background:after {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: red; /* Change your color here: red, blue, or use gradients! */
    mix-blend-mode: multiply; /* Experiment with blend modes (darken, overlay, screen, lighten) */
}
```
