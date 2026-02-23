---
title: TEMP — Episodes to Review
slug: temp-to-review
hidden: true
---
After the import from Wordpress+RSS each podcast episode needs to be reviewed and tweaked. To help keep track of the outstanding work, this pages lists episode pages with warnings in the metadata.

# LTA Episodes to Review

<ul>
  {%- for episode in site.lta %}
  {%- if episode.warnings %}
  <li><a href="{{ episode.url | relative_url }}">{{ episode.slug }}</a></li>
  {%- endif %}
  {%- else %}
  <li>ALL DONE 😀</li>
  {%- endfor %}
</ul>

# LTP Episodes to Review

<ul>
  {%- for episode in site.ltp %}
  {%- if episode.warnings %}
  <li><a href="{{ episode.url | relative_url }}">{{ episode.slug }}</a></li>
  {%- endif %}
  {%- else %}
  <li>ALL DONE 😀</li>
  {%- endfor %}
</ul>