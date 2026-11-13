// ═══════════════════════════════════════
// Animación "reveal" + cambio de fondo
// ═══════════════════════════════════════

const elementos = document.querySelectorAll(
  ".seccion, .tarjeta, .dato, .paso, .hero h1, .hero-tema, .hero-integrantes"
);

elementos.forEach((el) => el.classList.add("reveal"));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target); // anima una sola vez
      }
    });
  },
  { threshold: 0.15 }
);

elementos.forEach((el) => observador.observe(el));

// Transición de fondo: el meme se funde con la petrolera a media pantalla
window.addEventListener("scroll", () => {
  document.body.classList.toggle("abajo", window.scrollY > window.innerHeight * 0.5);
}, { passive: true });

// El hero se muestra apenas carga
window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach((el) =>
    el.classList.add("visible")
  );
});
