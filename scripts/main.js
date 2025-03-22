// Mobiele menu functionaliteit
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X
            hamburger.style.backgroundColor = isExpanded ? '' : 'transparent';
            hamburger.style.transform = isExpanded ? '' : 'rotate(45deg)';
            hamburger.style.transition = 'all 0.3s ease';
        });
    }

    // Sluit menu bij klik buiten menu
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !e.target.closest('.main-nav')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            hamburger.style.backgroundColor = '';
            hamburger.style.transform = '';
        }
    });
}); 