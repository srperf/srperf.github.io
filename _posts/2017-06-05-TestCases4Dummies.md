# THE IMPORTANCE OF TEST CASES FOR DUMMIES
  
![Performo test cases dummies](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/ArtBoard-Image-14.jpg?fit=1200%2C600&ssl=1)

This topic goes in honor of a friend of mine who reminded me that it was necessary to talk about the importance of test cases quality. To be shared among the testing community. Here I am implying the whole testing community because this is importante not only for performance testing. I believe it is beneficial for all  of the testing practices.

To start let me tell you a story,  and it starts with the screen getting the image blurred while we hear harp sounds and the old image starts to appear. Traveling into the past…

## STORY TIME

_Once upon a time, a brave consultant was arriving at a client’s office. Happy and eager on the first day for that project. He was supposed to test an SAP GUI environment, which was his specialty here and there… or something Performance. He was conducted to a meeting room to meet the manager and kickoff the project._

_After the proper introductions were made, the manager starts to try to leave the meeting room. While just mumbling something like: “Thank you very much I look forward seeing some scripts completed soon. I guess you may even have one finished by end of day today!”.  To which the consultant was right away speechless and with an undeniable concerned expression._

_The manager, noticing his unsettling facial expression stopped his escape stride and asked “What’s up?”._

_Barely recovering his breath, the poor consultant just managed to spit some babbling “W… Well, I need you to give me some time with the users or some expert user first. So that I can create the test cases… And to find out how to use and then test your SAP system”._

_The client almost lost it. Went all bananas while his body was agitating like a chihuahua that just had a red bull. He said almost shouting “I thought you had some experience testing SAP! I was told that I would get an expert! Especially after what I am paying here! I can’t believe this! How is this possible that you need me to tell you how to use SAP???”. This left again a peculiar expression on the consul__tant’s face._ 

![A tester is sad](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/performoSad.jpg?resize=150%2C150&ssl=1)

_After a few seconds the consultant dragged all the air he could get on his lungs and all the wits he could get on his cojones, and started a speech…_

I will stop the story here for a bit to not to ruin the ending and give some learning before the climax comes.

## COMMON PROBLEMS WITH TEST CASES

