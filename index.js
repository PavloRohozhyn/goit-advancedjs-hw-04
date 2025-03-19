import{i as f,S,a as L}from"./assets/vendor-DvlWBh8k.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const q="49335646-80c9a1e6c5c5033cc7f2a4c93",w="https://pixabay.com/api/",s={page:1,per_page:15},g={search:"submit",loadMore:"button"},n={container:document.querySelector("section.container"),loader:document.querySelector("div.loader"),gallery:document.querySelector("ul.gallery"),loadMoreBtn:document.querySelector(".load-more-btn")},m={position:"topRight",timeout:3e3},i=(t,e="empty message")=>{t==="error"?(u(!1),p(!1),f.error({message:e,...m})):t==="success"&&f.success({message:e,...m})},A=new S(".gallery a",{captionsData:"alt",captionDelay:250}),d=t=>{if(t&&t.total>0){p(!1);const e=t.hits.map(({webformatURL:l,largeImageURL:a,tags:r,likes:o,views:c,comments:h,downloads:b})=>`
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
                <p>${c}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${o}</p>
              </li>
            </ul>
          </li>
          `).join("");n.gallery.insertAdjacentHTML("beforeend",e),A.refresh()}else i("success","Sorry, there are no images matching your search query. Please try again!")},p=(t=!0)=>{const e=n.loader;t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},u=(t=!0)=>{const e=n.loadMoreBtn;t?e.hasAttribute("style")&&e.removeAttribute("style"):e.hasAttribute("style")||e.setAttribute("style","display:none")},y=async t=>{t=t||"";const e={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s.page,per_page:s.per_page};return await L.get(w+"?"+new URLSearchParams(e))},M=t=>{p(!0);const e=localStorage.getItem("q-data"),l=n.loader;y(e).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return i("error","Server response fail");if(s.page>r)return s.page=1,i("error","We're sorry, there are no more posts to load");l.innerHtml=d(a.data),s.page+=1}).catch(a=>i("error",a.message))},D=t=>{const e=new FormData(t.target.form),l=localStorage.getItem("q-data"),a=e.get("search");return l&&l!==a&&(s.page=1),localStorage.setItem("q-data",a),Object.fromEntries(e)},P=t=>{u(!1),t.preventDefault();const e=D(t);if(e.search)p(!0);else return i("error","Sorry, there are no images matching your search query. Please try again!");n.gallery.innerHTML="";const l=n.loader;s.page=1,y(e.search).then(a=>{const r=Math.ceil(a.data.totalHits/s.per_page);if(a.status!=200)return i("error","Server response fail");if(s.page>r)return s.page=1,i("error","We're sorry, there are no more posts to load");l.innerHtml=d(a.data),setTimeout(()=>u(!0),1e3),s.page+=1}).catch(a=>i("error",a.message))};p(!1);u(!1);n.container.addEventListener("click",t=>{t.target.type===g.search?P(t):t.target.type===g.loadMore&&M()});
//# sourceMappingURL=index.js.map
