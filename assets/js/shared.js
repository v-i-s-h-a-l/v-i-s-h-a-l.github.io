/* ══════════════════════════════════════════════════
   Shared JS — v-i-s-h-a-l.github.io
   Theme toggle, background hover, tilt cards,
   scroll reveal. Import on every page.
   ══════════════════════════════════════════════════ */

(function () {
    'use strict';

    const html = document.documentElement;

    // ── Theme ──
    function getPreferredTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    html.setAttribute('data-theme', getPreferredTheme());

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            // Fire a custom event so page-specific code can react (e.g. re-draw QR)
            window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
        });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const next = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
        }
    });

    // ── Background Hover Glow ──
    const bgHover = document.getElementById('bgHover');
    if (bgHover) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            bgHover.style.setProperty('--mx', x + '%');
            bgHover.style.setProperty('--my', y + '%');
            if (!bgHover.classList.contains('active')) bgHover.classList.add('active');
        });
        document.addEventListener('mouseleave', () => {
            bgHover.classList.remove('active');
        });
    }

    // ── Tilt Card Mouse Tracking ──
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', (x / rect.width) * 100 + '%');
            card.style.setProperty('--mouse-y', (y / rect.height) * 100 + '%');

            const rotateX = ((y / rect.height) - 0.5) * -6;
            const rotateY = ((x / rect.width) - 0.5) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ── Scroll Reveal ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .timeline-item, .stagger-children').forEach(el => observer.observe(el));

    // ── Screenshot Carousel — prevent scroll/drag from triggering parent link ──
    document.querySelectorAll('.screenshot-carousel').forEach(carousel => {
        const track = carousel.querySelector('.screenshot-track');
        let isScrolling = false;
        let startX = 0;

        track.addEventListener('pointerdown', (e) => {
            startX = e.clientX;
            isScrolling = false;
        });

        track.addEventListener('pointermove', (e) => {
            if (Math.abs(e.clientX - startX) > 5) {
                isScrolling = true;
            }
        });

        // Capture click on the carousel link wrapper — if user was scrolling, prevent navigation
        const parentLink = carousel.closest('a.project-card-link');
        if (parentLink) {
            carousel.addEventListener('click', (e) => {
                if (isScrolling) {
                    e.preventDefault();
                    e.stopPropagation();
                    isScrolling = false;
                }
            });
        }
    });

    // ── Smooth Scroll for anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
})();
