let edad = parseInt(prompt('ingresar edad:'));

if (Number.isNaN(edad)){
    console.log('la edad tiene q ser un numero')
}

else if(edad >= 18){
    console.log("puede conducir");
}else{
    console.log("no puede conducir");
}


    
