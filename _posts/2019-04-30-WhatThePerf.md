# WHAT IS PERFORMANCE TESTING
  
![Performance Testing](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/CoverWhatIsPT.png?fit=1446%2C574&ssl=1)

It is so silly that I did not start this blog by defining what is performance testing, the core of this whole site. I am so sorry. I got distracted, I guess. Talking about tacos, puppies and talking about my cousin Pepe.

The world has been confused for so long saying performance testing when they are thinking on a load test. Or even worst thinking that a load test is all there is to performance testing. Or the worst of all, people who just do not know well what it is and goes around using the practice’s name in vain using interchangeably performance optimization, testing, management and all of the other flavors.

So in all this ramble, lets answer what is performance testing?

## DEFINITION

There are multiple variations of the definition of performance testing. I have not found one that universally accepted. Especially, as the definition gets blurred and confused by the practices that are surrounding performance testing. They are related but are not THE thing, such as performance optimization, capacity planning, tuning and others.

I am going to provide the definition that makes more sense to me. It is based a bit from the one on Wikipedia. But I will rephrase it in my own words and in a way that I think will ease the understanding and this post’s content. So here it goes:

> Performance testing:  
> A practice or action that consists in the validation and verification of the response’s speed of a computer system ,
> 
> while measuring the impact and reaction of it’s physical components ,
> 
> while being given a particular use.
> 
> -Me

There is an important division that I did on the sentence on purpose. Divided by commas on three pieces with suspiciously long spaces after each. They denote that according to me, performance testing always consists of three parts. No matter what and no matter how, performance testing will have those three. And we will talk about them now.

## SPEED

It is the very thing that everyone thinks of when anyone mentions performance. How fast am I getting a response on this, how long will it take, how long am I willing to wait?

Since speed defines how much distance you travel in a given unit of time, one would think that the important component there is the distance. On computer systems, that distance is the round trip that the data must do from the customer to the database, a more or less fixed measure. Like an Olympic runner for the 100 meters, the distance is fixed, so what measure do we have there then?

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/TimeMagazine.png?resize=224%2C314&ssl=1)

TIME! Key measurement for speed on a system. How much time does it take to complete the process. Generally measured in seconds and/or milliseconds.

Timing a computer process can be done in multiple ways and using many different devices. Examples: count the time that a single local process takes, or the time the information takes to do a round trip, the time each segment of the trip took, or all of the above and even more.

To measure that time, solutions are vast and diverse. Starting with a silly stop watch or Mississippi counts on the occasions when the observer can easily time it and not to waste resources where you can easily tell that the process is definitely slow. There are internal time measurements that the solution can (or should) provide. Automations can measure response time (Warning, that should not be used as a silver bullet for everything , they can’t measure asynchronous calls). Also with advanced agents, probes, external analysis tools such as APM’s.

No timing method is universal for all performance testing. The need will call to the right choice to be done when the time comes. (Oh snap… a pun!)

## METRICS

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/Monitors.png?resize=252%2C252&ssl=1)

The second component for performance testing are the physical things that can be metered. Most of the time, those readings are related to the hardware in charge of your solution. They are usually measured by things called monitors.

The type of metrics that you can measure are many and varied as well. It is similar to measuring body functions during a fitness test. The metrics that can be measured are many, and will depend on where are you plugging the monitor. What you are looking for, will define the place that you plug it into (ouch).

In terms of the hardware, the most common place to take metrics is on the solution’s main server. And the most common metrics gathered can be such as CPU, RAM, Network card traffic, processes running and so on. The list can be huge, and you must pick the most transcendent ones for your solution.

But those are not the only places where you can get info and not the only metrics that you can gather. You must check what may have an impact and/or have use on your solution. Network interfaces, databases, load balancers, cloud interfaces, containers and so on.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/Metrics.png?resize=311%2C233&ssl=1)

In the same way, the metrics will be diverse on each one of those. They could even be Celsius if you are metering temperature say in a CPU, a server room or Amazon’s microwave with Alexa. The point here is to see how the metrics jump when you do an action. Just like when a doctor HITS you in the knee with the tiny hammer. How high your knee jumped and how long it took to react.

Speaking of HITS…

## USE

The last component of the mix is a specific kind of use. I want to open with a rant that I did in a previous blog post. [NOT ALL PERFORMANCE TESTS ARE LOAD TESTS](https://www.srperf.com/performance-load-different/).

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/PerfectStorm.png?resize=232%2C348&ssl=1)

Now that I took that off of my chest, we can proceed with the types of use that you may be interested on. Being specific, this covers circumstances, scenarios or events. Not all scenarios can be covered at once on a single performance test. A performance test focuses on a specific use pattern to be tested and when one more type of use or event is at risk, one more test must be executed.

Multiuser and multi action is a frequent test use requested. Known as load, stress endurance and many other names. All of them are sub-types of performance tests which commonly require load testing tools to be able to generate the load. Please don’t focus the use of load testing tools to gather response times.

The type of events requiring a performance test are not always load tests (which focus on generating synthetic loads). The type of circumstances or scenarios can be varied. From organic load (generated by real working users), to just process execution (such as scheduled jobs and triggered routines that have no user interaction). There are some that even may require to measure the impact of a single user on the system.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/04/PerformanceTestingAlone.png?resize=290%2C231&ssl=1)

Many other types of events may require a performance test. Not all of them require load tests or load testing solutions. Make sure that you are testing the right event, given the posed risk factor. That means the situation on which we want to check how our system does. Specifically when those scary events happen.

## CLOSING

In a short sentence: Performance testing is the action of checking response times while monitoring components on a particular event.

Any other definition may be a sub family of performance testing, or may be another performance related action instead of testing (such as tuning, load, optimization, etc.)

Now you know!

Besos <3