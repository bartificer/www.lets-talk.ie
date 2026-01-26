#!/usr/bin/env node

// This script fetches the RSS feeds for the Let's Talk podcasts and converts the data
// in them to JSON then exports that to files.

// import the needed modules
import { parseFeedToJson } from "@sesamy/podcast-parser"; // RSS to JSON parser
import { writeFile } from 'node:fs/promises'; // for writtig files

// define the podcasts to build the RSS JSON files for
const podcasts = [
    {
        slug: 'lta',
        feed_url: 'https://feeds.lets-talk.ie/lta.xml'
    },
    {
        slug: 'ltp',
        feed_url: 'https://feeds.lets-talk.ie/ltp.xml'
    }

];

// process each podcast
for(const podcast of podcasts){
    console.log(`processing ${podcast.slug}...`);

    // fetch the RSS feed
    console.log(`fetching RSS feed from ${podcast.feed_url} ...`);
    const RSSHTTPResponse = await fetch(podcast.feed_url);
    const RSSString = await RSSHTTPResponse.text();
    console.log(`Got ${RSSString.length} characters`);

    // convert to JSON
    console.log('Converting XML to JSON ...');
    const RSSObject = (await parseFeedToJson(RSSString)).rss;
    console.log('Done');

    // write the JSON files
    const exportFilePath = `./${podcast.slug}-rss.json`;
    console.log(`Saving JSON to '${exportFilePath}'`);
    await writeFile(exportFilePath, JSON.stringify(RSSObject, null, 2));
    console.log('Done')
}