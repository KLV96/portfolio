import"./modulepreload-polyfill-3cfb730f.js";const i=[{id:1,title:"HSK 1",issuer:"Hanban Confucius Institute",date:"2021",image:"/certs/HSK1.png"},{id:2,title:"Amazon Web Services Cloud Practitioner",issuer:"Amazon Web Services",date:"2021",image:null,link:"https://www.credly.com/badges/3d7b7adc-b7c3-4d26-a561-7ba4e5f1b11f/public_url"},{id:3,title:"HSK 2",issuer:"Hanban Confucius Institute",date:"2024",image:null}];class l{constructor(){this.timeline=document.querySelector(".timeline"),this.modal=document.querySelector(".cert-modal"),this.modalTitle=document.querySelector(".modal-title"),this.modalIssuer=document.querySelector(".modal-issuer"),this.modalDate=document.querySelector(".modal-date"),this.modalImageContainer=document.querySelector(".modal-image-container"),this.modalClose=document.querySelector(".modal-close"),this.modalBackdrop=document.querySelector(".modal-backdrop"),this.certCount=document.querySelector(".cert-count"),this.render(),this.bindEvents()}render(){this.certCount.textContent=`${i.length} certificate${i.length!==1?"s":""}`,this.timeline.innerHTML=i.map((e,t)=>`
      <div class="timeline-node" data-id="${e.id}" style="animation-delay: ${t*.1}s">
        <!-- Hover preview card -->
        <div class="preview-card">
          ${e.image?`<img src="${e.image}" alt="${e.title}" class="preview-thumb" />`:'<div class="preview-thumb-placeholder">🏆</div>'}
          <div class="preview-title">${e.title}</div>
          <div class="preview-issuer">${e.issuer}</div>
          <div class="preview-date">${e.date}</div>
          <div class="preview-hint">${e.link?"Click to open ↗":"Click to view"}</div>
        </div>

        <!-- Circle -->
        <div class="node-circle"></div>

        <!-- Label -->
        <div class="node-label">${e.date}</div>
        <div class="node-cert-title">${e.title}</div>
      </div>
    `).join(""),this.timeline.querySelectorAll(".timeline-node").forEach(e=>{e.addEventListener("click",()=>{const t=parseInt(e.dataset.id),d=i.find(s=>s.id===t);d&&this.openModal(d)})})}openModal(e){if(e.link&&!e.image){window.open(e.link,"_blank","noopener,noreferrer");return}this.modalTitle.textContent=e.title,this.modalIssuer.textContent=e.issuer,this.modalDate.textContent=e.date,this.modalImageContainer.innerHTML=e.image?`<img src="${e.image}" alt="${e.title}" class="modal-cert-image" />`:`<div class="modal-cert-placeholder">
                 <span class="ph-icon">🏆</span>
                 <p>Certificate image coming soon</p>
               </div>`,this.modal.classList.add("visible"),document.body.style.overflow="hidden"}closeModal(){this.modal.classList.remove("visible"),document.body.style.overflow=""}bindEvents(){this.modalClose.addEventListener("click",()=>this.closeModal()),this.modalBackdrop.addEventListener("click",()=>this.closeModal()),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal()})}}window.addEventListener("DOMContentLoaded",()=>{new l});
