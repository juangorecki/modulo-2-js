const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
})


//classlist respresenta la lista de clases asignadas a un elemento

//toggle cambio ejemplo prender o apagar
//add o remove
