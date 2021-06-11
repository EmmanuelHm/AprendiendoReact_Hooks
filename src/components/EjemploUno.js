import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";

const EjemploUno = () => {

    // Variables
    const { register, errors ,handleSubmit } = useForm();
    const [Entradas, setEntradas] = useState([])

    // Functions
    const onSubmit = (data, e) => {
        // console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])

        // Limpiar campos
        e.target.reset()
    } 

    return ( 
        <Fragment>
            <h1>Ejemplo #1</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                    name="titulo" 
                    placeholder="Ingrese Titulo" 
                    className="form-control my-3"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLength: {value: 2, message: 'Minimo 2 Letras'}
                        })
                    }
                ></input>
                {   
                    errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.titulo.message}
                    </span>
                }
                
                <input 
                    name="descripcion" 
                    placeholder="Ingrese Descripción" 
                    className="form-control my-3"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                        })
                    }
                ></input>
                {   
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.descripcion.message}
                    </span>
                }

                <button className="btn btn-primary">Agregar</button>
            </form>

            <ul>
                {
                    Entradas.map(item => 
                        <li key={item.titulo}> 
                            {item.titulo} - {item.descripcion}
                        </li> 
                    )
                }
            </ul>

        </Fragment>
     );
}
 
export default EjemploUno;