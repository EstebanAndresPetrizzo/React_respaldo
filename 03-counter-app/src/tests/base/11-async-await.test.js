import { getImagen2 } from "../../base/11-async-await"

describe('Prueba sobre 11-async-await', () => {
    test('Debe devolver un link de imagen', async() => {
        const url = await getImagen2();

        expect(url.includes('https://')).toBe(true);
        
    });    
})
