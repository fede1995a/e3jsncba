const d = document;
const $form = d.querySelector('.form'),
    $inputText = d.querySelector('.input'),
    $contenedorCards = d.querySelector('.cards'),
    $mensajeError = d.querySelector('.mensaje');

const pizzas = [{
        id: 1,
        nombre: 'Muzarela',
        precio: 550,
        ing: ['Muzarela', 'Oregano'],
        src: '/img/muzarella.jpg'
    },
    {
        id: 2,
        nombre: 'Napolitana con Jamon',
        precio: 1100,
        ing: ['Muzarela', 'Tomate', 'Jamon'],
        src: '/img/napolitanaconjamon.jpg'
    },
    {
        id: 3,
        nombre: 'Calabresa',
        precio: 1200,
        ing: ['Muzarela', 'Salame'],
        src: '/img/calabresa.jpg'
    },
    {
        id: 4,
        nombre: '4 Quesos',
        precio: 1400,
        ing: ['Muzarela', 'Roquefort', 'Parmesano', 'Provolone'],
        src: '/img/4quesos.jpg'
    },
    {
        id: 5,
        nombre: 'Fugazeta',
        precio: 1100,
        ing: ['Muzarela', 'Cebolla'],
        src: '/img/fugazeta.jpg',
    },
    {
        id: 6,
        nombre: 'Baconator',
        precio: 1400,
        ing: ['Chedar', 'Bacon', 'Muzarela'],
        src: '/img/baconator.jpg'
    },
];

window.addEventListener('load', e => {

    const getPizza = JSON.parse(localStorage.getItem("myPizza"))
    if (getPizza === null) {
        return;
    } else {
        $contenedorCards.innerHTML = getPizza;
        renderPizza(getPizza)
    }

})


$form.addEventListener('submit', e => {
    e.preventDefault();

    const datoUser = $inputText.value.trim();
    if (Number(datoUser) > pizzas.length) {
        $mensajeError.classList.add("showMensaje");
        $contenedorCards.innerHTML = "";
        $form.reset();
        return;
    } else {
        $mensajeError.classList.remove("showMensaje")
    }
    buscarPizza(pizzas)
    $form.reset();
})


function buscarPizza(arreglo) {
    const pizzaEncontrada = pizzas.find(pizza => pizza.id === Number($inputText.value));
    localStorage.setItem("myPizza", JSON.stringify(pizzaEncontrada))
    renderPizza(pizzaEncontrada)
}

function renderPizza(pizza) {
    const { nombre, src, precio, ing } = pizza
    $contenedorCards.innerHTML = `<article class="card">
      <img src=${src} class="card__img">
      <div class="card__info">
        <h2 class="card__title">${nombre}</h2>
        <p class="card__ingredientes">Ingredientes: ${ing}</p>
        <p class="card__precio">$${precio}</p>
        <a href="#" class="card__btn">COMPRAR</a>
      </div>
    </article>`
}