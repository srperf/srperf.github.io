# MONITORING IS NOT OPTIONAL
  
![Monitoring Performo](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/CoverMonitoring.png?fit=1200%2C600&ssl=1)

Monitoring is one of the first things I look for when I face a new project or a new system that requires some performance work to be done on it. And surprisingly most of the places, projects and customers that I have visited… do not have it, have misconceptions about it or just plainly do not know what is the deal with it. [They are often wrongfully just asking for a load test](https://www.srperf.com/performance-load-different/).

So to help and enlighten I am going to explain a little why Monitoring is probably one of the most important things you must have to know the performance of your system. It is even more important than just doing plain load tests (I even think it is extremely unwise to run a load test without proper monitoring).

## KNOW THYSELF

![Great Performance Book](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/PerformanceBook.png?resize=277%2C315&ssl=1)

On the awesome book, “[Every computer performance book](https://www.goodreads.com/book/show/17722080-every-computer-performance-book)“, Bob Wescott starts the book stating that knowing the current performance of your system is the absolute first step to do anything performance related with it. And I could not agree more with him.

What he states as “knowing your system” is a wide statement. It includes knowing utilization patterns, current performance metrics, historical events, and having many logs with lots and lots of data. Data that can be gathered from a well established monitoring setup.

Following the syllogism, if all systems should have information about their metrics, and monitoring provides that information, hence, ALL SYSTEMS SHOULD HAVE LOGGED MONITORING.

In the question of the types of monitoring that should be available I tend to reply that the most complete suite is the best option (more on that below), but in doubt you should have at least something. Anything. Please! To run around not knowing anything about your system is like running around with pointy scissors, driving as drunk and stoned as Charlie Sheen, like running a marathon without tight underwear, like staring at a solar eclipse without glasses, or like doing any of the most reckless thing that you can think of.

## BUT ISN’T IT TOO HEAVY?

![When I find them not monitoring](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/Planet.png?resize=272%2C226&ssl=1)

This type of questions or comments make me wonder… _what is wrong with you people?_ (That and thinking that automation is enough to know response times, I know I am weird)… But back to the heavy monitoring question, I get it often. So often that it pretty much became the whole reason for this blog post.

Before I go on ranting examples on why I think this concern is a bit overblown, being a diligent performance engineer, I must say that yes, indeed monitoring adds some overhead to the performance of the system. That is just the sound of inevitability Mr. Anderson. Such as death, the extra load added by monitoring is a fact of life that has to be dealt with instead of being reckless to avoid it. It would be irresponsible to think that we can avoid death and act like if we could.

Monitoring indeed adds load on the performance of your system to a certain point. But nowadays performance monitoring tools have evolved, server’s power has grown a lot and the extra load is considerably smaller than the user load. It can add up, but with the following examples we will understand that it is better to have it and deal with the extra load than not having it.

## EXAMPLES

![Without monitor performance](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/Parachute.png?resize=145%2C145&ssl=1)

A first example. When you skydive you need multiple emergency parachutes system. It would be like saying that having multiple emergency parachute systems is a bit heavy. Let’s jump from the plane or the mountain riff with only one single parachute. That is smart, why should one carry on the extra load?

The radar and navigation equipment of an airplane is heavy extra weight. The airline wants to be able to cramp up more people than the weight limit the airplane can carry. So why not ditching some of the navigation equipment to put more people and charge more?

Another. To be able to carry more people again and save some money on equipment, let’s not have that many rescue boats on our [cruise](https://en.wikipedia.org/wiki/RMS_Titanic) ship. Ask [Edward John Smith](https://en.wikipedia.org/wiki/Edward_Smith_(sea_captain)) or [Thomas Andrews](https://en.wikipedia.org/wiki/Thomas_Andrews) how did that worked out. Would you ride that boat?

![Pinto performing poorly](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/Pinto.png?resize=287%2C160&ssl=1)

Another would be the all the meters your car has on the dashboard and the security frame. They add-on gas consumption and weight on your car. But it would be better to not to have them for the sake of savings, something like to go all the [Pinto](https://seanmunger.com/2014/11/13/the-devils-hatchback-the-horrifying-true-story-of-the-ford-pinto/) way. Who would not love to have a cheap car with just an inch between bumper and gas tank, no fuel or speed meter and just a gas pedal? I mean you could halt the car just by not accelerating?

## WHEN IT MAY BE ~~SKIPPED~~ SKIMMED

![No lights car no monitor parts](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/Headlights.png?resize=383%2C235&ssl=1)

There are occasions where some of the monitoring may be downgraded but not sipped. As in the last example, some racing high performance cars lack several meters that a conventional car has for the sake of being light and fast. They don’t even have full seats or real lights in front since those special cars race only on daytime. Lots of savings in terms of weight.

On the other hand, those cars have other extra components that are not found on regular average cars. Special fuel tanks to fill up quickly, nitro boosts and many don’t even use conventional gasoline.

Following up the analogy, on extreme conditions, you could skim conventional monitoring. You could choose lighter options, monitor only key elements or have special mechanisms. But still, you need to know something about the system, you should not be blind about it. [Driving blind folded is never a good idea](https://www.theguardian.com/media/2019/jan/08/bird-box-challenge-why-blindfolding-yourself-and-walking-into-walls-is-even-more-stupid-than-it-sounds).

## WHAT TO DO THEN?

The follow up question is often what to do when the system is maxed out and monitoring may be adding frothing?

This question has the intent of forcing you to answer suggesting that skipping monitoring is acceptable then. I must shatter that illusion. The plain answer is NO. It should not be the case.

![Plane without monitors](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/Airp.png?resize=219%2C155&ssl=1)

Opting out of monitoring just to fill up more load is a really bad idea. Such as on the airplane example, what do you do if you have more people than the plane has capacity for? Do you get another plane? Or do you remove all instruments and fly the plane by ear but being able to charge for more people? Which airplane would you choose to fly on? Please, be honest.

The more you have, the better. As you get more information you are prepared for the world. The more you work, the luckier you will be. Ad an extra layer always.

## CONCLUSION

![Performo xray](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/06/x.png?resize=137%2C170&ssl=1)

Monitoring is a crucial part of the art of performance testing. Many people have the wrong idea thinking that you don’t need to monitor and you need only load testing. Today we have awesome things such as APMs on several flavors. The world should not attempt to run without monitors on every environment (dev, test, prod) of your application. The more you know about them, the better!

Please do not go out running apps without knowing yourself.

Besos <3