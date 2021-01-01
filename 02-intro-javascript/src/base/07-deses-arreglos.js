//Desestructuracion de Arreglos
const arreglo = [1,2,3,4,5];
const [,,p1] = arreglo;//por cada coma vacia que deje por delante
//ingnora la posición correspondiente, comenzando desde cero
console.log(p1);

//Desde una funcion
const retornaArreglo2 = ()=>(['ABC',123]);
const [letras,numeros]=retornaArreglo2();
console.log(letras,numeros);

//practica
//desestructurar un arreglo con una función dentro
const practica = ( valor ) => ([valor, ()=>{console.log('Hola mundo')}]);
const [nombre,funcionSaludos] = practica('Andres');
console.log(nombre);
funcionSaludos();

