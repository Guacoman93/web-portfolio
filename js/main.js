// ===== ANIMACIÓN AL SCROLL =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

// ===== EFECTO SUAVE EN BOTONES =====
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );
    btn.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  });
});

// ===== DEBUG SIMPLE =====
console.log("Portfolio cargado correctamente 🚀");
