// Portfolio Website JavaScript
// Handles animations, interactions, and smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScrolling();
    initNavigation();
    initHoverEffects();
    initCurrentDate();
    initCertificateCarousel();
    initProjectGSAPSlider();
    
    if (document.querySelector('.preloader')) {
        initPreloader();
    } else {
        initPageLoadAnimation();
        initHeroGSAP();
    }
});

function initPreloader() {
    const preloaderElement = document.querySelector('.preloader');
    const counterElement = document.querySelector('.counter');
    
    if (!preloaderElement) return;
    
    let counter = { value: 0 };
    
    gsap.to(counter, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: function() {
            if (counterElement) counterElement.textContent = Math.round(counter.value);
        },
        onComplete: function() {
            gsap.to(preloaderElement, {
                yPercent: -100,
                duration: 1,
                ease: "power3.inOut",
                onComplete: () => {
                    document.body.classList.remove('no-scroll');
                    if (typeof initPageLoadAnimation === 'function') initPageLoadAnimation();
                    if (typeof initHeroGSAP === 'function') initHeroGSAP();
                }
            });
        }
    });
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('section, .about-content, .social-link');
    
    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });

    // Special slide-up animation for specific elements
    const slideUpElements = document.querySelectorAll('.hero-title, .hero-subtitle, .about-title, .skills-title');
    slideUpElements.forEach((element, index) => {
        element.classList.add('slide-up');
        element.style.animationDelay = `${index * 0.2}s`;
        observer.observe(element);
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation Functionality
function initNavigation() {
    // Navigation floats on hero background - no separate background needed
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Hover Effects and Interactions
function initHoverEffects() {
    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('button, .nav-link, .resume-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Page Load Animation
function initPageLoadAnimation() {
    // Staggered animation for hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBottom = document.querySelector('.hero-bottom');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 800);
    }
    
    if (heroBottom) {
        setTimeout(() => {
            heroBottom.style.opacity = '1';
            heroBottom.style.transform = 'translateY(0)';
        }, 1100);
    }
}

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll indicator functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollDownBtns = document.querySelectorAll('.scroll-down');
    scrollDownBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextSection = btn.closest('section').nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            window.scrollBy(0, window.innerHeight);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            window.scrollBy(0, -window.innerHeight);
        }
    });
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// GSAP Hero Animation
function initHeroGSAP() {
    if (typeof gsap === 'undefined') return;

    // Entrance Animation
    const tl = gsap.timeline();
    
    tl.from('.hero-intro', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2
    })
    .from('.hero-name', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-pill, .floating-hero-image, .section-floating-img', {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    }, '-=0.2');

    // Continuous floating animation
    gsap.utils.toArray('.hero-pill, .floating-hero-image, .section-floating-img').forEach((pill, i) => {
        gsap.to(pill, {
            y: 'random(-15, 15)',
            rotation: '+=random(-5, 5)',
            duration: 'random(2, 4)',
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.2
        });
    });
}

// Current Date Update
function initCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    
    if (!dateElement) return;
    
    function updateDate() {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();
        
        const formattedDate = `${day}, ${month}, ${year}`;
        dateElement.textContent = formattedDate;
    }
    
    // Update date immediately
    updateDate();
    
    // Update date every hour to keep it current
    setInterval(updateDate, 3600000); // 3600000ms = 1 hour
}

// Certificate Carousel
function initCertificateCarousel() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (certificateCards.length === 0) return;
    
    let currentIndex = 1; // Start with center card
    
    function updateCarousel() {
        certificateCards.forEach((card, index) => {
            card.classList.remove('left-card', 'center-card', 'right-card', 'active');
            
            if (index === currentIndex) {
                card.classList.add('center-card', 'active');
            } else if (index === (currentIndex - 1 + certificateCards.length) % certificateCards.length) {
                card.classList.add('left-card');
            } else if (index === (currentIndex + 1) % certificateCards.length) {
                card.classList.add('right-card');
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % certificateCards.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + certificateCards.length) % certificateCards.length;
        updateCarousel();
    }
    
    // Add click event listeners to cards
    certificateCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Add click event listeners to navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Initialize carousel
    updateCarousel();
}

// Console welcome message
console.log(`
🚀 Welcome to Pritom Mondal's Portfolio!
✨ Built with modern web technologies
🎨 Designed for performance and accessibility
📱 Fully responsive and interactive
`);
// GSAP Project Slider Animation
function initProjectGSAPSlider() {
    if (typeof gsap === 'undefined') return;

    const slides = document.querySelectorAll('.project-slide');
    if (slides.length === 0) return;

    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    let currentIndex = 0;
    let isAnimating = false;

    // Make sure initial state is fully visible for active slide
    const firstSlide = slides[0];
    gsap.set(firstSlide.querySelector('.mockup-img'), { x: 0, opacity: 1 });
    gsap.set(firstSlide.querySelectorAll('.project-heading, .project-desc, .project-meta, .project-brand, .project-tags'), { y: 0, opacity: 1 });

    function goToSlide(index) {
        if (isAnimating || index === currentIndex) return;
        isAnimating = true;

        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        // Ensure next slide is visible but transparent
        nextSlide.classList.add('active');
        
        const tl = gsap.timeline({
            onComplete: () => {
                currentSlide.classList.remove('active');
                gsap.set(currentSlide, { clearProps: 'all' });
                currentIndex = index;
                isAnimating = false;
            }
        });

        // Current slide out animation
        tl.to(currentSlide.querySelector('.mockup-img'), {
            x: -50,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.in'
        }, 0)
        .to(currentSlide.querySelectorAll('.project-heading, .project-desc, .project-meta, .project-brand, .project-tags'), {
            y: -20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.in'
        }, 0);

        // Next slide in animation setup
        gsap.set(nextSlide.querySelector('.mockup-img'), { x: 50, opacity: 0 });
        gsap.set(nextSlide.querySelectorAll('.project-heading, .project-desc, .project-meta, .project-brand, .project-tags'), { y: 20, opacity: 0 });

        // Next slide in animation
        tl.to(nextSlide.querySelector('.mockup-img'), {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, 0.4)
        .to(nextSlide.querySelectorAll('.project-heading, .project-desc, .project-meta, .project-brand, .project-tags'), {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        }, 0.5);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextIndex = (currentIndex + 1) % slides.length;
            goToSlide(nextIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        });
    }

    // Add mouse wheel scroll support
    window.addEventListener('wheel', (e) => {
        // Check if we are on the projects page by making sure slider exists
        const sliderContainer = document.querySelector('.project-slider-container');
        if(!sliderContainer) return;

        if (isAnimating) return;
        
        if (e.deltaY > 50) {
            const nextIndex = (currentIndex + 1) % slides.length;
            goToSlide(nextIndex);
        } else if (e.deltaY < -50) {
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(prevIndex);
        }
    });
}
