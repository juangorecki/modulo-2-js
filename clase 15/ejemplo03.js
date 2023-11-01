const items = document.getElementsByClassName('item');

//for bucle que sirve para recorrer
//3 valores valor incial, condicion o valor tope, incremetno (dar vueltas)
//let i < va a ir actualizando su valor
for(let i = 0; i < items.length; i++){
    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
}