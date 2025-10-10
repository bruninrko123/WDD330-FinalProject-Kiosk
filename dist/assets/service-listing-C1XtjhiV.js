import{r as s,l as o,a as l}from"./utils-AUT24oTU.js";async function c(t){const e=await t.json();if(t.ok)return e;throw{name:"External Services Error:",message:e}}class u{constructor(){}async getData(e){const r=await fetch(`../json/${e}.json`);return await c(r)}}function m(t){return`
    <option value =${t.lockerNumber}>${t.lockerNumber} - ${t.size}}</option>`}function a(t){return`
  <a href= '/service_pages/index.html?food=${t.id}'>
  <ul class="food-card">
  
     <img src="${t.image}" alt="${t.name}" width="300" height="300"> 
     <h3>${t.name} - ${t.price}</h3>
     <p>${t.description}</p>
     
     </ul>
     </a>      
    `}class h{constructor(e,r,n){this.category=e,this.dataSource=r,this.listElement=n}async init(){const e=await this.dataSource.getData(this.category);console.log(e),this.renderService(e)}renderService(e){if(this.category==="lockers")console.log(e),s(m,this.listElement,e);else if(this.category==="menu"){s(a,this.listElement,e);const r=document.querySelector("#type");r.addEventListener("input",()=>{if(r.value==="All")s(a,this.listElement,e,"afterBegin",!0);else if(r.value==="Foods"){const n=e.filter(i=>i.category==="food");s(a,this.listElement,n,"afterBegin",!0)}else if(r.value==="Drinks"){const n=e.filter(i=>i.category==="drink");s(a,this.listElement,n,"afterBegin",!0)}})}}}o();const d=l("service"),g=new u,f=document.querySelector(".listing"),p=new h(d,g,f);p.init();
