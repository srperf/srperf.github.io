---
layout: post
author: srperf
---
# THE REASON FOR PERFORMANCE AUTOMATION
  
![Performance testing automation](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-112.jpg?fit=1826%2C1028&ssl=1)

While trying to write about a lot of topics around performance testing I found out that it may be wise to start talking about this deep question.

What is this “something something performance automation something” actually​? What is it for? But above all, what are tacos? Food over a tortilla, or a tortilla holding food?

I have seen a misunderstanding around this “something something performance something” [everywhere](https://www.srperf.com/functional-vs-performance-test-cases/). Somehow many people understands that the life purpose of this performance thing is to act as a timer for actions. Just a chronometer. Which actually is part of the outputs of the performance testing process. But I mean JUST a part of the whoooole process. Not the ultimate goal for the automation.

And I blame this a little on people having been around a little bit too much involved with functional testing. Maybe just because functional happens first. Maybe because the planets are not aligned. Maybe because many of the outputs on a performance test are times. Who knows…

To make it easier to understand I will tell you a little story.

## THE EVOLUTION OF PERFORMANCE

In the beginning somehow man was created (because of polemics I will not get into who did it, everybody knows it was Jesucristo), and for a while this was good. Then man just did stuff by himself and not much else was happening.

Then man created the local computer. It had software on it. You could only run your stuff there and for a while this was good. Only you were using it. To measure it’s response time you could just click on it and see how it was doing. To time it just had to count seconds, check your logs or get a stopwatch to see how bad was that old CPU.

Then the networked computer was created. The software on it still ran there but it started to grab little things called shared resources. It was now just a few people using this resource. Now few used that central resource. The central location required some more horsepower and to check how it was doing you could ask your coworker and/or geeky friend to help stressing it.

Then the internet was created. This central location was still more or less a repository. Having there your mail, static webpages, dirty pictures and other things that you’d access with specialized programs. A few more had access to it. Testing these central computers was a little bit harder but still doable with some people at the same time.

![Performance evolution](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-122.jpg?resize=968%2C544&ssl=1)

## A PROBLEM ARISES

Now cloud computing was created with programs running on those cloud computers instead of yours. Today they are better known as apps. These are accessed by everyone around the globe! They do it from their laptops. From their phones! Even from their freaking fridges loco! And to push that much as a global load of clicks is almost impossible just with a bunch of your friends or employees. Even putting together every family member you may have out there.

You can put a building full of people clicking at the same time. And you wouldn’t be able to load a google test server by a fraction of what it gets in a regular day.

So the main deal of automation in performance load tests is…

## ![Automation for performance testing](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-132.jpg?resize=300%2C225&ssl=1)NOT TO HAVE LOTS OF PEOPLE CLICKING

It is as simple as that. The ultimate life purpose. You automate because having rooms full of people generating load or liking the same thing at the same time is mucho. You can just create a little program that clicks that for you and then you can clone it.

Generate the almighty load. It all narrows down to it.

When you have processes that you know will happen a lot in your system you create the automated script which mindlessly repeats the steps as much as you want to. Pretty much like the people you had clicking a lot. Then you can go evil scientist and clone the scripts. Coming them inside of a computer into tenths, hundreds and some may even hold thousands. All of that power in this tiny computer.

No more rooms full of people who need lots of space. People that needs food. People that sweat. People that may click something inadvertently. People that you cant cramp together into small spaces like if you were playing Tetris. And with computers you can! I mean, play Tetris, literally and the game itself.

This little computer will save you bucks by automating the steps, instead of needing all those people. At the same time, it may be able to pull some timers here and there on some or all of the clicks. Finding out how everything is doing while the system is getting all those gazillion clicks at the same time.

But a very importante thing I am trying to point out here is.

## PERFORMANCE AUTOMATION IS NOT (JUST) A STOPWATCH

I hope it was clear why the main purpose of automation on performance is to generate load. A byproduct, or a trip you can hitchhike in that donkey that is already going where you are, is that while you are generating load, you can time those click responses.

But please don’t automate just to time. Well, unless you have money like el Chapo to throw at the scripters and while they are on it, to put avocado on it. Yummy delicious and expensive avocado!

With this I am not saying it is wrong to use performance automation just to time some things. There may be times where it is truly the only way. But be wise. You may be wasting your time, tacos and money.

I assure you, there are many other ways you could time this instead of spending a day or two, paying a consultant per hour. Pricey!

## BUT WHAT IF I WANT TO SEE THOSE TIMERS ANYWAY?

If you are still curious of how slow an obscure process gets when there is a lot of load elsewhere, there are many possibilities you could try. Instead of just automating it all. Here I will give you some ideas.

One is to actually ask someone to click on that process while the load test is happening, and just… see it and time it. Which may sound counter intuitive after all my rambling about saving through automation. But as mentioned automation applies to a process that is used a lot by many people. On this case you could ask cousin Pepe to go and click. In the end he knows the system. He can click and measure time on what is needed quick and easy. But most important here, he is already in the payroll. I bet you do not pay him at all what you’d pay for the scripter.

Another pretty easy thing to do is to instrument somehow the time measurements. Many systems measure them and generate logs just out of the box.

Instrumentation of processes is a whole post topic by itself. But as a quick definition, you just put timers inside of your application through many ways. This really helps towards just timing stuff!

Once instrumented, you would still need Pepe to click on it. Or just time it while the UATs or functional tests are happening to get a timing. The point here is to trigger it adequately. If it is only once or twice… Easy for Pepe.

And again, being the most expensive, three other way is to automate and time the process through a script. One that takes longer to create, it is harder to maintain and is more picky for changes. Compared to Pepe of course.

## YOU ARE MORE INTELIGENTE NOW!

So now you know it. Use performance automation when you need to generate clicks by boat loads! Arriba and abajo mucho mucho!

If you are trying to gather other things like just a response time, I would suggest you other alternatives.

We will explore those other ways on further posts, but for now. Vamonos!

Besos <3

Señor Performo