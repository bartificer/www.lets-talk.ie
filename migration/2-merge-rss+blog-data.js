#!/usr/bin/env node

// This script:
// ------------
// 1 — determines the episode slug for each RSS entry
// 2 - determines the episode slug for each blog post
// 3 - assembles the relevant fields from both sources into a master JSON file

// import the needed modules
import { readFile } from 'node:fs/promises'; // for reading files
import { resolve } from 'node:path'; // for resolving paths
import { writeFile } from 'node:fs/promises'; // for writtig files

// read the podcast list
const podcastListPath = resolve('./podcasts.json');
console.log(`Loading podcast definitions from ${podcastListPath} ...`);
const podcastsJSONString = await readFile(podcastListPath, 'utf8');
const podcasts = JSON.parse(podcastsJSONString); 
console.log(`Done - got ${podcasts.length}`);

// process each podcast
//console.log('WIP - hard-coding podcast list to just LTP');
const resolvedPosts = [];
for(const podcast of podcasts){
    //if( podcast.slug != 'ltp') continue; // TEMP

    console.log(`processing ${podcast.slug}...`);

    // load the WPExport
    const wpExportPath = resolve(`./generatedJSON/${podcast.slug}-wp.json`);
    console.log(`Loading Wordpress posts from '${wpExportPath}' ...`);
    const wpJSONString = await readFile(wpExportPath, 'utf8');
    console.log(`Read ${wpJSONString.length} characters ...`);
    const wpPosts = JSON.parse(wpJSONString).channel.item;
    console.log(`Done - Loaded ${wpPosts.length} posts`);

    // try resolve the slugs
    console.log('Resolving episode slugs in posts ...');
    for(const post of wpPosts){
        // hard-coded skips
        if(post.title.match(/^LTP143-/)){
            console.log(`hard-coded skip: ${post.title}`);
            continue;
        }

        // assemble the needed RE
        const slugRE = new RegExp(
            '^' +

            // all possible prefixes
            '(?:' +
            "(?:Let's[ ]Talk[ ](?:Apple|Photography)[ ](?:[-—][ ])?Ep[.])|" +
            '(?:LT[AP])' +
            ')[ ]?' +

            // the base of the slug
            '(?<base_slug>[0-9]+[a-z]?)' +

            // the end of the slug
            '',
            '' // add any flags here
        );

        // try match the slug
        const slugMatch = slugRE.exec(post.title);
        let slug ='';
        if(slugMatch && slugMatch.groups){
            slug = `${podcast.slug}${slugMatch.groups.base_slug}`;
            console.log(`matched slug: ${slug}`);
        }else{
            console.warn(`skipping post with title: ${post.title}`);
            continue;
        }

        // inject the slug into the object
        post.slug = slug;
    }

    // load the RSS data
    const RSSPath = resolve(`./generatedJSON/${podcast.slug}-rss.json`);
    console.log(`Loading RSS data from '${RSSPath}'`);
    const RSSJSONString = await readFile(RSSPath, 'utf8');
    console.log(`Read ${RSSJSONString.length} characters ...`);
    const RSSItems = JSON.parse(RSSJSONString).channel.item;
    console.log(`Done - Loaded ${RSSItems.length} feed items`);

    // try resolve the slugs
    console.log('Resolving episode slugs in items ...');
    for(const item of RSSItems){
        // hard-coded skips
        //if(post.title.match(/^LTP143-/)){
        //    console.log(`hard-coded skip: ${post.title}`);
        //    continue;
        //}

        // assemble the needed RE
        const slugRE = new RegExp(
            '^' +

            // all possible prefixes
            '(?:' +
            "(?:Let's[ ]Talk[ ](?:Apple|Photography)[ ](?:[-—][ ])?Ep[.])|" +
            '(?:LT[AP])' +
            ')[ ]?' +

            // the base of the slug
            '(?<base_slug>[0-9]+[a-z]?)' +

            // the end of the slug
            '',
            '' // add any flags here
        );

        // try match the slug
        const slugMatch = slugRE.exec(item.title);
        let slug ='';
        if(slugMatch && slugMatch.groups){
            slug = `${podcast.slug}${slugMatch.groups.base_slug}`;
            console.log(`matched slug: ${slug}`);
        }else{
            console.warn(`skipping item with title: ${item.title}`);
            continue;
        }

        // inject the slug into the object
        item.slug = slug;
    }


    // convert to JSON
    //console.log('Converting WP Export XML to JSON ...');
    //const wpExportObject = (await parseFeedToJson(wpExportXMLString)).rss;
    //console.log('Done');

    // write the JSON file
    //const wpJSONExportPath = `./generatedJSON/${podcast.slug}-wp.json`;
    //console.log(`Saving RSS JSON to '${wpJSONExportPath}'`);
    //await writeFile(wpJSONExportPath, JSON.stringify(wpExportObject, null, 2));
    //console.log('Done');
}