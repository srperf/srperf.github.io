---
layout: post
author: srperf
---
# SCRIPTINGSCRIPTING 07: SO HAPPY TOGETHER
  
![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-37.jpg?fit=1200%2C600&ssl=1)

There is another characteristic for the scripts that we create. They will be simulating different users doing the same process all together at the same time. This is known as [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)).

Just like moving into a house together, concurrency can bring problems of coexistence. The multiple users doing the same thing at the same time can generate conflicts, especially with the data. There is a chance that the users could collide with each other trying to use the same value of a variable at the same time. Some times that value may be one that the system doesn’t allow to be shared. This will break the iteration of the script(s) colliding. This could even crash all the scripts running that process.

[Previously, we did some actions to ensure that this will not happen](https://www.srperf.com/scripting-05-variables/). We gave the data the best configurations that we could, so that the virtual users would not crash when using it. Now it is time to test if we configured them in the right way and that we did not miss anything.

## MOVE TO THE HOUSE TOGETHER

![Living together](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-38.jpg?resize=400%2C334&ssl=1)

The first step is to move everyone into the house that you will be shared. In this case the scripts will be the people, and the load testing tool will be the house. The system counts as the house as well, but it is more like the actions that you can do in it.

First, move the script into the loading tool. Bring the data for each and every piece needed to run. Just like you would do with a moving van. Bring the furniture and personal items that each person will need to coexist in that house.

Once there, you must assign each person a room. The scripts will receive a similar treatment. You must configure them to be a multiple set of users. You must configure them in special ways that they will run for this validation. First, I recommend you to put 3 to 5 concurrent users running the script that you just created. Those are good enough as 3 to 5 people is what usually lives in a house. Whenever possible aim at a full house of 5.

## REPEAT THE TIMES TOGETHER

We will focus now on running just a few times together to make sure that we do not have initial bumps. Different from what what we did in the last phase, here we will aim towards 10 iterations per virtual user. The higher number of repetitions is because we must make sure that they will not collide or fight for data.

This execution will have no stops, so avoid wait times in between steps. Configure them to start all at the same time. When you do this, you will increase the chances of them trying to do the same step at the same time.

This will be just like a house with a full family. They must be fine sharing common places like the kitchen. Everybody can be there doing their thing at the same time in the kitchen.

Other rooms will not allow you to have many people at the same time, like the bathroom. You can have only one person at a time there. Maybe if the family is open enough you could have more people there at once. One person taking a shower while the other gets ready combing their hair and brushing their teeth.

You must make sure that you were organized enough that the people in the house will respect this personal space.

## LONG TIME LIVING THERE

You have now validated that no one crashes after doing the same process for a few times. Now it is time to let them be that way for a while.

We will see if they can be left alone in the house for some time. Let them  do their things to check if they don’t fight for the bathroom. Even if you set the rules of behavior, they may respect them at the beginning for a few times. But, you could have trouble in the long run.

After a while, there will start fights over a toothbrush. The dad could be in a hurry to get to the office earlier and mess up everyone else’s bathroom schedule.

In the same way, this can happen to the scripts running concurrently. On the first iterations everything was fine, but after a while the data collides. Maybe your data could not be cycled. Or maybe it is cycling in a way that eventually the virtual users will fight for it.

We must do a concurrent run based on duration, instead of iterations. This way will ensure there are no issues.

Leave the scripts running for 10 minutes. Start the virtual users at the same time. Leave no waits in between steps and see how well they do in the long run.

## FAMILY INTERVENTION TOGETHER

![Problems together](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-39.jpg?resize=290%2C193&ssl=1)

You could encounter that the family has issues running any of these trials. If you find this, you must call them back and check the rules to make sure that there will be no fights.

You may not have been clear enough the first time. You may not have known that there could be a clash. There could be a parts where people would fight each other over something that you did not foresee.

In the same way, when you run these steps, check for any clash here. If you find any issue you must find out where and why are the virtual users crashing. It could be data configuration. Or it could be that there is no sufficient data for everyone to run. Maybe the process recorded did not take into account the shared spaces.

In any case, here you must fix any misbehavior and make sure that they will not fight with each other.

Repeat the process until everyone can coexist without any problem for a given period of time. You will ensure that you have a happy home with this current script.

## CONCLUSION

When you check for concurrency on your script, you will increase the certainty of its quality. This is crucial as this is often a source for problems once the execution starts.

Make sure that the script can coexist without any problem and you will be closer to having a bulletproof execution!

Next we will add some makeup to the script to make sure it looks pretty. We will ensure that it has all the accessories needed. Also that it is behaving exactly as needed.

But for now it is time to go. Vamonos!

![To be continued](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/Continuara.png?resize=713%2C225&ssl=1)

Besos <3

-Señor Performo