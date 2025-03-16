import{a as p,S as m,i as n}from"./assets/vendor-Dz-Xk4tS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="49335646-80c9a1e6c5c5033cc7f2a4c93",y="https://pixabay.com/api/",g=t=>{t=t||"";const r={key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(y+"?"+new URLSearchParams(r))},d=t=>{if(t&&t.total>0){l(!1);const r=document.querySelector(".gallery");r.innerHTML=t.hits.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:a,comments:c,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
                width="350" 
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${u}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${c}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${a}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${o}</p>
              </li>
            </ul>
          </li>`).join(""),new m(".gallery a",{captionsData:"alt",captionDelay:250})}else l(!1),n.success({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})},l=(t=!0)=>{const r=document.querySelector("span.loader");t?r.hasAttribute("style")&&r.removeAttribute("style"):r.hasAttribute("style")||r.setAttribute("style","display:none")};l(!1);document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const r=new FormData(t.target),s=Object.fromEntries(r);if(s.search)l(!0);else throw n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),new Error;document.querySelector("ul.gallery").innerHTML="";const i=document.querySelector("span.loader");g(s.search).then(e=>{if(e.status!=200)throw new Error("Server response fail");i.innerHtml=d(e.data)}).catch(e=>{n.error({message:e.message,position:"topRight",timeout:5e3}),l(!1)})});
//# sourceMappingURL=index.js.map
