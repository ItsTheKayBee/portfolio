(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{2452:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(1859),s=r.n(i),l=r(7563),o=r.n(l),a=r(137),c=r(7650);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(a){o=!0,i=a}finally{try{l||null==r.return||r.return()}finally{if(o)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=e.title,r=e.images,i=d((0,c.YD)({rootMargin:"-100px 0px",triggerOnce:!0}),2),l=i[0],u=i[1];return(0,n.jsxs)("div",{className:(0,a.k)(o().section,o().dark,s().skillsWrapper),id:"skills",children:[(0,n.jsx)("div",{className:(0,a.k)(o().titleSection,u?o().inView:""),ref:l,children:(0,n.jsx)("h1",{className:(0,a.k)(o().sectionTitle),children:t})}),(0,n.jsx)("div",{className:s().skills,children:r.map((function(e,t){var r=e.url,i=e.alt;return(0,n.jsxs)("div",{className:(0,a.k)(s().skill,u?s().inView:""),children:[(0,n.jsx)("img",{src:r,alt:i,className:s().image,loading:"lazy",draggable:"false"}),(0,n.jsx)("h2",{className:s().title,children:i})]},t)}))})]})}},1859:function(e){e.exports={skillsWrapper:"skills_skillsWrapper__0aaV_",skills:"skills_skills__e98U_",skill:"skills_skill__OOdGq",title:"skills_title___9sj0",inView:"skills_inView__5NxX3",image:"skills_image__WOj6u"}},7650:function(e,t,r){"use strict";r.d(t,{YD:function(){return u}});var n=r(7294);const i=new Map,s=new WeakMap;let l,o=0;function a(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(s.has(r)||(o+=1,s.set(r,o.toString())),s.get(r)):"0"):e[t]}`;var r})).toString()}function c(e,t,r={},n=l){if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:s,observer:o,elements:c}=function(e){let t=a(e),r=i.get(t);if(!r){const n=new Map;let s;const l=new IntersectionObserver((t=>{t.forEach((t=>{var r;const i=t.isIntersecting&&s.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(r=n.get(t.target))||r.forEach((e=>{e(i,t)}))}))}),e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:l,elements:n},i.set(t,r)}return r}(r);let u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(t),o.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(c.delete(e),o.unobserve(e)),0===c.size&&(o.disconnect(),i.delete(s))}}n.Component;function u({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:s,triggerOnce:l,skip:o,initialInView:a,fallbackInView:u,onChange:d}={}){const f=n.useRef(),h=n.useRef(),[g,y]=n.useState({inView:!!a});h.current=d;const k=n.useCallback((n=>{void 0!==f.current&&(f.current(),f.current=void 0),o||n&&(f.current=c(n,((e,t)=>{y({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)}),{root:s,rootMargin:i,threshold:e,trackVisibility:r,delay:t},u))}),[Array.isArray(e)?e.toString():e,s,i,l,o,r,u,t]);n.useEffect((()=>{f.current||!g.entry||l||o||y({inView:!!a})}));const p=[k,g.inView,g.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}}}]);