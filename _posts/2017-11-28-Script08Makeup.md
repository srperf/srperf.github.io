---
layout: post
author: srperf
---
# SCRIPTING 08: MAKEUP AND FINAL TOUCHES
  
![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-40.jpg?fit=1200%2C600&ssl=1)

Some of the final steps to do when you are scripting is to add timers and wait commands. They are like makeup for the script so it is prettier and more useful. We must add the timers on the points where there is a step that is interesting to the test. This is essential to the ones that generate communication with the server.

Then we must add as well some wait times. The reason for the wait times is to simulate more realistically how a real user behaves. Instead of just letting the tool create them, we will hold some better control over them by using fixed waits.

But first, I will tell you why I recommend to do this at the end. This is contrary to what most people and tools advise to do. Lets see why.

## WHY NOT MAKEUP AT THE BEGINNING

It is a common practice to put these makeup steps at the beginning of the scripting process. But to be honest, I am not entirely sure why these are suggested to be done first. Even most of the scripting and recording tools have options to add these while you are recording. I recommend to not to do it that way. That practice sounds bonkers to me!

This is because,  if you do those steps at the beginning, it can be a huge waste of time. I feel that doing it this way is not optimal  because you will have to repeat these steps if there is any problem while scripting. So, those bits of time you waste creating those timers and waits, will have to be spent again if you have to record the script a second or third time.

I don’t know if you always get a perfect script at the first attempt. I often have to record the whole damn thing again. This is why I think it is better to put the waits and timers only once. So I recommend to add them at the moment that you are sure you are not typing them many times. And that moment is at the end.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-43.jpg?resize=500%2C281&ssl=1)

It is like paying for your groceries before you go to the supermarket. What would happen if the super market doesn’t have the type of tortillas that you already paid for? You would have to cancel the payment and pay again for the ones you found instead. Or cancel the payment at all and loose that time spent paying for something you would not get in the end.

## START AND END TIMERS

Finally we will proceed to add the timers. First, make sure that you have the list of defined timers together with their names. They must follow a specific naming convention and be available on the [test](https://www.srperf.com/importance-test-cases-dummies/) case.

Be careful while you check where to place the timers. The statement that starts the timer must be placed right before the instruction that executes the action that you are timing. Some times, more than one command may be inside the timer. Identify the right ones and and put them all inside.

There are some instructions in the code of your script that do not talk to the server. We do not care about timing them. Those do a specific action for sure, but they do not require to be timed.

Identify all the group of instructions that you want to time. Then at the end of that group of instructions place the stop command for that timer. This is also known as the end timer command.

If you notice that in between the start and end commands there is a wait command, please remove them. Most scripting tools will not count them into the timer results. In essence this means to count the time of the process and add the wait into it, not good. It is better to make sure that you do not have noise in the timer (unintended time counted). We do not want any possible sources of errors.

## SIT AND WAIT

![Wait](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-44.jpg?resize=500%2C405&ssl=1)

After we added the timers, we must proceed to add the wait times. These mean the time that a real human stops to think and do the task at hand. Hence, it is known as well as a [think time](https://msdn.microsoft.com/en-us/library/dd997697.aspx).

As mentioned earlier, many scripting tools add these wait time automatically while recording. This I believe is useful if you have the real user recording the script. This is almost never the case. Or maybe you would say you now know well the process. But even as you got familiar with the steps earlier, you cannot act exactly as the real deal.

To work with this, first we will add the wait commands in between an end and start timer. You must add it after the end of the previous timer and before the start of the next one. Do not ever do this in between the same timer’s start and end. Ensure that you are placing the wait commands out of any timer’s start and end indicators.

Last set the wait times duration to a specific value. If possible set the wait time to a global variable on every timer. In other words, set the wait value to 5 seconds on every place that you decide it has to do so. Or set the global variable to 5 seconds and replace every time value on the waits to the variable. Don’t worry if you feel that the script may go faster or slower than a real user if you do this. Later, we will check that it waits in an adequate way.

## TEST THE MAKEUP AGAIN

Now we must make sure that we did not break anything by adding makeup to the script. We do not want to be like the girl that added so much that cannot go out with it. The point is to be able to go out without looking like a clown with so much powder in the face.

Run the script once and make sure it goes through all the steps without a problem. Here you will get for the first time readings of the response times that your timers can catch now. Check that the steps complete and take note for the timers’s results. They may show some performance issues from the beginning. Report to management if you notice any.

If you completed one run without any problem, move on to the concurrent run. Put them together as we did in the previous post and run 5 of the same for a few minutes. This will ensure the script is still working and you will gather early response times under load. Here you can identify possible early trouble makers.

## CONCLUSION

It is important to be presentable and pretty, such as what you would achieve wearing makeup. If you are too macho lets call it getting tidy, fresh and ready for your lady.

The same goes to the scripts that you are creating. But instead of adding them at the beginning, it is more reasonable to do it near the end. Put the make up on a few minutes before you leave home. Do not do it as soon as you wake up.

Add the timers and waiting times to your script at the end. Be careful to not to break the script by doing so. Poop happens and you don’t want it hitting any fan. so, test again your script after adding the makeup and gather early metrics.

Now, with all that we have done, we are close to the end. Now, you almost have a bulletproof script amigo! Next we will try them with other actions to see if they can interact without crashing again.

For now it is time to go. Vamonos!

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/Continuara.png?resize=713%2C225&ssl=1)

Besos <3

-Señor Performo