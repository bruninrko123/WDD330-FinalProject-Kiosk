import{l as o,g as t}from"./utils-AUT24oTU.js";o();function n(){const r=t("food-cart").map(a);document.querySelector(".orderItems").innerHTML=r.join("")}function a(e){return`
    <img src="${e.image}" alt="${e.name}" width="300" height="300"> 
     <h3>${e.name} - ${e.price}</h3>
     <p>${e.description}</p>`}n();
