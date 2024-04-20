# LOAD AUTOMATION – UI vs PROTOCOL
  
![Different protocols load](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/HeaderProtocolsUI.jpg?fit=1200%2C600&ssl=1)

Lately new tools for load test automation have popped out that blur the distinction on the type of automation that they do. The principal types are Protocol or UI. As usual… I feel that this is causing some confusion.

It is my dutty to try to bring some clarity on the differences and the ups and downs for each. Lets begin!

## PERFORMANCE AUTOMATION

![Decisions](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/Buttons.png?resize=198%2C300&ssl=1)

Generally speaking automation for [load testing (not performance)](https://www.srperf.com/performance-load-different/) can happen in two forms or types.

**PROTOCOL:** One of them is the protocol type. This one consists of simulating or forging the communication in between the client and the solution that we are trying to test. It is not something too fancy, it is just a matter of reverse engineering the messages to forge new ones that look similar to the application so it will not distinguish and accept them.

**UI:** The other one is the UI type. This type doesnt care much about what is being sent to the solution that is being tested. Instead, it’s concerns are with what the user has to do on the client’s front end to interact with the solution. The deal with this one will be mostly to try to figure out how to do the actual clicks or key presses on the front end.

## EXAMPLE TIME!

As usual, in case it was not clear lets use an example so that you will understand better.

In this example we have a client application and the central server. Think of them as a remote controller and a TV respectively. The remote would be the client application (the UI). The TV will be the server responding to the commands from the application (the remote).

On this example, automation is a robot that somehow will do the remote’s tasks of sending commands to the TV.

![Señor Roboto](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/Roboto.png?resize=139%2C300&ssl=1)

Welcome back to Señor Roboto.

**UI:** In the case of an automation at the UI level, Señor Roboto will be configured to be clicking the remote’s actual buttons. He will have to identify the power button, the channel up and down buttons, input, mute and the most frequently used ones. After he identifies them he must try the actions one can do with them, such as to press (click) as indicated to send the command to the TV. It will not care much how that comand is sent.

**PROTOCOL:** On the other hand, the protocol automation will work very different. Here, Señor roboto will first have infrared transmiters and vision like the Super Hombre. With it he will see what the remote is sending every time a person clicks on it. He will record that signal and learn how to copy it. Then it will send the signal using his transmiter. On this he will have to make sure that the signals he sends are accepted by the TV as if it was the remote who was sending them. He will impersonate the remote.

![Infra red automation](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/Gort_Firing.jpg?resize=300%2C239&ssl=1)

## ADVANTAGES

Both types of automation have their advantages which bring some benefits to each.

![automated click](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/robot-push-button-13419161.jpg?resize=300%2C175&ssl=1)

**UI:** Generally, the UI automation has some advantages over the protocol type. I think the greatest advantage of the UI automation is that it often gets rid of most CORRELATION needs, making it easier for newbie scripters to automate them. Correlations are often the biggest headaches for protocol scripters which get an easier time through drag and drop automation. Also, this type of automation tends to be a bit mor stable and resilient to back end changes as it focuses on the front end objects that do not change that frequently.

**PROTOCOL:** The advantages of the protocol automation are, first that it tends to be considerably lighter than the UI automation. Lighter in terms of resources needed by the load generator; such as CPU and RAM. This enables the protocol automation to simulate hundreds (or even thousands) of concurrent threads/vUsers on a single box. As well it gives the scripter some visibility of what is happening internally on the tested application’s communications.

## DISADVANTAGES

On the other hand both types of automation have some disadvantages that the other type counteracts but but also with some more disadvantages of their own.

![Too many resources](https://i0.wp.com/www.srperf.com/wp-content/uploads/2019/09/pic-remote-controls-pile-1.jpg?resize=300%2C290&ssl=1)

**UI:** This automation is generally heavy in terms of resource utilization. The reason for this is that the automation tool has to render, create or plainly open the application or web browser and renders the whole thing. Just as in our example, Señor Roboto would need many remote controllers. This type of automation is common in [functional](https://www.srperf.com/functional-vs-performance-test-cases/) testing as it is not so much of a hassle automating (even as at times it is). But in load testing is a fatal blow. Some of this tools may allow you to run 2, maybe 3 or even 5 threads or virtual users per computer. Good luck running a test needing a few hundreds or even thousands of threads or virtual users.

**PROTOCOL:** This automation is considerably lighter than the UI in orders of magnitude. But what it gains in lightness you must pay it in the currency of complexity. The tools simulate the calls which are often in forms of machine code such as HTTP, service calls, binaries and some times even encrypted. To be able to simulate a call the scripter often has to reverse engineer the tested solution. This will make you require a scripter(s) well versed in several IT topics. Not to mention someone good at doing the dreaded correlations and will also need to code stuff. Some may be afraid at this.

Don’t be afraid. Be veeeery afraid! (No, JK, seriously don’t be).

## WHICH ONE IS BETTER?

I must give my favorite answer as I do for any good question, **IT DEPENDS**.

Most of the time I would recommend the **protocol** automation for load testing, as the load generation process becomes expensive and convoluted through UI when you need to simulate even smallish amounts of threads or users. Not to mention hundreds or even thousands.

Don’t be shy, lazy or afraid. Correlating and forging protocol messages is a beautiful **practice**, but the name says it. It just needs _practice_.

But for the UI side, there are few times where your only option is to simulate through the UI. It may be because the protocol communication is undecipherable, maybe it is proprietary… Or you just do not have a person good at protocol scripting, just beware, this last option will be more expensive in the long term. Just get a good scripter, please. PLEASE!

## CONCLUSION

Protocol automation and UI automation are on themselves two very different beasts. The choice on which one to use will depend on the type of testing that you are trying to do. Protocol based testing is the general recomendation for load testing.

In the few times that it is NOT possible to automate through protocol, UI automation may be used as a last resource.

Besos <3