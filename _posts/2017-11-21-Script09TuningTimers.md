---
layout: post
author: srperf
---
# SCRIPTING 09: TUNING THE WAIT TIMERS
  
![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-41.jpg?fit=1200%2C600&ssl=1)

Wait [times](http://www.robvanderwoude.com/wait.php) in between steps and iterations are vital parts of your script. But they are not so easy to get right. That is why we need to do some tuning on them.

The wait times will enable your script to act more or less like a real person. We want it to act different than a computer. A computer has the capacity to do the steps at inhuman speeds. As well, it has the capacity to run at exact intervals, so precise that they will seem inhuman as well. To avoid exact intervals we add some randomization to the wait times.

Because of that randomization,it is tricky to set the wait times right.

Having good wait times will ensure that your script acts like a human and generates the desired load into the system.

First we will add the randomization to the wait times in between steps. Second, we will run them a bit with that wait time to get some estimates on how long it takes to complete an iteration. Once you have that info, we will do some math to find an approximation to the wait values needed in between iterations.

Last, the most fun of all, we will let them run a bit. There we will find out if the math was right. Which almost never is at first. This is because so many random variables at play.

## TUNING BECAUSE OF RANDOMIZING

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-45.jpg?resize=500%2C500&ssl=1)

The first step is to add some randomization to the wait times in between steps.

Most of the scripting tools have a randomization function integrated. It usually defines the variation in terms of percentage or seconds. The variation is a plus or minus from what you had declared as the wait time value. We do not want those wait times to go crazy even as some real users may do. You should simulate the averages, not a black sheep.

On previous posts, we settled those values as fixed to 5 or 10 seconds. My recommendation is to set the variation to +/- 10%. Unless the project has specific scope to not to do this.

This means that if you have 10 seconds as wait time, the script will wait in between 9 and 11 seconds randomly. This will ensure that you do not execute the same step always at the same interval. This will be more realistico!

## GATHER THE DURATION OF ONE

As we added some randomization to our waits we must figure out the average duration of one iteration. The easiest way would be to add all the wait times in between steps and add the response times. That should be an easy one. But given the randomization of the wait times and the uneven response time for each step, it is not that simple.

We need to find the average duration of a full iteration. Once we add the random behavior, we will repeat the concurrent run like we did in previous posts. This time we are not looking into testing concurrency. We already know that it works well. But this time we just want to know how long it takes on average to complete the process with the wait times included.

Like a test trial for a runner. We will test how we do beforehand, to have an idea how far are we from the record we want to break. Run again the concurrent scenario with 3 to 5 concurrent users. Enable the wait times in between iteration and let it run for 15 minutes.

Make sure that your tool gathers the duration of each iteration. Afterwards you will have a way to calculate on average how long each iteration takes. This is the best estimation as having an exact value is impossible.

## TIME TO USE MATH

Now we know how long it takes on average to complete an iteration. With that value in hand we can proceed to calculate how long it requires to wait in between steps to complete the desired number of iterations per unit of time.

For this lets use an example: Lets say that you need your script to run 10 times per hour. You just found out in the previous exercise that it takes 100 seconds on average to complete an iteration.

This means that the 10 iterations that you want will take about 1000 seconds.

Subtract those from the number of seconds in an hour. You know, 3600 seconds in one hour. After that operation you will have 2600 remaining seconds.

As we want 10 iterations we have 9 wait times in between. So nice and easy we will just divide the remaining seconds by 9. The result is: about 288 seconds in between.

For ease, here is the formula.

- _IW -> Iteration Wait Time_
- _AI ->  Average Iteration duration_
- _TI ->  Total Iterations_

**IW= (3600-AI)/(TI-1)**

## ADD ITERATION TIMES

We will proceed to add the iteration wait duration once we get it from the formula.

The twist we will add again is that the iteration time should be randomized as well. We must ensure too that the events do not happen so systematically that the test spills fake results.

I recommend a variation with the wait in between iterations just as I suggested for wait times in between the steps. Set the wait time in between iterations to vary +/- 10% of it’s defined value.

From the result we’ve got from the example above we defined 288 seconds as the wait between iterations. So we will let it vary from 260 to 316 seconds.

Doing this we will ensure realism.

## RUNNING AND TUNING

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-46.jpg?resize=300%2C225&ssl=1)

There are so many variables that are not fixed values here. That makes it difficult to get good wait times at first with just math. Especially with so much random variables flying around and unpredictable response times.

To ensure we got it right and improve if we are off by much we have to run tuning the math. We achieve this by running them and checking how well they do.

Repeat the test run for 3 to 5 users. This time enable wait times in between steps and in between iterations. This time using the new values that you just calculated.

Again I would recommend to let this run for at least 15 minutes. This will help, to come to an hourly estimate is easier to just multiply your result by 4. Doing this you will know more or less how much is your script really iterating per hour.

If you have time to do an hour long run that would work even better.

If you notice that your iterations are far from the estimates you required, proceed tuning the waits in between iterations. Do not change the waits in between steps. I repeat, just the ones in between iterations.

Tune and run again until you reach iterations that are equal or slightly higher than what you are aiming for. You should try to make them slightly higher because once you run a full test, they may slow down a tiny bit.

## FINALLY

As you saw, the science of setting the pace to generate defined amounts of load is not exact. It requires tuning and it can vary afterwards.

You can reach an approximation first with the due diligence and math. But, given the variations in the response time each step may have and the randomization of wait times, it is almost impossible to define wait times exactly.

The best approach is to run and tune after the math. Run and check how it is doing. After, if you find something off, tune it and re run.

Just like you would do while cooking. You may have followed the recipe by the letter. But while cooking you must taste and add salt as needed.

Enough for today amigos. Now you have scripts that pace perfectly! Vamonos!

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/Continuara.png?resize=600%2C189&ssl=1)

Besos <3

-Señor Performo