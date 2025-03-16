import{i as u,a as h,S as b}from"./assets/vendor-Dz-Xk4tS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const n=(r,t="empty message")=>{u.error({message:t,position:"topRight",timeout:5e3})},S="49335646-80c9a1e6c5c5033cc7f2a4c93",L="https://pixabay.com/api/",o={page:1,per_page:15},m=async r=>{r=r||"";const t={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o.page,per_page:o.per_page};return t.page=o.page,await h.get(L+"?"+new URLSearchParams(t))},f=r=>{if(r&&r.total>0){l(!1),c(!0);const t=document.querySelector(".gallery"),s=r.hits.map(({webformatURL:i,largeImageURL:e,tags:a,likes:p,views:g,comments:y,downloads:d})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image"
                src="${i}"
                alt="${a}"
                width="350" 
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${d}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${y}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${g}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${p}</p>
              </li>
            </ul>
          </li>
          `).join("");t.insertAdjacentHTML("beforeend",s),new b(".gallery a",{captionsData:"alt",captionDelay:250})}else l(!1),c(!1),u.success({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})},l=(r=!0)=>{const t=document.querySelector("span.loader");r?t.hasAttribute("style")&&t.removeAttribute("style"):t.hasAttribute("style")||t.setAttribute("style","display:none")},c=(r=!0)=>{const t=document.querySelector(".load-more-btn");r?t.hasAttribute("style")&&t.removeAttribute("style"):t.hasAttribute("style")||t.setAttribute("style","display:none")};l(!1);c(!1);document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const t=new FormData(r.target),s=Object.fromEntries(t);if(s.search)l(!0);else return c(!1),l(!1),n("error","Sorry, there are no images matching your search query. Please try again!");document.querySelector("ul.gallery").innerHTML="";const i=document.querySelector("span.loader");m(s.search).then(e=>{const a=Math.ceil(e.data.totalHits/o.per_page);if(e.status!=200)return n("error","Server response fail");if(o.page>a)return c(!1),l(!1),n("error","We're sorry, there are no more posts to load");i.innerHtml=f(e.data),o.page+=1}).catch(e=>(l(!1),n("error",e.message)))});document.querySelector(".load-more-btn").addEventListener("submit",r=>{const t=document.querySelector("span.loader"),s=new FormData(r.target),i=Object.fromEntries(s);m(i.search).then(e=>{const a=Math.ceil(e.data.totalHits/o.per_page);if(e.status!=200)return n("error","Server response fail");if(o.page>a)return c(!1),n("error","We're sorry, there are no more posts to load");t.innerHtml=f(e.data),o.page+=1}).catch(e=>(l(!1),n("error",e.message)))});
//# sourceMappingURL=index.js.map
