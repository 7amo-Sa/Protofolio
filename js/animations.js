// ===================================================
// MOHAMED SAYED — FLUTTER DEVELOPER PORTFOLIO (2026)
// Animations: Typing Effect, Scroll Reveal, Parallax & Progress
// Pure Vanilla JavaScript — No external libraries
// ===================================================

(function () {
    'use strict';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ===============================================
    // 1. VANILLA JS TYPING ANIMATION
    // ===============================================
    function initTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const words = (window.portfolioData && window.portfolioData.typingTexts) || [
            "Flutter Developer",
            "Mobile App Developer",
            "Frontend Developer",
            "Problem Solver"
        ];

        if (prefersReducedMotion) {
            typingElement.textContent = words[0];
            return;
        }

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 95;
        const deletingSpeed = 45;
        const pauseAfterWord = 1800;
        const pauseAfterDelete = 400;

        function typeLoop() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentWord.length) {
                // Finished typing word, pause before deleting
                nextSpeed = pauseAfterWord;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting word, move to next
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                nextSpeed = pauseAfterDelete;
            }

            setTimeout(typeLoop, nextSpeed);
        }

        // Start typing after initial hero entrance
        setTimeout(typeLoop, 800);
    }

    // ===============================================
    // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ===============================================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        if (!revealElements.length) return;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            revealElements.forEach(el => el.classList.add('is-revealed'));
            return;
        }

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ===============================================
    // 3. SKILL PROGRESS BAR ANIMATION
    // ===============================================
    function initSkillProgressAnimation() {
        const progressBars = document.querySelectorAll('.progress-fill');
        if (!progressBars.length) return;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            progressBars.forEach(bar => {
                const target = bar.getAttribute('data-target-width') || '85%';
                bar.style.width = target;
            });
            return;
        }

        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.progress-fill');
                    fills.forEach(fill => {
                        const target = fill.getAttribute('data-target-width') || '80%';
                        fill.style.width = target;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => skillObserver.observe(card));
    }

    // ===============================================
    // 4. SUBTLE PARALLAX MOUSE MOVE (BACKGROUND CIRCLES)
    // ===============================================
    function initParallaxCircles() {
        const circles = document.querySelectorAll('.parallax-circle');
        if (!circles.length || prefersReducedMotion || window.innerWidth < 992) return;

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        let ticking = false;

        window.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            mouseX = (e.clientX - centerX) / centerX;
            mouseY = (e.clientY - centerY) / centerY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    circles.forEach((circle, index) => {
                        const factor = (index + 1) * 7; // subtle 7px - 21px maximum
                        const moveX = mouseX * factor;
                        const moveY = mouseY * factor;
                        circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Export initialization hooks to window
    window.PortfolioAnimations = {
        initTypingAnimation,
        initScrollReveal,
        initSkillProgressAnimation,
        initParallaxCircles,
        initAll: function () {
            initTypingAnimation();
            initScrollReveal();
            initSkillProgressAnimation();
            initParallaxCircles();
        }
    };
})();
