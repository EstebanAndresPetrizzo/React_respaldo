import  {getUser,getUserActivo} from '../../base/05-funciones';
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            id: 1234,
            userName: 'Andres'
        }

        const user = getUser();

        //para evaluar objetos
        expect(user).toEqual(userTest);

    })

    test('getUserActivo debe de retornar un objeto', () => {
        const nombre = 'Andres'
        const user = getUserActivo(nombre);
        expect(user).toEqual({
            id : 1234,
            userName : nombre
        });
    })
    
    
})
