/* =====================================================================
   ISHAK — Landing Page
   JavaScript: js/script.js

   This file is intentionally minimal. The site works without JS.
   JS only enhances two things:
     1. Mobile navigation toggle (hamburger menu)
     2. Contact form validation feedback (no backend — demo only)
   ===================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
     -------------------------------------------------------------------
     Toggles a CSS class on the menu and button. The CSS handles
     the actual show/hide animation. aria-expanded is updated for
     screen reader users.
     ------------------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked (mobile)
    var links = navMenu.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------------------
     2. CONTACT FORM (DEMO — no backend)
     -------------------------------------------------------------------
     Since this is a static learning project, the form doesn't send
     data anywhere. We validate inputs and show a confirmation
     message so the form demonstrates proper structure + feedback.
     ------------------------------------------------------------------- */
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');

  if (form && feedback) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');

      // Basic HTML5 validation check
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedback.textContent = 'Please fill in all fields before sending.';
        feedback.style.color = '#ef4444';
        return;
      }

      // Simple email format check
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = '#ef4444';
        return;
      }

      // Success — demo message
      feedback.textContent = 'Thanks, ' + name.value.trim() + '! Your message has been received (demo).';
      feedback.style.color = '';
      form.reset();
    });
  }
})();
