# LOAD SCENARIO MODELING 1: ONE PROCESS
  
![Performance Modeling](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/10/HeaderModeling1.png?fit=1200%2C641&ssl=1)

Modeling scenarios for [load](https://www.srperf.com/performance-testing/) tests is not a trivial task. It is not only to [blast 100 concurrent virtual users and slam a process](https://www.srperf.com/7-questions-for-performance-project/). We require to know how hard (often) to hit the processes, with how many threads (vUsers) and for this, how fast each thread should iterate.

Also, the complexity increases as a load scenario can trigger multiple business processes. It can get complex to try to figure out how to distribute the virtual users among those processes. On top of that, the complexity increases when trying to design the different types of load tests: average load, spike, peak, endurance, etc.

Today I will start explaining the thought process behind the simplest type. How to do load modeling on the iterations, number of users and total load for **a single business process**.

## MAY SOUND SILLY AND SIMPLE

![Eureka Performance](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/10/Eureka.png?resize=265%2C300&ssl=1)

To many, this may sound a little bit “duh” or elemental, as the principle actually is a bit straight forward. But as many simple things they don’t sound simple until you see them. At the beginning it sounds evident. But it is hard to figure out on your own. [It is like finding out on your own that the amount of water displaced by a submerged object, is the same as it’s volume](https://en.wikipedia.org/wiki/Archimedes%27_principle). Ah duh, no way genius!?

Well, yes way. And the same happens on a load test modeling, with the relation ‘tween totals, iterations and number of users simulated. You would not believe how many places I have been where people don’t seem to be aware of this relation. It is really common. If you don’t have a clear picture of this, don’t be ashamed or worried. I am here to try to make it really clear for you.

You may even have some notions on this, but not a specific understanding. Or maybe you don’t know the almighty formula for it. Oh yeah, there is a formula. But do not be afraid, it is not a complex one. Once you see it you will not be able to un-see it. It is so simple that it consists of only three little pieces.

## THE LOAD MODELING HOLY TRINITY

As I mentioned there are three key elements to figure this out when you are load modeling. Often, you will be provided with only two of the three parameters. You will have to calculate the third piece from the other two.

![Performance trinity](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/10/Trinity.png?resize=315%2C301&ssl=1)

So the formula goes a bit like this:

**T = U x H**

Where each element means:

- T -> **T**otal number of hits per period
- U -> Number of **U**sers or threads simulated
- H -> Number of Hits each user does per period

And that single formula will help you to model most of the scenario needs you may have. Let’s play out a few examples.

## NO TOTALS

One case you may receive only two data tips. 1 – The number of users to simulate. 2 – The approximate number of times each user acts or executes the business process. The project doesn’t care about the total number of actions in a given period of time, just want to simulate what they think is more or less realistic.

In this case we do not need to do anything to the formula.

Example: You get that the process has 500 concurrent users executing it. Also, on average each user clicks (executes) the process 15 times each hour.

Easy peasy, we have U = 500 and H = 15, then 500 x 15 = 7500

Running 500 threads (vUsers) that complete 15 iterations per hour will give you approx 7500 hits per hour. That will be the total goal.

## NO IDEA HOW FAST

Another frequent case is when you receive just the total number of hits for that process and the number of concurrent users that must be simulated. Here it won’t matter or be known how fast each user acts.

![Iteration speed](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/10/HowFast.png?resize=300%2C200&ssl=1)

Or maybe you need to fix the speed as you have a limited number of threads or users. This is quite common. Be careful if that is the case (full separate post on that).

In this case we will have to isolate the unknown variable on the formula, H. then we will have **H = T / U**

Quite simple equation, so let’s run the numbers. The system has 50 concurrent users. The process happens a total of 150 times per hour. Then we divide 150 / 50 = 3. Then, for your simulation you will have to tune the pacing and think times for each script to complete 3 iterations per hour.

## DON’T KNOW HOW MANY USERS

The last possibility is when you receive only how fast a user acts (maybe from the recorded think times) and the total number of hits that the process must receive. This is also common when you have multiple processes on your scenario and must just figure out how to distribute the number of users on each BP.

So again isolating the unknown variable that we do not have this time is the number of virtual users. **U = T / H**

In this example we have that the process executes a total of 200 times per hour. Also that the average user does 5 executions in an hour. Applying the formula we divide 200 / 5 = 40. Using that configuration we should put a total of 40 virtual users or threads.

On the next post we will analyze further the user distribution.

## HAVE ALL THREE

![Load modeling three variables](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/10/AllThree.png?resize=300%2C190&ssl=1)

Occasionally you will have happy times when you have all three and you do not even have to calculate a thing. But beware, as what may seem as happy times may have a hidden plot twist.

There are times where they will not match. A wild example is that the instruction is to generate 100000 actions per hour in total. This using 10 users, each doing 5 actions per hour. Obviously something here does not add up.

Substituting on our formula 10 x 5 = 100000…. something CLEARLY does not add up.

This example is a bit exaggerated to make you notice that the information is very wrong. But at times it will not be so evident. You should always check with the formula. ALWAYS!

## CONCLUSION

When modeling a [load](https://www.srperf.com/performance-load-different/) test scenario it is important to keep in mind the holy trinity of metrics for a single process.

**T = U x H**

All those three are proportional and should always match with the formula.

At the same time you can use the formula for if one of them is missing. Or two. Or all the three could be missing! That is a trouble! You may need at least one.

More to take into account on scenario modeling is how to configure pacing and think times to get the right number of iterations needed for each vuser/thread.

Another piece will be how to distribute those users on scenarios that have more than one business process.

So we will continue our modeling multi part series of posts.

Besos <3