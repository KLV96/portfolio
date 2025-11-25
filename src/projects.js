import { projectsData } from './projectsData.js';

(function () {
  const shelvesContainer = document.querySelector('.shelves');
  const diveOverlay = document.querySelector('.dive-overlay');
  const diveFlash = document.querySelector('.dive-flash');
  let isOpen = false;
  let activeDialog = null;

  // 1. Render Shelves
  function renderShelves() {
    if (!shelvesContainer) return;

    const html = [...projectsData].reverse().map(shelf => {
      const isMuted = shelf.projects.length === 0 ? 'shelf-label--muted' : '';

      let booksHtml = '';
      if (shelf.projects.length > 0) {
        booksHtml = shelf.projects.map(project => {
          const isRestaurant = project.type === 'restaurant' ? 'book--restaurant' : '';
          let iconHtml = '';

          if (project.type === 'restaurant') {
            iconHtml = `
              <div class="restaurant-icon" aria-hidden="true">
                <div class="restaurant-building"></div>
                <div class="restaurant-awning"></div>
                <div class="restaurant-window"></div>
                <div class="restaurant-door"></div>
                <div class="restaurant-sign">Restaurant</div>
                <div class="restaurant-smoke"></div>
              </div>
            `;
          } else if (project.type === 'nuforc') {
            iconHtml = `
              <div class="alien-icon" aria-hidden="true">
                <div class="alien-antennae">
                  <div class="antenna left"></div>
                  <div class="antenna right"></div>
                </div>
                <div class="alien-head">
                  <div class="alien-eye left"></div>
                  <div class="alien-eye right"></div>
                  <div class="alien-mouth"></div>
                </div>
                <div class="alien-body">
                  <div class="alien-arm left"></div>
                  <div class="alien-arm right"></div>
                  <div class="alien-leg left"></div>
                  <div class="alien-leg right"></div>
                </div>
              </div>
            `;
          } else if (project.type === 'car') {
            iconHtml = `
              <div class="car-icon" aria-hidden="true">
                <div class="car-body">
                  <div class="car-top"></div>
                  <div class="car-bottom"></div>
                  <div class="car-light left"></div>
                  <div class="car-light right"></div>
                  <div class="car-grille"></div>
                </div>
                <div class="car-wheel left"></div>
                <div class="car-wheel right"></div>
              </div>
            `;
          } else if (project.type === 'hospital') {
            iconHtml = `
              <div class="hospital-icon" aria-hidden="true">
                <div class="hospital-building">
                  <div class="hospital-roof"></div>
                  <div class="hospital-cross"></div>
                  <div class="hospital-door"></div>
                  <div class="hospital-window left"></div>
                  <div class="hospital-window right"></div>
                </div>
              </div>
            `;
          } else if (project.type === 'game') {
            iconHtml = `
              <div class="controller-icon" aria-hidden="true">
                <div class="controller-body"></div>
                <div class="controller-accent"></div>
                <div class="controller-touchpad"></div>
                <div class="controller-joystick left"></div>
                <div class="controller-joystick right"></div>
                <div class="controller-dpad"></div>
                <div class="controller-buttons">
                    <div class="btn-circle top"></div>
                    <div class="btn-circle right"></div>
                    <div class="btn-circle bottom"></div>
                    <div class="btn-circle left"></div>
                </div>
              </div>
            `;
          }

          return `
            <article
              class="book ${isRestaurant} ${project.type === 'nuforc' ? 'book--nuforc' : ''} ${project.type === 'car' ? 'book--car' : ''} ${project.type === 'hospital' ? 'book--hospital' : ''} ${project.type === 'game' ? 'book--game' : ''}"
              tabindex="0"
              data-project="${project.id}"
              aria-label="Open ${project.title} details"
            >
              <div class="book-title">${project.title}</div>
              ${iconHtml}
            </article>
          `;
        }).join('');
      } else {
        booksHtml = `<div class="shelf-placeholder">${shelf.placeholder}</div>`;
      }

      return `
        <section class="shelf" aria-label="Projects from ${shelf.year}">
          <div class="shelf-label ${isMuted}">${shelf.year}</div>
          <div class="shelf-books">
            ${booksHtml}
          </div>
        </section>
      `;
    }).join('');

    shelvesContainer.innerHTML = html;
  }

  // 2. Render Modals (Dynamic creation on open or pre-render?)
  // Let's pre-render them for simplicity as per original code structure, 
  // but we can also inject them. Let's inject them all into body.
  function renderModals() {
    const modalsContainer = document.createElement('div');

    const modalsHtml = projectsData.flatMap(shelf => shelf.projects).map(project => {
      const d = project.details;
      const isRestaurantBook = project.type === 'restaurant' ? 'detail-book--restaurant' : '';

      const metaHtml = d.meta.map(m => `<span>&bull; ${m}</span>`).join('');
      const descHtml = d.description.map(p => `<p>${p}</p>`).join('');
      const featuresHtml = d.features ? `
        <ul>
          ${d.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      ` : '';

      const metaGridHtml = d.metaGrid ? d.metaGrid.map(item => `
        <div class="detail-meta-item">
          <div class="detail-meta-label">${item.label}</div>
          <div class="detail-meta-value">${item.value}</div>
        </div>
      `).join('') : '';

      return `
        <div
          class="project-detail-backdrop"
          id="project-detail-${project.id}"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-${project.id}-title"
          aria-hidden="true"
        >
          <div class="project-detail-card">
            <div class="project-detail-close">
              <button type="button" aria-label="Close ${d.title} details" data-close-dialog>
                &times;
              </button>
            </div>

            <div class="project-detail-main">
              <div class="project-detail-meta">
                <span>Year: ${d.year}</span>
                ${metaHtml}
              </div>

              <div class="project-detail-title">
                <span>Project</span>
                <h2 id="project-detail-${project.id}-title">
                  ${d.title}
                </h2>
              </div>

              <div class="project-detail-body">
                ${descHtml}
                ${d.features ? `<p><strong>Key features</strong></p>` : ''}
                ${featuresHtml}
              </div>
            </div>

            <aside class="project-detail-side">
              <div class="detail-book-preview">
                <div class="detail-book ${isRestaurantBook}">
                  <div class="detail-book-label">${project.label}</div>
                </div>
              </div>

              <div class="detail-meta-grid">
                ${metaGridHtml}
              </div>

              <div class="detail-actions">
                ${(d.github && d.github !== '#') ? `
                <a
                  class="github-link"
                  href="${d.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="btn btn-primary" type="button">
                    <span class="btn-icon">&#xf09b;</span>
                    <span>View on GitHub</span>
                  </button>
                </a>
                ` : ''}
                
                ${(d.demo) ? `
                <a
                  class="demo-link"
                  href="${d.demo}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="btn btn-secondary" type="button">
                    <span class="btn-icon">&#9658;</span>
                    <span>View Demo</span>
                  </button>
                </a>
                ` : ''}

                ${(d.website) ? `
                <a
                  class="website-link"
                  href="${d.website}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="btn btn-primary" type="button" style="background: linear-gradient(135deg, #3b82f6, #2563eb); border: 1px solid #60a5fa;">
                    <span class="btn-icon">&#127760;</span>
                    <span>Visit Website</span>
                  </button>
                </a>
                ` : ''}

                <button class="btn btn-ghost" type="button" data-close-dialog>
                  Back to shelves
                </button>

                <div>
                  <div class="github-link-label">Repository</div>
                  <div class="github-link-main">
                    ${d.repoDisplay}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      `;
    }).join('');

    modalsContainer.innerHTML = modalsHtml;
    document.body.appendChild(modalsContainer);
  }

  // 3. Event Listeners
  function setupEventListeners() {
    const books = document.querySelectorAll('.book[data-project]');

    function openDialog(projectKey) {
      const dialog = document.getElementById(`project-detail-${projectKey}`);
      if (!dialog || isOpen) return;
      isOpen = true;
      activeDialog = dialog;

      // Dive effect
      diveOverlay.classList.add('is-visible');
      diveFlash.classList.add('is-visible');

      setTimeout(() => {
        dialog.setAttribute('aria-hidden', 'false');
        dialog.classList.add('is-visible');
      }, 120);

      setTimeout(() => {
        diveFlash.classList.remove('is-visible');
      }, 260);
    }

    function closeDialog() {
      if (!isOpen || !activeDialog) return;
      activeDialog.classList.remove('is-visible');
      activeDialog.setAttribute('aria-hidden', 'true');

      setTimeout(() => {
        diveOverlay.classList.remove('is-visible');
        activeDialog = null;
        isOpen = false;
      }, 150);
    }

    function handleBookActivate(event) {
      if (
        event.type === 'click' ||
        (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))
      ) {
        event.preventDefault();
        const projectKey = event.currentTarget.dataset.project;
        openDialog(projectKey);
      }
    }

    books.forEach((book) => {
      book.addEventListener('click', handleBookActivate);
      book.addEventListener('keydown', handleBookActivate);
    });

    // Close buttons + backdrop click
    const allBackdrops = document.querySelectorAll('.project-detail-backdrop');
    allBackdrops.forEach((backdrop) => {
      const closeButtons = backdrop.querySelectorAll(
        '.project-detail-close button, [data-close-dialog]'
      );
      closeButtons.forEach((btn) => {
        btn.addEventListener('click', closeDialog);
      });

      backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
          closeDialog();
        }
      });
    });

    // Escape to close
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeDialog();
      }
    });
  }

  // Initialize
  renderShelves();
  renderModals();
  setupEventListeners();

})();
