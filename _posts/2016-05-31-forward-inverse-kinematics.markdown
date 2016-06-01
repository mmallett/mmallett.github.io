---
layout: post
title:  "Forward and Inverse Kinematics"
date:   2016-05-30 21:39:19 -0400
categories: projects
---

[![Forward and Inverse Kinematics](http://img.youtube.com/vi/9E2UR6gctuA/0.jpg)](http://www.youtube.com/watch?v=9E2UR6gctuA)

[BitBucket](https://bitbucket.org/mmallett91/coms4160pa2/src/3e1b99b3b77ef6639a890a69547d66f61c878e5e/src/edu/columbia/cs4160/pa2/?at=master)

As a project in Computer Graphics, we were tasked with implementing forward and inverse kinematics
for a "limb" with multiple joints. Kinematics is the method of setting the joint angles
so that the limb takes a specific pose. Forward kinematics is straightforward, you just
specify the angle of rotation for each of the joints in your limb. Much more useful, and much
more difficult is inverse kinematics. Here you are given a point in space and the system
tries to iteratively solve for the angles to actualize that position.
