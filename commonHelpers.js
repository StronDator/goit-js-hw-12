import{i as b,S as x,a as S}from"./assets/vendor-89feecc5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const w=new URL("/goit-js-hw-12/assets/octagon-eaf41606.svg",self.location).href,q=new URL("/goit-js-hw-12/assets/x-c55d42bc.svg",self.location).href;function c(s=""){b.show({titleColor:"#FFF",titleSize:"16px",message:s,messageColor:"#FFF",messageSize:"16px",maxWidth:"462px",position:"topRight",backgroundColor:"#EF4040",iconUrl:w,progressBarColor:"#FFBEBE",timeout:5e3,targetFirst:!1,close:!1,buttons:[[`<button type="button" id="izi-close-button">
                 <img src="${q}" alt="" width="16px" height="16px" />
              </button>`,function(l,r){l.hide({},r,"buttonName")}]]});let t=document.querySelector(".iziToast.fadeInUp");t.style.paddingTop="20px",t.style.paddingBottom="20px",t=document.querySelector(".iziToast>.iziToast-body .iziToast-texts"),t.style.maxWidth="322px"}const y=document.querySelector(".gallery"),L=new x(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom"});function v(s,t){if(s.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}t||(y.innerHTML="");const l=s.hits.reduce((r,e)=>r+=`
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
          />
          <ul class="property-list">
            <li class="property-item">
                <p class="property-title">Likes</p>
                <p class="property-value">${e.likes}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Views</p>
                <p class="property-value">${e.views}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Comments</p>
                <p class="property-value">${e.comments}</p>
            </li>
            <li class="property-item">
                <p class="property-title">Downloads</p>
                <p class="property-value">${e.downloads}</p>
            </li>
          </ul>  
          </a>`,"");y.insertAdjacentHTML("beforeend",l),L.refresh()}const a={key:"41460845-2ab95350f4581127087fd5faf",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1},u=document.querySelector(".search-btn"),n=document.querySelector(".load-more-btn"),m=document.querySelector(".main-load"),f=document.querySelector(".more-load");async function g(s,t=!1){t?(f.style.display="block",n.style.display="none",n.blur(),a.page===1&&a.page++):(m.style.display="block",u.disabled=!0,u.blur(),a.page=1),a.q=s;let l=!1,r=0;try{const e=await T();r=e.totalHits,v(e,t)}catch(e){c(e),l=!0}if(t){if(l)n.style.display="flex";else{a.page++;const e=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:e.height*2,left:0,behavior:"smooth"}),a.per_page*a.page>=r?c("We're sorry, but you've reached the end of search results."):n.style.display="flex"}f.style.display="none"}else m.style.display="none",u.disabled=!1,n.style.display="flex"}async function T(){return(await S.get("https://pixabay.com/api/",{params:{...a}})).data}const d=document.querySelector(".search-form"),h=document.querySelector(".load-more-btn");document.querySelector(".main-load").style.display="none";document.querySelector(".more-load").style.display="none";h.style.display="none";let i;d.addEventListener("submit",s=>{if(s.preventDefault(),i=d.elements.search.value.trim(),!i){c("Search must be filled!");return}d.reset(),g(i)});h.addEventListener("click",()=>{g(i,!0)});
//# sourceMappingURL=commonHelpers.js.map
