---
title: Lessons learned from a weekend wrestling CSS for a dropdown menu
description: There's a good reason to use bootstrap and CSS frameworks
date: "2020-09-27"
tags: accessibility, css
---

[Originally posted on DEV](https://dev.to/kateh/lesson-learned-there-s-a-reason-for-bootstrap-and-other-css-frameworks-3fl1)

This weekend, I decided to explore what a CSS-only, accessible dropdown menu component might look like by following some tutorials I found. My hope was to tackle my discomfort with CSS and if I was lucky, end up with a no-JS dropdown menu component that could replace a bootstrap dropdown menu.

However, it is Sunday night and my weekend is nearing an end. I definitely got to a good place with CSS-only and learned a lot. Yet, the dropdown menu I ended up with is far from being able to replace what bootstrap does! What I have is a partially-accessible component... This past weekend, I've learned some important lessons around how much work may go into creating a seemingly simple UI component from scratch.

### Preface

I don’t work too much with CSS in my day-to-day. I am a full-stack developer on a small engineering team spending most of my time in Ruby code. Some time ago, I would spend hours in my free time creating [CSS art](https://codepen.io/khiga8/pens/popular),
for no other reason than: it's fun and looks cool! Needless to say, my working CSS knowledge is very lacking.

### Exploration

I came across these neat CSS-only dropdown tutorial:

- [Solved with CSS! Dropdown Menus](https://css-tricks.com/solved-with-css-dropdown-menus/)
- [CSS Only Accessible Dropdown Navigation Menu](https://moderncss.dev/css-only-accessible-dropdown-navigation-menu/)

_CSS only and accessible??!!_

This sounded great! If it's possible to create a CSS-only dropdown menu, I figured it was worth an exploration!

I lightly followed the above tutorials while being mindful not to blindly copy lines. First and foremost, my goal was learning and understanding what went behind each CSS rule and selectors. After I had a general understanding of what the selectors were and what the rules meant, I started tweaking around! I got lost in this....working with CSS is an entirely different beast from other types of programming work.

### Lessons Learned

It’s Sunday night and nearing the end of the weekend. I am pretty proud of what I ended up with and all I've learned. Below I have a left-aligned dropdown, right-aligned dropdown, and some icon dropdowns which would fit my need.

<iframe height="700" style="width: 100%;" scrolling="no" title="CSS-only Tab Accessible Left &amp; Right Dropdown " src="https://codepen.io/khiga8/embed/NWNJEoz?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/khiga8/pen/NWNJEoz'>CSS-only Tab Accessible Left &amp; Right Dropdown </a> by Kate Higa
  (<a href='https://codepen.io/khiga8'>@khiga8</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

But the reality is, there's a lot this implementation is missing even comparing it to a bootstrap dropdown menu. Like everything else in software development, developing UI isn't just about making something that's working for you on your screen.

Even after creating something that “works” and is looking nice, there’s a few more things to think about:

- Is the element FULLY accessible? Does it have correct tab focus, keyboard arrow support, appropriate aria role....It turns out CSS-alone isn't enough for a fully compliant accessible dropdown! There needs to be JS to update the `aria-expanded` attributes.
- Is the element mobile friendly? But again, what does a mobile friendly dropdown menu look like?
- What about browser support? For example, for this CSS dropdown, I used the pseudo `:focus-within` but turns out this isn't supported in IE which I would need to care about. Is there a polyfill available?

The time, resources, and domain-specific knowledge that's required to build up a fully accessible UI element is something that should NOT be underestimated. It isn't just about creating something that "works", but thinking about accessibility, browser compatibility, being attuned to various browser bugs, and making thoughtful implementation decisions for the various usages of the UI element. There's a reason smaller teams rely on bootstrap, and there's a lot to ask yourself before building your own.

With all that said, this deep-dive via trying to create a custom CSS dropdown menu component was a lot of fun! It got me thinking about the various implementation details and decisions that have been abstracted away by third party libraries. What are the benefits of these third party libraries? What are the trade offs? There's a lot to think about!

---

Thanks for reading till the end! Apologies if this turned out to be a bit of a ramble!
