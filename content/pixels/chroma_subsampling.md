---
title: Chroma subsampling
date: 2020-01-02
author: ablwr
modifiedDate: null
description: "Chroma subsampling"
---

Chroma subsampling is the process of encoding frames of video that save less information about chroma (color properties) than luma (perceived brightness) in each pixel.
Here are some common chroma subsampling patterns used in preservation:
    • 4:4:4 This is not actually subsampling at all, but equal capture of luma and chroma fields
    • 4:2:2 This is subsampled at half the full potential chroma across two fields and full luma. This is broadcast standard.
    • 4:2:0 This is subsampled at full luma and half of one chroma field. This is also common in production environments and saves space for transmission.
Remember that in YCbCr video, chroma is in both the Cb and Cr channels so each gets subsampled.