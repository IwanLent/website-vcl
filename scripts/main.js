document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        links.classList.toggle('active', open);
    }
    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.main-nav')) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });
    links.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });
    const desktop = window.matchMedia('(min-width: 1200px)');
    desktop.addEventListener('change', () => setOpen(false));
});
