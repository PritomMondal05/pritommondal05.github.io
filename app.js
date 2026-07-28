// Portfolio Interactive Logic - GSAP Animations, Scroll Hide Navbar, Dark Mode, ScrollSpy

document.addEventListener('DOMContentLoaded', () => {
  // 1. GSAP Page Entrance Animations
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-greeting', { opacity: 0, y: 15, duration: 0.6, ease: 'power2.out', delay: 0.1 });
    gsap.from('.hero-name', { opacity: 0, y: 22, duration: 0.85, ease: 'power3.out', delay: 0.25 });
    gsap.from('.pill-group .pill', { opacity: 0, y: 15, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)', delay: 0.45 });
    gsap.from('.hero-content-grid', { opacity: 0, y: 25, duration: 0.8, ease: 'power3.out', delay: 0.65 });
    gsap.from('.section', { opacity: 0, y: 30, duration: 0.7, stagger: 0.15, ease: 'power2.out', delay: 0.8 });
  }
  // 0. Dynamic Real-time Date & Day Formatter
  const dateTextElements = document.querySelectorAll('.date-text');
  const dateDayElements = document.querySelectorAll('.date-day');
  if (dateTextElements.length > 0 && dateDayElements.length > 0) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); // 28 July 2026
    const formattedDay = now.toLocaleDateString('en-GB', { weekday: 'long' });                                // Tuesday

    dateTextElements.forEach(el => el.textContent = formattedDate);
    dateDayElements.forEach(el => el.textContent = formattedDay);
  }

  // Highlight active navbar link for current page
  const pagePath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pagePath) {
      link.classList.add('active');
    }
  });

  // 2. Floating Navbar Scroll Hide / Reveal Animation
  // "when scroll down it goes up/hides, when scroll up it shows"
  let lastScrollY = window.scrollY;
  const navbarWrapper = document.querySelector('.navbar-wrapper');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Check if scrolling down past 80px threshold
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      if (navbarWrapper) navbarWrapper.classList.add('nav-hidden');
    } else {
      // Scrolling up -> reveal floating navbar
      if (navbarWrapper) navbarWrapper.classList.remove('nav-hidden');
    }
    
    lastScrollY = currentScrollY;

    // Scroll to Top button visibility
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      if (currentScrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active Link Highlighting for Standalone Pages and Scroll
    const navLinkElements = document.querySelectorAll('.nav-link, .nav-icon-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinkElements.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      } else if (currentPage === 'index.html' && href && href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const top = targetSection.offsetTop;
          const height = targetSection.offsetHeight;
          if (currentScrollY >= top - 100 && currentScrollY < top + height - 100) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      } else {
        link.classList.remove('active');
      }
    });
  });

  // 3. Dark Mode Toggle System
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      }
    }
    localStorage.setItem('theme', theme);
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
      const isOpen = navLinksContainer.classList.contains('mobile-open');
      mobileMenuBtn.innerHTML = isOpen ? '✕ Close' : '☰ Menu';
    });
  }

  // 5. Scroll to Top Floating Button Handler
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Project Filtering System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(item, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 7. Expandable Project Drawers
  const drawerBtns = document.querySelectorAll('.details-toggle-btn');

  drawerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      
      if (drawer) {
        drawer.classList.toggle('open');
        const isOpen = drawer.classList.contains('open');
        btn.innerHTML = isOpen ? 'Hide Key Highlights ▲' : 'View Key Highlights ▼';
        if (isOpen && typeof gsap !== 'undefined') {
          gsap.fromTo(drawer, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.4 });
        }
      }
    });
  });

  // 8. Services Accordion System
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      serviceItems.forEach(s => {
        s.classList.remove('open');
        const arrow = s.querySelector('.service-arrow');
        if (arrow) arrow.textContent = '↓';
      });

      if (!isOpen) {
        item.classList.add('open');
        const arrow = item.querySelector('.service-arrow');
        if (arrow) arrow.textContent = '→';
      }
    });
  });

  // 9. Modal Image Preview
  const portraitTrigger = document.getElementById('portrait-trigger');
  const imageModal = document.getElementById('image-modal');
  const modalClose = document.getElementById('modal-close');

  if (portraitTrigger && imageModal) {
    portraitTrigger.addEventListener('click', () => {
      imageModal.classList.add('active');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo('.modal-content', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.5)' });
      }
    });
  }

  if (modalClose && imageModal) {
    modalClose.addEventListener('click', () => {
      imageModal.classList.remove('active');
    });
  }

  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.remove('active');
      }
    });
  }

  // 10. Special Section: Display & Accessibility Controls
  const a11yToggleBtn = document.getElementById('a11y-toggle-btn');
  const a11yPopover = document.getElementById('a11y-popover');
  const a11yCloseBtn = document.getElementById('a11y-close');

  if (a11yToggleBtn && a11yPopover) {
    a11yToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      a11yPopover.classList.toggle('active');
    });
  }

  if (a11yCloseBtn && a11yPopover) {
    a11yCloseBtn.addEventListener('click', () => {
      a11yPopover.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (a11yPopover && !a11yPopover.contains(e.target) && e.target !== a11yToggleBtn) {
      a11yPopover.classList.remove('active');
    }
  });

  // Font Size Switcher (Default, Large, Extra Large)
  const a11ySizeBtns = document.querySelectorAll('.a11y-btn');
  const savedFontSize = localStorage.getItem('fontsize') || 'default';

  function setFontSize(size) {
    document.documentElement.setAttribute('data-fontsize', size);
    a11ySizeBtns.forEach(btn => {
      if (btn.getAttribute('data-size') === size) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    localStorage.setItem('fontsize', size);
  }

  setFontSize(savedFontSize);

  a11ySizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-size');
      setFontSize(size);
    });
  });

  // Underline Important Headings Toggle (On/Off)
  const underlineToggle = document.getElementById('underline-toggle');
  const savedUnderline = localStorage.getItem('underline') === 'true';

  function setUnderline(enabled) {
    if (enabled) {
      document.documentElement.setAttribute('data-underline', 'true');
      if (underlineToggle) underlineToggle.checked = true;
    } else {
      document.documentElement.removeAttribute('data-underline');
      if (underlineToggle) underlineToggle.checked = false;
    }
    localStorage.setItem('underline', enabled ? 'true' : 'false');
  }

  setUnderline(savedUnderline);

  if (underlineToggle) {
    underlineToggle.addEventListener('change', (e) => {
      setUnderline(e.target.checked);
    });
  }

  // High Contrast Mode Toggle (On/Off)
  const highcontrastToggle = document.getElementById('highcontrast-toggle');
  const savedHighcontrast = localStorage.getItem('highcontrast') === 'true';

  function setHighcontrast(enabled) {
    if (enabled) {
      document.documentElement.setAttribute('data-highcontrast', 'true');
      if (highcontrastToggle) highcontrastToggle.checked = true;
    } else {
      document.documentElement.removeAttribute('data-highcontrast');
      if (highcontrastToggle) highcontrastToggle.checked = false;
    }
    localStorage.setItem('highcontrast', enabled ? 'true' : 'false');
  }

  setHighcontrast(savedHighcontrast);

  if (highcontrastToggle) {
    highcontrastToggle.addEventListener('change', (e) => {
      setHighcontrast(e.target.checked);
    });
  }
});
