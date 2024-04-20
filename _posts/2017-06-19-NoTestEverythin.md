---
layout: post
author: srperf
---
# DON’T TEST EVERYTHING ON A PERFORMANCE TEST
  
![Performance test everything](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/ArtBoard-Image-19.jpg?fit=1200%2C600&ssl=1)

Have you ever arrived to a performance test project where the client wants to load test everything? Where you are told that you should automate a gazillion business processes? Have you got upset from that nonsense? Especially when you are asked to automate something silly like a batch process call?

If you get requests like this. If you did not get upset by this nonsense. This read may be for you.

This is wrong in so many levels that I will start little by little, and maybe post by post.

But lets get something clear first. We already talked about some [differences in between functional and performance](https://www.srperf.com/functional-vs-performance-test-cases/). Where the business processes should not be followed the same way. In a similar way, the amount of business processes are not the same either. Functional should test everything. Performance should **not**.

## PERFORMANCE AUTOMATION IS COMPLEX

As we already discussed earlier [here](https://www.srperf.com/performance-test-script-automation-work/), performance automation works on a different layer than functional automation. Functional automation just reproduces clicks. Really doing them.  While performance automation forges the messages that those clicks create.

It is just way more complicated and hence unstable. But most important of all is that it is way more expensive to automate for performance. Dinero dinero!

You could test everything if you are as rich as [El Chapo](https://www.forbes.com/sites/doliaestevez/2017/01/25/does-mexican-drug-lord-el-chapo-guzman-have-the-14-billion-the-u-s-wants-from-him/#ae98c89669b8). Otherwise you may want to focus the effort (and money) where it will be more effective. And maybe you are as rich but want to be smart on how you use your resources.

You may be questioning yourself now. How do I know what to include in my scope to be safe and not spend like there’s no tomorrow?

Here are some guidelines.

## PERFORMANCE TEST AUTOMATION SIMULATES MULTI-CLICKS

I know. You already know this. Just because you read it in a [previous post](https://www.srperf.com/reason-performance-automation/). You are an expert on this now. But there is another catch to this.

If performance automation was created to simulate a process that is clicked a boat load of times. By a lot of people clicking the same thing. Maybe even at the same time. Many times. Then, why are you asked to automate a process that is executed only by one person at a time? Even worse. This person clicks it rarely. Not even once a day!

Do you see the issue here?

No? Imagine this.  You are asked to automate a business process. The process sends your tax declaration to the IRS. You tried so hard to push back this from the scope. The argument is that the process is executed only one time once a year. But the client said that it MUST be included as it is a CRITICAL process. Muy importante!

## LOW HITTERS ARE CHEAPER MANUALLY

The client wants to test everything. You have some processes that are really important but happen with a low frequency.

A process that will get this low load usually receives it while the team is doing other tests. Tests such as unit, functional, integration and even UAT. There was already a plethora of chances to detect any slowness by now. Before you do and actual performance test. Don’t you think?

There should be no need to test it again for response times. The response times should be available by now from the earlier tests. But come on, that doesn’t happen in real life. Not that often.

Now we are in the load test phase and must include this process and time it. Let’s consider these two options.

## OPT1: AUTOMATING

Usually a performance automation takes from 4 to 16 hours to have a finished test script that is reliable. We will average the time it takes at 10 hours. It will will take a consultant scripter about 10 hours to automate it.

On the market nowadays I believe a performance scripter [consultant costs](http://consultantjournal.com/blog/setting-consulting-fee-rates) $50 dollars per hour on the cheapest side.

![Expensive performance test everything](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-20.jpg?resize=171%2C200&ssl=1)

The script will cost the client $500 dollars. Just for the script. No travel included. Neither the consultant’s presence during the execution. The script will need some baby sitting just in case. Dont forget it.

Also, I will not include the cost of the creation of the test case of such business process. Remember [here](https://www.srperf.com/importance-test-cases-dummies/) we mentioned why you should use one specifically for a performance test.

But on the cheapest side we will close it at $500. Sweet moolah!

## OPT2: PEPE CAN DO IT

Another option is to ask Pepe to do it. He is already a user on the system. He has the knowledge on how to execute the process. And the best attribute he has is: he is already on the payroll!

This translates into Pepe costing way less than a consultant. Where saying “way less” feels like it is falling short. In the rare case that Pepe earns a six figure salary, he would cost about $45 dollars per hour.

Being realistic Pepe must be getting about $20 to $30 per hour. But let’s go with $45. On this example Pepe is really special and earns top money.

Now, how long will it take him?

While you are doing your load test, bring Pepe and ask him to trigger the process. Which I bet you will not take him more than 30 minutes. But let’s assume it takes him one hour. Also being extra OCD we ask him to make it twice.

2 hours x $45 dollars = $90 dollars.

Just slightly above 5 times more expensive. Taking into account that we asked Pepe to do it. Which makes it slightly ridiculous to put someone with a 6 figure salary.

Nevertheless I guess you get the point.

## BUT WHAT IF I WANT TO MEASURE RESPONSE TIME?

Many managers have asked this again and again. Feeling uneasy, almost insecure. They want to see that response time recorded. They are oblivious to the fact that there are other ways to measure that response time.

The first one is automatic trace.

Most solutions already trace those hyper important processes automatically.  I would worry if they did not track this response times. I would question the quality of whoever developed it. Home made or made by a third party, that is not cool. Malo, muy malo.

Gather those from the solution. But if the solution is not a good one. If there is no record of the time the processes take, there are more choices.

![Stopwatch performance manual](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-21.jpg?resize=300%2C229&ssl=1)

Another one is a stopwatch.

You know that awesome invention. There are cool mechanic ones. Others are modern and digital. And legend says some smart phones can do it. There are amazing options that may cost about $5 bucks. Thank you cheap Chinese technology.

Just ask Pepe to use this magic device. To type it somewhere when he is doing the  business process. And listo! Add $5 dollars to the total cost of this. Pfffff.

## CONCLUSION FOR MANAGERS

You saved about $400 just for that business process. Just think about the other 50 processes you wanted to include and automate. Do the math on that requested nonsense.

You just saved about $20’000 bucks (50 processes x $400 dollars). Just by being smart on the way you performance test on a load test. Not to mention all the time that scripting would have consumed. And proper test case creation for each.

I really don’t want to make it just about the money. There are many other reasons to not to automate test everything. I will go into the other reasons on a follow up post.

But the money will be a good starting point to make a manager or leader understand. You would be using their lingo. Taco’bout dinero dinero!

![Performo test dinero](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-22.jpg?resize=1024%2C456&ssl=1)

More will follow on the reasons to not to automate test everything.

I will add a link here once the follow up post is written. But for now… VAMONOS!

Besos <3

-Señor Performo