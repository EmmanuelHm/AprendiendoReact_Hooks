import React, {Fragment} from 'react';

const Jsx = () => {

    const saludo = "Hola desde JSX";
    const temperatura = 19;


    return ( 
        <Fragment>
            <h2>TEMA: Jsx</h2>

            <h4>Mensaje: {saludo}</h4>

            <h4>¿Frio o calor?</h4>
            <p>
                { 
                    temperatura > 20 ? 'Hace Calor' : 'Hace Frio'
                }
            </p>

        </Fragment>
     );
}
 
export default Jsx;