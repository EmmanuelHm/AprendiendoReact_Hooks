import React, {Fragment} from 'react';

// https://react-hook-form.com/get-started#Registerfields
import { useForm } from "react-hook-form";

const FormHook = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, event) => {
        
        console.log(data);

        event.target.reset();
    }

    return ( 
        <Fragment>
            <h3>Recat Hook Form</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input 
                    className="form-control my-2" 
                    name="titulo"
                    ref={
                        register({
                            required: {value: true, message: 'Titulo Obligatorio!'},
                        })
                    } 
                ></input>

                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>

                <button className="btn btn-success">Enviar</button>
            </form>

        </Fragment>
     );
}
 
export default FormHook;