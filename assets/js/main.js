// Octo Labs — main.js v3

document.addEventListener("DOMContentLoaded", () => {

  // ── Year ──────────────────────────────────────────────
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Hamburger menu ────────────────────────────────────
  const toggle = document.getElementById("navToggle");
  const nav    = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close on link click
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // ── Scroll reveal ─────────────────────────────────────
  const targets = document.querySelectorAll(
    ".card, .step, .hv-card, .cta-content, .cta-badge, .section-header"
  );

  targets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger siblings
            const siblings = [...entry.target.parentElement.querySelectorAll(".reveal")];
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all immediately
    targets.forEach((el) => el.classList.add("visible"));
  }

  // ── Sticky header shadow ──────────────────────────────
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.style.boxShadow = window.scrollY > 10
        ? "0 1px 24px rgba(0,0,0,0.45)"
        : "";
    }, { passive: true });
  }

});
