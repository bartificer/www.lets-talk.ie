#!/usr/bin/env node

// This script:
// ------------
// 1 — Builds the Jekyll pages for each podcast episode
// 2 - Writes the pages to a staging folder NOT TO THE LIVE SITE!
// Note: this script ingests the consolidated data geneated in script 2.

// import the needed modules
import { readFile } from 'node:fs/promises'; // for reading files
import { resolve } from 'node:path'; // for resolving paths
import { writeFile } from 'node:fs/promises'; // for writtig files
import { stringify } from 'yaml'; // for converting objects to YAML

// read the podcast list
const podcastListPath = resolve('./podcasts.json');
console.log(`Loading podcast definitions from ${podcastListPath} ...`);
const podcastsJSONString = await readFile(podcastListPath, 'utf8');
const podcasts = JSON.parse(podcastsJSONString); 
console.log(`Done - got ${podcasts.length} podcasts`);

// process each podcast
//console.log('WIP - hard-coding podcast list to just LTP');
for(const podcast of podcasts){
    //if( podcast.slug != 'ltp') continue; // TEMP

    console.log(`processing ${podcast.slug}...`);

    // load the episode data
    const episodeDataPath = `./generatedJSON/${podcast.slug}-episode-data.json`;
    console.log(`Loading episode data from '${episodeDataPath}' ...`);
    const episodeDataJSONString = await readFile(episodeDataPath, 'utf8');
    const episodes = JSON.parse(episodeDataJSONString); 
    console.log(`Done - read ${episodes.length} episodes`);

    // process each episode
    for(const episode of episodes){
        console.log(`Processing episode ${episode.slug} ...`);

        // check for needed warnings to insert
        console.log('Validating data ...'); 
        const warnings = { // start with the base warnings needed for all
            metadata: ['unreviewed', 'unchecked_guests'],
            blurb: [],
            notes: ['crude_import']
        }; 
        if(!episode.blurb){
            warnings.blurb.push('no_blurb');
            console.warn(`No blurb in ${episode.slug}`);
        }else{
            warnings.blurb.push('unreviewed');
        }
        // NOTE - verified there are notes in all episodes
        console.log('Done');

        // build font matter
        const frontmatterObject = {
            slug: episode.slug,
            title: episode.title,
            date: episode.date,
            mp3_url: episode.audio_url,
            blurb: episode.blurb,
            host: 'bart',
            warnings
        };
        const frontmatterYAML = stringify(frontmatterObject);
        console.log('Assembled frontmatter');

        // build the page
        const episodeMarkdown = `---\n${frontmatterYAML}\n---\n${episode.shownotes_wp_raw}`;
        console.log('Generated episode page')

        // write page to staging folder
        const episodeFilePath = resolve(`./staging/${episode.slug}.md`);
        console.log(`Writting episode to '${episodeFilePath}'...`);
        await writeFile(episodeFilePath, episodeMarkdown);
        console.log('Done');

        console.log(`Finished episode ${episode.slug}`);
    }

    console.log(`Finished podcast ${podcast.slug}`);
}