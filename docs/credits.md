---
title: Credits
slug: credits
sort_order: 20
date: 2026-01-18
show_revision_date: true
show_github_contribute: true
description: "Shout-outs to the many people and organisations who help make the Let's Talk podcasts."
meta:
  keywords:
    - recommendation
    - credits
    - artists
    - creators
    - guests
---
# Producer, Editor & Host — Bart Busschot

In every sense, [Bart]({{ '/contributor/bart' | relative_url }}) authors the Let's Talk podcasts. He conceived them, writes each episode, hosts the shows, and edits the audio files.

However, to do so he relies on help and services from many other create people and organisations. Bart personally and Bartificer Creations wholeheartedly recommend the volunteers and creative professionals listed on this page.

<span class="bartificer-accent">If you need to commission some creative work, plesae consider engaging any of them with the relevant skills!</span>

# Music — Brendan Finan

Irish composer, written, and music teacher Brendan Finan the theme tunes for both Let's Apple and Let's Talk Photography. Brendan also composed the short bumpers used between segments in the shows.

## Links

* Brendan's writting for the Journal of Irish Music — [journalofmusic.com/…](https://journalofmusic.com/author/brendan-finan)
* Brendan's staff page with the Irish Institute of Music & Song — [www.irishinstituteofmusic.com/…](https://www.irishinstituteofmusic.com/brendan-finan)

# Audio Branding — Defacto Sound

Not to be confused with the theme tunes, the Bartificer Creations audio branding included at the very start and very end of the all the shows was created by the talented sound artists at [Defacto Sound](https://defactosound.com/), who also produce the wonderful [Twenty Thousand Hertz podcast](https://www.20k.org).

# Logos & Graphic Design — Geraard Monnen & The Icon Factory

The show's original logo was donated by Dutch graphic Designer Geraard Monnen. That original logo was replaced by new logos, inspired by the original, designed by [The Icon Factory](https://iconfactory.com).

The Icon Factory also created the avatars and banners used for the show's social media presences.

Finaly, the Icon Factory also developed the style guide used for all Bartificer Creations publications, including this website.

# Guests

These kind and generous people donated their time contribute their time to appear on one or more episodes.

<div class="alert alert-warning d-flex align-items-center">
  <div class="flex-shrink-0 fs-1 me-3"><i class="fa-solid fa-person-digging" aria-hidden="true"></i></div>
  <p>Until all podcast episodes have had their metadata reviewed and updated, this list will remain incomplete.</p>
</div>

{% assign guests = site.contributors | sort: "sort_name" %}
{%- for guest in guests %}
{%- unless guest.slug == 'bart' %}
* [{{ guest.title }}]({{ guest.url | relative_url }})
{%- endunless %}
{%- endfor %}
