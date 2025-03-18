import{i as f,S,a as L}from"./assets/vendor-DvlWBh8k.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const q="49335646-80c9a1e6c5c5033cc7f2a4c93",w="https://pixabay.com/api/",s={page:1,per_page:15},g={search:"submit",loadMore:"button"},c={container:document.querySelector("section.container"),loader:document.querySelector("div.loader"),gallery:document.querySelector("ul.gallery"),loadMoreBtn:document.querySelector(".load-more-btn")},m={position:"topRight",timeout:3e3},n=(t,e="empty message")=>{t==="error"?f.error({message:e,...m}):t==="success"&&f.success({message:e,...m})},A=new S(".gallery a",{captionsData:"alt",captionDelay:250}),d=t=>{if(t&&t.total>0){i(!1);const e=t.hits.map(({webformatURL:l,largeImageURL:a,tags:r,likes:o,views:u,comments:h,downloads:b})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img
                class="gallery-image"
                src="${l}"
                alt="${r}"
                width="350" 
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${b}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${h}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${u}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${o}</p>
              </li>
            </ul>
          </li>
          `).join("");c.gallery.insertAdjacentHTML("beforeend",e),A.refresh()}else i(!1),p(!1),n("success","Sorry, there are no images matching your search query. Please try again!")},i=(t=!0)=>{const e=c.loader;t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},p=(t=!0)=>{const e=c.loadMoreBtn;t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},y=async t=>{t=t||"";const e={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s.page,per_page:s.per_page};return await L.get(w+"?"+new URLSearchParams(e))},M=t=>{i(!0);const e=localStorage.getItem("q-data"),l=c.loader;y(e).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return n("error","Server response fail");if(s.page>r)return p(!1),s.page=1,n("error","We're sorry, there are no more posts to load");l.innerHtml=d(a.data)}).catch(a=>(i(!1),n("error",a.message)))},D=t=>{const e=new FormData(t.target.form),l=localStorage.getItem("q-data"),a=e.get("search");return l&&l!==a&&(s.page=1),localStorage.setItem("q-data",a),Object.fromEntries(e)},P=t=>{t.preventDefault();const e=D(t);if(e.search)i(!0);else return p(!1),i(!1),n("error","Sorry, there are no images matching your search query. Please try again!");c.gallery.innerHTML="";const l=c.loader;s.page=1,y(e.search).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return n("error","Server response fail");if(s.page>r)return p(!1),i(!1),s.page=1,n("error","We're sorry, there are no more posts to load");l.innerHtml=d(a.data),p(!0),s.page+=1}).catch(a=>(i(!1),n("error",a.message)))};i(!1);p(!1);c.container.addEventListener("click",t=>{t.target.type===g.search?P(t):t.target.type===g.loadMore&&M()});
//# sourceMappingURL=index.js.map
