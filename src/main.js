import { timelineData } from "./data.js";
import { TrainAnimation } from "./animation.js";
import { WeatherSystem } from "./weather.js";

class App {
  constructor() {
    this.currentYearIndex = 0;
    this.animation = new TrainAnimation();
    this.weather = new WeatherSystem();
    this.ui = {
      yearDisplay: document.querySelector(".year-display"),
      prevBtn: document.getElementById("prev-btn"),
      nextBtn: document.getElementById("next-btn"),
      modal: document.getElementById("project-modal"),
      modalYear: document.getElementById("modal-year"),
      projectsList: document.getElementById("projects-list"),
      closeModalBtn: document.querySelector(".close-modal"),
      loading: document.getElementById("loading"),
      cardInfo: document.querySelector(".card-info"),
      infoWrapper: document.querySelector(".info-wrapper"),
      controls: document.querySelector(".controls"),
      uiLayer: document.getElementById("ui-layer"),
    };

    this.init();
  }

  init() {
    this.ui.loading.style.display = "none";
    this.weather.init();
    this.updateUI();
    this.bindEvents();

    // Initial state: Train stopped at first year
    this.animation.stopMoving();
  }

  bindEvents() {
    this.ui.nextBtn.addEventListener("click", () =>
      this.goToYear(this.currentYearIndex + 1)
    );
    this.ui.prevBtn.addEventListener("click", () =>
      this.goToYear(this.currentYearIndex - 1)
    );
    this.ui.closeModalBtn.addEventListener("click", () => this.closeModal());
    this.ui.closeModalBtn.addEventListener("click", () => this.closeModal());

    // Handle window resize
    window.addEventListener('resize', () => this.updateWorldHeight());

    // Update height periodically to catch any layout changes
    setInterval(() => this.updateWorldHeight(), 1000);
  }

  async goToYear(index) {
    if (index < 0 || index >= timelineData.length) return;

    // Disable controls while moving
    this.ui.nextBtn.disabled = true;
    this.ui.prevBtn.disabled = true;
    this.ui.nextBtn.textContent = "Traveling...";
    this.ui.infoWrapper.style.opacity = "0"; // Hide info while moving

    // Determine direction (visual only, logic is same for now)
    // In a real 2D scroller, we might reverse animation for prev year

    await this.animation.travelToNextStation();

    this.currentYearIndex = index;
    this.updateUI();
    // this.showProjects(); // Removed modal popup since we show under train now
  }

  updateUI() {
    const data = timelineData[this.currentYearIndex];
    const currentYear = data.year;
    this.ui.yearDisplay.textContent = currentYear;

    // Update Train Info
    this.ui.infoWrapper.innerHTML = data.projects.map((p) => `
      <div class="card-info">
        <h3>${p.title}</h3>
        
        ${p.date ? `<h3 style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 5px;">${p.date}</h3>` : ''}
        ${p.location ? `<h3 style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 10px;">${p.location}</h3>` : ''}
        
        <p>${p.description}</p>
        ${p.modules ? `
        <button class="modules-toggle">Modules I’ve studied ▼</button>
        <div class="modules-content hidden">
          <div class="module-section">
            <h4>First Year</h4>
            <ul>${p.modules.firstYear.map(m => `<li>${m}</li>`).join('')}</ul>
          </div>
          <div class="module-section">
            <h4>Second Year</h4>
            <ul>${p.modules.secondYear.map(m => `<li>${m}</li>`).join('')}</ul>
          </div>
          <div class="module-section">
            <h4>Third Year</h4>
            <ul>${p.modules.thirdYear.map(m => `<li>${m}</li>`).join('')}</ul>
          </div>
        </div>` : ''}
        
        ${p.responsibilities ? `
          <h4 style="color: #38bdf8; font-size: 0.9rem; margin: 10px 0 5px;">Key responsibilities</h4>
          <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 0.85rem;">
            ${p.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        ` : ''}

        ${p.keyContributions ? `
          <h4 style="color: #38bdf8; font-size: 0.9rem; margin: 10px 0 5px;">Key Contributions</h4>
          <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 0.85rem;">
            ${p.keyContributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        ` : ''}

        ${p.tech && p.tech.length > 0 ? `
          ${p.responsibilities ? `<h4 style="color: #38bdf8; font-size: 0.9rem; margin: 10px 0 5px;">Technologies</h4>` : ''}
          <div class="tags">
            ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
    // Add event listeners for toggle buttons after rendering
    setTimeout(() => {
      document.querySelectorAll('.modules-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          content.classList.toggle('hidden');
          btn.textContent = content.classList.contains('hidden') ? 'Modules I’ve studied ▼' : 'Modules I’ve studied ▲';
          // Update height after transition
          setTimeout(() => this.updateWorldHeight(), 350);
        });
      });
    }, 0);

    this.ui.infoWrapper.style.opacity = "1";

    // Update world height to fit content
    // setTimeout(() => this.updateWorldHeight(), 100);

    // Theme Logic
    console.log(
      `Current Year: ${currentYear}, Applying Theme: ${currentYear >= 2016 && currentYear <= 2019
      }`
    );
    if (currentYear == "2016 - 2019") {
      document.body.classList.add("university-theme");
      document.body.classList.remove("kainos-theme", "sunny-weather", "charitable-visible");
    } else if (currentYear == "2019 - 2020") {
      document.body.classList.add("kainos-theme", "sunny-weather");
      document.body.classList.remove("university-theme", "charitable-visible", "pandemic-mode", "charitable-building-active");
    } else if (currentYear == "2020 - 2022") {
      document.body.classList.add("kainos-theme", "charitable-visible", "pandemic-mode", "charitable-building-active");
      document.body.classList.remove("university-theme", "sunny-weather");
    } else if (currentYear == "2022 - 2025") {
      document.body.classList.add("kainos-theme", "charitable-visible");
      document.body.classList.remove("university-theme", "sunny-weather", "pandemic-mode", "charitable-building-active");
    } else {
      document.body.classList.remove("university-theme", "kainos-theme", "sunny-weather", "charitable-visible", "pandemic-mode", "charitable-building-active");
    }

    this.ui.prevBtn.disabled = this.currentYearIndex === 0;
    this.ui.nextBtn.disabled =
      this.currentYearIndex === timelineData.length - 1;

    this.ui.nextBtn.textContent =
      this.currentYearIndex === timelineData.length - 1
        ? "End of Line"
        : "Next Station →";

    if (this.currentYearIndex === 0) {
      this.ui.prevBtn.textContent = "Start";
    } else {
      this.ui.prevBtn.textContent = "← Prev Station";
    }
  }

  showProjects() {
    const data = timelineData[this.currentYearIndex];
    this.ui.modalYear.textContent = `Projects from ${data.year}`;
    this.ui.projectsList.innerHTML = data.projects
      .map(
        (p) => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">
          ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="links">
          <a href="${p.demo}" target="_blank">Live Demo</a>
          <a href="${p.repo}" target="_blank">GitHub</a>
        </div>
      </div>
    `
      )
      .join("");

    this.ui.modal.classList.add("visible");
  }

  closeModal() {
    this.ui.modal.classList.remove("visible");
    this.updateUI(); // Re-enable buttons state
  }


}

// Start App
window.addEventListener("DOMContentLoaded", () => {
  new App();
});
