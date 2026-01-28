---
slug: ltp76
title: Photographic File Formats
date: 2020-01-19
mp3_url: https://media.lets-talk.ie/ltp/ltp76.mp3
blurb: In this solo show Bart continues the on-going photographic jargon series.
  This time Bart aims to make sense of the confusing sea of file formats out
  there. Why do they all exist, what are they for, and which ones should you use
  and avoid? Listen, subscribe, and get the show notes at lets-talk.ie/ltp76.
  This show is ad-free because of the generosity of listeners like you. Please
  considering supporting the show on Patreon (https://patreon.com/ltpod).
  Reminder - you can submit questions for future Q & A shows at
  lets-talk.ie/photoq.
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

<p>In this solo show Bart continues the on-going photographic jargon series. This time Bart aims to make sense of the confusing sea of file formats out there. Why do they all exist, what are they for, and which ones should you use and avoid?</p>

<p>While this podcast is free for you to enjoy, it's not free for Bart to create. Please consider supporting the show by becoming <a href="http://www.patreon.com/ltpod" target="_blank" rel="noopener noreferrer">a patron on Patreon</a>.</p>

Reminder - you can submit questions for future Q &amp; A shows at <a href="http://lets-talk.ie/photoq">http://lets-talk.ie/photoq</a>

<a href="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP76-FileFormats.mp3" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-MP3.png" alt="MP3 Download" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="http://www.mymac.com/ltp.xml" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-RSS.png" alt="RSS Feed" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="https://itunes.apple.com/ie/podcast/lets-talk-photography/id725271225?mt=2" target="_blank" rel="noopener noreferrer"><img src="http://www.lets-talk.ie/resources/icon-iTunes.png" alt="iTunes" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a>

[audio mp3="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP76-FileFormats.mp3"]

<!--more-->

<h4>Notes</h4>

<ul>
<li>The sea of different image formats out there can be confusing</li>
<li>These different formats were inspired by different needs, e.g.:

<ul>
<li>what needs to be stored?</li>
<li>what needs to be optimised?</li>
<li>what tradeoffs and compromises are the least unacceptable?</li>
</ul></li>
</ul>

<h5>Graphics -v- Photos</h5>

<ul>
<li>Graphics like icons, diagrams, charts, clip art, etc. are very different to photographs:

<ul>
<li>Graphics generally have fewer colours than photos.</li>
<li>Graphics generally have large areas of identical colour, something that doesn&#8217;t tend to happen in the real world, and hence, in photos.</li>
<li>Graphics generally have precise lines — truly straight lines, perfect curves, etc.. The real world, and hence photos, tend to be much less exact.</li>
<li>Graphics use exact colours, there is no concept of white balance or of colour profiles in graphics.</li>
</ul></li>
<li>These differences mean that graphics formats are utterly un-suited to storing photos!

<ul>
<li>The data representations and compression algorithms used optimised for hard clear lines, few colours but exact colour, large areas with the identical colour, etc..</li>
<li>These data representations and compression algorithms are utterly un-suited to storing photos — they do so inefficiently, or they introduce unpleasant artefacts, or both!</li>
<li>Graphics formats do not support ICC colour profiles, so they can&#8217;t be used for colour-accurate screen rendering or printing.</li>
</ul></li>
<li>Graphics formats are perfect for storing icons, logos, pop art, diagrams, charts, graphs, and other drawn images efficiently.</li>
<li>Graphics formats come in two varieties:

<ul>
<li>Vector formats like SVG (Scalable Vector Graphics)</li>
<li>Raster formats like GIF &amp; PNG (Portable Network Graphics)</li>
</ul></li>
</ul>

<h4>Tradeoffs</h4>

<ul>
<li>File size

<ul>
<li>lossy -v- lossless compression</li>
</ul></li>
<li>Colour depth</li>
<li>Resolution</li>
<li>Data and metadata stored

<ul>
<li>Proprietary &amp; non-standard data</li>
<li>Recognised standards

<ul>
<li><a href="https://en.wikipedia.org/wiki/Exif">Exif</a> (Exchangeable image file format) — metadata describing how and where the photo was taken (includes geolocation)</li>
<li><a href="https://en.wikipedia.org/wiki/IPTC_Information_Interchange_Model">IPTC</a> (International Press Telecommunications Council) — metadata describing what the photograph is of, who took it, and who owns it</li>
</ul></li>
</ul></li>
</ul>

<h5>RAW Formats</h5>

<ul>
<li>Designed to store all the data collected by the camera sensor.</li>
<li>Different sensors capture information differently, so most RAW formats are at least vendor-specific, if not sensor-family-specific

<ul>
<li>Nikon DSLRs produce .NEF files</li>
<li>Canon DSLRs produce .CRW or .CR2 files</li>
</ul></li>
<li>The exception to the rule is Adobe&#8217;s DNG, for <em>&#8220;Digital Negative&#8221;</em>, format. Designed to be a generic format that can store the data captured by any sensor.</li>
<li>RAW files contain a lot of metadata, generally including the state of every camera setting, and often also the state of the camera sensors when the photo was taken, even things like the distance from the focal plane on which the camera was focused, and which focus points were used to achieve focus</li>
<li>Because RAW files contain all the information captured by the sensor, they enable edits that are impossible with other formats

<ul>
<li>accurate white-balance adjustments (no interpolation/estimation)</li>
<li>accurate exposure changes (within limits)</li>
</ul></li>
<li>While RAW formats are compressed, they use lossless compression</li>
<li>RAW files are <strong>large</strong></li>
<li>RAW files are often proprietary</li>
<li>RAW files are generally only readable by true photo editing apps, not by basic image viewers or simple graphics editors.</li>
</ul>

<h5>Photo Sharing Formats</h5>

<ul>
<li>Designed for sharing finished edited photos</li>
<li>Ubiquitous support is vital — images in these formats should be viewable by just about any software on just about any device</li>
<li>Small file size is a priority, especially online, but traded off against image quality and colour depth</li>
<li>Support for standardised metadata formats including Exif (including Geolocation data) &amp; IPTC, but not camera-specific metadata</li>
<li>Support for ICC colour profiles for accurate rendering on screens and in print</li>
<li>Not suitable for editing because most of the original sensor data is not stored, only the result of extensive processing and compression is stored.</li>
<li>There is only one photo sharing format in common use these days — <a href="https://en.wikipedia.org/wiki/JPEG">JPEG</a> (named for the group that created it, the <em>Joint Photographic Experts Group</em>)

<ul>
<li>Uses lossy compression (the level of loss is configurable when saving)</li>
</ul></li>
</ul>

<h5>Photo Edit Formats</h5>

<ul>
<li>Designed to store image edits.</li>
<li>Application-specific</li>
<li>Often proprietary (but not always)</li>
<li>Utterly un-suitable for sharing with anyone other than another photographer using the same software</li>
<li>Most common proprietary example is photoshop&#8217;s <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop#File_format">PSD</a> format</li>
<li><a href="https://en.wikipedia.org/wiki/Extensible_Metadata_Platform">XMP</a> side-car files can be used to store edits in an open format next to original files.</li>
</ul>

<h5>Photographic Data Formats</h5>

<ul>
<li>Designed for representing photographic data with as much fidelity as possible in a portable format</li>
<li>Capable of storing deep colour depths</li>
<li>Support for colour profiles</li>
<li>Support for standardised metadata formats (same as JPEG)</li>
<li>Support for compression, but generally lossless rather than lossy</li>
<li>Data fidelity is the priority, and is traded off against file size, generally resulting in large files</li>
<li>Often used by photo management apps to import/export to/from external apps &amp; plugins</li>
<li>Widely supported in photo editing apps</li>
<li>Widely used in the print industry</li>
<li>Widely used in the scientific community</li>
<li>Most common photographic data format in the non-scientific world is <a href="https://en.wikipedia.org/wiki/TIFF">TIFF</a> (Tagged Image File Format)</li>
<li>Most common format in the scientific world (including astrophotography) is <a href="https://en.wikipedia.org/wiki/FITS">FITS</a> (Flexible Image Transport System)</li>
</ul>