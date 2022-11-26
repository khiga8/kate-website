---
layout: post
title: What *is* an Operating System?
description: A simplified overview of operating systems
date: "2020-10-11"
tags: intro
---

[Originally posted on DEV](https://dev.to/kateh/eli5-what-is-an-operating-system-1082)

_If you've heard of "operating system", but nothing comes to mind beyond "Mac and Windows?", then this post is for you!_

---

## "Mac, Windows, or Linux?"

This has go to be one of the most _frequently_ debated topics on the Internet. These are a reference to the most popular _operating systems_ in the world.

**But what do we mean by an operating system?**

Before we get into it, let's talk briefly about the three most popular desktop operating systems you're likely familiar with!

### macOS (previously known as OS X)

![First Mac OS](https://photos5.appleinsider.com/gallery/29370-47319-000-3x2-Apple-History-Mac-launch-xl.jpg)

<figcaption>First Mac OS </figcaption>

macOS is a _unix-based_ operating system owned and distributed by Apple Inc. The first Mac OS was introduced back in 1984. In fact, it was introduced during the super bowl with [this extremely eerie commercial](https://www.youtube.com/watch?v=VtvjbmoDx-I) which alludes to George Orwell's 1984...

As Apple [states](https://www.apple.com/macos/what-is/#:~:text=macOS%20is%20the%20operating%20system,suite%20of%20beautifully%20designed%20apps.) on their website, macOS is designed specifically to run with Apple hardware. While Windows and Linux can run on a variety of PC hardware, macOS **must** run on Apple hardware, giving it exclusivity and a higher cost barrier.

While there are [tutorials](https://www.macworld.co.uk/how-to/mac-software/install-macos-pc-3632329/) out there that may teach you how to configure macOS on a PC, Apple does not want you to. In fact, it's technically illegal 😅...

### Windows

![Windows 1.0 Advertisement](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Microsoft_Windows_1.0_page1.jpg/399px-Microsoft_Windows_1.0_page1.jpg)

<figcaption>Windows 1.0 Advertisement</figcaption>

Windows refers to the series of operating systems developed by Microsoft first released in 1985. Here's [another VERY interesting ad](https://www.youtube.com/watch?v=sforhbLiwLA) from 1986...

While macOS and Linux can be traced back to [unix](https://www.techopedia.com/definition/4637/unix#:~:text=Unix%20is%20a%20portable%2C%20multitasking,reprogrammed%20in%20C%20in%201973.&text=Unix%20operating%20systems%20are%20widely,PCs%2C%20servers%20and%20mobile%20devices.), Windows is an entirely separate family.

Most PC computers come pre-installed with Windows. This can be traced back to the [Wintel alliance](https://en.wikipedia.org/wiki/Wintel). This was an alliance between Windows and Intel where the two pretty much joined forces in an effort to be at the forefront of personal computers, and get Windows software & Intel hardware into every house, school, and workplace...

Windows is by far the most popular desktop operating system in the world! This [site](https://gs.statcounter.com/os-market-share/desktop/worldwide) estimates that Windows accounts for 77% of desktop operating systems worldwide.

### Linux

![Tux, the Linux kernel mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png)

<figcaption>Tux, the Linux kernel mascot</figcaption>

Linux refers to a family of unix-like open-source _operating systems_ based on the **Linux kernel**. You can think of a kernel as one of the most important component of an operating system! This kernel was developed by a Finnish engineering student named Linus Torvalds in 1991.

What sets linux apart is it's open-source nature and community backing. You might've heard of linux being very popular with hackers. Anyone can view and contribute to the linux kernel, or modify it as they please. In fact here's the linux kernel [repo on Github](https://github.com/torvalds/linux)! Look at the crazy number of pull requests and contributor count....👀

When people talk about linux, they are referring to either:

- The different distributions, or flavors of linux operating systems which use the linux kernel.
- the linux kernel itself

Individuals and businesses can take this kernel code for free and use it as basis for their own operating system. Funfact: Android and Chrome OS use a modified version of the linux kernel!

Linux kernel can be found in mobile and server operating systems as well. While linux-based operating systems account for [less than 2%](https://gs.statcounter.com/os-market-share/desktop/worldwide) of desktop operating systems, they DOMINATE web servers with estimates ranging from 60%-98%.

Popular distributions of the linux operating system include Ubuntu, CentOS, Debian, Fedora, Red Hat, Arch Linux, Kubuntu, Deepin...

---

Of course, there's a LOT more to the history of how these operating systems were developed, what is meant by _unix_, and the various similarities and differences, but that is impossible to cover in one blog post, so let's move on for now!

## So what actually is an operating system?

From [Wikipedia](https://en.wikipedia.org/wiki/Operating_system),

> An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.

Though I've focus more on desktop operating systems, operating systems are core to mobile phones, smart watches, tablets, and web servers.

An interesting analogy I've come across a few times is that

### An operating system is like the government.

For a moment, set aside your thoughts about the current state of government and how well you think the government is actually working... and just think about all the things government is tasked to do.

Government:

- **allocates** money to different sectors of society like healthcare, education, scientific research, unemployment...
- **enforces** laws that tell us what we can and can’t do.
- **provides** public services like public transportation, DMV, environmental protection... They're also in charge of maintaining infrastructures like traffic lights, roads, bridges so that people can get from place to place.

There's a lot of _behind-the-scenes_ things government is tasked with taking care of so individuals don't have to.

Now... operating systems have a very similar function, but within the realms of a computer.

An operating system:

- **allocates** resources including memory and storage, and sets the schedules to allow tasks to run.
- **enforces** rules that regulate the behavior of different processes. They also enforce security mechanisms to prevent misuse of computer.
- **provides** common services and functionalities that allow application softwares to run. This makes writing application software easier.

See the similarity?

### Operating systems take care of a lot of details so that people don't have to.

Operating systems provide a layer of abstraction between people and hardware.

The earliest computers didn't have operating systems. In fact, getting a computer to work was an extremely manual process where multiple people would be tasked with toggling switches and punch paper cards just to get the computer to work. [You can read more about it here](https://www.howtogeek.com/196493/what-concepts-were-used-before-operating-systems/).

But today, when you're opening Chrome, you're not thinking about memory allocation or how the click of your mouse has to get interpreted and communicated to the computer hardware. You don't have to understand how microprocessors and chips work. Even if you're an _application software_ developer for say, Slack, you're not worrying about how your user is going to switch between your application and something else they have running like Excel or Chrome or Spotify.

Let's dig into these last points a bit more.

### What is an application software?

**Application software** refers to software that is designed for a for a specific end-user purpose. These include browsers like Firefox, Safari, Internet Explorer, Google Chrome, and music listening programs like Spotify, and editing tools like Photoshop, Lightroom, or computer games like Minecraft...

Whenever you're installing anything onto your computer, you're probably checking whether it's compatible with the operating system you're running on.

The reason we have to do this is because application software rely on the core **services** provided by the operating system. Therefore, application software developers develop for a specific OS.

Good luck trying to install the first release of Microsoft Paint intended for Windows 1.0 in 1985 on your macOS. Heck, good luck running that release of Microsoft Paint on any recent Windows OS version!!!

If you've been skipping your computer's OS updates, you might have trouble running new applications. This all boils down to application software being dependent on a particular operating system environment.

You can't stick a VCR tape into a DVD player and expect a movie to play...

You can't attach bike wheels to a car and expect the car to run...

You get the idea!

## Main Takeaway

✅ Operating systems take care of a lot of behind-the-scenes operations.

✅ Operating systems bridge the communication between human users and hardware.

✅ Operating systems provide a common set of services and functionalities that enable application software developers to write programs easily.

---

Thanks for giving this a read! I've never taken an operating systems course, nor have I really taken time to dig into what we mean by operating system. This post is my understanding of operating systems as someone _very_ new to this topic...

Even digging into the history, there's a lot of nuance! If there's anything that seems off, please let me know.

_Side note: anyone remember this Epic Rap Battles of History Steve Jobs vs Bill Gates episode from [2012](https://www.youtube.com/watch?v=njos57IJf-0)...?_
