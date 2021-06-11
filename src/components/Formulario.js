import React, {useState, Fragment} from 'react';

const Formulario = () => {

    // Variables
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    });

    // Funciones
     const handleInputChange = (event) => {
            // console.log(event.target.value);
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            });
     }

     const enviarDatos = (event) => {
        event.preventDefault(); // Evitar en funcionamiento por defecto del boton del formulario
        console.log(`${datos.nombre} ${datos.apellido}`);
     }

    return ( 
        <Fragment>
            <h1>Formulario</h1>

            <form className="row" onSubmit={enviarDatos}>

                <div className="col-md-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ingresa tu Nombre"
                        name="nombre"
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div className="col-md-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ingresa tu apellido"
                        name="apellido"
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>

            </form>

            {/* <h4>{datos.nombre} - {datos.apellido}</h4> */}

        </Fragment>
     );
}
 
export default Formulario;