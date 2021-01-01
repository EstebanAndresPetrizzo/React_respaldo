import  {getSaludo} from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Prueba en 02-template-string.test.js', () => {
    test('Debe retornar Hola Andres!', () => {
        const nombre = 'andres';
        const saludo = getSaludo (nombre);
        expect(saludo).toBe('Hola '+nombre+'!');

    })
    test('Debe retornar Hola Carlos! si no hay argumento', () => {
        const saludo = getSaludo ();
        expect(saludo).toBe('Hola Carlos!');

    })
    
})
