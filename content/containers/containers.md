---
title: Containers
date: 2020-01-02
author: ablwr
modifiedDate: null
description: "Containers"
---

Audiovisual material consists of multiple streams of data: a common structure is one video stream and one audio stream. There can be other streams, like additional audio streams for different "dubs" of a video with both English and French audio tracks, or embedded subtitles to handle both of those languages. These streams have to be “wrapped up” together into one format, and that is the file's container.  

Containers are what hold audiovisual materials together. They may also be referred to as "formats" or "wrappers." These terms are used interchangeably. Containers do more than just hold the contents of a file together. They are responsible for identifying the data, knowing how much of the data there is, understanding what kind of data streams are present and information about them, storing time data, self-identification data, and metadata about itself and its contents.  

Containers also establish the appropriate file extension for the file (like .mov or .mp3), which is why they are often thought of as the audio or video format without consideration for its internal encoded data streams. The container is only part of what determines the essence of digital audiovisual material.  

A video file can only have one container but can (and probably does) contain multiple encoded streams of data. Sometimes containers and their encoding algorithms have the same name. This is because, in those cases, the muxer (the tool that creates the container) and codec (the tool that encodes the audio or video stream) must be tied together in order to function as an audiovisual file. For example, the Windows Media Player container (using the extension of .wmv) can only contain data encoded by the Windows Media Player codec. They are intrinsically bound in that way. Other containers, in particular ones that are open formats, are less prescriptive about their contents and can handle many different data streams.  

The process of putting encoded data into a container is known as "muxing." Muxing, short for multiplexing, is the process of combining one or more audiovisual signals, or streams, together into one file format. As previously mentioned, for a video file this can include one or more video, audio, subtitles, or data tracks. All of these parts that make up a video have to be put together and synced together in time so that it plays back in an expected and repeatable way.  

Similarly, the process of taking encoded data streams out of their storage container is called "demuxing," a shortened form of demultiplexing.  

For any type of manipulation of audiovisual material, whether for preservation or access, demuxing and remuxing will very likely be required to separate the streams and then perform the transformations on them, whatever that may be. For example if a preservationist wants to change the encoding of a video stream but leave the audio as-is, they will need to demux, perform that re-encoding operation, and then remux the file to put it back into the container just as it was before, with the modified stream. Most file-editing programs will make this process appear to be seamless, but it is good to know what is going on "under the hood"; especially when a lot of unexpected things can happen, including detrimental changes to the files, that will require further investigation.  

A "muxer" is the engine that performs the process of putting data streams back together into a single video file, and, expectedly, a "demuxer" is an engine that takes video files apart.