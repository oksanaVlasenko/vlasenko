import{_ as M,c as u,a,w as j,f as g,v as f,b as H,d as B,o as v}from"./index-CLiXJ5G9.js";class m{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const C=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:C()},b=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},R=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=b(e);i.publicKey=s.publicKey,i.blockHeadless=s.blockHeadless,i.storageProvider=s.storageProvider,i.blockList=s.blockList,i.limitRate=s.limitRate,i.origin=s.origin||t},_=async(e,t,s={})=>{const r=await fetch(i.origin+e,{method:"POST",headers:s,body:t}),o=await r.text(),n=new m(r.status,o);if(r.ok)return n;throw n},k=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},S=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},x=e=>e.webdriver||!e.languages||e.languages.length===0,y=()=>new m(451,"Unavailable For Headless Browser"),z=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},E=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},F=(e,t)=>e instanceof FormData?e.get(t):e[t],L=(e,t)=>{if(E(e))return!1;z(e.list,e.watchVariable);const s=F(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},P=()=>new m(403,"Forbidden"),K=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},q=async(e,t,s)=>{const r=Number(await s.get(e)||0);return t-Date.now()+r},V=async(e,t,s)=>{if(!t.throttle||!s)return!1;K(t.throttle,t.id);const r=t.id||e;return await q(r,t.throttle,s)>0?!0:(await s.set(r,Date.now().toString()),!1)},T=()=>new m(429,"Too Many Requests"),N=async(e,t,s,r)=>{const o=b(r),n=o.publicKey||i.publicKey,l=o.blockHeadless||i.blockHeadless,d=o.storageProvider||i.storageProvider,h={...i.blockList,...o.blockList},w={...i.limitRate,...o.limitRate};return l&&x(navigator)?Promise.reject(y()):(k(n,e,t),S(s),s&&L(h,s)?Promise.reject(P()):await V(location.pathname,w,d)?Promise.reject(T()):_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},O=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},W=e=>typeof e=="string"?document.querySelector(e):e,D=async(e,t,s,r)=>{const o=b(r),n=o.publicKey||i.publicKey,l=o.blockHeadless||i.blockHeadless,d=i.storageProvider||o.storageProvider,h={...i.blockList,...o.blockList},w={...i.limitRate,...o.limitRate};if(l&&x(navigator))return Promise.reject(y());const p=W(s);k(n,e,t),O(p);const c=new FormData(p);return L(h,c)?Promise.reject(P()):await V(location.pathname,w,d)?Promise.reject(T()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),_("/api/v1.0/email/send-form",c))},U={init:R,send:N,sendForm:D,EmailJSResponseStatus:m},I={name:"ContactView",data(){return{form:{name:"",email:"",message:""},isPending:!1}},methods:{async sendEmail(){this.isPending=!0,U.sendForm("service_v3gop1n","template_ozifuu4",this.$refs.form,{publicKey:"7qoRHeuM-5wpKZr3r"}).then(e=>{console.log("Email sent successfully:",e)}).catch(e=>{console.error("Failed to send email:",e)}).finally(()=>{this.isPending=!1,this.form.name="",this.form.email="",this.form.message=""})}}},A={class:"flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden mt-6 pt-9"},J=a("h2",null,"Get in touch",-1),G={class:"contact"},Z=B('<div class="media-group"><p class="sub-title">Talk to me</p><div class="media"><svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg><p class="name">Linkedin</p><p class="text-link">https://www.linkedin.com/in/oksana-vlasenko-28b53919b/</p><a class="icon-btn" href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/" target="_blank"> Write me <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg></a></div><div class="media"><svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"></path></svg><p class="name">Email</p><p class="text-link">vlasenkoksenia642@gmail.com</p><a class="icon-btn" href="mailto:vlasenkoksenia642@gmail.com" target="_blank"> Write me <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg></a></div><div class="media"><svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg><p class="name">Telegram</p><p class="text-link">@kseniaVlasenko</p><a class="icon-btn" href="https://t.me/kseniaVlasenko" target="_blank"> Write me <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg></a></div></div>',1),Q={class:"contact-me"},X=a("p",{class:"sub-title"},"Contact Me",-1),Y={class:"contact__form-div"},$=a("label",{for:"",class:"contact__form-tag"}," Name ",-1),ee={class:"contact__form-div"},te=a("label",{for:"",class:"contact__form-tag"}," Mail ",-1),se={class:"contact__form-div contact__form-area"},oe=a("label",{for:"",class:"contact__form-tag"}," Message ",-1),ae={type:"submit",class:"button button--flex"},ie={key:0,class:"animate-spin h-5 w-5 ml-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},re=a("path",{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z",fill:"currentColor"},null,-1),ne=[re],le={key:1,class:"h-5 w-5 ml-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ce=a("path",{d:"M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z",fill:"currentColor"},null,-1),me=[ce];function de(e,t,s,r,o,n){return v(),u("div",A,[J,a("div",G,[Z,a("div",Q,[X,a("form",{ref:"form",class:"contact__form",onSubmit:t[3]||(t[3]=j((...l)=>n.sendEmail&&n.sendEmail(...l),["prevent"]))},[a("div",Y,[$,g(a("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.name=l),type:"text",name:"name",class:"contact__form-input border",placeholder:"Insert your name",required:""},null,512),[[f,o.form.name]])]),a("div",ee,[te,g(a("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.email=l),type:"email",name:"email",class:"contact__form-input",placeholder:"Insert your email",required:""},null,512),[[f,o.form.email]])]),a("div",se,[oe,g(a("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.message=l),name:"message",cols:"30",rows:"10",class:"contact__form-input",placeholder:"Write your message"},null,512),[[f,o.form.message]])]),a("button",ae,[H(" Send Message "),o.isPending?(v(),u("svg",ie,ne)):(v(),u("svg",le,me))])],544)])])])}const we=M(I,[["render",de]]);export{we as default};
