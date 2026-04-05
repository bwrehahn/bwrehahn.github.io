// Back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(backBtn) backBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
function scrollToTop() { window.scrollTo({ top:0, behavior:'smooth' }); }

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior:'smooth' });
  });
});
