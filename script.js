/* =================================
   MENU MOBILE
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const menuAberto = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", menuAberto);

  menuToggle.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu" : "Abrir menu",
  );
});

/* FECHAR MENU AO CLICAR EM UM LINK */

const linksMenu = document.querySelectorAll(".nav a");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

/* =================================
   ANIMAÇÃO AO ROLAR A PÁGINA
================================= */

const elementos = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
    },
  );

  elementos.forEach((elemento) => {
    observer.observe(elemento);
  });
} else {
  elementos.forEach((elemento) => {
    elemento.classList.add("active");
  });
}

/* =================================
   ANO AUTOMÁTICO NO FOOTER
================================= */

const ano = document.querySelector("#year");

ano.textContent = new Date().getFullYear();
