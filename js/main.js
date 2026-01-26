document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 20px 40px rgba(56,189,248,0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = 'none';
    });
  });
});
