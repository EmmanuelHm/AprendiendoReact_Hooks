import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h2>Comentario</h2>
            <hr />

            <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    {/* <img src={sujeto.urlImagen} alt="PlaceHolder" /> */}
                    <Avatar urlImagen={sujeto.urlImagen} />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5>{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>

        </Fragment>
    );
}
 
export default Comentario;