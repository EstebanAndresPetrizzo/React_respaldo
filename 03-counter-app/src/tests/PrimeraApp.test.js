import {shallow} from 'enzyme'
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom';
import React from 'react'; //si hace falta

describe('Prueba en <PrimeraApp />', () => {
    /*
    test('Debe mostrar el mensaje "Hola, soy Andres"', () => {
        const saludo = 'Hola, soy Andres';
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>);//funcion que resibe un componente a renderizar
        expect(getByText(saludo)).toBeInTheDocument();
    })
    */
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Andres';
        const wrapper = shallow(<PrimeraApp saludo= {saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar un sibtitulo', () => {
        const saludo = 'Hola, soy Andres';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp saludo= {saludo} subtitulo = {subTitulo}/>);     

        const textoParrafo = wrapper.find('p').text();//prueba sobre un elemento del componente
        expect(textoParrafo).toBe(subTitulo);
    })
    
    
})
