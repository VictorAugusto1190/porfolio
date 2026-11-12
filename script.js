/* =================================
   MENU MOBILE
================================= */

const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");

botaoMenu.addEventListener("click", () => {
  const menuAberto = navegacao.classList.toggle("aberta");

  botaoMenu.setAttribute("aria-expanded", menuAberto);

  botaoMenu.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu" : "Abrir menu",
  );
});

/* FECHAR MENU AO CLICAR EM UM LINK */

const linksNavegacao = document.querySelectorAll(".navegacao a");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberta");

    botaoMenu.setAttribute("aria-expanded", "false");

    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

/* =================================
   ANIMAÇÃO AO ROLAR A PÁGINA
================================= */

const elementos = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ativo");

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
    elemento.classList.add("ativo");
  });
}

/* =================================
   ANO AUTOMÁTICO NO FOOTER
================================= */

const ano = document.querySelector("#year");

ano.textContent = new Date().getFullYear();
