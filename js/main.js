/* =========================================================================
   Venkata Vikranth Jannatha — portfolio interactions
   1. Skill icons (inline SVG sprite)
   2. Mobile menu
   3. Active nav link (IntersectionObserver)
   4. Project filters
   5. Project details disclosure
   6. Fade-in on scroll
   No dependencies. Works from the file system and on GitHub Pages.
   ========================================================================= */
(function () {
  "use strict";

  // Turn on the reveal styles only once this script actually runs, so every
  // section stays visible if JavaScript never loads.
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =====================================================================
     1. Skill icons
     ---------------------------------------------------------------------
     Small geometric marks, drawn by hand on a 24x24 grid in one consistent
     stroke style. Only named technologies and tools get an icon; conceptual
     skills render as plain text chips. These are descriptive symbols rather
     than brand logos — to use official logos instead, drop your own file into
     assets/images/ and swap the matching entry for an <img> here.
     ===================================================================== */
  var ICONS = {
    java:        '<path d="M6 10h10v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5Z"/><path d="M16 11.5h1.4a2.5 2.5 0 0 1 0 5H16"/><path d="M9 4c0 1.2 1.3 1.6 1.3 2.9M12.6 3.4c0 1.4 1.4 1.9 1.4 3.3"/>',
    javascript:  '<path d="M10 4c-1.8 0-2.6.9-2.6 2.4v2.2c0 1.2-.6 1.9-1.7 2.4 1.1.5 1.7 1.2 1.7 2.4v2.2c0 1.5.8 2.4 2.6 2.4"/><path d="M14 4c1.8 0 2.6.9 2.6 2.4v2.2c0 1.2.6 1.9 1.7 2.4-1.1.5-1.7 1.2-1.7 2.4v2.2c0 1.5-.8 2.4-2.6 2.4"/>',
    sql:         '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    python:      '<path d="M9.5 3.5h4a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 0-3 3"/><path d="M14.5 20.5h-4a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3a3 3 0 0 0 3-3"/><circle cx="10.6" cy="6.6" r=".95" class="is-filled"/><circle cx="13.4" cy="17.4" r=".95" class="is-filled"/>',
    csharp:      '<path d="M9 4 7.6 20M16.4 4 15 20M4.6 9h15M4 15h15"/>',
    spring:      '<path d="M5 19c0-8.4 5.2-13 14-13 0 9.2-5.2 13-11 13H5Z"/><path d="M5 19c3.2-4.4 7.4-7.4 11.4-9"/>',
    jpa:         '<path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z"/><path d="m3.5 12 8.5 4.5L20.5 12"/><path d="m3.5 16.5 8.5 4.5 8.5-4.5"/>',
    dotnet:      '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9h17"/><path d="m9.5 12.5-2 2 2 2M14.5 12.5l2 2-2 2"/>',
    nodejs:      '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"/>',
    react:       '<circle cx="12" cy="12" r="1.7" class="is-filled"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
    html5:       '<path d="m9 7.5-4.5 4.5L9 16.5M15 7.5l4.5 4.5L15 16.5"/>',
    css3:        '<circle cx="12" cy="12" r="8.5"/><circle cx="9.4" cy="9.6" r="1.1" class="is-filled"/><circle cx="14.6" cy="9.6" r="1.1" class="is-filled"/><circle cx="10" cy="14.8" r="1.1" class="is-filled"/>',
    postgresql:  '<ellipse cx="12" cy="5.8" rx="7" ry="2.7"/><path d="M5 5.8v12.4c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7V5.8"/><path d="M5 11.6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7"/><circle cx="18.6" cy="17.4" r="1.6" class="is-filled"/>',
    sqlserver:   '<ellipse cx="12" cy="5.5" rx="7" ry="2.6"/><path d="M5 5.5v13c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7v-13"/><path d="M5 10.6h14M5 15.6h14"/>',
    mongodb:     '<path d="M12 3c4 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0C6.5 10 8 7 12 3Z"/><path d="M12 9.5V21"/>',
    git:         '<circle cx="6.8" cy="6" r="2.4"/><circle cx="6.8" cy="18" r="2.4"/><circle cx="17.2" cy="10" r="2.4"/><path d="M6.8 8.4v7.2M9.2 6.4c2.8.2 5.6 1.2 5.6 2.9"/>',
    github:      '<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" class="is-filled"/>',
    junit:       '<path d="M9.2 3h5.6M10.6 3v7.3L6 18.2A2 2 0 0 0 7.7 21h8.6a2 2 0 0 0 1.7-2.8l-4.6-7.9V3"/><path d="M7.8 14.6h8.4"/>',
    mockito:     '<rect x="3.5" y="3.5" width="11" height="11" rx="2.4"/><rect x="9.5" y="9.5" width="11" height="11" rx="2.4"/>',
    pandas:      '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M3.5 14.5h17M9.2 4.5v15M14.8 4.5v15"/>',
    numpy:       '<path d="M7 3.5H4.5v17H7M17 3.5h2.5v17H17"/><circle cx="10" cy="9.4" r=".9" class="is-filled"/><circle cx="14" cy="9.4" r=".9" class="is-filled"/><circle cx="10" cy="14.6" r=".9" class="is-filled"/><circle cx="14" cy="14.6" r=".9" class="is-filled"/>',
    sklearn:     '<path d="M4 4v16h16"/><circle cx="8.2" cy="15.2" r="1.4" class="is-filled"/><circle cx="12.4" cy="11.8" r="1.4" class="is-filled"/><circle cx="16.8" cy="7.6" r="1.4" class="is-filled"/><path d="m6.6 16.6 9.4-9.4"/>',
    tensorflow:  '<circle cx="4.8" cy="12" r="2.1"/><circle cx="12" cy="6" r="2.1"/><circle cx="12" cy="18" r="2.1"/><circle cx="19.2" cy="12" r="2.1"/><path d="M6.6 10.9 10 7.5M6.6 13.1 10 16.5M13.9 7.5l3.5 3.4M13.9 16.5l3.5-3.4"/>',
    pyspark:     '<path d="M13.4 3 6 13.2h4.7L10 21l7.4-10.2h-4.7L13.4 3Z"/>',
    mail:        '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4.2 7.4 7.8 5.2 7.8-5.2"/>',
    phone:       '<path d="M6.6 3.6h2.8l1.5 3.8-2 1.4a12.4 12.4 0 0 0 6.3 6.3l1.4-2 3.8 1.5v2.8a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.8a2 2 0 0 1 2-2.2Z"/>',
    download:    '<path d="M12 4v10.5M7.8 10.6 12 14.8l4.2-4.2M5 19.5h14"/>',
    pin:         '<path d="M12 21.2s7-6.4 7-11.2a7 7 0 1 0-14 0c0 4.8 7 11.2 7 11.2Z"/><circle cx="12" cy="10" r="2.6"/>',
    linkedin:    '<path d="M4 4h16v16H4V4Zm3.3 6.2h2.3V17H7.3v-6.8Zm1.15-3.4a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Zm3.35 3.4h2.2v.95h.04c.31-.56 1.06-1.15 2.18-1.15 2.33 0 2.76 1.45 2.76 3.34V17h-2.3v-3.12c0-.75-.02-1.72-1.1-1.72-1.1 0-1.27.8-1.27 1.66V17h-2.3v-6.8Z" class="is-filled"/>'
  };

  var iconSlots = document.querySelectorAll("[data-icon]");
  Array.prototype.forEach.call(iconSlots, function (slot) {
    var markup = ICONS[slot.getAttribute("data-icon")];
    if (!markup) return;
    slot.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + markup + "</svg>";
  });

  /* =====================================================================
     2. Mobile menu
     ===================================================================== */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  var header = document.getElementById("site-header");

  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  function menuOpen() { return !!nav && nav.classList.contains("is-open"); }

  if (toggle && nav) {
    toggle.addEventListener("click", function () { setMenu(!menuOpen()); });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuOpen()) { setMenu(false); toggle.focus(); }
    });

    document.addEventListener("click", function (event) {
      if (!menuOpen()) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1023 && menuOpen()) setMenu(false);
    });
  }

  /* =====================================================================
     3. Active nav link
     IntersectionObserver marks the section currently under the sticky header.
     ===================================================================== */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-list a[href^='#']")
  );
  var sections = navLinks
    .map(function (link) {
      var el = document.getElementById(link.getAttribute("href").slice(1));
      return el ? { el: el, link: link } : null;
    })
    .filter(Boolean);

  function activate(entry) {
    sections.forEach(function (s) {
      var on = s === entry;
      s.link.classList.toggle("is-active", on);
      if (on) s.link.setAttribute("aria-current", "true");
      else s.link.removeAttribute("aria-current");
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    var headerH = header ? header.offsetHeight : 64;
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = sections.filter(function (s) { return s.el === entry.target; })[0];
          if (match) activate(match);
        });
      },
      // a band just below the header, ending 60% down the viewport
      { rootMargin: "-" + (headerH + 16) + "px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s.el); });

    // at the very bottom of the page the last section wins
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        activate(sections[sections.length - 1]);
      }
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 4);
    }, { passive: true });
  } else {
    // no IntersectionObserver — fall back to a scroll position check
    var onScroll = function () {
      var line = window.scrollY + (header ? header.offsetHeight : 64) + 32;
      var current = null;
      sections.forEach(function (s) { if (s.el.offsetTop <= line) current = s; });
      if (current) activate(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* =====================================================================
     4. Project filters
     ===================================================================== */
  var filters = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
  var status = document.getElementById("filter-status");

  function applyFilter(value) {
    var shown = 0;
    cards.forEach(function (card) {
      var match = value === "all" || card.getAttribute("data-category") === value;
      card.hidden = !match;
      if (match) {
        shown += 1;
        card.classList.add("is-visible");   // never reveal-hide a filtered card
      }
    });

    filters.forEach(function (button) {
      var on = button.getAttribute("data-filter") === value;
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-pressed", String(on));
    });

    if (status) {
      var name = value === "all" ? "All projects" : value === "data" ? "Data & AI projects" : "Full-stack projects";
      status.textContent = name + ": " + shown + " shown.";
    }
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"));
    });
  });

  /* =====================================================================
     5. Project details disclosure
     ===================================================================== */
  Array.prototype.forEach.call(document.querySelectorAll("[data-project-card]"), function (card) {
    var panel = card.querySelector(".details");
    var button = card.querySelector(".details-toggle");
    if (!panel || !button) return;

    var label = button.querySelector(".details-label");

    button.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Hide details" : "Details";
    });
  });

  /* =====================================================================
     6. Fade-in on scroll
     ===================================================================== */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    reveals.forEach(function (el, index) {
      el.style.animationDelay = (Math.min(index % 3, 2) * 60) + "ms";
      revealObserver.observe(el);
    });
  }
})();
