import { getHeroeById } from './base/08-imp-exp'

const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
}).catch(err => console.warn(err));

//pasando por paramentro el id
const getHeroeByIdAync = (id)=> 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });


getHeroeByIdAync(1)
    .then( console.log ) //el .log es una funcion que tomara lo primero que llega al then
    .catch( console.warn ); //el .warn es una funcion que tomara lo primero que llega al then