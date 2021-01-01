//agrupador
describe('Pruebas en el archivo domo.test.js', () => {
    //test
    test('debe de ser iguales los string', () => {
    
        //1. inicializacion
        const mensaje = 'Hola mundo';
    
        //2. estimulo
        const mensaje2 = "Hola mundo";
    
        //3. obsevar comportamiento
        expect(mensaje).toBe(mensaje2);//mensaje (lo que se espera) mensaje2 (lo que se recibe)
    
    })
})

