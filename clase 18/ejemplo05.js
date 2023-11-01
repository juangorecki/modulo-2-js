const frutas = ['palta', 'frutilla', 'banana', 'sandia', 'manzana'];

console.log(frutas);//palta , frutilla ..

console.log(frutas.sort());//banana, frutilla , manzana , palta , sandia

//.sort ordena por letra (a-z) y por numeros de mas chico a mas grandes

console.log(frutas.sort().reverse());//sandia,palta,manzana,frutilla,banana
//reverse seria al reves de num mas grande al chico y de letras de z-a


const numeros = [1,3,4,2,5,8,6,7,10,9]


console.log(numeros.sort())

console.log(numeros.sort().reverse())

//de esta manera no los ordena bien, pone 1,10,2,3,4,5,6,7,8,9 (ya que lee el primer numero del 10 que seria 1 entonces lo detecta como 1 y algo mas)


//menor a mayor
const numbers = [4,45,2,5,1,110,3,34]

numbers.sort(function(a,b){
    return a - b;
});




//mayor a menor
//numbers.sort(function(a,b){
 //   return b - a;
//});

console.log(numbers);





