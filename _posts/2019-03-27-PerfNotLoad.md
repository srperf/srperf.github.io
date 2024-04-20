---
layout: post
author: srperf
---
# PERFORMANCE AND LOAD NOT INTERCHANGEABLE
  
![Load Perf Diferent](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/03/TitleLoadPerf.jpg?fit=1200%2C600&ssl=1)

Performance and load are different. I am not so uptight about terms and grammar naziing definitions, but I have been for a long time in situations where people try to talk to me about one thing but I understand something completely different. Mostly because one of the parties involved in the conversation lacks the right terms to refer to the topic.

![irony](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/03/irony.png?resize=282%2C179&ssl=1)

Kinda ironic

We should all do how [Plutarch](https://en.wikipedia.org/wiki/Call_a_spade_a_spade) said (ironically mistranslated), “let’s call a spade a spade, not a gardening tool”.

People have been asking me to use the gardening tool, the medical device or even worst a mysterious item referred universally as “the thing”.

And to the point that I want to state here, it is a mistake to use the terms ‘Performance Testing’ and ‘Load Testing’ interchangeably. It would be like using ‘Microsoft Office’ and ‘Microsoft Word’ interchangeably. If you do not see the point on that analogy, please read [THIS](https://www.quora.com/What-is-the-difference-between-MS-Word-and-MS-Office) and then come back so I can continue this rant.

## WHAT IS PERFORMANCE

There will be a post dedicated uniquely to describe performance testing as effectively as possible. For now we will say that Performance testing is a QA practice that tries to validate a systems reaction to a use.

That use could be organic, it could be done by a single user, a single click or even by a developer while writing code.

A performance test is done when you want to see how your system does under a given circumstance. And that circumstance is not always load, spike or stress.

The most frequent use for a performance test has been changing as the technology and trends have been changing as well. And that frequent use confuses people on what performance testing actually is.

## WHY CONFUSED?

On a beginning performance testing used to be done mostly to model and project capabilities on the hardware for a given use. People used to confuse it, thinking on modeling rather than testing.

![Wrong](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/03/bush-phone-meme.jpeg?resize=257%2C250&ssl=1)

Other times performance testing has been confused with performance optimization. That the focus of the effort was the after thought of polishing the response of a system. But sadly this was another misconception on the terms, a good example would be to confuse programming and debugging.

On the last iteration (no pun intended) of performance needs, [multiple user](https://www.srperf.com/functional-vs-performance-test-cases/) interaction came up. It started to get difficult to simulate because the number of users to be tested became ridiculously high. This gave birth to the practice of automated load testing which has been the biggest focus lately. Many QA environments have lost focus of the goals for performance testing and blindly dive into load tests thinking that it will be enough to mitigate any performance risk.

## LOAD=EXPENSIVE

Many times the QA areas may not really need to do a load test given the risk they are facing. Many may be able to mitigate the risk just by measuring the responses or hardware effects of single user loads or organic loads.

Nevertheless they keep attempting to use automation to measure response times and fulfill the true intent of performance testing. Trying to go through with load testing. In some perspective they may be trying to kill a single infantry soldier with a cannon. This is an expensive cannon. Companies are hiring these just because it is being used by everyone else. Some may be justified because they need to defend their fortresses against tanks. Others may be getting cannons cause a salesman said so.

Solving small performance risks with load testing cannons is expensive. Automation for performance requires lots of time, skill, knowledge and smartness to be pulled off. Skills that tend to be expensive per hour on the market. Skills that could be leveraged by a tool which itself is usually super expensive or requires even more skill.

![](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/03/28-bird-box.w700.h700.jpg?resize=243%2C243&ssl=1)

On top of that many rely on the automation to tell them some of those response times. Which can get interesting to measure when they face asynchronous processes. Ripley’s believe it or not, many keep trying to measure asynchronous processing time through automation…

For the last time, Performance testing is not automation or load automation.

## CLOSING

Performance testing is a huge practice and Load testing is a sub set of it. Do not confuse them or use them interchangeably. It could be a mistake to use the terms improperly when a risk you are trying to mitigate may be found in an easy way or missed completely because you went to the wrong approach out of inertia.

Performance testing means to know how your system is doing in terms of response and hardware under a particular use or scenario. Load testing is, well… Load. A single specific type of use.

Besos <3