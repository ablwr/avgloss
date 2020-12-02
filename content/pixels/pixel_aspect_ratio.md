---
title: Chroma subsampling
date: 2020-01-02
author: ablwr
modifiedDate: null
description: "Chroma subsampling"
---

Something important to understand about video is that pixels can be represented using different aspect ratios. This is not the aspect ratio of the overall picture, but the size of the individual pixels themselves that make up each video frame. There are a few concepts to understand when working with this issue.  

* Pixel Aspect Ratio: The horizontal to vertical ratio of each, rectangular, physical pixel
* Storage Aspect Ratio: The horizontal to vertical ratio of solely the number of pixels in each direction
* Display Aspect Ratio: The combination (which occurs by multiplication) of both the pixel aspect ratio and storage aspect ratio giving the aspect ratio as experienced by the viewer.
  
For the most part, this will not be an issue that requires deep comprehension when working with audiovisual material. However, if during the quality control process, videos are appearing to be "squished" and either too thin or too wide, it may be worth investigating what the intended frame aspect ratio and pixel aspect ratio are, and whether there is a discrepancy between the container and the codec with the material. Playing the material back in different video players may produce different results.  

Some layer of media archeology will have to happen here to understand what happened with these materials: did they get digitized to an incorrect specification, or was the material changed to a different media container? These are actions taken on the file that could shift how they appear and replay using contemporary media players