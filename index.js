import{S as b,i as f,a as S}from"./assets/vendor-DvlWBh8k.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const m=t=>{if(t&&t.total>0){l(!1),c(!0);const e=document.querySelector(".gallery"),i=t.hits.map(({webformatURL:a,largeImageURL:r,tags:o,likes:p,views:y,comments:d,downloads:h})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${o}"
                width="350" 
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${h}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${d}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${y}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${p}</p>
              </li>
            </ul>
          </li>
          `).join("");e.insertAdjacentHTML("beforeend",i),new b(".gallery a",{captionsData:"alt",captionDelay:250})}else l(!1),c(!1),f.success({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})},l=(t=!0)=>{const e=document.querySelector("span.loader");t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},c=(t=!0)=>{const e=document.querySelector(".load-more-btn");t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},q="49335646-80c9a1e6c5c5033cc7f2a4c93",L="https://pixabay.com/api/",s={page:1,per_page:15},u={search:"submit",loadMore:"button"},n=(t,e="empty message")=>{f.error({message:e,position:"topRight",timeout:5e3})},g=async t=>{t=t||"";const e={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s.page,per_page:s.per_page};return e.page=s.page,await S.get(L+"?"+new URLSearchParams(e))},A=t=>{const e=localStorage.getItem("q-data"),i=document.querySelector("span.loader");g(e).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return n("error","Server response fail");if(s.page>r)return c(!1),n("error","We're sorry, there are no more posts to load");i.innerHtml=m(a.data),s.page+=1}).catch(a=>(l(!1),n("error",a.message)))},w=t=>{const e=new FormData(t.target.form);return localStorage.setItem("q-data",e),Object.fromEntries(e)},D=t=>{t.preventDefault();const e=w(t);if(e.search)l(!0);else return c(!1),l(!1),n("error","Sorry, there are no images matching your search query. Please try again!");document.querySelector("ul.gallery").innerHTML="";const i=document.querySelector("span.loader");g(e.search).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return n("error","Server response fail");if(s.page>r)return c(!1),l(!1),n("error","We're sorry, there are no more posts to load");i.innerHtml=m(a.data),s.page+=1}).catch(a=>(l(!1),n("error",a.message)))};l(!1);c(!1);document.querySelector("section.container").addEventListener("click",t=>{t.target.type===u.search?D(t):t.target.type===u.loadMore&&A()});
//# sourceMappingURL=index.js.map
