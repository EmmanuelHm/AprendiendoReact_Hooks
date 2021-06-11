import React, {useState, Fragment} from 'react';

const Lista = () => {

    //Variables de Estado
    const [arrayNumero, setArrayNumero] = useState([0,1,2,3,4,5]);

    const [numero, setNumero] = useState(arrayNumero.length);

    //Funciones
    const agregarElemento = () => {

        setNumero(numero + 1);
        // console.log("Click");
        setArrayNumero([
            ...arrayNumero,
            numero
        ]);
    }

    const reiniciar = () => {
        setNumero(arrayNumero.length)
        setArrayNumero([0,1,2,3,4,5]);
    }

    return ( 
        <Fragment>
            <h3>Lista de numeros</h3>

            <button onClick={agregarElemento}>Agregar</button>
            <button onClick={reiniciar}>Reiniciar</button>

            <ul>
                {
                    arrayNumero.map( (item, index) => 

                        <li key={index}>{index} - Numero: {item}</li> 
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default Lista;
