import test from 'node:test';
import assert from 'node:assert/strict';
import {eligible,collect,summary} from './sync-github.mjs';
const config={owner:'Azka1212',topic:'portfolio',include:['existing'],exclude:['excluded']};
const repo=(name,extra={})=>({name,private:false,disabled:false,topics:[],language:'Python',default_branch:'main',pushed_at:'2026-09-29',...extra});
const readme=text=>({encoding:'base64',size:text.length,content:Buffer.from(text).toString('base64'),path:'README.md'});
test('selection requires approval topic or existing inclusion and never includes private or disabled repositories',()=>{
 assert(eligible(repo('existing'),config));assert(eligible(repo('new',{topics:['portfolio']}),config));
 for(const r of [repo('unselected'),repo('existing',{private:true}),repo('existing',{disabled:true}),repo('excluded',{topics:['portfolio']})])assert(!eligible(r,config));
});
test('new selected repositories and README edits update automatically',async()=>{
 const result=await collect(config,{projects:[]},async path=>path.startsWith('/users/')?[repo('new',{topics:['portfolio']})]:readme('# New\n\nUpdated purpose.\n\n## Features\n- First'));
 assert.equal(result.projects.length,1);assert.equal(result.projects[0].description,'Updated purpose.');assert.match(result.projects[0].markdown,/First/);
});
test('failed README fetch keeps previous content, while deleted README clears it',async()=>{
 const old={repo:'existing',markdown:'Previous details',readmePath:'README.md',readmeSyncedAt:'yesterday'};
 const fallback=await collect(config,{projects:[old]},async path=>{if(path.startsWith('/users/'))return[repo('existing')];throw Error('network');});
 assert.equal(fallback.projects[0].markdown,old.markdown);assert.equal(fallback.projects[0].readmeSyncedAt,'yesterday');
 const removed=await collect(config,{projects:[old]},async path=>path.startsWith('/users/')?[repo('existing')]:null);assert.equal(removed.projects[0].markdown,'');
});
test('private/deleted/unselected repos are pruned even when cached',async()=>{
 const result=await collect(config,{projects:[{repo:'existing',markdown:'Old public text'}]},async()=>[repo('existing',{private:true})]);assert.deepEqual(result.projects,[]);
});
test('repository list failure rejects without a partial snapshot',async()=>{
 await assert.rejects(()=>collect(config,{projects:[]},async()=>{throw Error('rate limit');}),/rate limit/);
});
test('pagination continues beyond one hundred repositories',async()=>{
 let pages=0;const result=await collect(config,{projects:[]},async path=>{
 if(path.startsWith('/users/')){pages++;return pages===1?Array.from({length:100},(_,i)=>repo(`skip-${i}`)):[repo('existing')];}return readme('# Existing\n\nDescription.');});
 assert.equal(pages,2);assert.equal(result.projects.length,1);
});
test('summary skips headings, badges and preserves readable link labels',()=>assert.equal(summary('# Title\n\n![badge](x)\n\nA **useful** [tool](https://example.com).','fallback'),'A useful tool.'));

test('cached content is removed by privacy policy even when the network fails',async()=>{
 const {pruneSnapshot}=await import('./sync-github.mjs');
 const prior={syncedAt:'yesterday',projects:[{repo:'excluded',markdown:'Old source examples'},{repo:'existing',markdown:'Allowed'}]};
 const safe=pruneSnapshot(prior,config);assert.deepEqual(safe.projects.map(p=>p.repo),['existing']);assert.equal(safe.syncedAt,'yesterday');
});
