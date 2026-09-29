import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {pathToFileURL,fileURLToPath} from 'node:url';
import path from 'node:path';
import ts from 'typescript';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
const directory=await mkdtemp(path.join(fileURLToPath(new URL('.',import.meta.url)),'.readme-test-'));
let component;
try {
 const source=await readFile(new URL('../components/portfolio/repository-readme.tsx',import.meta.url),'utf8');
 const output=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.ReactJSX}}).outputText;
 const entry=path.join(directory,'component.mjs');await writeFile(entry,output);component=await import(pathToFileURL(entry).href);
}finally{await rm(directory,{recursive:true,force:true});}
const repo={repo:'example',branch:'main',readmePath:'docs/README.md',markdown:''};
test('relative links and images preserve README directory and branch',()=>{
 assert.equal(component.repositoryUrl('images/chart.png',repo,true),'https://raw.githubusercontent.com/Azka1212/example/main/docs/images/chart.png');
 assert.equal(component.repositoryUrl('../src/app.py',repo),'https://github.com/Azka1212/example/blob/main/src/app.py');
 assert.equal(component.repositoryUrl('javascript:alert(1)',repo),'');
});
test('actual README component preserves figures and strips executable HTML',()=>{
 const html=renderToStaticMarkup(React.createElement(component.default,{repo:{...repo,markdown:'<p><img src="images/chart.png" onerror="alert(1)" /></p>\n\n<script>alert(1)</script>\n\n<iframe src="https://example.com"></iframe>\n\n[unsafe](javascript:alert%281%29)'}}));
 assert.match(html,/raw\.githubusercontent\.com\/Azka1212\/example\/main\/docs\/images\/chart.png/);
 assert.doesNotMatch(html,/<script|<iframe|onerror|javascript:/i);
});
