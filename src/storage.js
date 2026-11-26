import {valid} from './engine.js';
const prefix='echo-frontier:v1:';
export const slots=[1,2,3];
function decode(raw){if(!raw)return null;const s=JSON.parse(raw);if(!valid(s))throw Error('Invalid save');s.projects??=[];return s}
export function read(slot){for(const suffix of ['current','backup'])try{const s=decode(localStorage.getItem(prefix+slot+':'+suffix));if(s)return {state:s,recovered:suffix==='backup'}}catch{}return null}
export function save(slot,s){if(!slots.includes(slot)||!valid(s))throw Error('Invalid save');const next={...s,saved:Date.now()},key=prefix+slot+':current',previous=localStorage.getItem(key);if(previous){let old;try{old=decode(previous)}catch{}if(old)localStorage.setItem(prefix+slot+':backup',previous)}localStorage.setItem(key,JSON.stringify(next));s.saved=next.saved;return next.saved}
export function erase(slot){for(const suffix of ['current','backup'])localStorage.removeItem(prefix+slot+':'+suffix)}
export function parseImport(raw){if(typeof raw!=='string'||raw.length>2e6)throw Error('File too large');const s=decode(raw);if(!s)throw Error('Empty save');return s}
export function exportSave(s){if(!valid(s))throw Error('Invalid save');const u=URL.createObjectURL(new Blob([JSON.stringify(s,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download='echo-frontier-'+s.seed+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
export function getSettings(){try{const p=JSON.parse(localStorage.getItem(prefix+'settings'));return {lang:p?.lang==='en'?'en':'fr',sound:p?.sound!==false,motion:p?.motion!==false}}catch{return {lang:'fr',sound:true,motion:true}}}
export function setSettings(p){localStorage.setItem(prefix+'settings',JSON.stringify(p))}
