function getDiasForMes(mes){

    if(Number.isNaN(mes)) return false; // si o si sea numero
    if(mes < 1 || mes > 12) return false // numero entre 1 y 12

    mes-- //necesito tener un valor menos

    const data = [
        {
            nombre: 'enero',
            dias: 31
        },
        {
            nombre: 'febrero',
            dias: 28
        },
        {
            nombre: 'marzo',
            dias: 31
        },
        {
            nombre: 'abril',
            dias: 30
        },
        {
            nombre: 'mayo',
            dias: 31
        },
        {
            nombre: 'junio',
            dias: 30
        },
        {
            nombre: 'julio',
            dias: 31
        },
        {
            nombre: 'agosto',
            dias: 31
        },
        {
            nombre: 'septiembre',
            dias: 30
        },
        {
            nombre: 'octubre',
            dias: 31
        },
        {
            nombre: 'noviembre',
            dias: 30
        },
        {
            nombre: 'diciembre',
            dias: 31
        }
    ]

    return data[mes];



}

const numMes = parseInt(prompt('ingrese el mes del año en numero: ', ''));//ventana para colocar numero

const resultado = getDiasForMes(numMes); //

if(resultado){
    alert(`el mes ${resultado.nombre} tiene ${resultado.dias}`)
} else {
    alert('mes invalido')
}