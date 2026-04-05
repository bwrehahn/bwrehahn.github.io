// Back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(backBtn) backBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
function scrollToTop() { window.scrollTo({ top:0, behavior:'smooth' }); }

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Only smooth scroll if it's an anchor on the SAME page
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
