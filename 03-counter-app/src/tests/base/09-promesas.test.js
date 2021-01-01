import { getHeroeByIdAync } from "../../base/09-promesas"
import heroes from "../../data/heroes";


// IMPORTANTE : usar el done para tareas asincronas
describe('Prueba de promesas', () => {
    test('Devuelve un Héroe', (done) => {
        const id = 1;
        getHeroeByIdAync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    });
    
    test('Devuelve un string si no existe el Héroe', (done) => {
        const id = 10;
        getHeroeByIdAync(id)
            .catch(
               error => {
                   expect(error).toBe('No se pudo encontrar el heroe');
                   done();
               });
    });
})
