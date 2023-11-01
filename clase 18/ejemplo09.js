const alumnos = [
    {
        nombre:'Flavia',
        edad: 3
    },
    {
        nombre:'Sol',
        edad: 7
    },
    {
        nombre:'Carlos',
        edad: 5
    },
    {
        nombre:'Virginia',
        edad: 10
    },
    {
        nombre:'Zonia',
        edad: 3
    }
]
// quiero saber que alumnos tienen mas de 4
const Mayoresde4 = alumnos.filter(num => num.edad  >= 4);

console.log(Mayoresde4)
//imprimir en pantalla una p o li()bucle

for(let i= 0; i < Mayoresde4.length; i++){
    document.write(`<li> niño: ${Mayoresde4[i].nombre}, cuya edad es ${Mayoresde4[i].edad} <li>`)
}