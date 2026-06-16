const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
                || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

