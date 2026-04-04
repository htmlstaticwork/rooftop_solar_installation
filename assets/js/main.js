/**
 * Main JS for Rooftop Solar Installation Website
 * Handles Dark Mode, RTL Toggle, and Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode Toggle ---
  const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
  const body = document.documentElement;

  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  darkModeToggles.forEach(toggle => updateDarkModeIcon(toggle, savedTheme));

  darkModeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      darkModeToggles.forEach(t => updateDarkModeIcon(t, newTheme));
    });
  });

  function updateDarkModeIcon(toggle, theme) {
    if (!toggle) return;
    toggle.innerHTML = theme === 'light'
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M22 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>';
  }

  // --- RTL Toggle ---
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  const savedDir = localStorage.getItem('dir') || 'ltr';
  body.setAttribute('dir', savedDir);

  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentDir = body.getAttribute('dir');
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      body.setAttribute('dir', newDir);
      localStorage.setItem('dir', newDir);
    });
  });

  // --- Mobile Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // Close mobile menu when a link is clicked
  const navLinksItems = document.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
      if (hamburger) hamburger.classList.remove('open');
    });
  });

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Social Login Mock ---
  const googleLogin = document.getElementById('google-login');
  const appleLogin = document.getElementById('apple-login');

  if (googleLogin) {
    googleLogin.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Redirecting to Google Login...');
    });
  }
  if (appleLogin) {
    appleLogin.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Redirecting to Apple Login...');
    });
  }

  // --- Password Show/Hide ---
  const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.innerHTML = type === 'password'
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>';
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other open items (optional, but cleaner)
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      // Toggle current item
      item.classList.toggle('active');
    });
  });
});
