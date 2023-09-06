---
title: Kappetalize!
layout: post
post-image: "https://img.itch.zone/aW1nLzIwNzIxOTAucG5n/original/W7i1u%2F.png"
description: An article discussing Kappetalize! Securing the 4th position for humor among 2500 games centered around the theme of "time is money". A short but sweet couch game where you try to steal money from the rich, theh poor, and your friends!
tags:
- Gamedev
- Project
- Ludum dare
---


A group of friends and I got together during a week to create the Ludum Dare game, "Kappetalize!" This article will delve into our experiences and insights during the creation process. The game jam duration  lasts for half a week so dont judge the bugs to harshly!


### Gameplay

The basic gameplay loop of the game is. Collect money from the environment or your friends, deposit the collected money to the bank and head back out to get more. During this loop you need to dodge attacks police officers, traffic, and your friends. If you get hit you loose a percentage of your money depending on how much money you have and how hard you got hit. Most money deposited in the bank when the time runs out wins

![](https://static.jam.host/raw/263/3/z/223da.gif)
![](https://i.imgur.com/6efxXC9.png)


### Ragdoll characters and physics

Janky ragdolling and physics is and endless source of fun! In Kappetalize money is quite heavy and the more money you have the harder you hit! Hitting harder also means getting more money escaping the pockets of your friends! This comes with its own drawback however, all the characters movement is also physics driven meaning more money = slower movement leading to some interesting balancing between risk and reward.

![](https://static.jam.host/raw/263/3/z/223ce.gif)

### Level creation

We focused on creating a open environment where pracritally all objects could be interacted with in some way, trees are filled with gold, the waterfountains sprays cash etc. 

In order to further make it clear for the players that these objects yield money there is a yellow outline shader on these object, the same outline is used on all loose cash on the ground to further telegraph to the player that yellow outline means money.



* [Link to the game](https://bojkott.itch.io/kappe)
* [Link to youtube](https://www.youtube.com/watch?v=-aoo2GCB7ck)
* [Like to ludum dare](https://ludumdare.com/)

---
![](https://static.jam.host/raw/263/3/z/223da.gif)

**Video footage of the game**<br>
<iframe width="960 " height="540" src="https://www.youtube.com/embed/-aoo2GCB7ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>