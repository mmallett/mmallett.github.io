---
layout: post
title:  "Kernel Dev"
date:   2016-05-30 21:39:22 -0400
categories: projects
---

I spent a semester kernel hacking for an operating systems course. I have been
programming in C since my freshman year in college, but kernel development is
an entirely different beast. Throughout the semester I did the following

- Built and installed my own kernel
- Created and inserted a kernel module
- Developed a (user space) multithreaded HTTP server
- Implemented a new set of system calls that implement a kernel space key value store
- Implemented thread safe kernel level code with mutexes
- Used slab allocator to make efficient use of kernel memory
- Learned what happens if you have memory leaks in your kernel code X_X
- Implemented a new filesystem with the ability to create and read files
- Replaced the Linux nice scheduler with a round robin schedule

The professor asked us not to share our code online, so I won't be posting links
to the source.
