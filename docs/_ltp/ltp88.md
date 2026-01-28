---
slug: ltp88
title: Why Apple's ProRAW Rocks!
date: 2021-01-10
mp3_url: https://media.lets-talk.ie/ltp/ltp88.mp3
blurb: In this solo show Bart explains why he’s so excited about the ProRaw
  feature Apple released for the iPhones 12 pro in December. It turns out the
  file format format underpinning it all is open, and it heralds a lot of very
  interesting possibilities for all cameras and image editing apps, not just for
  future iPhones and iOS apps! Listen, subscribe, and get the show notes at
  lets-talk.ie/ltp88. This show is ad-free because of the generosity of
  listeners like you. Please considering supporting the show on Patreon
  (https://patreon.com/ltpod). Reminder - you can submit questions for future Q
  & A shows at lets-talk.ie/photoq.
host: bart
warnings:
  metadata:
    - unreviewed
    - unchecked_guests
  blurb:
    - unreviewed
  notes:
    - crude_import

---
<h4>Panel</h4>
<ul>
	<li><a title="Bart Busschots" href="http://www.bartb.ie/" target="_blank" rel="noopener noreferrer">Bart Busschots</a> (host) - <a title="Bart's Twitter" href="http://twitter.com/bbusschots" target="_blank" rel="noopener noreferrer">@bbusschots</a> - <a href="http://www.flickr.com/photos/bbusschots/" target="_blank" rel="noopener noreferrer">Flickr</a></li>
</ul>

<p>In this solo show Bart explains why he's so excited about the ProRaw feature Apple released for the iPhones 12 pro in December. It turns out the file format underpinning it all is open, and it heralds a lot of very interesting possibilities for all cameras and image editing apps, not just for future iPhones and iOS apps!</p>

<p>While this podcast is free for you to enjoy, it's not free for Bart to create. Please consider supporting the show by becoming <a href="http://www.patreon.com/ltpod" target="_blank" rel="noopener noreferrer">a patron on Patreon</a>.</p>

Reminder - you can submit questions for future Q &amp; A shows at <a href="http://lets-talk.ie/photoq">http://lets-talk.ie/photoq</a>

<a href="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP88-ProRAW.mp3" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-MP3.png" alt="MP3 Download" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="http://www.mymac.com/ltp.xml" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-RSS.png" alt="RSS Feed" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="https://itunes.apple.com/ie/podcast/lets-talk-photography/id725271225?mt=2" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-iTunes.png" alt="iTunes" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a>

[audio mp3="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP88-ProRAW.mp3"]

<!--more-->

<h4>Articles</h4>

<ol>
<li>&#8220;Understanding ProRaw&#8221; by Halide&#8217;s Ben Sandofsky — <a href="https://blog.halide.cam/understanding-proraw-4eed556d4c54">blog.halide.cam/…</a></li>
<li>&#8220;Cameras and Lenses&#8221; by Bartosz Ciechanowski — <a href="https://ciechanow.ski/cameras-and-lenses/">ciechanow.ski/…</a> (the section describing sensors is near the top of the long article on a black background)</li>
</ol>

<h4>Key Features</h4>

<ol>
<li>ProRaw files are DNGs (<a href="https://en.wikipedia.org/wiki/Digital_Negative"><em>digital negatives</em></a>), and <strong>Apple worked with Adobe to extend the the DNG standard</strong>, allowing ProRaw files to encode new kinds of data in DNGs.

<ul>
<li>ProRaw is not a proprietary or closed format — the specs are freely available, and the format can be used royalty-free (The technical specs for the new tags Apple added — <a href="https://helpx.adobe.com/photoshop/kb/dng-specification-tags.html">helpx.adobe.com/…</a>)</li>
<li>This makes the extra data in ProRaw files accessible by all developers.</li>
<li>This makes the extra data fields in ProRaw available to all camera manufacturers.</li>
</ul></li>
<li>ProRaw files encode demozaiced data

<ul>
<li>Removes the need for apps reading the files to have a deep understanding of the sensor hardware.</li>
<li>Allows Apple to make hardware changes without affecting apps that read ProRaw.</li>
<li>Enables the data from multiple exposures to be combined into a single ProRaw file in a space-efficient way.</li>
<li>Arguably makes files less RAW because some low-level processing is now <em>baked in</em>.</li>
</ul></li>
<li>ProRaw files encode tonemapping data as a <em>gain table</em> — think <em>brighten this pixel by this much, that one by that much etc.</em>.

<ul>
<li>This is a non-destructive way of storing the tonemap Apple&#8217;s image processing chips/software calculated</li>
<li>This makes the effect adjustable — editors can allow users to dial the effect up or down, or, remove it completely</li>
</ul></li>
<li>ProRaw files can encode image recognition results as <em>semantic maps</em> — think <em>&#8216;these pixels are a dog&#8217;</em>.

<ul>
<li>This encodes the results of Apple&#8217;s image-analysis AI into the file, so you can&#8217;t lose it.</li>
<li>This makes the results of Apple&#8217;s AI portable to any app on any OS.</li>
</ul></li>
</ol>

<h4>Why I&#8217;m Excited</h4>

<ol>
<li>From my POV, ProRaw files encode everything I need encoded in a RAW file, and it does so in an efficient open format.</li>
<li>ProRaw encodes extra information the RAWs from my DSLR don&#8217;t. The non-destructively embedded tonemap is especially appealing to me.</li>
<li>ProRaw is hardware agnostic, removing the need for image processing apps to update their code each time a new camera/sensor comes out.</li>
<li>Every developer on every platform can add full ProRaw support to their apps free of charge, so I should soon be able to keep all the great tonemapping and AI smarts Apple puts into their phones while escaping the confines of their native camera and photo editor.</li>
</ol>