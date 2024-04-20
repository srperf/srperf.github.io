---
layout: post
author: srperf
---
# PERFORMANCE TEST SCRIPT – HOW DOES IT REALLY WORK?
  
![Performance scripts how works](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/ArtBoard-Image-16.jpg?fit=1000%2C500&ssl=1)

I have noticed several times that many people do not know how does the performance test automation work. Not only clients, but even some testers seem to be slightly confused about the true ways of the performance test script.

Again I blame a little these misconceptions on functional test automation. There are several differences among these, some I have already rambled about on a previous [post](https://www.srperf.com/functional-vs-performance-test-cases/).

Clients, managers and even some testers alike have gotten used to see the execution of the functional automated script. They love to see those buttons to be magically pressed on their app, giving them that warm sensation of something being done. But performance test scripts do not work by actually clicking. It would be a waste.

I am going to use one cool description for performance automation to show you how it works.

## PERFORMANCE TEST AUTOMATION IS LIKE HACKING

![Señor hacker performo](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/ArtBoard-Image-15.jpg?resize=300%2C300&ssl=1)Say whaaaaa? Are you surprised? Don’t be! This is so true that you would be shocked how similar it is that actually it could be the same. At times it is.

There is a term called [DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack) (stands for Distributed Denial of Service) that refers to a technique some hackers use to make web sites and apps slow or even unresponsive. They do this by sending a big amount of requests to the attacked site from many different computers at the same time to bring it down.

If this doesn’t sound familiar enough, on the previous sentence change requests for clicks. Attacked for tested. Finally change computers for Load generators. Now read this:

They do this by sending a big amount of CLICKS to the TESTED site from many LOAD GENERATORS at the same time to CHECK PERFORMANCE. – Mind blown!

In essence this is what load testing is. [Send many](https://www.srperf.com/reason-performance-automation/) requests to the main server to see how it handles that many. Even at times you may be interested into checking if you can bring it down like the hacker!

## THEY JUST DWELL ON THE BACK END

Most of the performance test scripts do not actually click the button. Some do, but those are extreme cases, more on that later.

Clicking buttons is really expensive in terms of hardware. To have a button created for every virtual user is a lot. We usually don’t care about them (the front end). It is easier to just send the message that the button generates.

Imagine a real life example. A fast food kitchen works a lot like an application server. Where you have a lot of cashiers taking orders (clicking the buttons on the app). They type your order sending it to the kitchen through service tickets that appear in a tiny printer inside the kitchen. Then the cook prepares it and returns the order on the window so that the cashier can pick it up.

So if you want to load test the cook, what would it be easier? To get a lot of ordering machines? Or to just plug one computer to the printer so it sends similar tickets to the kitchen?

This way, as long as you know how to make the printer print what you want (in a way that the cook recognizes) you can send a lot with just one computer! And you don’t even need a fancy computer! Nowadays even many cellphones can print stuff. Making it super cheap.

## SOMETIMES YOU HAVE TO GO FRONT END

I said previously that we would go to the back end most of the times. But some times this is going to be impossible as the message will be impossible to be created.

Many vendors create their software in a way that only their mothers may be able to recognize them. And even some times they wont be able to tell. Or just with encrypted messages, same story.

Imagine again the example of the printer in the kitchen. There are those hellish peripherals that will only work with what the vendor made them. Good luck if you don’t have the printer driver. Or a special cable. Or a software to call it. All closed and impossible to test.

Here the only way is to get many terminals and automate robot arms to click doing the kitchen orders. Sorry, no awesome printing 1000 orders from your cellphone.

## CREATING THE MESSAGE IS LIKE SPYING

There is another big component. It is to create a message that can be recognized by the server. Just like faking that you are someone else. Multiple someone elses. This is very similar to other hacking techniques. One of these is called a “[man in the middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)“.

A man in the middle attack basically is someone or something tapping the wire where you are having a conversation. Listening and paying close attention to the conversation. Pretty much like you used to do with old landlines. When someone was talking on the phone and you quietly lifted the speaker of another phone to hear. You little vouyerist!

This way you can take notes and record those conversations. Imagine a foreign restaurant you want to prank. You would tap into the line and listen people making orders:

“Hola, llama a taco pelota le atiende Lupe. Quien habla? – Hola Lupe soy Pepe. Quiero 3 tortas. Gracias”.

We will spy on some conversations the same way so that we can learn how to talk to this server.

“Hola, llama a taco pelota le atiende Francisco. Quien habla? – Hola Francisco soy Juan. Quiero 1 pizza. Gracias”.

Now that we have some we need to create a message.

## FORGING REQUESTS

Performance test scripts will just replicate the message that creates the order. They wont actually pick up a phone. Neither click the dial keys. Not even a person will speak. We will have a recorded message.

But for this to work, we need to identify the parts that change. We will structure messages identifying what changes. We may not even know the language they are speaking but we notice the differences.

“Hola, habla a taco pelota le atiende CHANGE. Quien Habla? -Hola CHANGE soy CHANGE. Quiero CHANGE. Gracias”.

![Performance kitchen server](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/ArtBoard-Image-17.jpg?resize=300%2C300&ssl=1)We have now a working message. Knowing what to change and insert on them is a whole topic on itself. But once we know what to change and make sense, we will be able to create as many combinations as possible. Have an automatic player and call orders nonstop without much trouble.

This way the server will think we are someone else and take our order. Even if we don’t know Spanish we can make orders that the server will recognize.

These messages are often very complicated to forge. They may be on Chinese, alien or hieroglyphs. The challenge is to assemble a message that the other side will recognize and do as we request without hanging on us. Forbidden access! Oh no!

## FINALLY

So now you know performance automation is not about recording pretty clicks and seeing them on the screen happening (if you are lucky). Neither timing those clicks. It is about copying the messages that the clicks do. Forging similar messages and just directly sending them in a cheap way.

However there are other ways. But what I just described to you is the most optimal (and how most performance tools work). If you want to see how the cook manages the kitchen at lunch hour when everybody wants their tacos, follow these tips.

Lets go and create some load. I mean, order lots of tacos.

VAMONOS!

Besos <3

-Señor Performo