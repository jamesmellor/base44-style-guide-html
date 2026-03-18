/* ═══════════════════════════════════════════════════════════════════════════════
   BASE44 STYLE GUIDE — JAVASCRIPT
   Navigation, Color Copying, and Interactivity
   ═══════════════════════════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION MANAGEMENT
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  setupNavigation();
  setupColorSwatches();
  setupAccordions();
  setupComponentTabs();
  setupComponentAccordions();
});

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileSelect = document.getElementById('mobile-nav');
  const sections = document.querySelectorAll('section.section');

  // Desktop navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      updateActiveNav(section, navLinks);
      scrollToSection(section);
    });
  });

  // Mobile navigation select
  if (mobileSelect) {
    mobileSelect.addEventListener('change', function() {
      const section = this.value;
      updateActiveNav(section, navLinks);
      scrollToSection(section);
    });
  }

  // Update navigation on scroll
  window.addEventListener('scroll', () => {
    updateNavOnScroll(sections, navLinks, mobileSelect);
  });
}

function updateActiveNav(sectionId, navLinks) {
  navLinks.forEach(link => {
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function updateNavOnScroll(sections, navLinks, mobileSelect) {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY + 100;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  if (current) {
    updateActiveNav(current, navLinks);
    if (mobileSelect) {
      mobileSelect.value = current;
    }
  }
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// COLOR SWATCH INTERACTION
// ─────────────────────────────────────────────────────────────────────────────

function setupColorSwatches() {
  const swatches = document.querySelectorAll('.colour-swatch, .colour-swatch-large');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', function(e) {
      e.preventDefault();
      const hex = this.getAttribute('data-hex');

      if (hex) {
        // Copy to clipboard
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied: ${hex}`);
          
          // Visual feedback
          this.style.opacity = '0.8';
          setTimeout(() => {
            this.style.opacity = '1';
          }, 150);
        }).catch(() => {
          showToast('Failed to copy');
        });
      }
    });

    // Add hover cursor change
    swatch.style.cursor = 'pointer';
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// TOAST NOTIFICATIONS
// ─────────────────────────────────────────────────────────────────────────────

function showToast(message) {
  // Remove existing toast if present
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #23324f;
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    z-index: 1000;
    animation: slideUp 0.3s ease-out;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    font-weight: 500;
  `;

  document.body.appendChild(toast);

  // Auto-remove after 2 seconds
  setTimeout(() => {
    toast.style.animation = 'slideDown 0.3s ease-out forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ─────────────────────────────────────────────────────────────────────────────
// ACCORDIONS (if needed)
// ─────────────────────────────────────────────────────────────────────────────

function setupAccordions() {
  const accordionHeaders = document.querySelectorAll('[data-accordion]');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.style.display === 'block';
      
      // Close all other accordions in the same group
      const group = this.parentElement;
      const otherHeaders = group.querySelectorAll('[data-accordion]');
      
      otherHeaders.forEach(h => {
        if (h !== this) {
          h.nextElementSibling.style.display = 'none';
          h.classList.remove('active');
        }
      });
      
      // Toggle current
      if (isOpen) {
        content.style.display = 'none';
        this.classList.remove('active');
      } else {
        content.style.display = 'block';
        this.classList.add('active');
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT LIBRARY — TAB SWITCHING
// ─────────────────────────────────────────────────────────────────────────────

function setupComponentTabs() {
  const tabs = document.querySelectorAll('.comp-tab');
  const panels = document.querySelectorAll('.comp-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.getAttribute('data-tab');

      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT LIBRARY — ACCORDION
// ─────────────────────────────────────────────────────────────────────────────

function setupComponentAccordions() {
  const btns = document.querySelectorAll('.accordion-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const qSpan = this.querySelector('.accordion-q');
      const iconSpan = this.querySelector('.accordion-icon');
      const isOpen = this.getAttribute('aria-expanded') === 'true';

      // Close all siblings in the same accordion-wrap
      const wrap = this.closest('.accordion-wrap');
      wrap.querySelectorAll('.accordion-btn').forEach(b => {
        if (b !== this) {
          b.setAttribute('aria-expanded', 'false');
          b.querySelector('.accordion-q').classList.remove('open');
          b.querySelector('.accordion-icon').classList.remove('open');
          b.querySelector('.accordion-icon').innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>';
          const sibBody = b.closest('.accordion-item').querySelector('.accordion-body');
          sibBody.style.display = 'none';
        }
      });

      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        qSpan.classList.remove('open');
        iconSpan.classList.remove('open');
        iconSpan.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>';
        body.style.display = 'none';
      } else {
        this.setAttribute('aria-expanded', 'true');
        qSpan.classList.add('open');
        iconSpan.classList.add('open');
        iconSpan.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>';
        body.style.display = 'block';
      }
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATIONS STYLESHEET (Inject into page)
// ─────────────────────────────────────────────────────────────────────────────

const animationStyles = document.createElement('style');
animationStyles.textContent = `
  @keyframes slideUp {
    from {
      transform: translateY(1rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(1rem);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

document.head.appendChild(animationStyles);

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

// Debounce scroll events for better performance
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Get viewport dimensions
function getViewport() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight)
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGGING
// ─────────────────────────────────────────────────────────────────────────────

console.log('%cBase44 Style Guide (HTML/CSS/JS version) loaded ✨', 'color: #E91E8C; font-weight: bold; font-size: 14px;');
console.log('%cClick any color swatch to copy hex values to clipboard', 'color: #2DD4A8; font-size: 12px;');
