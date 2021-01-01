import {getHeroeById,getHeroeByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';
import '@testing-library/jest-dom';

describe('Prueba de heroes', () => {
    test('Debe retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
        
    });

    test('Debe retornar un undefined si Héroe no existe', () => {
        const id = 20;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
        
    });

    test('Debe retornar un arreglo solo con Héroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroeByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar un arreglo solo con Héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroeByOwner(owner);
        expect(heroe.length).toBe(2);
    });
})
