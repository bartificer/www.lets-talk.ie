#!/usr/bin/env node

// This script:
// ------------
// 1 — determines the episode slug for each RSS entry
// 2 - determines the episode slug for each blog post
// 3 - assembles the relevant fields from both sources into a master JSON file
// Note: the final data file is keyed of the feed and augmented from the wordpress export.

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
    const resolvedPostsLookup = {}; // wp posts indexed by episode slug
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

        // inject the slug into the object and add to the lookup
        post.slug = slug;
        resolvedPostsLookup[slug] = post;
    }
    console.log(`Done - resolved slugs for ${Object.keys(resolvedPostsLookup).length} posts`);

    // load the RSS data
    const RSSPath = resolve(`./generatedJSON/${podcast.slug}-rss.json`);
    console.log(`Loading RSS data from '${RSSPath}'`);
    const RSSJSONString = await readFile(RSSPath, 'utf8');
    console.log(`Read ${RSSJSONString.length} characters ...`);
    const RSSItems = JSON.parse(RSSJSONString).channel.item;
    console.log(`Done - Loaded ${RSSItems.length} feed items`);

    // try resolve the slugs and titles
    console.log('Resolving episode slugs & base titles in items ...');
    for(const item of RSSItems){

        // assemble the slug RE
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

        // resolve the best possible title, starting with the full title
        let baseTitle = item.title;

        // assemble the base title RE
        const baseTitleRE = new RegExp(
            // possible finaly separators
            '[-:][ ]' +

            // the base title
            "(?<base_title>[0-9a-zA-Zö &.,'?!()-/;]+)" +

            // the end of the string
            '$',
            '' // add any flags here
        );

        // match the base title
        const baseTitleMatch = baseTitleRE.exec(item.title);
        if(baseTitleMatch){
            baseTitle = baseTitleMatch.groups.base_title;
            console.log(`Extracted base title '${baseTitle}'`);
        }else{
            // apply hard-coded fixes
            if(podcast.slug == 'ltp'){
                baseTitle = item.title.replace(/^LTP[ ]?[0-9]+[ ]?[:—][ ]/, '');
                console.log(`Falling back to hard-coded title fix: ${baseTitle}`);
            }else if(podcast.slug == 'lta'){
                baseTitle = item.title.replace(/^LTA[ ][0-9]+[ ][—][ ]/, '');
                console.log(`Falling back to hard-coded title fix: ${baseTitle}`);
            }else{
                // fall back to the full title
                console.warn(`Falling back to full original title: ${item.title}`);
            }
        }

        // inject the slug and base title into the object
        item.slug = slug;
        item.base_title = baseTitle;
    }

    // loop over the feed to assemble the final datastructure
    console.log('Assembling the consolidated data structure (based off the feed)');
    const episodeData = [];
    for(const item of RSSItems){
        // skip any item without a slug
        if(!item.slug) continue;

        // start with the basic episode data
        const episode = {
            slug: item.slug,
            title: item.base_title,
            date: (new Date(item.pubDate)).toISOString(),
            audio_url: item.enclosure[0]['@_url']
        };

        // sanitise and store the blurb
        if(item['itunes:summary']){
            episode.blurb = item['itunes:summary'].replace(/\s+/g, ' ').trim(); // regularise all blank space to single spaces
        }else{
            episode.blurb = '';
        }

        // resolve the matching blog post
        const post = resolvedPostsLookup[item.slug];

        // inject the relevant post data if possible
        if(post){
            episode.shownotes_wp_raw = post['content:encoded'];
        }

        // save the post data
        episodeData.push(episode);
    }
    console.log(`Done - ${episodeData.length} data structures generated`);

    // export the data to a JSON file
    const episodeDataExportPath = `./generatedJSON/${podcast.slug}-episode-data.json`;
    console.log(`Saving episode data to '${episodeDataExportPath}' ...`);
    await writeFile(episodeDataExportPath, JSON.stringify(episodeData, null, 2));
    console.log('Done');
}