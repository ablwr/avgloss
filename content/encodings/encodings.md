---
title: Encodings
date: 2020-01-02
author: ablwr
modifiedDate: null
description: "Encodings"
---

A codec encodes and decodes a data stream or a signal for transmission and storage. Just like modem (modulator-demodulator), it is in the name: codec (coder-decoder). Within the context of video, that data stream can be video or audio. This encoding can be fit for a specific purpose, such as for archival storage, for transmission, or for encryption.  

Most codecs deal with this concept of compression, and they seek to compress media in a way that saves space but does not look or sound like a reduction in quality. Compression of data is a primary focus of many codecs, because many codecs are focused on streaming media on the web in the best-looking way. As preservationists, we are less concerned with optimizing for transmission and more concerned with quality of media across time.  

Codecs can be lossily or losslessly compressed. Compression makes files smaller but does not necessarily mean that the files will lose data, so codecs are described as being either lossless or lossy. Lossy means the original stream of data, after encoding, cannot be decoded back to its original state. Lossless compression means that the encoding process is reversible and the data can be returned to the same state as prior to encoding/compression.  

A higher-level analogy to this is compressing a file, like a text file, into a .zip file for storage or transfer. When the file is unzipped, it is the same as it was before it was zipped. The original data has not been changed or lost in any way, but the text file inside of the .zip file is smaller than the text file on its own. This is the same concept for other forms of compression, like video. This is considered lossless compression.  

Codecs that offer both lossless compression and are open standard formats are safe to use for preservation purposes because both the data itself has a reversible condition and the information for decoding that data and bringing it back to its original state is available.  

Note that perceptually lossless (sometimes referred to as visually lossless) is not the same as being a lossless encoding, but rather a codec that asserts itself as being so good at encoding that the image is not able to be identified as lossless by the human eye. Codecs that describe themselves in this way should not be used for preservation, except for circumstances in which files must be compressed and there is not an alternative.  

Codecs do not necessarily inform video quality, as some codecs can have profiles that modify the algorithm to compress more tightly (for smaller file size) or prioritize quality (with bigger file size), among other things.  

For example, h.264 as a codec can mean wildly different things based on the profile applied when encoding. h.264 refers to the algorithm used to compress media, but that algorithm can be tweaked. h.264's Baseline Profile will be more lossy but a smaller file size and more appropriate for streaming media, while its High 4:4:4 Predictive Profile (Hi444PP) supports up to 4:4:4 chroma sampling, up to 14 bits per sample, and additionally supporting efficient lossless region coding and the coding of each picture as three separate color planes.
Preservation-quality media may be referred to as uncompressed. Uncompressed is not necessarily the same as raw data. Raw data means that no encoding treatment has been applied, and the content is just a stream of data. "Uncompressed" data is still a type of encoding because there are rules around the streams of data, including information like chroma subsampling choice or color space data and these rules must be known and understood to be deciphered by video playback software.  

When working with digital video, a preservationist may be tempted to transcode formats from one format to another, selecting a recommended target preservation format. It is important to keep in mind that if a video file has already been compressed, or if it has been "born compressed", there is no way to undo that damage and create a better preservation copy of the file. The original copy of the file or a losslessly compressed version of it is going to be the best quality copy. Attempting to transcode a lossy video into a preservation copy will take up a lot of space, but the quality will be just as bad, if not worse, than the original.  

Here are some key phrases and definitions to remember when working with codecs:  

* Uncompressed: Data stream with no attempts to decrease size
* Compressed: Data is made smaller in some way
* Losslessly compressed: Data is made smaller in some way, but the process is reversible
* Lossily compressed: Data is made smaller and this cannot be undone