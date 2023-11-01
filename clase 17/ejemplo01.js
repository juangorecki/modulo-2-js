const cuadrado = document.getElementsByClassName('cuadrado')[0];

const rojo = document.getElementById('rojo');

const borde = document.getElementById('borde');

const reset =document.getElementById('reset')

rojo.addEventListener('click', function(){
    cuadrado.classList.add('rojo')
})

borde.addEventListener('click', function(){
    cuadrado.classList.add('borde')
})

reset.addEventListener('click', function(){
    cuadrado.classList.remove('rojo', 'borde')
})

//https://www.w3schools.com/howto/howto_js_accordion.asp
//https://developer.mozilla.org/es/docs/Web/API/Element/classList