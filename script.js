/* ---------- Inicializa ícones Lucide ---------- */
lucide.createIcons();

/* ---------- Ano dinâmico no rodapé ---------- */
document.getElementById('ano').textContent = new Date().getFullYear();

/* ---------- Menu mobile (abre/fecha) ---------- */
const botaoMenu = document.getElementById('botaoMenu');
const menuMobile = document.getElementById('menuMobile');
botaoMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('aberto');
});
// Fecha o menu ao clicar em um link
menuMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menuMobile.classList.remove('aberto'));
});

/* ---------- Carrossel do Hero ---------- */
const slides = document.querySelectorAll('.hero__slide');
const indicadores = document.querySelectorAll('.hero__indicador');
let slideAtual = 0;

function mostrarSlide(indice) {
  slides.forEach((slide, i) => slide.classList.toggle('ativo', i === indice));
  indicadores.forEach((ind, i) => ind.classList.toggle('ativo', i === indice));
  slideAtual = indice;
}

// Troca automática a cada 6 segundos
let intervalo = setInterval(() => {
  mostrarSlide((slideAtual + 1) % slides.length);
}, 6000);

// Permite clicar nos indicadores
indicadores.forEach((ind) => {
  ind.addEventListener('click', () => {
    const indice = parseInt(ind.dataset.slide, 10);
    mostrarSlide(indice);
    // Reinicia o intervalo para não cortar a transição
    clearInterval(intervalo);
    intervalo = setInterval(() => {
      mostrarSlide((slideAtual + 1) % slides.length);
    }, 6000);
  });
});