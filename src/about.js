document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photo-modal');
    const img = document.querySelector('.profile-photo');
    const modalImg = document.getElementById('expanded-photo');
    const closeBtn = document.querySelector('.close-modal');

    if (img && modal && modalImg) {
        img.onclick = function () {
            modal.classList.add('active');
            modalImg.src = this.src;
        }

        const closeModal = () => {
            modal.classList.remove('active');
        }

        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }

        modal.onclick = (e) => {
            if (e.target === modal) {
                closeModal();
            }
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
