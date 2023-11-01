const datosUsuarios =[
    {
        nombre:'Flavia',
        password:'as1234'
    },
    {
        nombre:'Laura',
        password:'atr1234'
    },
    {
        nombre:'Sol',
        password:'asad1234'
    },
    {
        nombre:'Catalina',
        password:'as1zc234'
    },
    {
        nombre:'Victoria',
        password:'asds23'
    },

]

const soloPass = datosUsuarios.map(function(p){
    return p.password
})

//const soloPass = datosUsuarios.map(p => {
 //   return p.password
//})

console.log(soloPass)



const soloNombre = datosUsuarios.map(function(p){
    return p.nombre
})

console.log(soloNombre)