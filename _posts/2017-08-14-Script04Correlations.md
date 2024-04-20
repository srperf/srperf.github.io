# SCRIPTING 04: HUNTING CORRELATIONS
  
![Script correlations](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/08/ArtBoard-Image-34.jpg?fit=1200%2C600&ssl=1)

On this post we will examine the process of finding and doing correlations. The [best practice](https://www.srperf.com/scripting-date-first/) has brought you to the core point of the process. This is for most scripting as it focuses on HTTP and other web transfer protocols.

With this best practice tips you will be able to correlate like a pro. You will be able to identify the exact point where the values are hiding. This will give you the terminator vision that will point exactly where it is; what is around that value; and how to find it. That detection vision may even show you if his boots, jeans and jacket will fit you.

The best practice will leave your code with all the correlations that it may need. All of this while you get the values really fast. Instead of trying to guess, you will know exactly where are those values. Plus you will get certainty that you are getting them for sure. And the right ones too!

Empecemos, lets move on to the first step.

## SPOT THEM IN THE JUNGLE

![Spot correlations](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/08/jurassic_park_robert_muldoon_H_0615_02.c93fe49de09b2de9701ad9ba5d47b839.jpg?resize=150%2C150&ssl=1)You must star looking for the parameter in the jungle of data that was transferred on the recordings. I call this the jungle of data. A bunch of weird calls and responses that happened between your computer and the server. They are usually [HTTP](https://www.tutorialspoint.com/http/http_requests.htm) requests and responses. They are saved by most automating tools out there.

You have the value that you noticed was changing on the [recorded](https://www.srperf.com/scrpting-02-bring-pairs/) script. You must search that value on the communication recorded in between the client and the server.

Once you find them, create a marker on the exact location. Such as a hunter would do when he finds the nest of his pray.

This will help you to identify exactly what request generated the response where you need to correlate. Without it maybe you would place the correlations code on the wrong request of your script. Instead, with this you will know exactly where do you have to correlate.

Instead of looking for the prey on the wrong rabbit hole, you will know which one is the one. Where that dang wabbit is hiding! Do not fall into the mistake of looking into the one where you last saw him. He came from beneath!

## IDENTIFY THE CORRELATIONS SURROUNDINGS

You know exactly where is the data appearing for the first time. Now, you must identify what is surrounding it. In the case of HTTP communication it usually has hypertext or tags around. Those are easy to identify.

Example:

<escribo **parametro>**_TACOS_**</escribo**>

I have marked what is surrounding it that may be the clue to identify it. Of course we want to get TACOS. It is surrounded by **_parametro>_** and **_</escribo_**. Take note of the surroundings for the correlations.

Another may be slightly more complex. It could be part of the hypertext tag. Something like:

<**escribo valor=”**TACOS**“>**Pastor con queso</escribo>

Here they are slightly different but the concept remains the same. Take note that on the left and right of TACOS we have: _**escribo valor=”**_ and _**“> .**_ Be aware of the difference. You may wonder why on the left I kept more. I will explain a little more below. But first a third example.

The communication could be different than regular hypertext tags. Something like:

ØXÌõá£GñùË/½XMLLT?**ûÙÏªcGŽV**_TACOS_**W¯^ Ù**Uo¾ùfõƒü æÈ¼iëìÙ³±<˜µ8þ|Ìö_ýõXÇ?ü°:uêT|~÷îÝXÖ¥Ì£+þîÜ¹Ïôýµ¯}­zï½÷ªË—/WG

Now we have our TACOS in between  _**ûÙÏªcGŽV**_ and _**W¯^ Ù**_  . Make sure you know the surroundings of your prey. You will need to locate and cage it in between them. We truly want that head trophy hanging in your wall!

## FIND THE BEST HUNT

Now that you know what surrounds your pray you have better chances to hunt it. But we cannot get cocky and hunt for it right away. We must make sure that we can hunt the right one.

At times the hiding place for our prey will be in between a rock and a palm tree. But there are many other places where that can happen right. If we send hunters and tell them, bring me whats in between the tree and the rock, they may bring anything.

Now that you know the prey is in between the rock and the tree, we must check the jungle again. We must make sure that there are no other confusing trees and rocks.

Go to your recorded HTTP communication. Search for the surroundings you identified. Check on the area after the response that you identified as the good one. If the first find is near your parameter it is awesome.

If it is not, you may have to keep searching for the next tree and rock, then the next and the next. Do this until you find the right one. Take note of how many rocks and trees you needed to search to find the prey. Later you will be able to say “_Find the tacos in between the third rock and the third tree_“.

## GROUP HUNTS

On a similar principle, you may be looking at correlating a series of values. This is slightly more complex but falls under the same principle.

Imagine you want to hunt a pack of prairie dogs. They will be hiding always in between dirt holes. This one is easier once you identify where are their holes.

You may see something like this.

_<holes>_

_<hole>Duggie</hole>_

_<hole>Perro</hole>_

_<hole>Cat<hole>_

_</holes>_

![Group Correlation](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/08/B0hAIIEIcAAU2Bz.jpg?resize=150%2C150&ssl=1)

Here we will catch at once everything that is in between a hole (no pun intended). So our surroundings will be _**hole>**_ and _**</**_. Nice and easy a bulk hunt.

## REPLACE WHAT IS CAGED

You have what surrounds your pray on both sides. Now we will proceed to put that on our script.

Identify the request that generates the parameter that you are looking for. On it indicate that you want to hunt whatever is in between the surroundings that you identified.

There is no way it can go wrong. You just tell it, it is in between a bush and a pond. The script will hunt for it with precision. You just have to make sure you give precise indications.

If your value was not the first one, you must tell that to your script. Hey script, would you please hunt for the value that is just on the fourth pond? You can ignore the others.

On the same way you can tell him to bring everything in between a pond and a bush. Just be careful here. A forest can have so many of them that you may break the script trying to catch so much at once. be wise.

## CORRELATIONS DONE

Follow these steps until you have identified and hunted everything on your script. Afterwards, run it to see if it works. Most probably it will run without a problem.

If there are problems most probably you forgot to hunt for something. Maybe it was not just tacos and you needed to catch tortas!

Next we will replace the parameters. But for now, vamonos!

![To be continued](https://i0.wp.com/www.srperf.com/wp-content/uploads/2017/06/Continuara.png?resize=300%2C95&ssl=1)

Besos<3

-Señor Performo