---
title: Interlacing
date: 2020-01-02
author: ablwr
modifiedDate: null
description: "Interlacing"
---

Interlacing is for optimizing perceived motion in lossy video material. They can be more commonly identified as "annoying squiggly lines." Interlacing issues can most easily be seen during movement between frames, where uneven lines appear in places of motion. The concept of interlacing involves each frame containing 50% of the line information required for a full picture, and having even and odd frames replay half of the information quickly enough would result in a full-looking image. Interlacing was done intentionally at times when bandwidth was an issue, and video signals needed to be sent faster than the transfer of each full frame would allow. In contemporary video, this practice is no longer necessary and optimization for bandwidth is performed in different ways using compression techniques (See 4.2.2 Codecs for more information on that topic). Interlacing is a legacy problem, particularly when working with digitized analog video materials.

When interlacing is performed, every other scan line of a video frame is skipped. Which scan line gets skipped depends on if the Scan Order is set to Top Field First (TFF) or Bottom Field First (BFF).