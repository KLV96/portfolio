import { certificates } from './certificatesData.js';

class CertificatesPage {
    constructor() {
        this.timeline = document.querySelector('.timeline');
        this.modal = document.querySelector('.cert-modal');
        this.modalTitle = document.querySelector('.modal-title');
        this.modalIssuer = document.querySelector('.modal-issuer');
        this.modalDate = document.querySelector('.modal-date');
        this.modalImageContainer = document.querySelector('.modal-image-container');
        this.modalFullpageLink = document.getElementById('modal-fullpage-link');
        this.modalClose = document.querySelector('.modal-close');
        this.modalBackdrop = document.querySelector('.modal-backdrop');
        this.certCount = document.querySelector('.cert-count');

        this.render();
        this.bindEvents();
    }

    render() {
        // Count badge
        this.certCount.textContent = `${certificates.length} certificate${certificates.length !== 1 ? 's' : ''}`;

        // Build timeline nodes
        this.timeline.innerHTML = certificates.map((cert, i) => `
      <div class="timeline-node" data-id="${cert.id}" style="animation-delay: ${i * 0.1}s">
        <!-- Hover preview card -->
        <div class="preview-card">
          ${cert.image
                ? `<img src="${cert.image}" alt="${cert.title}" class="preview-thumb" />`
                : `<div class="preview-thumb-placeholder">🏆</div>`
            }
          <div class="preview-title">${cert.title}</div>
          <div class="preview-issuer">${cert.issuer}</div>
          <div class="preview-date">${cert.date}</div>
          <div class="preview-hint">${cert.link ? 'Click to open ↗' : 'Click to view'}</div>
        </div>

        <!-- Circle -->
        <div class="node-circle"></div>

        <!-- Label -->
        <div class="node-label">${cert.date}</div>
        <div class="node-cert-title">${cert.title}</div>
      </div>
    `).join('');

        // Attach click listeners to nodes
        this.timeline.querySelectorAll('.timeline-node').forEach(node => {
            node.addEventListener('click', () => {
                const id = parseInt(node.dataset.id);
                const cert = certificates.find(c => c.id === id);
                if (cert) this.openModal(cert);
            });
        });
    }

    openModal(cert) {
        // If cert has an external link and no image, open directly in new tab
        if (cert.link && !cert.image) {
            window.open(cert.link, '_blank', 'noopener,noreferrer');
            return;
        }

        this.modalTitle.textContent = cert.title;
        this.modalIssuer.textContent = cert.issuer;
        this.modalDate.textContent = cert.date;

        if (cert.standaloneUrl) {
            this.modalFullpageLink.href = cert.standaloneUrl;
            this.modalFullpageLink.style.display = '';
        } else {
            this.modalFullpageLink.style.display = 'none';
        }

        // Image or placeholder
        this.modalImageContainer.innerHTML = cert.image
            ? `<img src="${cert.image}" alt="${cert.title}" class="modal-cert-image" />`
            : `<div class="modal-cert-placeholder">
                 <span class="ph-icon">🏆</span>
                 <p>Certificate image coming soon</p>
               </div>`;

        this.modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('visible');
        document.body.style.overflow = '';
    }

    bindEvents() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalBackdrop.addEventListener('click', () => this.closeModal());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new CertificatesPage();
});
