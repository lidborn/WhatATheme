---
title: FoV based LoD with Eyetracking
layout: post
post-image: "https://i.imgur.com/qQ2A1W0.jpeg"
description: A theis exploring game performance optimization using Eyetracking hardware
tags:
- Gamedev
- Thesis
- Rendering
- Optimization
---


This project will desribe the techniques, work, and results we reached in the thesis. The full paper might be published at a later date on the page. 

### Basis

The project aimed to figure out if you could improve performace in real-time rendering using eye tracking hardware. The idea is that the fovea, the area of the eye with the highest visual acuity only requires the maximal fidelity when rendering. all other visual zones.






This thesis tests an Foveated implementation of LoD. Regions closer to the central gaze point have a lower LoD level and objects in the periphery have a higher LoD value. The calculation of these areas is based on the distance the users are from the monitor, the size of the monitor, and the specific angle the area covers. This technique is combined with normal LoD and selects a value based on input from both. 




The images below shows the differet fovea regions on screen. As predicted only i tiny amount of the screen requires maximum render quality.</br>

>![](https://i.imgur.com/B7EVdij.png)![](https://i.imgur.com/pShANCx.png)

### Unity & Hardware

Unity was used to build a scene with a predetermined path for the camera to move in order for all test to be equal. Across all tests the only parameter changed is the LoD values used to render. These were determined by the user input and cannot be strictly equal. 

The tobii Eye X tracker was used in this experiment. It has the capability to determine how far the user is placed from the monitor and together with monitor data we could calculate all fovea regions on the screen, in terms of both pixels and physicals centimetres.

![](https://i.imgur.com/B7EVdij.png){:style="float: left;margin-right: 15px;margin-top: 7px;"}


 With this information in hand we have two things left to do. Optimize the program enough so that the GPU and CPU cost of using the eyetracker is less than the performance gained. And to determine how far whe can push the LoD levels without the user noticing the effect of the foveated LoD

<div style="clear:both;"></div>
### Optimization

So! onwards to step 1! First the cost. 


### Results



---
![](https://i.imgur.com/p1n1ntl.png)

**Video footage of the game**<br>
<iframe width="960 " height="540" src="https://www.youtube.com/embed/-aoo2GCB7ck" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[//]:<video controls width="400">
[//]:  <source src="FoV.webm" type="video/webm"/>