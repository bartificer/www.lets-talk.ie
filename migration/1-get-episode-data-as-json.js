#!/usr/bin/env node

// This script:
// ------------
// 1 — downloads the RSS feeds for the Let's Talk podcasts, converts them to JSON, and saves them
// 2 - loads the Wordoress exports for the Let's Talk Podcasts blog posts, converts them to JSON, and saves them

// import the needed modules
import { readFile } from 'node:fs/promises'; // for reading files
import { resolve } from 'node:path'; // for resolving paths
import { parseFeedToJson } from "@sesamy/podcast-parser"; // RSS to JSON parser
import { writeFile } from 'node:fs/promises'; // for writtig files

// define the podcasts to build the RSS JSON files for
const podcastListPath = resolve('./podcasts.json');
console.log(`Loading podcast definitions from ${podcastListPath} ...`);
const podcastsJSONString = await readFile(podcastListPath, 'utf8');
const podcasts = JSON.parse(podcastsJSONString); 
console.log(`Done - got ${podcasts.length}`);

// process each podcast
for(const podcast of podcasts){
    console.log(`processing ${podcast.slug}...`);

    // fetch the RSS feed
    console.log(`Downloading RSS feed from ${podcast.feed_url} ...`);
    const RSSHTTPResponse = await fetch(podcast.feed_url);
    const RSSString = await RSSHTTPResponse.text();
    console.log(`Got ${RSSString.length} characters`);

    // convert to JSON
    console.log('Converting RSS XML to JSON ...');
    const RSSObject = (await parseFeedToJson(RSSString)).rss;
    console.log('Done');

    // write the JSON files
    const RSSExportFilePath = `./generatedJSON/${podcast.slug}-rss.json`;
    console.log(`Saving RSS JSON to '${RSSExportFilePath}'`);
    await writeFile(RSSExportFilePath, JSON.stringify(RSSObject, null, 2));
    console.log('Done')

    // fetch the Wordpress Export
    const wpExportPath = resolve(podcast.wordpress_export_path);
    console.log(`Importing Wordpress Export from '${wpExportPath}'...`);
    const wpExportXMLString = await readFile(wpExportPath, 'utf8');
    console.log(`Got ${wpExportXMLString.length} characters`);

    // convert to JSON
    console.log('Converting WP Export XML to JSON ...');
    const wpExportObject = (await parseFeedToJson(wpExportXMLString)).rss;
    console.log('Done');

    // with the JSON file
    const wpJSONExportPath = `./generatedJSON/${podcast.slug}-wp.json`;
    console.log(`Saving RSS JSON to '${wpJSONExportPath}'`);
    await writeFile(wpJSONExportPath, JSON.stringify(wpExportObject, null, 2));
    console.log('Done');
}