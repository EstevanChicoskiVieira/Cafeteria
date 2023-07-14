const header = document.querySelector('header');

function scrollOnHeader(){
    header.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', scrollOnHeader)

//Sistema de cardápio

const cardapio = document.getElementById('cardapio')
const lista = document.getElementById('itens')

document.getElementById('cafes').addEventListener('click', () => {
    cardapio.style.background = '#b89073'

    lista.innerHTML = `
        <span>
            <p>Café preto</p>
            <p>----------</p>
            <p>R$13,50</p>
        </span>
        <span>
            <p>Café ao leite</p>
            <p>----------</p>
            <p>R$15,00</p>
        </span>
        <span>
            <p>Cappuccino</p>
            <p>----------</p>
            <p>R$20,00</p>
        </span>
        <span>
            <p>Café Espresso</p>
            <p>----------</p>
            <p>R$10,00</p>
        </span>
        <span>
            <p>Café Latte</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
        <span>
            <p>Macchiato</p>
            <p>----------</p>
            <p>R$17,00</p>
        </span>
        <span>
            <p>Mocha</p>
            <p>----------</p>
            <p>R$18,00</p>
        </span>
        <span>
            <p>Frappuccino</p>
            <p>----------</p>
            <p>R$22,00</p>
        </span>
        <span>
            <p>Café Irish</p>
            <p>----------</p>
            <p>R$25,00</p>
        </span>
    `
})

//Evento de scroll 

const menuItems = document.querySelectorAll('.header-div2 nav a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time ** 4 + from;
    return -distance / 2 * ((time -= 2) * time ** 3 - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};