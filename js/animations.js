/**
 * animations.js — GSAP + ScrollTrigger for Swift IT Services
 * All scroll-driven and entrance animations live here.
 */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ─────────────────────────────────────────────
     1. HERO ENTRANCE  (text elements fade/slide up)
  ───────────────────────────────────────────── */
  const heroEls = document.querySelectorAll(
    '.hero-eyebrow, .hero-title, .hero-desc, .hero-actions, .hero-tabs'
  );
  if (heroEls.length) {
    gsap.from(heroEls, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      stagger: 0.14,
      ease: 'power3.out',
      delay: 0.25,
    });
  }

  /* ─────────────────────────────────────────────
     2. FEATURE / WHY-CARDS
        Staggered fade-in + slide up 40 px
        Trigger: top of section at 80% viewport height
  ───────────────────────────────────────────── */
  const whyGrid = document.querySelector('.why-grid');
  if (whyGrid) {
    gsap.from(whyGrid.querySelectorAll('.why-card'), {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.why-us',
        start: 'top 80%',
      },
    });
  }

  /* ─────────────────────────────────────────────
     3. GENERIC SCROLL-REVEAL  (class="scroll-reveal")
        Each element fades + slides up 32 px when
        its top edge crosses 82% of the viewport.
  ───────────────────────────────────────────── */
  gsap.utils.toArray('.scroll-reveal').forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
      },
    });
  });

  /* ─────────────────────────────────────────────
     4. HORIZONTAL SCROLL — Oracle services strip
        Pinned while the card track scrolls left.
        Only active on screens ≥ 768 px.
  ───────────────────────────────────────────── */
  const hSection = document.querySelector('.h-scroll-section');
  const hTrack   = document.querySelector('.h-scroll-track');
  if (hSection && hTrack && window.innerWidth >= 768) {
    const getScrollAmt = function () {
      return hTrack.scrollWidth - document.documentElement.clientWidth;
    };

    gsap.to(hTrack, {
      x: function () { return -getScrollAmt(); },
      ease: 'none',
      scrollTrigger: {
        trigger: hSection,
        start: 'top top',
        end: function () { return '+=' + getScrollAmt(); },
        pin: true,
        anticipatePin: 1,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });
  }

  /* ─────────────────────────────────────────────
     5. STATS COUNTER  (data-count, data-suffix)
  ───────────────────────────────────────────── */
  document.querySelectorAll('.stat-number[data-count]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power1.out',
      onUpdate: function () {
        el.textContent = Math.round(obj.val) + suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  /* ─────────────────────────────────────────────
     6. PARTNER LOGOS  — staggered fade-in
  ───────────────────────────────────────────── */
  var partnerLogos = document.querySelectorAll('.partner-logo');
  if (partnerLogos.length) {
    gsap.from(partnerLogos, {
      opacity: 0,
      y: 18,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partners',
        start: 'top 88%',
      },
    });
  }

  /* ─────────────────────────────────────────────
     7. CTA SECTION  — children slide up
  ───────────────────────────────────────────── */
  var ctaInner = document.querySelector('.cta-section .cta-inner');
  if (ctaInner) {
    gsap.from(Array.from(ctaInner.children), {
      opacity: 0,
      y: 24,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ctaInner,
        start: 'top 82%',
      },
    });
  }

  /* ─────────────────────────────────────────────
     8. SERVICES OVERVIEW preview cards
  ───────────────────────────────────────────── */
  var previewCards = document.querySelectorAll('.preview-card');
  if (previewCards.length) {
    gsap.from(previewCards, {
      opacity: 0,
      y: 28,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services-overview',
        start: 'top 75%',
      },
    });
  }

  /* ─────────────────────────────────────────────
     9. INDUSTRY SOLUTION PANELS
  ───────────────────────────────────────────── */
  var solutionPanels = document.querySelectorAll('.solution-panel');
  if (solutionPanels.length) {
    gsap.from(solutionPanels, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.industry-solutions',
        start: 'top 78%',
      },
    });
  }

})();
