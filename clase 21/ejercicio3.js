let numeros = [3, 7, 1, 9, 4];
let mayor = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El número mayor es: " + mayor);