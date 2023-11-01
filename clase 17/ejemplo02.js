const items = document.getElementsByClassName('item');

function cambiarVisibilidad(){
    const item = items[1];

    if(item.style.visibility == ''){
        item.style.visibility = 'hidden';
    } else{
        item.style.visibility = ''
    }
}

setInterval(cambiarVisibilidad, 1000);
//500 es medio segundo(seria milisegundos)
//setinterval significa hace esto(en este caso cambiar la invisibilada en tanto tiempo(medio segundo))