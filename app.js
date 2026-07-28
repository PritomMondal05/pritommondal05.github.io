// Portfolio Interactive Logic - Dark Mode, Scroll Top, Accordions, Filtering

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark Mode Toggle System
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<span>☼</span><span>Light Mode</span>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = '<span>☾</span><span>Dark Mode</span>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
    localStorage.setItem('theme', theme);
  }

  // Initialize theme from storage
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileMenuBtn.innerHTML = isOpen ? '✕ Close' : '☰ Menu';
    });
  }

  // 3. Scroll to Top Floating Button
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Project Filtering System
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
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 5. Expandable Project Drawers
  const drawerBtns = document.querySelectorAll('.details-toggle-btn');

  drawerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      
      if (drawer) {
        drawer.classList.toggle('open');
        const isOpen = drawer.classList.contains('open');
        btn.innerHTML = isOpen ? 'Hide Key Highlights ▲' : 'View Key Highlights ▼';
      }
    });
  });

  // 6. Services Accordion System
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all service details
      serviceItems.forEach(s => {
        s.classList.remove('open');
        const arrow = s.querySelector('.service-arrow');
        if (arrow) arrow.textContent = '↓';
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
        const arrow = item.querySelector('.service-arrow');
        if (arrow) arrow.textContent = '→';
      }
    });
  });

  // 7. Modal Image Preview
  const portraitTrigger = document.getElementById('portrait-trigger');
  const imageModal = document.getElementById('image-modal');
  const modalClose = document.getElementById('modal-close');

  if (portraitTrigger && imageModal) {
    portraitTrigger.addEventListener('click', () => {
      imageModal.classList.add('active');
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
});
