function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire4097;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4097=r);var i=r("eWCmQ");const u=document.querySelector(".form");let l=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(t){t.preventDefault(),l=Number(t.target.delay.value),a=Number(t.target.step.value),d=Number(t.target.amount.value);for(let t=1;t<=d;t+=1)o(t,l).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),l+=a;function o(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}}));
//# sourceMappingURL=03-promises.11d8d043.js.map