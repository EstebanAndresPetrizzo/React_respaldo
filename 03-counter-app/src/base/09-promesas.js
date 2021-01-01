import { getHeroeById } from './08-imp-exp'

//pasando por paramentro el id
export const getHeroeByIdAync = (id)=> 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 1500);
    });