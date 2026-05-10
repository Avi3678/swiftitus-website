/* Swift Technologies — Main JS */

/* ── Mobile nav toggle ── */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
}

/* ── Hero tabs ── */
const heroTabs = document.querySelectorAll('.hero-tab');
heroTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    heroTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ── Accordion (tab-header) ── */
const tabHeaders = document.querySelectorAll('.tab-header');
tabHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = header.classList.contains('open');

    tabHeaders.forEach(h => {
      h.classList.remove('open');
      if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
    });

    if (!isOpen) {
      header.classList.add('open');
      if (body) body.classList.add('open');
    }
  });
});

// Open first tab by default
if (tabHeaders.length) {
  tabHeaders[0].classList.add('open');
  const firstBody = tabHeaders[0].nextElementSibling;
  if (firstBody) firstBody.classList.add('open');
}

/* ── Tab pills → preview cards ── */
document.querySelectorAll('.tab-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const group = pill.closest('.tab-body');
    group.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const target = pill.dataset.target;
    if (target) {
      document.querySelectorAll('.preview-card').forEach(c => c.classList.remove('active'));
      const card = document.getElementById(target);
      if (card) card.classList.add('active');
    }
  });
});

/* ── Industry switcher ── */
const switcherBtns = document.querySelectorAll('.switcher-btn');
const solutionPanels = document.querySelectorAll('.solution-panel');

switcherBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.panel;
    switcherBtns.forEach(b => b.classList.remove('active'));
    solutionPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(target);
    if (panel) panel.classList.add('active');
  });
});

/* ── Scroll animations ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-card, .value-card, .office-card, .leader-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ── Counter animation ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsBar = document.querySelector('.stats-grid');
if (statsBar) statsObserver.observe(statsBar);

/* ── Sticky navbar shadow ── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(0,0,0,0.10)'
      : '0 2px 12px rgba(0,0,0,0.06)';
  }, { passive: true });
}
