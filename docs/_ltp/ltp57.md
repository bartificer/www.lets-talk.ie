---
slug: ltp57
title: Digital Sensors
date: 2018-06-23
mp3_url: https://media.lets-talk.ie/ltp/ltp57.mp3
blurb: In this solo show Bart explores the workings of the digital sensors that
  are at the heart of our modern cameras. How do they work? How do they differ
  from each other? What’s the difference between CCD and CMOS? What difference
  does size make? What’s full frame and how is it different from Micro Four
  Thirds? What’s Backside Illumination? And much more. Listen, subscribe, and
  get the show notes at lets-talk.ie/ltp57. This show is ad-free because of the
  generosity of listeners like you. Please considering supporting the show on
  Patreon (https://patreon.com/ltpod). Reminder - you can submit questions for
  future Q & A shows at lets-talk.ie/photoq.
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
	<li><a title="Bart Busschots" href="http://www.bartb.ie/" target="_blank">Bart Busschots</a> (host) - <a title="Bart's Twitter" href="http://twitter.com/bbusschots" target="_blank">@bbusschots</a> - <a href="http://www.flickr.com/photos/bbusschots/" target="_blank">Flickr</a></li>
</ul>

In this solo show Bart explores the workings of the digital sensors that are at the heart of our modern cameras. How do they work? How do they differ from each other? What's the difference between CCD & CMOS? What difference does size make? What's full frame and how is it different from Micro Four Thirds? What's Backside Illumination? And much more.

While this podcast is free for you to enjoy, it's not free for Bart to create. Please consider supporting the show by becoming <a href="http://www.patreon.com/ltpod" target="_blank">a patron on Patreon</a>.

Reminder - you can submit questions for future Q &amp; A shows at <a href="http://lets-talk.ie/photoq">http://lets-talk.ie/photoq</a>

<a href="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP57-Sensors.mp3" target="_blank"><img src="http://www.lets-talk.ie/resources/icon-MP3.png" alt="MP3 Download" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="http://www.mymac.com/ltp.xml" target="_blank"><img src="http://www.lets-talk.ie/resources/icon-RSS.png" alt="RSS Feed" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a><a href="https://itunes.apple.com/ie/podcast/lets-talk-photography/id725271225?mt=2" target="_blank"><img src="http://www.lets-talk.ie/resources/icon-iTunes.png" alt="iTunes" style="border-width: 0px; display: inline-block; margin-width: 10px;"></a>

[audio mp3="http://www.mymac.com/podcast/ltp/LetsTalkPhotographgy-EP57-DigitalSensors.mp3"]

<!--more-->

<p>At its&#8217;s most fundamental level, a camera is just a device that focuses light onto some kind of light-sensitive material that has the ability to make some kind of permanent record of that light.</p>

<p>In the past we used light-sensitive chemicals to make permanent records — first mercury salts, and then, thankfully, salts of silver (less insanity that way!). We used to put the chemicals onto sheets of metal, then sheets of glass, and finally, onto rolls of film.</p>

<p>Today though, the vast majority of our cameras are not little chemistry sets, they&#8217;re little boxes of electronics! Our modern digital cameras uses sensors that translate light to electrical signals, and we store the resulting images as a series of ones and zeros on some kind of digital medium.</p>

<p>All our digital cameras have digital sensors, so are they all the same as each other? Nope! Do the differences matter? Absolutely!</p>

<h4>Basics</h4>

<ul>
<li>Digital sensors consist of a grid of individual light-sensitive elements called pixels</li>
<li>Each pixel measures the intensity of light hitting it</li>
<li>Since pixels only measure light intensity, they are inherently monochrome</li>
<li>Sensors designed to take colour images have a grid of colour filters in front of the pixels, allowing only red light to hit some pixels, blue light others, green light others, and, perhaps, all light to hit some others.

<ul>
<li>The choice of grid pattern is much trickier than you might imagine, because too regular a grid can result in strange interference patterns.</li>
<li>You might imagine that there would be exactly equal numbers red, green, and blue pixels, but that&#8217;s also not necessarily the case.</li>
<li>Sensor manufacturers put a lot of R&amp;D into the arrangement of their pixels, and the technology keeps evolving</li>
<li>The fact that each pixel only senses one colour means that the total information for a point on the image is sensed over a defuse area, hence the need to apply sharpening algorithms when converting raw sensor data into viewable images.</li>
</ul></li>
<li>In an ideal world, only photons of light would generate electrical signals in image sensors, but we don&#8217;t live in such a world! There is all sorts of radiation out there knocking electrons about (solar radiation, radioactive elements in the earth&#8217;s crust, even cosmic rays!), not to mention the fact that heat makes electrons a little jumpy (thermal noise), so all digital sensors will pick up noise as well as the signal caused by the actual image you&#8217;re trying to capture. The more light the better the signal to noise ratio, and the less noticeable the noise.</li>
</ul>

<h4>Sensor Types</h4>

<ul>
<li>Charge-coupled Devices, or <strong>CCDs</strong>: <a href="https://en.wikipedia.org/wiki/Charge-coupled_device">en.wikipedia.org/…</a>

<ul>
<li>The first digital image sensors</li>
<li>Use semi-conducting material to convert photons to electrons which are trapped until they&#8217;re read. To create an image:

<ol>
<li>Empty all the pixels of charge</li>
<li>Expose the sensor to light, the amount of electrons (charge) that builds up in each pixel is directly proportional to the amount of photons that struck the pixel</li>
<li>Release the electrons from each pixel and count them to build your image</li>
</ol></li>
<li>Even today, the best sensors are CCDs, but their quality advantage is shrinking</li>
<li>Only used in high-end equipment today, most for video</li>
<li>A modern consumer camera is unlikely to have a CCD sensor</li>
<li>Captures an entire image at once</li>
</ul></li>
<li>Complementary Metal–oxide–semiconductor, or <strong>CMOS</strong>: <a href="https://en.wikipedia.org/wiki/CMOS">en.wikipedia.org/…</a>

<ul>
<li>The most common example of so-called <em>Active Pixel Sensors</em>, or APS (<a href="https://en.wikipedia.org/wiki/Active_pixel_sensor">en.wikipedia.org/…</a>). These are sensors where each pixel has its own light sensor, amplifier, and noise cancellation circuit (and much more) built in.</li>
<li>CMOS actually refers to the circuitry that binds the whole sensor together rather than the part that measures the light. Each pixel contains its own small <em>photodetector</em> (<a href="https://en.wikipedia.org/wiki/Photodetector">en.wikipedia.org/…</a>), a semi-conductor-based device that converts light to an electric current (remember, CCDs convert light to charge).</li>
<li>CMOS sensors are often read one row of pixels at a time, so they can be prone to so-called <em>rolling shutter</em> effects: <a href="https://en.wikipedia.org/wiki/Rolling_shutter">en.wikipedia.org/…</a></li>
<li>Despite sounding more complex, CMOS sensors are much cheaper to produce than CCD sensors</li>
<li>Because each pixel is its own little device, there are a lot of electronics to get in the way of the light. So-called back-illuminated sensors are CMOS sensors that have been designed to have at much of their electronics behind the photodetector so they don&#8217;t block the light: <a href="https://en.wikipedia.org/wiki/Back-illuminated_sensor">en.wikipedia.org/…</a> (Apple brought the phrase <em>backside illumination</em> somewhat into the mainstream when they switched to this kind of sensor on their iPhones)</li>
<li>The vast majority of sensors in our phones, point-and-shoot cameras and DSLRs are CMOS</li>
</ul></li>
<li>There are other sensor types that exist, but none come anywhere near being as commonly used as CMOS and CCDs.</li>
</ul>

<p>Historically, it was important to check what kind of sensor your camera had because many consumer-level devices were available with both CCD and CMOS sensors. Even small devices like web cams came in CCD and CMOS variants. The difference in quality between CCDs and early CMOS sensors was big, so a CCD webcam was likely to be noticeably better than CMOS web cam.</p>

<p>Modern CMOS sensors produce very high-quality images, and just about every consumer devices uses a CMOS sensor, so this is just not something you need to worry about today.</p>

<h4>Sensor Sizes</h4>

<p>While the sensor type isn&#8217;t something that you need to care about these days, the sensor size is, because it has real effects on the images you shoot, and on the size, weight, and price of camera equipment.</p>

<h5>Some General Rules on Sensor Sizes</h5>

<ul>
<li>Starting with the obvious, bigger sensors take up more room, so bigger sensors generally need bigger camera bodies to house them.</li>
<li>Similarly, the bigger the sensor, the bigger the image that needs to be projected onto it by the lens, so the bigger the lens has to be, and hence, the more expensive it tends to be.</li>
<li>Generally speaking, smaller sensors have smaller pixels. This makes them less light-sensitive, and more prone to noise.</li>
<li>The smaller the sensor the deeper the Depth of Field. This is why its easy to get smooth creamy out-of-focus background with large cameras, and very difficult with small cameras.</li>
<li>The same focal length of lens will have a bigger field of view on a bigger sensor.</li>
<li>Contrary to what you might expect, perspective is not affected by sensor size (or focal length). It only depends on the physical distance between the sensor and the subject. However, because smaller sensors have a smaller field of view, you&#8217;re likely to move closer to get your shot, so the perspective will change. To capture exactly the same shot in terms of FOV and perspective with a small sensor as compared to a large one you need to stand in exactly the same place, use exactly the same focal length lens, and then shoot multiple images and stitch them together.</li>
</ul>

<h5>Effective Focal Length (EFL) &amp; Crop Factor (CF)</h5>

<ul>
<li>Because the field of view depends on the combination of lens focal length and sensor size, a 50mm lens will give a very different field of view on a large sensor DSLR than on a small sensor mirrorless camera.</li>
<li>In practical terms we humans care about field of view, and we think of our lenses from that point of view. We think of a 28mm lens as being &#8216;wide&#8217;, a 50mm lens as being &#8216;neutral&#8217;, and a 200mm lens as being &#8216;long&#8217;. But, on a small enough sensor a 28mm lens would actually be a very long lens!</li>
<li>Effective focal length takes sensor size into account, so a lens + sensor combination with an effective focal length of 28mm will always be wide.</li>
<li>By a pure fluke of history, the 35mm piece of film was chosen as the basis for effective focal lengths. A lens with an EFL of 28mm will give the same field of view that an actual 28mm lens would give on a 35mm sensor.</li>
<li>The ratio between the true focal length and the effective focal length for a given sensor size is known as the sensor&#8217;s <em>crop factor</em> (<a href="https://en.wikipedia.org/wiki/Crop_factor">en.wikipedia.org/…</a>).

<ul>
<li>Crop Factor = 35mm sensor diagonal / sensor diagonal</li>
<li>Effective Focal Length = True Focal Length * Crop Factor</li>
<li>E.g. Nikon DX sensors have a crop-factor of 1.6, so a 30mm lens has an EFL of 48mm.</li>
</ul></li>
</ul>

<h5>Common Sensor Sizes/Formats</h5>

<ul>
<li>35mm film was such an important format that it became an unofficial standard. So much so that we now refer to digital cameras with a 35mm sensor as being <em>full frame</em> (in Nikon world full-frame sensors are branded FX).</li>
<li>There are many sensor sizes in use today: <a href="https://en.wikipedia.org/wiki/Image_sensor_format">en.wikipedia.org/…</a></li>
<li>DSLRs generally have crop factors of about 1.5 (Canon APS-C uses exactly <strong>1.5</strong>, Nikon DX is <strong>1.6</strong> as are Sony &amp; Pentax)</li>
<li>A very common multi-vendor sensor format today is <em>micro four thirds</em>, so-called because its sensors are one and a third (or four thirds) inches in size. It also has the luxury of a very convenient crop factor, <strong>2</strong>!</li>
<li>Point-and-shoot cameras have crop factors of around 4&#8211;6</li>
<li>Camera phones like the iPhone have crop factors of around 7</li>
</ul>