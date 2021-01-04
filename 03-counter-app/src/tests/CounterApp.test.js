import {shallow} from 'enzyme'
import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';
import React from 'react'; //si hace falta

describe('Pruebae en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);//Lo instancio para no perder el autocompletado

    beforeEach(() =>{ //se ejecuta siempre antes de cada test
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> Correctamente', () => {
        expect (wrapper).toMatchSnapshot(); 
    });

    test('Debe tener el contador en 100, pasado por parametro', () => {
        const contador = 100;
        const wrapper = shallow(<CounterApp value = {contador}/>);
        const valorPasado = wrapper.find('h2').text().trim();
        expect(valorPasado).toBe(contador.toString());
    });

    test('Debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11'); 
    });
    
    test('Debe decrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9'); 
    });

    test('Debe volver el valor a 105, pasado por parametro', () => {
        const wrapper = shallow(<CounterApp value = {105}/>);
        wrapper.find('button').at(0).simulate('click');//incremento en uno
        wrapper.find('button').at(1).simulate('click');//hago el reset

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    })
    
}); 
