import{y as d}from"./app-B-ElfUmG.js";function p(t){const e=new TextEncoder;return window.crypto.subtle.importKey("raw",e.encode(t),"PBKDF2",!1,["deriveBits","deriveKey"])}function l(t,e){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:1e5,hash:"SHA-256"},t,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function w(){const t=d(),{encrypt:e}=t.value,n=Uint8Array.from(Object.values(e.iv)),c=Uint8Array.from(Object.values(e.salt));return{decrypt:async(r,o)=>{if(!r)return;const a=await p(r),i=await l(a,c),s=Uint8Array.from(o,u=>u.charCodeAt(0)),y=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},i,s);return new TextDecoder().decode(y)}}}export{w as u};
