import{a as f,S as u,i as a}from"./assets/vendor-DnoGfDwQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(o){return(await f.get("https://pixabay.com/api/",{params:{key:"55626104-ba3f0d0514f6dfab3319c84ea",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),d=document.querySelector(".loader"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const s=o.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          <div class="info">
            <div class="info-item"><b>Likes</b><span>${t.likes}</span></div>
            <div class="info-item"><b>Views</b><span>${t.views}</span></div>
            <div class="info-item"><b>Comments</b><span>${t.comments}</span></div>
            <div class="info-item"><b>Downloads</b><span>${t.downloads}</span></div>
          </div>
        </a>
      </li>`).join("");c.innerHTML=s,p.refresh()}function g(){c.innerHTML=""}function h(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(s===""){a.warning({title:"Caution",message:"Please fill in the search field!",position:"topRight"});return}g(),h(),m(s).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits)}).catch(t=>{console.error(t),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
