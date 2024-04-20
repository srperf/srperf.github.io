# DIFFERENCES BETWEEN FUNCTIONAL AND PERFORMANCE TEST CASES
![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-82.jpg?fit=1570%2C883&ssl=1)

Hola amigos!

Very often here and there I am thrown at projects that are about to finish functional testing, user acceptance and flavor testing. They are just getting ready to move into that “performance something testing”.

And even more often, a questionably smart person suggests, or should I say, commands that we should use the test cases they have for functional. In order to shorten the duration of the design of the performance test. So that we can start scripting scripting ASAP. After all, they do the same thing, right?

JESUCRISTO, NO!

Every automated script may be the same to management. Just like dogs, they are all dogs. But we are the ones working with those dogs. We know that their skill sets are different, making each breed adequate depending on the task at hand. Just ask my paisano, [_The dog whisperer_](https://en.wikipedia.org/wiki/Cesar_Millan). He will tell you that there are breeds that are good for certain things and some that are good for other things. Try protecting your home with my little friend the Chihuahua. He may not protect at all, but may be an awesome high pitch loud alarm when he is stepped on by accident.

The same way, functional testing cases may be like a Basset Hound. They are good for sniffing all over the place and methodical. But they are awfully slow and bulky.

On the other hand the performance test cases may be like a German Shepherd. Quick as a flash and slim for tight spots. But not so smart on decisions and a little impatient.

So here are some key differences explained in my own peculiar way.

## DETAILED VS STRAIGHT TO THE POINT

The purpose of automation is different for each type. That is why it should be avoided to mix them or confuse them. Both may be doing ‘almost’ the same steps, but not exactly in the same way.

Like with the dogs, the Basset Hound is like an airport drug and bomb detection dog. This chico will smell all over the luggage area to locate where suspicious substances may be. I mean really really everywhere. He will be sniffing all over every little corner, even several times on the same spot. Where on the other hand, the German Shepherd will just blaze through the area to grab the suspicious item and take it to safety. Or maybe even to save you, pulling you out of a fire in the same luggage area. Same process and area, different approach.

On the real deal a functional test case must make sure everything is clicked and un-clicked. It will be making sure no error is hiding on any corner or text field. By typing different combinations it will make sure the business rules work. Where performance cares little about validation. It should already have everything validated and working. It just wants to hit “Save” rapido! Filling just required fields, with the shortest and fastest possible data typing, to be as simple as possible.

##   

## ![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-92.jpg?resize=300%2C300&ssl=1)FRONT VS BACK

Both automated scripts will work on separated levels, chasing each their life purpose. To find or to fetch.

You will never see a rescue dog. Unless you are the unlucky person to be on an emergency. The one that has to be rescued. On the other hand, you often see that cute puppy smelling your ass making sure you don’t have any coke. Again this is because the Basset has to check everywhere, especially where people is. And the Shepherd may jump over the roof. Then go to the basement or go around every possible obstacle (you may be one, standing there). Just to save the person with problemos or to remove that bomb.

In the same way, functional scripts will deal mostly on the client or the front end. There you may even be able to see them working live. They will click here and there. But the performance ones will go behind. They don’t care about the client computer. They just want to go and fetch the message that the server replied to their requests.

## REUSE VS AVOID CROWDS

The main goal of automating is also entirely different from one to the other. They were created to fulfill different purposes.

Your cute Basset will be there years and years. Will be getting used to smell and search several times. Just needs training here and there, on the rare occasion new drugs or explosives appear. Maybe even if you build a new terminal. Here the rescuer Shepherds are specialized on that mission and that is it. Many times they retire after one or two rescues and they will rarely repeat it more. Small changes may really confuse them.

The same way functional automation was build to easily test again and again. The solution can be used with the same billion patterns. Helps the poor tester to not to loose their minds repeating the same task so many times on every fix or release. On the other hand, performance automation was created to avoid having a room full of people. All of them counting to 3 and then clicking at the same time as fast as possible to generate load. Imagine that you have to test 10,000 people using the software and you have no automation. Mi madre!

## UNO VS MANY![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-93.jpg?resize=300%2C300&ssl=1)

The way to handle data is very different as well. To handle it, to prepare it and to generate it will be very different, because the different ways each type of automation uses it.

When the Basset is smelling all over the place one person at a time, you have only one, tops two at a time, smelling one person and done, next! Where the Shepherds may be many entering into the emergency many at the same time. You don’t want them fighting to save the same person, before they all go to the next person. Or going back into the luggage area. Just to find that there is no one else to save. He will be trapped. Unable to help anyone. Poor Pup!

In the same way a functional script may need data for every possible combination that it will be testing, but it will do it only once, maybe twice, but testing every possible combination. Where performance scripts will not only require the same record several times because they will repeat a lot, but different records that each virtual user can access for itself, as we don’t want them fighting to work with the same given parameter.

## MANY VS FEW

Given the nature of each testing phase, there should be many functional test cases and few performance test cases.

Our sniffy buddy will repeat the same area as different planes land, repeating different combinations for each or even different actions, where the search will not be the same if the luggage area has a flight coming from Colombia, from one that comes from Vatican City, maybe those cardinals are be bringing strong ashes! Where the Shepherd goes through the luggage area only in one way, in, out, done! But several times doing exactly the same steps, at the same time.

Functional test cases may have several different flows for the same business process, functions, multiple, negative, positive and many other on the same business process, making it difficult to pick the one that may be good for performance (tip, none is). Where a performance test case just has one, that optimal route that gets the enchilada with the least clicks.

## FINALLY

Por favor! Don’t let anyone bully you into using functional test cases to create performance test scripts. Or if you are on the other side, don’t be that manager who tries to use functional for performance.

It may be seen as smart savings. But this approach will be a huge waste of time and resources (money money!). You might not end up with a test script that fulfills the need loading the system in a wrong or useless way. It would be like testing with the squeaky Chihuahua.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/05/ArtBoard-Image-102.jpg?resize=300%2C169&ssl=1)

Do good, perform well and be feliz!

Besos! <3

-Señor Performo