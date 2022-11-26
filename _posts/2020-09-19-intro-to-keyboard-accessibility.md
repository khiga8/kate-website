---
layout: post
title: Intro to Keyboard A11y – An (interactive) guide to Tab & Tabindex 🗂⌨️🗺
description: Digging into tab navigation and tabindex
date: "2020-09-19"
tags: accessibility, css, intro
---

[Originally posted on DEV](https://dev.to/kateh/introduction-to-tab-navigation-and-the-3-tabindex-4m3m)

_Note: You will want to skip the "interactive" portions of this guide if you are on a mobile device._

---

Developers are all about keyboard shortcuts! Being savvy with the keyboard helps us be more effective, and honestly just feels pretty cool... But today, I want to deep-dive into keyboard navigation in the context of _accessibility_.

Many different people rely on keyboard navigation as a sole means for navigation for any number of reasons. It's important that a web page is 100% accessible with a keyboard.

In particular, the **tab** key plays a critical role in allowing a keyboard user to navigate through a page.

- **tab** - focus on the next element

- **shift+tab** - focus on the previous element

If you're unfamiliar with tab navigation, you're not alone! Personally, I had no idea what tab navigation was until very recently. If you've never tried tab navigation, take a moment **right now** to press the tab key a few times, and try navigating around this current web page! _See you in a bit!_

👋

👋

Welcome back! Did you get the chance to tab around?

You might have noticed your focus first jumped to the very top left of this page. Then as you pressed the tab key, the focus should have moved in a somewhat **logical** order from left to right, top to bottom.

- Remember, an accessible page has a logical tab order.

Can you imagine how frustrating it would be if the the focus jumped around the page in some arbitrary order? That confusion would be amplified for people who rely on a screen reader to announce where they are within a page. As an exercise, you can try tabbing around [this terribly inaccessible web page](https://www.w3.org/WAI/demos/bad/before/home.html).

## But who decides the order!?

The good news is, HTML has built-in tab focus behavior so we usually don't need to worry about manually specifying a tab order.

By default,

- Tab navigation follows the logical order of elements in the DOM.
- Interactive HTML elements such as form inputs, links, and buttons are included in tab order, while non-interactive elements such as divs and paragraph tags are excluded.

## What is tabindex?

There may be times you want to override the default tab or focus behavior. This is when the `tabindex` attribute comes into play. The default tab behavior of any HTML element can be overridden by setting the tabindex attribute!

## tabindex 0

By setting tabindex to 0, an element that is not usually part of the tab order, such as a `<div />` can be made focusable and added to the tab order.

Confused? See it in action:

<iframe height="415" style="width: 100%;" scrolling="no" title="tabindex 0 example" src="https://codepen.io/khiga8/embed/preview/ZEWqmoB?height=415&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/khiga8/pen/ZEWqmoB'>tabindex 0 example</a> by Kate Higa
  (<a href='https://codepen.io/khiga8'>@khiga8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Usecase

Tabindex 0 could come in handy if you have a custom interactive element that is not natively focusable. An example may be a `<div />` element that, for whatever reason, needs to act as a button. (Ideally though, you should use the `<button />` tag but if for whatever reason, you cannot, you can mimic the native tab behavior of a button by setting the tabindex).

_Do you know of other usecases for tabindex 0? Let me know down below!_

## tabindex negative

When a tabindex is set to a negative number (usually -1), an element may be removed from the tab order. It's important to note that even if the element is removed from the tab order, it can still receive focus programmatically with javascript's `focus` method.

Confused? See the negative tabindex in action:

<iframe height="415" style="width: 100%;" scrolling="no" title="tabindex negative example" src="https://codepen.io/khiga8/embed/BaKqGbB?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/khiga8/pen/BaKqGbB'>tabindex negative example</a> by Kate Higa
  (<a href='https://codepen.io/khiga8'>@khiga8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Usecase

A negative tabindex can be helpful for something like a modal which is usually inside a `<div/>` element. We can prevent a keyboard user from focusing on a hidden modal by setting the tabindex to -1. However, when the modal is shown, a programmatic focus can be set using javascript to allow the user to interact with the modal!

_Do you know of other usecases for negative tabindex? Let me know down below!_

## tabindex positive

Last, and perhaps also the least, a positive tabindex is used to specify the exact tab order of an element.

Confused? See what I mean:

<iframe height="415" style="width: 100%;" scrolling="no" title="tabindex positive example" src="https://codepen.io/khiga8/embed/BaKqGea?height=406&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/khiga8/pen/BaKqGea'>tabindex positive example</a> by Kate Higa
  (<a href='https://codepen.io/khiga8'>@khiga8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Usecase

I haven't actually encountered a valid usecase for setting a positive tabindex... All guides I've encountered list it as something you should never do. 🤷🏻‍♀️

_Do you have a valid usecase for positive tabindex? Let me know down below!_

## To wrap it up..

- Tab navigation is essential for keyboard users.
- Tab order must be logical.
- Using the correct HTML tag usually takes care of most tab order concerns.
- You can set tabindex to 0, a negative number, or a positive number, to override the tab behavior for any element.

I found these resources extremely helpful!

- [WebAIM](https://webaim.org/techniques/keyboard/tabindex)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex)

---

Thanks for reading until the end. Is there anything else I should know or anything I didn't get quite right? If you have any thoughts or comments, let me know!
