import {validProfile} from './engine.js';
const key="blackout-courier:v1:";
export function decode(raw){if(typeof raw!=="string"||raw.length>4e6)throw Error("Invalid file");let p=JSON.parse(raw);if(!validProfile(p))throw Error("Invalid save");p.cleared??=[];if(p.run)p.run.sector??="city";return p}
export function read(slot){for(let suffix of ["current","backup"])try{let v=localStorage.getItem(key+slot+":"+suffix);if(v)return {p:decode(v),recovered:suffix==="backup"}}catch{}return null}
export function save(slot,p){if(![1,2,3].includes(slot)||!validProfile(p))throw Error("Invalid save");const k=key+slot+":current";let old=localStorage.getItem(k);if(old){let ok=false;try{decode(old);ok=true}catch{}if(ok)localStorage.setItem(key+slot+":backup",old)}localStorage.setItem(k,JSON.stringify(p))}
export function erase(slot){for(let x of ["current","backup"])localStorage.removeItem(key+slot+":"+x)}
export function exportSave(p){let u=URL.createObjectURL(new Blob([JSON.stringify(p,null,2)],{type:"application/json"})),a=document.createElement("a");a.href=u;a.download="blackout-courier-save.json";a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)}
