import React from 'react'; //cargar react en el context
import ReactDOM from 'react-dom'; //para hacer renderizaciones en el HTML
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value = {10}/>, divRoot);