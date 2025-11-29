function initPhotoModal() {
    const modal = document.getElementById('photo-modal');
    const img = document.querySelector('.profile-photo');
    const modalImg = document.getElementById('expanded-photo');
    const closeBtn = document.querySelector('.close-modal');

    if (!img || !modal || !modalImg) {
        console.error('Photo modal: Required elements not found', { img: !!img, modal: !!modal, modalImg: !!modalImg });
        return;
    }

    const openModal = () => {
        modalImg.src = img.src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Open modal on image click
    img.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal();
    });
    
    // Ensure cursor pointer style
    img.style.cursor = 'pointer';

    // Close modal on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Close modal when clicking on backdrop (not the image itself)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            e.preventDefault();
            closeModal();
        }
    });

    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Run on DOM ready or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhotoModal);
} else {
    // DOM already loaded
    initPhotoModal();
}
