import{a as f,S as m,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="57875356-ee282ee6bcc8c1ae18b82ea3b",g="https://pixabay.com/api/";function y(s){return f.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:o,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>

          <div class="image-info">
            <p class="info-item">
              <b>Likes</b>
              <span>${t}</span>
            </p>

            <p class="info-item">
              <b>Views</b>
              <span>${o}</span>
            </p>

            <p class="info-item">
              <b>Comments</b>
              <span>${u}</span>
            </p>

            <p class="info-item">
              <b>Downloads</b>
              <span>${p}</span>
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(r===""){n.warning({message:"Please enter a search query.",position:"topRight"});return}L(),v(),y(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
