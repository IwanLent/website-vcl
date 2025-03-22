document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const photoButtons = document.querySelectorAll('.photo-button');
    const closeButton = document.querySelector('.lightbox-close');
    const prevButton = document.querySelector('.lightbox-prev');
    const nextButton = document.querySelector('.lightbox-next');
    
    let currentPhotoIndex = 0;
    const photos = Array.from(document.querySelectorAll('.photo-item img'));

    // Open lightbox
    photoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentPhotoIndex = index;
            updateLightbox();
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
    }

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigate photos
    function updateLightbox() {
        const currentPhoto = photos[currentPhotoIndex];
        lightboxImage.src = currentPhoto.src;
        lightboxImage.alt = currentPhoto.alt;
    }

    function showNextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        updateLightbox();
    }

    function showPrevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        updateLightbox();
    }

    nextButton.addEventListener('click', showNextPhoto);
    prevButton.addEventListener('click', showPrevPhoto);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.hidden) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNextPhoto();
                break;
            case 'ArrowLeft':
                showPrevPhoto();
                break;
        }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                showNextPhoto();
            } else {
                showPrevPhoto();
            }
        }
    }
}); 