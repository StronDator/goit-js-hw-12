import{i as q,S as L,a as v}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const E=new URL("/goit-js-hw-12/assets/octagon-eaf41606.svg",self.location).href,F=new URL("/goit-js-hw-12/assets/x-c55d42bc.svg",self.location).href;function y(e=""){const t={titleColor:"#FFF",titleSize:"16px",message:e,messageColor:"#FFF",messageSize:"16px",maxWidth:"462px",position:"topRight",backgroundColor:"#EF4040",iconUrl:E,progressBarColor:"#FFBEBE",timeout:5e3,targetFirst:!1,close:!1,buttons:[[`<button type="button" id="izi-close-button">
          <img src="${F}" alt="" width="16px" height="16px" />
        </button>`,function(s,r){s.hide({},r,"buttonName")}]]};q.show(t),T()}function T(){let e=document.querySelector(".iziToast.fadeInUp");e&&(e.style.paddingTop="20px",e.style.paddingBottom="20px"),e=document.querySelector(".iziToast>.iziToast-body .iziToast-texts"),e&&(e.style.maxWidth="322px")}const w=document.querySelector(".gallery"),k=new L(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom"});function z(e,t){if(e.hits.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}t||B();const s=e.hits.map(r=>`
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-image"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
        <ul class="property-list">
          <li class="property-item">
            <p class="property-title">Likes</p>
            <p class="property-value">${r.likes}</p>
          </li>
          <li class="property-item">
            <p class="property-title">Views</p>
            <p class="property-value">${r.views}</p>
          </li>
          <li class="property-item">
            <p class="property-title">Comments</p>
            <p class="property-value">${r.comments}</p>
          </li>
          <li class="property-item">
            <p class="property-title">Downloads</p>
            <p class="property-value">${r.downloads}</p>
          </li>
        </ul>
      </a>`).join("");w.insertAdjacentHTML("beforeend",s),k.refresh()}function B(){w.innerHTML=""}const a={key:"41460845-2ab95350f4581127087fd5faf",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1},c=document.querySelector(".search-btn"),n=document.querySelector(".load-more-btn"),m=document.querySelector(".main-load"),g=document.querySelector(".more-load");async function S(e,t=!1){try{I(t),a.q=e;const s=await $();z(s,t),U(t,s.totalHits)}catch(s){R(t,s)}}function I(e){e?(g.style.display="block",n.style.display="none",n.blur(),a.page===1&&a.page++):(m.style.display="block",c.disabled=!0,c.blur(),a.page=1)}function U(e,t){if(e){a.page++;const s=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:s.height*2,left:0,behavior:"smooth"}),a.per_page*a.page>=t?y("We're sorry, but you've reached the end of search results."):n.style.display="flex",g.style.display="none"}else m.style.display="none",c.disabled=!1,n.style.display="flex"}function R(e,t){y(t),e?(n.style.display="flex",g.style.display="none"):(m.style.display="none",c.disabled=!1,n.style.display="flex")}async function $(){return(await v.get("https://pixabay.com/api/",{params:{...a}})).data}const f=document.querySelector(".search-form"),h=document.querySelector(".load-more-btn"),b=document.querySelector(".main-load"),p=document.querySelector(".more-load");b.style.display="none";p.style.display="none";h.style.display="none";let i;const d=e=>{e&&(e.style.display="none")},x=e=>{e&&(e.style.display="block")},C=async e=>{if(e.preventDefault(),i=f.elements.search.value.trim(),!i){y("Search must be filled!");return}f.reset(),d(b),d(p);try{await S(i),x(h)}catch(t){console.error("Error downloading images:",t)}},M=async()=>{d(b),x(p);try{await S(i,!0)}catch(e){console.error("Error loading more images:",e)}finally{d(p)}};f.addEventListener("submit",C);h.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
