const empleados =[
    {
        nombre:'Flavia',
        trabajo:'desarrollador'
    },
    {
        nombre:'Laura',
        trabajo:'Plomero'
    },
    {
        nombre:'Carlos',
        trabajo:'desarrollador'
    },
    {
        nombre:'Roberto',
        trabajo:'Gasista'
    },
    {
        nombre:'Lucas',
        trabajo:'Electricista'
    },

]


//metodo array que solo me muestre los desarroladores

const soloDesa = empleados.filter(empleados =>{
    return empleados.trabajo ==='desarrollador'
})

console.log(soloDesa)


const noDesa = empleados.filter(empleados =>{
    return empleados.trabajo !=='desarrollador'  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality
})

console.log(noDesa)

//metodo array que solo me muestre los desarroladores