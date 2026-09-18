document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});