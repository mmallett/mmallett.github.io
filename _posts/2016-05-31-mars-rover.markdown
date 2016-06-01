---
layout: post
title:  "Mars Rover"
date:   2016-05-30 21:39:14 -0400
categories: projects
---

[![Mars Rover](http://img.youtube.com/vi/Mke0oAifLBc/0.jpg)](http://www.youtube.com/watch?v=Mke0oAifLBc)

This was the final project for a class I took in my sophomore year, where we had been spending the semester working with the robots you can see above. The robots are equipped with infrared and SONAR sensors, front bump sensors, and drop sensors. We were tasked with created a C program that would allow us to control the robot from a remote terminal. We had to create our own list of instructions like move, turn, scan that would be sent from our terminal to the robot via bluetooth. The robot then had to interpret these commands and perform them. The challenge was to navigate the field of "asteroids" to find the pick up zone without hitting anything. Our team came up with a creative solution to this: using polar coordinate math, we rendered an ASCII map of the area after the robot had scanned, and sent it back to the terminal. We took it one step further and fully automated the process. All we had to do was turn on the robot and it would navigate the field.

I loved this project. It was the first major group project I had worked on at Iowa State, and gave me great team experience. Everyone worked very well together and we easily met our deadline. We were so far ahead of schedule that we had about a full week to work on automation. This is a great example of how Iowa State is making it fun to work on your projects. When I had free time during this semester, I would usually head into the lab and try to push the limits of the robot. The result was that our team had the fastest time to goal for that year.

My contribution

- Automation Logic
- Simple command interface to pass messages to robot
- Parser for the command interface

Relevent skills learned

- Embedded level C programming
- Applied math (polar coordinate mapping and calculations for SONAR)
- Logic to automate a process
- How to divide up tasks in a team to reach a goal quickly
