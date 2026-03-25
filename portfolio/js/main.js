/* =============================================
   PORTFOLIO — GHOFRANE BOUTEFNOUCHET
   Main JavaScript
   ============================================= */


/* =============================================
   1. MOBILE MENU
   ============================================= */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});


/* =============================================
   2. SCROLL REVEAL ANIMATIONS
   ============================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
});


/* =============================================
   3. SMOOTH SCROLL
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


/* =============================================
   4. NAV SHRINK ON SCROLL
   ============================================= */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.height = '60px';
        nav.style.borderBottomColor = 'rgba(201,169,110,0.15)';
    } else {
        nav.style.height = '72px';
        nav.style.borderBottomColor = 'rgba(201,169,110,0.1)';
    }
});