There is a problem that often arises with test cases. It is that they are created from functional cases, which is wrong and bad and [badong](http://www.urbandictionary.com/define.php?term=badong) for several reasons. I rambled about those already on [an earlier post](https://www.srperf.com/functional-vs-performance-test-cases/). But aside of the explanations of why this should not be, another important piece is the reason for this to happen.  And the answer is that this happens often because a “wise” manager thinks it is easier that way… Maybe cheaper… Or faster… Hopefully all of the above. Which we already know is all of the above wrong.

In order to not to fall into this mistake, the best option is always to get access to the expert on the business process and spend from 30 to 60 minutes documenting the steps to create the almighty test case. Don’t try to save on this vital task, you could end up training a doberman to act like a cat. Maybe even worse like a Chihuahua.

There is another great problem that often happens by doing this. Not only to performance testers but to all testers that depend on test cases to do their work.

Picture this. Somehow you receive a test case to work. And it reads something like this:

1. Process a purchase order.
2. With the Order number create a delivery process.
3. Absquatulate the cacoethes transcender and ionize a flaring ergometer to generate a fankleID.
4. Confirm the shipment on the galligaskination transaction.
5. Save.

I am sure your have been there. With the familiar expression…

![Test cases not for dummies](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/performoConfused.jpg?resize=150%2C150&ssl=1)

## KEEP IT CLEAR AND SIMPLE STUPID – KICASS!

This test case was written for an expert on SAP. Which includes… all that… whatever all of those steps meant. Of course requires someone that not only knows what the heck a [cacoethes](https://en.oxforddictionaries.com/definition/cacoethes) transcender is, but a lot of the customization done to the purchase order transaction. Not to mention someone that knows what the F with the custom [galligaskination](https://en.oxforddictionaries.com/definition/galligaskins) transaction. And no it has nothing to do with Zach Galifianakis.

Wouldn’t it be better that it was written something like this?

1. Open SAP Logon and access the XXX environment.
2. Type the user and password and press enter.
3. On the top left of the screen click on the arrow to type the transaction ‘VA01’ and press enter.
4. Type ‘001’ on the Org ID field, ‘AAA’ on the company field.
5. etc.

I hope you see the point here. A test case has to be very detailed. This means that it has to be written for dummies. Describing steps that your grandma can understand and follow (who barely knows how to use Facebook, thank god). This is straight forward for evident reasons and brings several advantages.

## ADVANTAGES

One of them is that there will be no confusions. You have clear repeatable steps. Every time that someone reads them. Regardless of who is the person testing. Because everybody pastes right clicking and selecting paste, there is no other way.

Another one is that the person testing or automating will not need to know anything about the industry. Imagine you were testing some NASA’s systems. You would actually need a rocket scientist tester! (Dinero dinero!)

And last, you wont need someone who needs to be an expert on the platform, or in the customization you may have done to the system. Their enterprise solutions are tweaked often. They buy them, and change them to be useful to their particular needs.

Having these clear test cases, your tester just needs to know how to validate the steps or  know how to automate on a specific platform. Without requiring knowledge of the customization you may have made. Neither to have any knowledge on the business.

For this reason, imagine how expensive it will be (not to mention hard to find) to get a tester expert on SAP automation, expert on NASA’s customization, mind reader to know what customization you may have different  from his previous client. And the cherry on the cake. A freaking rocket scientist!!!

## END OF THE TALE

Back to the story.

_When the poor consultant recovered his breath from the client’s ramble he just quietly replied._

_“I am sorry but I absolutely need you to help me to find out and document the steps for the tests. To be honest I am not an SAP expert. I actually don’t think anyone can call himself a 100% SAP expert._

_“I am an SAP performance test expert. One of the best ones you will find BTW. I know really well how to stress that bastard!_

_“But I actually don’t know very well how to use it. I have been indeed on several projects with several clients using SAP, but they all used it differently. You sell cereal. My last client sold toys. The one before sold hamburgers. And the ones before: medical instruments, insurance, video games, etc. And no one used the system the same way. They have different products. Hence different logistics._

_“They even stress different areas of the system on a daily basis. Some even lack complete modules._

_“Yes you are paying so  much because I am a testing expert. Imagine how expensive it would be an everything expert. Most of the time I don’t even know what are the steps doing. Most probably I will have no idea of what your steps do, after I am done here ._

_“But there is something I can totally assure you. The steps are going to be automated and executed flawlessly. At a level that the very best ones in the industry do it_

_“I need you to show me how you use your system in your particular way, or you could go out and look for that omnipotent expert. Good luck with that._

_The consultant dropped the mic and after a few moments of silence the client slowly started clapping and stood up. Kept clapping louder and faster until it hurt. Right after, the client almost hugged the consultant. The client directed him with fanfare to the wing where the expert users were working._

![Performo Out drop mic](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/performo_Out.jpg?resize=300%2C225&ssl=1)

_And they lived happily ever after._

## CLOSING

Of course it did not finish like that. The client had a slightly pissed off expression as he had to swallow his words. The client said quietly: _“I see now. I will try to get you some face time with the experts users”._ Using the joyful tone of someone who just lost a $100 USD bet. He just learned a tough lesson in a hard way.

We have now learned this as well. Some of the huge advantages that come having detailed test cases. In a way, that didn’t hurt, I hope. Some of these advantages are clearing the dependencies of expertise on other areas different than testing. Which decreases the cost of the testers hourly rate considerably.

Next advantage. The steps are repeated exactly the same way every time. All through testing cycles.

First and foremost, there are several other advantages on having test cases for dummies. However, that is a whole new talk for another day. Ultimately I think that is enough for today amigos. Lets go and stay feliz! Vamonos!

Besos <3

-Señor Performo