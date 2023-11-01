let distancias = parseInt(prompt('ingresar distancia:'));


function determinarMedioTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
      return "pie";
    } else if (distancia > 1000 && distancia <= 10000) {
      return "bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
      return "colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
     return "auto";
    } else if (distancia > 100000) {
      return "avión";
    } else {
      return "La distancia ingresada no es válida.";
    }
  }

  console.log(determinarMedioTransporte(distancias))


