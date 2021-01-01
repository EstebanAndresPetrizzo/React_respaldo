import  {retornaArreglo2} from '../../base/07-deses-arreglos';
import '@testing-library/jest-dom';

describe('Pruebas en desestructuación', () => {
    test('debe de retornar un string y un nuemero', () => {
        const [letras, numeros] = retornaArreglo2();

        expect (letras).toBe('ABC');
        expect (typeof letras).toBe('string');

        expect (numeros).toBe(123);
        expect (typeof numeros).toBe('number');
    })
    
})
