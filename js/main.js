// ===================================================
// MOHAMED SAYED — FLUTTER DEVELOPER PORTFOLIO (2026)
// Main Script: Data Rendering, Navigation, Slider & Interactivity
// Pure Vanilla JavaScript — Data-driven from js/data.js
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const data = window.portfolioData;
    if (!data) {
        console.error('Error: portfolioData is not loaded. Please ensure js/data.js is included before js/main.js.');
        return;
    }

    // ===============================================
    // 1. DATA RENDERING: HERO & PERSONAL INFO
    // ===============================================
    function renderPersonalInfo() {
        const info = data.personalInfo;

        // Hero Name & Greeting
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
            heroTitle.innerHTML = `${info.firstName || 'Mohamed'} <span>${info.lastName || 'Sayed'}</span>`;
        }

        const heroGreeting = document.getElementById('hero-greeting');
        if (heroGreeting) {
            heroGreeting.textContent = info.heroGreeting || "Hello, I'm";
        }

        const heroDesc = document.getElementById('hero-description');
        if (heroDesc) {
            heroDesc.textContent = info.heroDescription;
        }

        // Profile Image
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
            profileImg.src = info.profileImage || 'assets/images/profile.jpg';
            profileImg.alt = `${info.name} — ${info.role}`;
        }

        // About Image
        const aboutImg = document.getElementById('about-img');
        if (aboutImg) {
            aboutImg.src = info.aboutImage || 'assets/images/about.jpg';
            aboutImg.alt = `${info.name} at development desk`;
        }

        // About Paragraphs
        const aboutParagraphsContainer = document.getElementById('about-paragraphs');
        if (aboutParagraphsContainer && data.about && data.about.paragraphs) {
            aboutParagraphsContainer.innerHTML = data.about.paragraphs
                .map(para => `<p class="about-paragraph">${para}</p>`)
                .join('');
        }

        // About Stats
        const statsContainer = document.getElementById('about-stats');
        if (statsContainer && data.about && data.about.stats) {
            statsContainer.innerHTML = data.about.stats
                .map((stat, i) => `
                    <div class="stat-card reveal-on-scroll stagger-${(i % 4) + 1}">
                        <div class="stat-icon"><i class="${stat.icon || 'fa-solid fa-star'}"></i></div>
                        <div class="stat-number">${stat.number}</div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                `)
                .join('');
        }

        // Footer Info
        const footerSlogan = document.getElementById('footer-slogan');
        if (footerSlogan) {
            footerSlogan.textContent = info.slogan;
        }

        const footerCopyright = document.getElementById('footer-copyright');
        if (footerCopyright) {
            footerCopyright.textContent = `© ${info.year || 2026} ${info.name}. All rights reserved.`;
        }
    }

    // ===============================================
    // 2. DATA RENDERING: SOCIAL LINKS
    // ===============================================
    function renderSocialLinks() {
        const links = data.socialLinks || {};

        const socialHTML = `
            <a href="${links.github || '#'}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="${links.linkedin || '#'}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="${links.whatsapp || '#'}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="${links.email || '#'}" class="social-btn" aria-label="Send Email">
                <i class="fa-solid fa-envelope"></i>
            </a>
        `;

        const heroSocialContainer = document.getElementById('hero-social-links');
        if (heroSocialContainer) heroSocialContainer.innerHTML = socialHTML;

        const footerSocialContainer = document.getElementById('footer-social-links');
        if (footerSocialContainer) footerSocialContainer.innerHTML = socialHTML;
    }

    // ===============================================
    // 3. DATA RENDERING: EXPERIENCE TIMELINE
    // ===============================================
    function renderExperience() {
        const timelineContainer = document.getElementById('experience-timeline');
        if (!timelineContainer || !data.experience) return;

        timelineContainer.innerHTML = data.experience.map((item, index) => {
            const sideClass = index % 2 === 0 ? 'left' : 'right';
            const revealClass = sideClass === 'left' ? 'reveal-left' : 'reveal-right';
            const tagsHTML = (item.technologies || [])
                .map(tech => `<span class="tech-tag">${tech}</span>`)
                .join('');

            return `
                <div class="timeline-item ${sideClass} reveal-on-scroll ${revealClass}">
                    <div class="timeline-dot" aria-hidden="true"></div>
                    <div class="timeline-card">
                        <div class="timeline-header">
                            <h3 class="timeline-position">${item.position}</h3>
                            <span class="timeline-date"><i class="fa-regular fa-calendar"></i> ${item.date}</span>
                        </div>
                        <div class="timeline-company"><i class="fa-solid fa-briefcase"></i> ${item.company}</div>
                        <p class="timeline-desc">${item.description}</p>
                        <div class="timeline-tags">
                            ${tagsHTML}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ===============================================
    // 4. DATA RENDERING: SKILLS
    // ===============================================
    function renderSkills() {
        const skillsContainer = document.getElementById('skills-grid');
        if (!skillsContainer || !data.skills) return;

        skillsContainer.innerHTML = data.skills.map((cat, index) => {
            const itemsHTML = cat.items.map(item => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span class="skill-name">${item.name}</span>
                        <span class="skill-percent">${item.percentage}%</span>
                    </div>
                    <div class="progress-track" role="progressbar" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100" aria-label="${item.name} proficiency">
                        <div class="progress-fill" data-target-width="${item.percentage}%"></div>
                    </div>
                </div>
            `).join('');

            return `
                <div class="skill-card reveal-on-scroll stagger-${(index % 3) + 1}">
                    <div class="skill-card-header">
                        <div class="skill-card-icon"><i class="${cat.icon || 'fa-solid fa-code'}"></i></div>
                        <h3 class="skill-card-title">${cat.category}</h3>
                    </div>
                    <div class="skills-list">
                        ${itemsHTML}
                    </div>
                </div>
            `;
        }).join('');
    }

    // ===============================================
    // 5. DATA RENDERING: FEATURED PROJECTS (DEMO ONLY)
    // ===============================================
    function renderProjects() {
        const projectsContainer = document.getElementById('projects-grid');
        if (!projectsContainer || !data.projects) return;

        projectsContainer.innerHTML = data.projects.map((proj, index) => {
            const techHTML = (proj.technologies || [])
                .map(t => `<span class="project-tech-tag">${t}</span>`)
                .join('');

            return `
                <article class="project-card reveal-on-scroll stagger-${(index % 2) + 1}">
                    <div class="project-image-wrap">
                        <img src="${proj.image}" alt="${proj.title} concept mockup" class="project-img" loading="lazy">
                        <div class="project-badge-overlay">
                            <span class="demo-badge">${proj.label || 'Demo Project'}</span>
                            ${proj.type ? `<span class="project-number-badge">${proj.type}</span>` : ''}
                        </div>
                    </div>
                    <div class="project-body">
                        <h3 class="project-title">${proj.title}</h3>
                        <p class="project-desc">${proj.description}</p>
                        <div class="project-tech">
                            ${techHTML}
                        </div>
                        <div class="project-actions">
                            <a href="${proj.github || '#'}" class="btn btn-outline btn-sm project-btn" ${proj.github === '#' ? 'data-demo-link="true"' : 'target="_blank" rel="noopener noreferrer"'}>
                                <i class="fa-brands fa-github"></i> Source Code
                            </a>
                            <a href="${proj.demo || '#'}" class="btn btn-primary btn-sm project-btn" ${proj.demo === '#' ? 'data-demo-link="true"' : 'target="_blank" rel="noopener noreferrer"'}>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    // ===============================================
    // 6. DATA RENDERING: SERVICES (14 CARDS)
    // ===============================================
    function renderServices() {
        const servicesContainer = document.getElementById('services-grid');
        if (!servicesContainer || !data.services) return;

        servicesContainer.innerHTML = data.services.map((serv, index) => `
            <div class="service-card reveal-on-scroll stagger-${(index % 4) + 1}">
                <div class="service-top">
                    <div class="service-icon-box">
                        <i class="${serv.icon}"></i>
                    </div>
                    <span class="service-number">${serv.number || String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 class="service-title">${serv.title}</h3>
                <p class="service-desc">${serv.description}</p>
            </div>
        `).join('');
    }

    // ===============================================
    // 7. DATA RENDERING: TESTIMONIALS
    // ===============================================
    function renderTestimonials() {
        const track = document.getElementById('testimonial-track');
        const dotsContainer = document.getElementById('slider-dots');
        if (!track || !data.testimonials) return;

        track.innerHTML = data.testimonials.map((item, index) => {
            const starsHTML = Array(item.stars || 5)
                .fill('<i class="fa-solid fa-star"></i>')
                .join('');

            return `
                <div class="testimonial-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${data.testimonials.length}">
                    <span class="testimonial-tag"><i class="fa-solid fa-check"></i> ${item.tag || 'Demo Testimonial'}</span>
                    <div class="testimonial-stars" aria-label="${item.stars || 5} out of 5 stars">
                        ${starsHTML}
                    </div>
                    <blockquote class="testimonial-quote">
                        ${item.text}
                    </blockquote>
                    <div class="testimonial-author">
                        <img src="${item.avatar || 'assets/images/avatar-placeholder.jpg'}" alt="${item.name}" class="testimonial-avatar" loading="lazy">
                        <div class="author-info">
                            <span class="author-name">${item.name}</span>
                            <span class="author-role">${item.role} • ${item.company}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        if (dotsContainer) {
            dotsContainer.innerHTML = data.testimonials.map((_, index) => `
                <button type="button" class="slider-dot ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Go to slide ${index + 1}" ${index === 0 ? 'aria-current="true"' : ''}></button>
            `).join('');
        }
    }

    // ===============================================
    // 8. DATA RENDERING: CONTACT CARDS
    // ===============================================
    function renderContactCards() {
        const whatsappCard = data.contact && data.contact.whatsappCard;
        const emailCard = data.contact && data.contact.emailCard;

        if (whatsappCard) {
            const cardEl = document.getElementById('whatsapp-card');
            if (cardEl) {
                cardEl.innerHTML = `
                    <div class="contact-icon-large"><i class="fa-brands fa-whatsapp"></i></div>
                    <h3 class="contact-card-title">${whatsappCard.title}</h3>
                    <p class="contact-card-desc">${whatsappCard.description}</p>
                    <a href="${whatsappCard.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <i class="fa-brands fa-whatsapp"></i> ${whatsappCard.buttonText}
                    </a>
                `;
            }
        }

        if (emailCard) {
            const cardEl = document.getElementById('email-card');
            if (cardEl) {
                cardEl.innerHTML = `
                    <div class="contact-icon-large"><i class="fa-solid fa-envelope"></i></div>
                    <h3 class="contact-card-title">${emailCard.title}</h3>
                    <p class="contact-card-desc">${emailCard.description}</p>
                    <a href="${emailCard.link}" class="btn btn-outline">
                        <i class="fa-regular fa-paper-plane"></i> ${emailCard.buttonText}
                    </a>
                `;
            }
        }
    }

    // ===============================================
    // 9. TESTIMONIAL SLIDER LOGIC
    // ===============================================
    function initSlider() {
        const track = document.getElementById('testimonial-track');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const dots = document.querySelectorAll('.slider-dot');
        const totalSlides = (data.testimonials && data.testimonials.length) || 0;

        if (!track || totalSlides === 0) return;

        let currentIndex = 0;
        let autoPlayTimer = null;

        function updateSlider(index) {
            currentIndex = (index + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            dots.forEach((dot, i) => {
                const isActive = i === currentIndex;
                dot.classList.toggle('active', isActive);
                if (isActive) {
                    dot.setAttribute('aria-current', 'true');
                } else {
                    dot.removeAttribute('aria-current');
                }
            });
        }

        function nextSlide() {
            updateSlider(currentIndex + 1);
        }

        function prevSlide() {
            updateSlider(currentIndex - 1);
        }

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); restartAutoPlay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); restartAutoPlay(); });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
                restartAutoPlay();
            });
        });

        // Keyboard navigation for slider
        track.closest('.testimonial-slider')?.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                restartAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                restartAutoPlay();
            }
        });

        // Auto-play
        function startAutoPlay() {
            autoPlayTimer = setInterval(nextSlide, 6500);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
        }

        function restartAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        const sliderContainer = document.querySelector('.testimonial-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);
        }

        startAutoPlay();
    }

    // ===============================================
    // 10. STICKY HEADER & SCROLL SPY
    // ===============================================
    function initHeaderAndScrollSpy() {
        const header = document.querySelector('.site-header');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id], header[id]');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        }, { passive: true });

        // Scroll spy with IntersectionObserver
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -65% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => sectionObserver.observe(section));
    }

    // ===============================================
    // 11. ACCESSIBLE MOBILE MENU
    // ===============================================
    function initMobileMenu() {
        const toggleBtn = document.getElementById('menu-toggle');
        const siteNav = document.getElementById('site-nav');
        const backdrop = document.getElementById('nav-backdrop');
        const navLinks = document.querySelectorAll('.site-nav .nav-link, .site-nav .btn');

        if (!toggleBtn || !siteNav) return;

        function openMenu() {
            toggleBtn.classList.add('is-active');
            toggleBtn.setAttribute('aria-expanded', 'true');
            siteNav.classList.add('is-open');
            backdrop?.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            toggleBtn.classList.remove('is-active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            siteNav.classList.remove('is-open');
            backdrop?.classList.remove('is-active');
            document.body.style.overflow = '';
        }

        toggleBtn.addEventListener('click', () => {
            const isOpen = siteNav.classList.contains('is-open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        backdrop?.addEventListener('click', closeMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
                closeMenu();
                toggleBtn.focus();
            }
        });
    }

    // ===============================================
    // 12. TOAST NOTIFICATION UTILITY
    // ===============================================
    function showToast(message, icon = 'fa-solid fa-circle-check') {
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }

        toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // ===============================================
    // 13. DEMO LINK HANDLER
    // ===============================================
    function initDemoLinks() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-demo-link="true"]');
            if (target) {
                e.preventDefault();
                showToast('This is a demo project concept. You can configure active links in js/data.js', 'fa-solid fa-circle-info');
            }
        });
    }

    // ===============================================
    // 14. CONTACT INQUIRY FORM HANDLER
    // ===============================================
    function initContactForm() {
        const form = document.getElementById('inquiry-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name')?.value.trim();
            const email = document.getElementById('form-email')?.value.trim();
            const subject = document.getElementById('form-subject')?.value.trim();
            const message = document.getElementById('form-message')?.value.trim();

            if (!name || !email || !message) {
                showToast('Please fill out all required fields.', 'fa-solid fa-triangle-exclamation');
                return;
            }

            // Open email client with prefilled details as reliable static fallback
            const mailtoLink = `mailto:${data.personalInfo.email}?subject=${encodeURIComponent(subject || 'Flutter Project Inquiry from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;

            showToast('Opening your email client with your message prepared...', 'fa-solid fa-paper-plane');
            setTimeout(() => {
                window.location.href = mailtoLink;
                form.reset();
            }, 1000);
        });
    }

    // ===============================================
    // 15. BACK TO TOP BUTTON
    // ===============================================
    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (!btn) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===============================================
    // MASTER INITIALIZATION SEQUENCE
    // ===============================================
    renderPersonalInfo();
    renderSocialLinks();
    renderExperience();
    renderSkills();
    renderProjects();
    renderServices();
    renderTestimonials();
    renderContactCards();

    initHeaderAndScrollSpy();
    initMobileMenu();
    initSlider();
    initDemoLinks();
    initContactForm();
    initBackToTop();

    // Trigger animations after DOM content is injected
    if (window.PortfolioAnimations) {
        window.PortfolioAnimations.initAll();
    }
});
