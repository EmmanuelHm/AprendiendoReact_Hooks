import React, {useState, Fragment} from 'react';

const Contador = () => {

    //Variables con Hooks State
    const [numero, setNumero] = useState(0);

    //Funciones
    const aumentar = () => {
        // console.log("Me diste un Click");
        setNumero( numero + 1);
    }

    const disminuir = () => {
        setNumero(numero - 1);
    }

    return (
        <Fragment>
            <h3>Contador: {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </Fragment>
    );
}
 
export default Contador;