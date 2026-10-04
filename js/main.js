/* =========================================================================
   Kunigiri Kavya — portfolio interactions
   Keep it small: mobile nav, active-nav highlight, scroll reveal,
   expandable project case studies. No dependencies.
   ========================================================================= */
(function () {
  "use strict";

  // Opt in to the scroll-reveal styles only once this script is actually running,
  // so the page still shows every section if JavaScript never loads.
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     1. Mobile menu
     --------------------------------------------------------------------- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  var header = document.getElementById("site-header");

  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function menuIsOpen() {
    return !!nav && nav.classList.contains("is-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!menuIsOpen());
    });

    // close after choosing a destination
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    // close on Escape, return focus to the button
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuIsOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });

    // close when clicking outside the panel
    document.addEventListener("click", function (event) {
      if (!menuIsOpen()) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setMenu(false);
    });

    // reset when we grow past the mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900 && menuIsOpen()) setMenu(false);
    });
  }

  /* ---------------------------------------------------------------------
     2. Active nav link while scrolling
     --------------------------------------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-list a[href^='#']"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      return el ? { el: el, link: link } : null;
    })
    .filter(Boolean);

  function markActive() {
    if (!sections.length) return;

    var headerHeight = header ? header.offsetHeight : 64;
    var line = window.scrollY + headerHeight + 32;
    var atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
    var current = null;

    if (atBottom) {
      current = sections[sections.length - 1];
    } else {
      sections.forEach(function (s) {
        if (s.el.offsetTop <= line) current = s;
      });
    }

    sections.forEach(function (s) {
      var isActive = s === current;
      s.link.classList.toggle("is-active", isActive);
      if (isActive) {
        s.link.setAttribute("aria-current", "true");
      } else {
        s.link.removeAttribute("aria-current");
      }
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      markActive();
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 4);
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  markActive();

  /* ---------------------------------------------------------------------
     3. Fade sections in on scroll (subtle, skipped if motion is reduced)
     --------------------------------------------------------------------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    revealItems.forEach(function (el, index) {
      // small stagger so a row of cards does not pop in all at once.
      // animation-delay (not transition-delay) so hover states stay snappy.
      el.style.animationDelay = Math.min(index % 3, 2) * 60 + "ms";
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------------
     4. Project case studies (button, or click anywhere on the card)
     --------------------------------------------------------------------- */
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-project-card]"));

  cards.forEach(function (card) {
    var panel = card.querySelector(".case-study");
    var button = card.querySelector(".case-toggle");
    if (!panel || !button) return;

    var label = button.querySelector(".case-toggle-label");

    function setOpen(open) {
      panel.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Hide case study" : "Case study";
    }

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      setOpen(panel.hidden);
    });

    // click the card body or screenshot to expand — but never swallow links,
    // and never collapse the panel just because someone clicked its own text
    card.addEventListener("click", function (event) {
      if (event.target.closest("a, button, .case-study")) return;
      setOpen(panel.hidden);
    });
  });

  /* ---------------------------------------------------------------------
     5. Footer year
     --------------------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
