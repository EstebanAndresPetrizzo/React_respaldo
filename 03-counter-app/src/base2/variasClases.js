import React from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';
// SFC state funcional componet (antes) en bases a clases

// FC funtinal con componet (ahora) en base a funciones
//const PrimeraApp = ({saludo = 'Hola Mundo'}) => {//con un valor por defecto
const PrimeraApp = ({saludo}) => {
    //const saludo = 'Hola Mundo';
    //const saludo = 123;
    //const saludo = [1,2,3];
    /*const saludo = {
        nombre:'andres',
        edad:25
    };*/
    //const saludo = true;//no imprime booleanos
    //imprime en formato JSON linea 20 {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}

    //validacion de que siempre venga el componene "saludo"

    return(
        <div>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo,null,3)}</pre>*/}
            <p>Mi primera aplicación</p>
        </div>
    )
    /*
    return(//frangment genera una importacion innecesario
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
    )*/
    /*
    return(//otra forma de escribir el fragment
        <>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </>
    )*/
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //es requerido que se provea de un valor del tipo string
}

export default PrimeraApp;