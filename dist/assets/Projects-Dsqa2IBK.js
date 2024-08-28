import{_ as F,o as $,c as L,a as v,b as R,e as W,d as q,r as Z}from"./index-CLiXJ5G9.js";import{p as K}from"./CV_Oksana_Vlasenko-BZ1r9zDf.js";function Q(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var X=["#eee","#d6e685","#8cc665","#44a340","#1e6823"],ee=X,te=function(t){var e={last_year:0,longest_streak:-1,longest_streak_range:[],current_streak:0,current_streak_range:[],longest_break:-1,longest_break_range:[],current_break:0,current_break_range:[],weeks:[],days:[],last_contributed:null},n=[],a=function(){e.current_streak>e.longest_streak&&(e.longest_streak=e.current_streak,e.longest_streak_range[0]=e.current_streak_range[0],e.longest_streak_range[1]=e.current_streak_range[1])},i=function(){e.current_break>e.longest_break&&(e.longest_break=e.current_break,e.longest_break_range[0]=e.current_break_range[0],e.longest_break_range[1]=e.current_break_range[1])};return t.split(`
`).slice(2).map(function(s){return s.trim()}).forEach(function(s){if(s.startsWith("<g transform"))return n.length&&e.weeks.push(n)&&(n=[]);var o=s.match(/data-level="([0-9\-]+)"/i),c=s.match(/data-date="([0-9\-]+)"/),l=s.match(/(No|[0-9]+)( contribution)/);if(o=o&&o[1],c=c&&c[1],l?(l[1]==="No"&&(l[1]=0),l=+l[1]):l=0,!!o){var b=ee[o],g={fill:b,date:new Date(c),count:l,level:o};e.current_streak===0&&(e.current_streak_range[0]=g.date),e.current_break===0&&(e.current_break_range[0]=g.date),g.count?(++e.current_streak,e.last_year+=g.count,e.last_contributed=g.date,e.current_streak_range[1]=g.date,i(),e.current_break=0):(a(),e.current_streak=0,++e.current_break,e.current_break_range[1]=g.date),n.push(g),e.days.push(g)}}),a(),e},re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};function ne(r,t){var e=0,n=[];if(Array.isArray(r))for(;e<r.length&&t(r[e],e,r)!==!1;++e);else if((typeof r>"u"?"undefined":re(r))==="object"&&r!==null)for(n=Object.keys(r);e<n.length&&t(r[n[e]],n[e],r)!==!1;++e);}var ae=ne,se=function(r,t,e){var n=[],a=r.length;if(a===0)return n;var i=t<0?Math.max(0,t+a):t||0;for(e!==void 0&&(a=e<0?e+a:e);a-- >i;)n[a-i]=r[a];return n},oe=ae,ie=se;function Y(r,t){return typeof r=="string"?r.charAt(0)==="<"?(r=document.createElement(r.slice(1,-1)),oe(t||{},function(e,n){switch(n){case"text":r.textContent=e;return;case"html":r.innerHTML=e;return}r.setAttribute(n,e)}),r):(t=t||document,t.querySelector(r)):r}Y.$$=function(r,t){return typeof r=="string"?(t=t||document,ie(t.querySelectorAll(r))):[r]};var ce=Y;function D(r){return function t(e,n,a){switch(n=r*n,a){case"years":case"year":e.setFullYear(e.getFullYear()+n);break;case"months":case"month":e.setMonth(e.getMonth()+n);break;case"weeks":case"week":return t(e,n*7,"days");case"days":case"day":e.setDate(e.getDate()+n);break;case"hours":case"hour":e.setHours(e.getHours()+n);break;case"minutes":case"minute":e.setMinutes(e.getMinutes()+n);break;case"seconds":case"second":e.setSeconds(e.getSeconds()+n);break;case"milliseconds":case"millisecond":e.setMilliseconds(e.getMilliseconds()+n);break;default:throw new Error("Invalid range: "+a)}return e}}var le={add:D(1),subtract:D(-1)},E={exports:{}};/*!
 * months <https://github.com/datetime/months>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */(function(r){r.exports=["January","February","March","April","May","June","July","August","September","October","November","December"],r.exports.abbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r.exports.it=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],r.exports.abbr.it=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],r.exports.de=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r.exports.abbr.de=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]})(E);var ue=E.exports,O={exports:{}};/*!
 * days <https://github.com/jonschlinkert/days>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */(function(r){r.exports.en=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r.exports.en.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r.exports.en.short=["Su","Mo","Tu","We","Th","Fr","Sa"],r.exports.fr=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],r.exports.fr.abbr=["dim","lun","mar","mer","jeu","ven","sam"],r.exports.fr.short=["di","lu","ma","me","je","ve","sa"],r.exports.es=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],r.exports.es.abbr=["dom","lun","mar","mir","jue","vie","sab"],r.exports.es.short=["do","lu","ma","mi","ju","vi","sa"],r.exports.it=["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],r.exports.it.abbr=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],r.exports.it.short=["D","L","Ma","Me","G","V","S"],r.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r.exports.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r.exports.short=["Su","Mo","Tu","We","Th","Fr","Sa"]})(O);var de=O.exports,fe=function(t,e,n){e=e||2,n=n||"0",t=t.toString();var a=e-t.length;return(a<=0?"":String(n).repeat(a))+t};function k(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}k.proto=function(){return RegExp.escape=k,k};var ge=k,pe=function(){function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function ve(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var be=ge,z=function(){function r(t){ve(this,r),this.obj=t||{},this.re=new RegExp("^("+Object.keys(t).map(be).join("|")+")")}return pe(r,[{key:"run",value:function(e,n){var a="";n=n||[];do{var i=e.match(this.re),s=i&&i[1],o=s||e.charAt(0);if(s){var c=this.obj[s];typeof c=="function"&&(c=c.apply(this,n)),a+=c}else a+=o;e=e.substring(o.length)}while(e);return a}}]),r}();function V(r,t,e){return new z(t).run(r,e)}V.Parser=z;var he=V,y=ue,x=de,f=fe,me=he.Parser,u={YYYY:function(t,e){return e?t.getUTCFullYear():t.getFullYear()},YY:function(t,e){return u.YYYY(t,e)%100},MMMM:function(t,e){return e?y[t.getUTCMonth()]:y[t.getMonth()]},MMM:function(t,e){return e?y.abbr[t.getUTCMonth()]:y.abbr[t.getMonth()]},MM:function(t,e){return f(e?t.getUTCMonth()+1:t.getMonth()+1)},M:function(t,e){return e?t.getUTCMonth()+1:t.getMonth()+1},dddd:function(t,e){return x[u.d(t,e)]},ddd:function(t,e){return x.abbr[u.d(t,e)]},dd:function(t,e){return x.short[u.d(t,e)]},d:function(t,e){return e?t.getUTCDay():t.getDay()},DD:function(t,e){return f(u.D(t,e))},D:function(t,e){return e?t.getUTCDate():t.getDate()},A:function(t,e){return u.a(t,e).toUpperCase()},a:function(t,e){return u.H(t,e)>=12?"pm":"am"},hh:function(t,e){return f(u.h(t,e))},h:function(t,e){return u.H(t,e)%12||12},HH:function(t,e){return f(u.H(t,e))},H:function(t,e){return e?t.getUTCHours():t.getHours()},mm:function(t,e){return f(u.m(t,e))},m:function(t,e){return e?t.getUTCMinutes():t.getMinutes()},ss:function(t,e){return f(u.s(t,e))},s:function(t,e){return e?t.getUTCSeconds():t.getSeconds()},S:function(t,e){return Math.round(u.s(t,e)/60*10)},SS:function(t,e){return f(u.s(t,e)/60*100)},SSS:function(t,e){return f(u.s(t,e)/60*1e3,3)},Z:function(t){var e=-t.getTimezoneOffset();return(e>=0?"+":"-")+f(parseInt(e/60))+":"+f(e%60)},ZZ:function(t){var e=-t.getTimezoneOffset();return(e>=0?"+":"-")+f(parseInt(e/60))+f(e%60)}},_e=new me(u),ye=function(t,e){return _e.run(e,[t,t._useUTC])},ke=te,_=ce,T=le,p=ye,A="MMM D, YYYY",h="MMMM D",Me=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function H(r){return r+" "+(r===1?"day":"days")}function xe(r){var t=document.createElement("div");t.classList.add("day-tooltip"),r.appendChild(t);var e=r.querySelectorAll(".js-calendar-graph-svg rect.ContributionCalendar-day");e.forEach(function(n){n.addEventListener("mouseenter",function(a){var i=a.target.getAttribute("data-count");i==="0"?i="No contributions":i==="1"?i="1 contribution":i=i+" contributions";var s=new Date(a.target.getAttribute("data-date")),o=Me[s.getUTCMonth()]+" "+s.getUTCDate()+", "+s.getUTCFullYear();t.innerHTML="<strong>"+i+"</strong> on "+o,t.classList.add("is-visible");var c=a.target.getBoundingClientRect(),l=c.left+window.pageXOffset-t.offsetWidth/2+c.width/2,b=c.bottom+window.pageYOffset-t.offsetHeight-2*c.height;t.style.top=b+"px",t.style.left=l+"px"}),n.addEventListener("mouseleave",function(){t.classList.remove("is-visible")})})}var we=function(t,e,n){t=_(t),n=n||{},n.summary_text=n.summary_text||'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/'+e+'" target="blank">@'+e+"</a>",n.cache=(n.cache||24*60*60)*1e3,n.global_stats===!1&&(t.style.minHeight="175px");var a={content:"gh_calendar_content."+e,expire_at:"gh_calendar_expire."+e};n.proxy=n.proxy||function(s){return fetch("https://api.bloggify.net/gh-calendar/?username="+s).then(function(o){return o.text()})},n.getCalendar=n.getCalendar||function(s){if(n.cache&&Date.now()<+localStorage.getItem(a.expire_at)){var o=localStorage.getItem(a.content);if(o)return Promise.resolve(o)}return n.proxy(s).then(function(c){return n.cache&&(localStorage.setItem(a.content,c),localStorage.setItem(a.expire_at,Date.now()+n.cache)),c})};var i=function s(){return n.getCalendar(e).then(function(o){var c=document.createElement("div");c.innerHTML=o;var l=c.querySelector(".js-yearly-contributions");_(".position-relative h2",l).remove();var b=!0,g=!1,w=void 0;try{for(var M=c.querySelectorAll("a")[Symbol.iterator](),S;!(b=(S=M.next()).done);b=!0){var C=S.value;C.textContent.includes("View your contributions in 3D, VR and IRL!")&&C.parentElement.remove()}}catch(B){g=!0,w=B}finally{try{!b&&M.return&&M.return()}finally{if(g)throw w}}if(l.querySelector("include-fragment"))setTimeout(s,500);else{if(n.responsive===!0){var m=l.querySelector("table.js-calendar-graph-table"),N=m.getAttribute("width"),U=m.getAttribute("height");m.removeAttribute("height"),m.setAttribute("width","100%"),m.setAttribute("viewBox","0 0 "+N+" "+U)}if(n.global_stats!==!1){var d=ke(l.innerHTML),P=d.current_streak?p(d.current_streak_range[0],h)+" &ndash; "+p(d.current_streak_range[1],h):d.last_contributed?"Last contributed in "+p(d.last_contributed,h)+".":"Rock - Hard Place",G=d.longest_streak?p(d.longest_streak_range[0],h)+" &ndash; "+p(d.longest_streak_range[1],h):d.last_contributed?"Last contributed in "+p(d.last_contributed,h)+".":"Rock - Hard Place",J=_("<div>",{class:"contrib-column contrib-column-first table-column",html:`<span class="text-muted">Contributions in the last year</span>
                               <span class="contrib-number">`+d.last_year+` total</span>
                               <span class="text-muted">`+p(T.add(T.subtract(new Date,1,"year"),1,"day"),A)+" &ndash; "+p(new Date,A)+"</span>"}),I=_("<div>",{class:"contrib-column table-column",html:`<span class="text-muted">Longest streak</span>
                               <span class="contrib-number">`+H(d.longest_streak)+`</span>
                               <span class="text-muted">`+G+"</span>"}),j=_("<div>",{class:"contrib-column table-column",html:`<span class="text-muted">Current streak</span>
                               <span class="contrib-number">`+H(d.current_streak)+`</span>
                               <span class="text-muted">`+P+"</span>"});l.appendChild(J),l.appendChild(I),l.appendChild(j)}t.innerHTML=l.innerHTML,n.tooltips===!0&&xe(t)}}).catch(function(o){return console.error(o)})};return i()};const Se=Q(we),Ce={name:"GithubActivity",mounted(){Se("#github-calendar","oksanaVlasenko",{global_stats:!1,tooltips:!0,responsive:!0})}},De=v("h2",null,"Contribution activity",-1),Te=v("div",{id:"github-calendar"},null,-1),Ae=[De,Te];function He(r,t,e,n,a,i){return $(),L("div",null,Ae)}const Fe=F(Ce,[["render",He]]),$e="/assets/logo-fixiq-BOZz42bb.png",Le="/assets/medstar-logo-CF7h3ek5.png",Ye="/assets/varion-CsG0llA5.png",Ee={components:{GithubActivity:Fe},data(){return{pdfUrl:K}},methods:{downloadPDF(){const r=document.createElement("a");r.href=this.pdfUrl,r.download="CV_Oksana_Vlasenko.pdf",r.click()}}},Oe={class:"flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden mt-6 pt-9"},ze=v("h2",null,"Work history",-1),Ve={class:"work-history"},Ne=q('<div class="work"><div class="logo"><img alt="logo" src="'+$e+'"></div><div class="work-info"><p class="position"> FixIQ Pro </p><div class="details"><p class="experience">Frontend Developer</p><p class="experience">2021-09 - 2024-07</p></div></div></div><div class="work"><div class="logo"><img alt="logo" src="'+Le+'"></div><div class="work-info"><p class="position"> Medstar Solutions </p><div class="details"><p class="experience">Frontend Developer</p><p class="experience">2021-06 - 2021-09</p></div></div></div><div class="work"><div class="logo"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512" class="freelance-icon"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" fill="none"></path></svg></div><div class="work-info"><p class="position"> Freelance </p><div class="details"><p class="experience">Frontend Developer</p><p class="experience">2020-07 - 2021-05</p></div></div></div><div class="work"><div class="logo"><img alt="logo" src="'+Ye+'"></div><div class="work-info"><p class="position"> Varion </p><div class="details"><p class="experience">Frontend Developer</p><p class="experience">2020-01 - 2020-04</p></div></div></div>',4),Ue=v("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[v("path",{d:"M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7c-3.8-21.3-19.5-29.6-32.9-30.2c-15.8-.7-29.9 8.3-33.4 21.4c-6.6 24-.7 56.8 10.1 98.6c-13.6 32.4-35.3 79.5-51.2 107.5c-29.6 15.3-69.3 38.9-75.2 68.7c-1.2 5.5.2 12.5 3.5 18.8c3.7 7 9.6 12.4 16.5 15c3 1.1 6.6 2 10.8 2c17.6 0 46.1-14.2 84.1-79.4c5.8-1.9 11.8-3.9 17.6-5.9c27.2-9.2 55.4-18.8 80.9-23.1c28.2 15.1 60.3 24.8 82.1 24.8c21.6 0 30.1-12.8 33.3-20.5c5.6-13.5 2.9-30.5-6.2-39.6c-13.2-13-45.3-16.4-95.3-10.2c-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7c6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4c-4.9-19.9-5.6-48.1-2.7-51.4c.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2c-21.6 4.9-41.3 13-58.9 20.2c-4.2 1.7-8.3 3.4-12.3 5c13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6c40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z",fill:"currentColor"})],-1),Pe={class:"hidden md:block"};function Ge(r,t,e,n,a,i){const s=Z("GithubActivity");return $(),L("div",Oe,[ze,v("div",Ve,[Ne,v("button",{class:"primary-btn mt-6 icon-btn",onClick:t[0]||(t[0]=(...o)=>i.downloadPDF&&i.downloadPDF(...o))},[R(" Download CV "),Ue])]),v("div",Pe,[W(s)])])}const je=F(Ee,[["render",Ge]]);export{je as default};
