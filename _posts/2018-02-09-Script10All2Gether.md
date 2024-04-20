---
layout: post
author: srperf
---
# SCRIPTING 10: EVERYTHING TOGETHER  
![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-42.jpg?fit=1200%2C600&ssl=1)

The last step for the [scripting best practice series](https://www.srperf.com/scripting-date-first/) is to test that everything can run together. Our script is almost finished. This step consists of running the script together with all of the scripts in the project.

Because of this, this last step has to be done until all of the other scripts are ready to be run together. In other words, it has to be done at the end of the creation process of all of the scripts, once the scenario creation process has started. This makes the step to intersect with the scenario creation best practice. But we will talk about that best practice in future posts.

As you are testing all of the scripts together, You can think it as some sort of small scenario test. Instead, you are doing this step to ensure that the script that you just finished does not collide with other scripts. The goal is to make sure you have no errors on this step. You will have a bulletproof script. Even better, as you will have a bunch of bulletproof scripts,  you will have as well a bulletproof scenario.

Let’s get going and walk through the steps.

## THE POINT EVERYTHING TOGETHER

## The focus of this step is simple. It is to try to see if your script can run for a while, together with the rest of the scripts in the project. In other words, to run with every script on your current project.

On previous steps of the best practice, you ran multiple people doing the same thing. Now you are going to expand that. You are going to add to the mix, the rest of the scripts as well. In other words, your multiple people doing the same thing together with other people doing other things.

Here you are going to check that such fights and collisions for data will not happen. Those collisions can make a user throw errors on your test or even to fail completely. Similar to the house test we did earlier. There is a bunch of people in the house doing a life and interacting. Just like a family with the same last name in it in the same appartment.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-47.jpg?resize=500%2C500&ssl=1)  
But their apartment is in apartment building. Many different families interacting. Most of them minding their own business, but at times sharing common areas. Such as sharing an elevator, where they must make sure they don’t overload it. Others crossing through the gym while trying to go to the pool. They must make sure to not to step on the ones using the gym.

Make sure they do not collide on those small areas where they may have to interact.

## PART OF ANOTHER BEST PRACTICE

Some times, this test may not be done directly by the scripter.

This step is different in the way its done and in the people included. It has someone that has power over all the scripts contained in the project plan. This because we are running something close to a full load scenario.

Most of the time a test lead will be the one who can put all the scripts together. He will be doing this as part of the best practice for scenario creation. That step is a concurrent script run.

Regardless of this, if the test lead is running this step, the scripters must be present. Or at least, they must be easy to reach. There is the possibility that you could find issues with a script. So, who you’re gonna call?

Not the ghost busters, neither the test lead. You will call the scripter that created the script that has issues. Or the scripters, as usually a collision means that the issue is found in more than one script.

## RUN EVERYTHING IN A QUICK MIX

This step in the best practice will be like throwing everything into a blender. Here we will do a quick everything smoothie.

We will put three pieces of each ingredient into the blender. Lets create a simple scenario and configure three virtual users with each different script that you have. Prepare them to start all at the same time and set the blender at max speed. This means no wait times in between steps or iterations. We want all of them running as fast as possible.

In a real load test the scripts should wait in between commands. But on this step we are not aiming at the execution of a load test. We are aiming at testing the test.

So in order to quickly test if they do not collide, we need them to collide as soon as possible. Put three of each to run as fast as possible for 10 minutes. Let them run for that period of time and check if they can make it.

Again, this doesn’t focuses on anything on the tested system. This is just about testing the test. Validate that the test can run for a while with no problems for anybody.

## FIX IF COLLIDED

If you find issues with one or more scripts, we should check the problem. The causes could be many, but the most frequentis data collision with another script.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/11/ArtBoard-Image-48.jpg?resize=500%2C800&ssl=1)  
Here you must detect if different processes share the same data when they shouldn’t.

The action to take is going to be different depending on your role. If you are a test lead, you must get the scripters responsible for the scripts together. So that they can talk about the steps of each script and understand where may be the collision to find a fix.

You could have another situation on which the same scripter did both scripts. This one will be easier as one person has no discussion to do with himself. It will be just figuring out fixes. Although, it may be needed to contact the system users to get clarification on why the collision may be happening.

If you are the scripter, you just have to contact your peer who developed the other conflicting script. Or just figure out why your script(s) is(are) failing.

After the fixes are applied, repeat the quick execution process until you get a flawless execution for ten minutes. To ensure better quality, extend or repeat the time that this test lasts. With these efforts, you will have extra confidence in your scripts. All of the scripts

## FINALLY!

Bravo amigos! At last, after so many steps and recommendations we are done. We have finally completed all of the steps to ensure that we have flawless scripts. They are ready and sharp like the blade of a samurai. Strong as Hercules resisting any possible challenge.

The script is in a state that I like to call _bulletproof_. Ready for everything!

And it isn’t just that. Now the script is for sure ready to be run with others. The script is at the point where you can can say with confidence that it will not fail on itself. If there is any error on the execution, you are sure it will come from the tested solution. Not from your script.

The huge advantage here is that you will know for sure your script does not break. You will get rid forever from the blame some managers try to impose on you saying “_for sure what is failing is their test, not our system_“.

Oh no no no, my scripts are tested for failures. If any problem came it is because the system broke, or worse, because [something was changed](https://en.wikiquote.org/wiki/Edward_V._Berard).

And that is it with scripting best practices!

I hope you have enjoyed the series. Please write back if there are any comments and suggestions that you consider should be neat for me to add.

Next we will continue with the scenario creation best practices! But for now, we are done! Vamonos!

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/Continuara.png?resize=713%2C225&ssl=1)

Besos <3

-Señor Performo