/* =========================
   PORTFOLIO JS – STABLE
   ========================= */

/* === 1. Smooth scroll interno (sin romper links externos) === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* === 2. Animación al hacer scroll (Intersection Observer) === */
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card, section, header").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});


/* === 3. Hover elegante en cards (sin tapar texto) === */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


/* === 4. Botón WhatsApp – feedback visual === */
const whatsappBtn = document.querySelector('a[href*="wa.me"]');

if (whatsappBtn) {
  whatsappBtn.addEventListener("mouseenter", () => {
    whatsappBtn.style.transform = "scale(1.05)";
  });

  whatsappBtn.addEventListener("mouseleave", () => {
    whatsappBtn.style.transform = "scale(1)";
  });
}


/* === 5. Seguridad: asegurar que links externos abran bien === */
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute("rel", "noopener noreferrer");
});
