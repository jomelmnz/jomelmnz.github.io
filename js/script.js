const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');
const sections = document.querySelectorAll('section[id]');

let isClickedScrolling = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    if (isClickedScrolling) return;

    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 160)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-section');
        link.classList.remove('active'); 

        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active-section');
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (!targetSection) return;

        isClickedScrolling = true;

        navLinks.forEach(l => {
            l.classList.remove('active-section');
            l.classList.remove('active');
        });
        link.classList.add('active-section');

        const computedStyles = window.getComputedStyle(targetSection);
        const scrollMarginTop = parseInt(computedStyles.scrollMarginTop) || 0;

        const targetPosition = targetSection.offsetTop - scrollMarginTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isClickedScrolling = false;
        }, 500);

        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
                || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});