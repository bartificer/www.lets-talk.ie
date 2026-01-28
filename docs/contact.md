---
title: Contact Us
menu_title: Contact
slug: contact
sort_order: 30
date: 2026-01-18
show_revision_date: true
---
You can contact the show via social media:

{%- for socialmedia_profile in site.socialmedia_profiles %}
* {% include socialmedia_profile_link.html platform=socialmedia_profile.platform handle=socialmedia_profile.handle %} <small>({{ site.socialmedia_platforms[socialmedia_profile.platform].title }})</small>
{%- endfor %}

Or you can contact the producer and host Bart Busschots via the links in his [profile]({{ '/contributor/bart' | relative_url }}).