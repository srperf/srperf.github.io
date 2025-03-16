---
layout: post
author: srperf
title: "The performance side of the pyramid"
date: 2025-03-19
categories: blog
tags: [blogs, performance]
description: "The automation pyramid has a performance side focusing on load tests."
image: "https://res.cloudinary.com/dpdwof2hx/image/upload/f_avif,q_auto/srPerfBlogMedia/2025-02-01-ImBack/headImg.png"
---

![The performance pyramid](https://res.cloudinary.com/dpdwof2hx/image/upload/f_avif,q_auto/srPerfBlogMedia/2025-02-01-ImBack/headImg.png)

The test automation pyramid focuses on how automation coverage should be prioritized by the tech layer: lots and lots in the unit tier, somewhat abundant in the API tier, and keep at minimum in the E2E front end tests. But, did you know that the pyramid has other sides? Otherwise it would be just a triangle.

I intend to eventually write in this blog about all the sides I have in mind, but today I will talk about the load test side of the testing pyramid, focused on how often should teams run load tests based on the size of the load.

## The tiers of the performance side of the pyramid

Just like the known automation pyramid, I decided to divide the performance side into three levels divided by the size of the executed  performance test. In other words, how big is the load test.

The three levels that I propose to divide the performance pyramid dependeing on it's size are:

- Unit (Just one) - Bottom
- Small/tiny (Chihuahua dog size) - Mid
- BALT (Big Ass Load Tests) - Top

Now, what defines how wide is each tier is the number of times you execute each type of test or how often.

If we want to keep the shape of this pyramid-like, that means that we must execute very frequently (even automatically) the unit sized ones, execute often the Chihuahua sized ones, and only when absolutely necessary the massive BALTs.

Sadly, similar to the automation pyramid, most organizations have the pyramid upside down or in an ice cream cone shape: focusing on frequent executions of BALTs, here and there running Chihuahua sized when they do shake outs, and almost never doing single process/thread tests.

## Sizing your performance tests

Now the size of a load test includes multiple factors, contrary to common belief of the most important being number of virtual users simulated, there are others like the number of test cases simulated at once, duration of the test, steps on each script, and others.

Elements defining size:

- Number of VUs
- Number of test cases
- Number of steps per script
- Number of total iterations
- Duration of the test
- others

A mix of those factors will define the size of your performance test and on which of the 3 levels of the performance pyramid it falls.

## The Unit level

I wanted to keep the unit test vibe of the original pyramid here. These are the best ones, we should executing the most often! Easy to automate, maintain, super quick to execute and give a feeling of the performance of the item right away.

These are tests with just one virtual user or thread. But if you wanna play a bit around I feel you could go up to 3 concurrent. Dont push further or you might be climbing up to the next level of the pyramid.

In the same way, you just need one iteration, tops 2 or 3. Again keep it super low.

The test steps are unitary, just call the tested process, the API, the function, etc. I am unsure if allowing this to go to multiple step tests or E2E other than needed authentications.

The point of these tests is to be super quick to create, mantain, execute, and work with them. This way you can be running a few of these every time you want.

These fall into the realm of synthetics, and in a way they are! Synthetics are super short automated tests that execute periodically every X minutes or hours. You should be running these in every environment you have often to get a feel of how well is your system performing. Think of it as a continuous pulse measurement.

## The tiny level

